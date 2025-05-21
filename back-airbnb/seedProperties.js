require("dotenv").config();
const mysql = require("mysql2/promise");

// Sample data for 20 properties across India
const properties = [
  // Mountain Properties (1-5)
  {
    user_id: 1,
    title: "Manali Mountain Retreat",
    description:
      "Beautiful wooden cabin with panoramic mountain views and private balcony",
    property_type: "cabin",
    price_per_night: 4500,
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    address: "123 Himalayan Heights",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    zip_code: "175131",
    amenities: JSON.stringify([
      "wifi",
      "kitchen",
      "heating",
      "mountain view",
      "fireplace",
    ]),
    is_active: true,
  },
  {
    user_id: 1,
    title: "Pharog Valley Cottage",
    description: "Charming stone cottage with flower garden in peaceful valley",
    property_type: "cottage",
    price_per_night: 3800,
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    address: "45 Orchid Lane",
    city: "Pharog",
    state: "Himachal Pradesh",
    country: "India",
    zip_code: "171225",
    amenities: JSON.stringify([
      "garden",
      "breakfast",
      "hiking trails",
      "pet-friendly",
    ]),
    is_active: true,
  },
  // Beach Properties (6-10)
  {
    user_id: 1,
    title: "Goa Beachfront Villa",
    description: "Luxury villa with private pool just steps from the beach",
    property_type: "villa",
    price_per_night: 8500,
    bedrooms: 3,
    bathrooms: 2,
    max_guests: 6,
    address: "Beach Road, Candolim",
    city: "Goa",
    state: "Goa",
    country: "India",
    zip_code: "403515",
    amenities: JSON.stringify([
      "pool",
      "ac",
      "beach access",
      "sea view",
      "bbq",
    ]),
    is_active: true,
  },
  // ... Add 17 more properties following the same pattern
  // Make sure to include different locations like:
  // - Rajasthan heritage havelis
  // - Kerala houseboats
  // - Bangalore modern apartments
  // - Mumbai luxury lofts
  // - Darjeeling tea estate bungalows
];

async function seedDatabase() {
  // 1. Connect to database
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "airbnb-clone",
  });

  try {
    console.log("🚀 Starting database seeding...");

    // 2. Insert properties
    for (const property of properties) {
      const [result] = await connection.query(
        "INSERT INTO properties SET ?",
        property
      );

      // 3. Add default image for each property
      await connection.query(
        `INSERT INTO property_images 
        (property_id, image_url, is_primary) 
        VALUES (?, ?, ?)`,
        [result.insertId, "/property-" + result.insertId + ".jpg", true]
      );

      console.log(`✅ Added: ${property.title} (ID: ${result.insertId})`);
    }

    console.log("🎉 Successfully seeded 20 properties with images!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await connection.end();
    process.exit();
  }
}

// 4. Run the seeder
seedDatabase();
