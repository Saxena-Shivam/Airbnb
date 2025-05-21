require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise"); // Using promise-based API
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "airbnb-clone",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const properties = [
  {
    id: 1,
    location: "Manali, India",
    distance: "396 kilometres away",
    dates: "1-6 Apr",
    price: "₹4,500 night",
    rating: 4.88,
    isFavorite: true,
    isGuestFavorite: true,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    location: "Pharog, India",
    distance: "293 kilometres away",
    dates: "Available",
    price: "₹3,800 night",
    rating: null,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    location: "Bir, India",
    distance: "384 kilometres away",
    dates: "1-6 Jun",
    price: "₹5,200 night",
    rating: null,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    location: "Shimla, India",
    distance: "150 kilometres away",
    dates: "1-6 Apr",
    price: "₹4,200 night",
    rating: 4.95,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    location: "Jaipur, India",
    distance: "280 kilometres away",
    dates: "1-6 May",
    price: "₹3,500 night",
    rating: 4.5,
    isFavorite: true,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    location: "Chandigarh, India",
    distance: "250 kilometres away",
    dates: "1-6 Jul",
    price: "₹4,000 night",
    rating: 4.7,
    isFavorite: false,
    isGuestFavorite: true,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 7,
    location: "Lucknow, India",
    distance: "500 kilometres away",
    dates: "1-6 Aug",
    price: "₹3,200 night",
    rating: 4.2,
    isFavorite: false,
    isGuestFavorite: false,
    imageUrl: "/placeholder.svg",
  },
];
// Initialize database tables
async function initializeDatabase() {
  try {
    const connection = await pool.getConnection();

    // Create users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create properties table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS properties (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        image VARCHAR(255),
        description TEXT,
        user_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    // Create wishlist table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS wishlist (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        property_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (property_id) REFERENCES properties(id),
        UNIQUE KEY unique_wishlist (user_id, property_id)
      )
    `);

    // Create bookings table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        property_id INT NOT NULL,
        check_in DATE NOT NULL,
        check_out DATE NOT NULL,
        status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (property_id) REFERENCES properties(id)
      )
    `);

    // Create notifications table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    connection.release();
    console.log("Database tables initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
    process.exit(1);
  }
}

initializeDatabase();

// Helper function for database queries
async function query(sql, params) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, params);
    return results;
  } finally {
    connection.release();
  }
}

// Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Routes

// User Registration
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existingUser.length > 0) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const result = await query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const users = await query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Property Routes
app.get("/api/properties", async (req, res) => {
  try {
    const properties = await query("SELECT * FROM properties", []);
    res.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

app.post("/api/properties", authenticateToken, async (req, res) => {
  try {
    const { title, location, price, image, description } = req.body;

    if (!title || !location || !price) {
      return res
        .status(400)
        .json({ error: "Title, location and price are required" });
    }

    const result = await query(
      "INSERT INTO properties (title, location, price, image, description, user_id) VALUES (?, ?, ?, ?, ?, ?)",
      [title, location, price, image, description, req.user.userId]
    );

    res.status(201).json({
      message: "Property added successfully",
      propertyId: result.insertId,
    });
  } catch (error) {
    console.error("Error adding property:", error);
    res.status(500).json({ error: "Failed to add property" });
  }
});

// Wishlist Routes
app.post("/api/wishlist", authenticateToken, async (req, res) => {
  try {
    const { propertyId } = req.body;
    const userId = req.user.userId;

    if (!propertyId) {
      return res.status(400).json({ error: "Property ID is required" });
    }

    await query("INSERT INTO wishlist (user_id, property_id) VALUES (?, ?)", [
      userId,
      propertyId,
    ]);

    res.json({ message: "Added to wishlist" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Property already in wishlist" });
    }
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ error: "Failed to add to wishlist" });
  }
});

app.get("/api/wishlist", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const wishlist = await query(
      `SELECT p.* FROM properties p 
       JOIN wishlist w ON p.id = w.property_id 
       WHERE w.user_id = ?`,
      [userId]
    );
    res.json(wishlist);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ error: "Failed to fetch wishlist" });
  }
});

// Booking Routes
app.post("/api/bookings", authenticateToken, async (req, res) => {
  try {
    const { propertyId, checkIn, checkOut } = req.body;
    const userId = req.user.userId;

    if (!propertyId || !checkIn || !checkOut) {
      return res.status(400).json({
        error: "Property ID, check-in and check-out dates are required",
      });
    }

    const result = await query(
      `INSERT INTO bookings (user_id, property_id, check_in, check_out, status) 
       VALUES (?, ?, ?, ?, 'pending')`,
      [userId, propertyId, checkIn, checkOut]
    );

    res.status(201).json({
      message: "Booking request submitted",
      bookingId: result.insertId,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

app.get("/api/bookings", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const bookings = await query(
      `SELECT b.*, p.title, p.location, p.image 
       FROM bookings b
       JOIN properties p ON b.property_id = p.id
       WHERE b.user_id = ?`,
      [userId]
    );
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Notification Routes
app.get("/api/notifications", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const notifications = await query(
      "SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );
    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
