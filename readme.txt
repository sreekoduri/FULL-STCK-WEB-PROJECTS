# Login Authentication System using Node.js + MongoDB Atlas

## Project Overview

Built a full-stack user authentication system with Signup and Login functionality using:

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Features Implemented

### Frontend

* Created Login Page (`index.html`)
* Created Signup Page (`signup.html`)
* Added Dashboard Page (`dashboard.html`)
* Styled UI using CSS
* Added client-side API integration using JavaScript (`fetch`)

## Backend

Created REST APIs using Express:

### Signup API

**Endpoint:**

```http
POST /signup
```

**Implemented:**

* Receive email and password from frontend
* Check if user already exists
* Prevent duplicate user registration
* Save new user to MongoDB
* Added try/catch error handling
* Return success and failure responses

### Login API

**Endpoint:**

```http
POST /login
```

**Implemented:**

* Validate user credentials from MongoDB
* Return login success/failure response
* Redirect successful users to dashboard

## Database (MongoDB Atlas)

Configured MongoDB Atlas Cloud Database:

### Created:

* Atlas Project
* Cluster
* Database User
* Network Access / IP Whitelist
* Connection String Integration

### Database Structure

Database:

```text
loginDB
```

Collection:

```text
users
```

Document Structure:

```json
{
  "email": "user@gmail.com",
  "password": "1234",
  "createdAt": "auto-generated",
  "status": "active"
}
```

## User Schema

Implemented Mongoose Schema with:

* email
* password
* createdAt
* status

## Authentication Flow

```text
Signup Page
↓
POST /signup
↓
MongoDB User Creation
↓
Login Page
↓
POST /login
↓
Credential Validation
↓
Dashboard Redirect
```

## Challenges Resolved

Resolved multiple development issues:

* MongoDB Atlas TLS connection issue
* Database authentication error
* IP access configuration
* Connection string configuration
* Duplicate code issue in server.js
* Signup validation issue
* User existence validation debugging

## Project Structure

```text
frontend/
├── index.html
├── signup.html
├── dashboard.html
├── style.css
├── script.js
└── signup.js

backend/
└── server.js
```

## Commands Used

Install dependencies:

```bash
npm init -y
npm install express cors mongoose
```

Run server:

```bash
node server.js
```

## Outcome

Successfully built a working authentication system where:

* Users can register
* Users can log in
* User data is stored in MongoDB Atlas
* Login validates against database records
* Successful login redirects to dashboard

## Next Enhancements

Planned improvements:

* Password hashing using bcrypt
* JWT authentication
* Protected routes
* Logout session handling
* Role-based access control
