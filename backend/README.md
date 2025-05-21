# Airbnb Clone Backend

This project is a backend application for an Airbnb clone built using Node.js, Express, and MongoDB. It provides RESTful APIs for managing properties, user authentication, bookings, notifications, and wishlists.

## Features

- User authentication (registration and login)
- Property management (CRUD operations)
- Booking management
- User notifications
- Wishlist management

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- dotenv for environment variable management

## Project Structure

```
backend
├── src
│   ├── models
│   │   └── property.js          # Mongoose schema for properties
│   ├── routes
│   │   ├── auth.js              # Authentication routes
│   │   ├── bookings.js          # Booking routes
│   │   ├── notifications.js      # Notification routes
│   │   ├── properties.js         # Property routes
│   │   └── wishlist.js           # Wishlist routes
│   ├── controllers
│   │   ├── authController.js     # Logic for authentication
│   │   ├── bookingController.js   # Logic for bookings
│   │   ├── notificationController.js # Logic for notifications
│   │   ├── propertyController.js  # Logic for properties
│   │   └── wishlistController.js  # Logic for wishlist
│   ├── middleware
│   │   └── auth.js               # Authentication middleware
│   ├── utils
│   │   └── db.js                 # Database connection logic
│   └── app.js                    # Entry point of the application
├── .env                           # Environment variables
├── package.json                   # NPM configuration
└── README.md                      # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   DB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```

## Running the Application

To start the server, run the following command:
```
npm start
```

The server will run on `http://localhost:5000`.

## API Documentation

Refer to the individual route files for detailed API documentation on endpoints, request parameters, and response formats.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.