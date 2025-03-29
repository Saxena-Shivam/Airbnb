# Airbnb Clone Frontend

...existing content...

## Folder Structure

```
Airbnb/
├── frontend/        # Frontend application
│   ├── public/      # Static assets (e.g., images, icons)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components (e.g., HomePage, NotFoundPage)
│   │   ├── App.tsx      # Main application component
│   │   ├── index.tsx    # Entry point
│   │   ├── styles/      # Global styles
│   │   └── utils/       # Utility functions
│   ├── package.json     # Frontend dependencies
│   └── README.md        # Frontend documentation
├── backend/         # Backend application
│   ├── src/
│   │   ├── controllers/ # Business logic for routes
│   │   ├── models/      # Database models (MySQL)
│   │   ├── routes/      # API routes
│   │   ├── config/      # Configuration files (e.g., database connection)
│   │   ├── app.js       # Express app setup
│   │   └── server.js    # Server entry point
│   ├── package.json     # Backend dependencies
│   └── README.md        # Backend documentation
├── database/        # Database scripts
│   ├── schema.sql   # MySQL database schema
│   └── seed.sql     # Sample data for testing
└── README.md        # Project documentation
```

## Backend Technologies

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for creating RESTful APIs.
- **MySQL**: Relational database for storing application data.
- **Sequelize**: ORM for interacting with the MySQL database.

## Setting Up the Backend

### Prerequisites

- Node.js (v16 or higher)
- MySQL (v8 or higher)

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Configure the Database

1. Create a MySQL database using the `database/schema.sql` file.
2. Add sample data using the `database/seed.sql` file.
3. Create a `.env` file in the `backend` folder with the following content:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=airbnb_clone
PORT=5000
```

### Start the Backend Server

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:5000`.

...existing content...
