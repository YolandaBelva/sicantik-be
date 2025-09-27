# Sicantik Backend API

A RESTful API built with Node.js and Express.js.

## 📁 Project Structure

```
sicantik-be/
├── src/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── controller/
│   │   └── userController.js    # HTTP request handlers
│   ├── middlewares/
│   │   └── auth.js              # Authentication middleware
│   ├── repository/
│   │   └── userRepository.js    # Data access layer
│   ├── routes/
│   │   └── userRoute.js         # API routes definition
│   ├── services/
│   │   └── userServices.js      # Business logic layer
│   └── utils/
│       └── response.js          # Response utility functions
├── index.js                     # Application entry point
├── package.json
└── README.md
```

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- npm
- PostgreSQL/MySQL database

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd sicantik-be
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy a `.env.example` file in the root directory:

```bash
cp .env.example
```

### 4. Database Setup

Make sure your PostgreSQL server is running and accessible.

Create the database
Create a new PostgreSQL database named **`sicantik`**.  
Example (using `psql` CLI):

```bash
createdb sicantik
```
Generate database from prisma
```bash
npx prisma migrate dev
```

### 5. Start the server

```bash
# Development
npm run dev
```

The server will start on `http://localhost:3000` (or your specified PORT).

## 📚 API Documentation

### Base URL

```
http://localhost:3000/user
```

### Endpoints

#### Get All Users

```http
GET /user
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2025-09-27T10:00:00Z"
    }
  ],
  "message": "success"
}
```

#### Get User by ID

```http
GET /user/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-09-27T10:00:00Z"
  },
  "message": "get user by id success"
}
```

#### Create User

```http
POST /user
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-09-27T10:00:00Z"
  },
  "message": "create user success"
}
```

#### Update User

```http
PUT /user/:id
```

**Request Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "updated_at": "2025-09-27T11:00:00Z"
  },
  "message": "update user by id success"
}
```

#### Delete User

```http
DELETE /user/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "message": "User deleted successfully"
  },
  "message": "delete user by id success"
}
```

### Error Responses

All endpoints return errors in the following format:

```json
{
  "success": false,
  "message": "Error description",
  "data": null
}
```

Common HTTP status codes:

- `200` - Success
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## 🏗️ Architecture

This project follows a **layered architecture** pattern:

### Controller Layer (`src/controller/`)

- Handles HTTP requests and responses
- Input validation
- Calls appropriate services

### Service Layer (`src/services/`)

- Contains business logic
- Orchestrates repository calls
- Handles business rules and validation

### Repository Layer (`src/repository/`)

- Data access layer
- Database queries and operations
- Data mapping

### Routes Layer (`src/routes/`)

- API endpoint definitions
- Route-specific middleware application

