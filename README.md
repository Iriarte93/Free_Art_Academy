# Free Art Academy
A full-stack web platform aimed at centralizing free educational resources related to digital art and creative disciplines. This project was developed as the final work of the Full-Stack Developer course.

## Description
Free Art Academy is a web application based on a client-server architecture that allows for:

·User registration and authentication.
·Access to courses and educational resources.
·Structured content visualization.
·Secure management of credentials and data.

The application is designed following the MVC pattern, with a clear separation between the frontend and backend, communicating via a REST API.

## Technology Stack
### Frontend
·Vue 3

·Vite

·Vue Router

·HTTP communication via JSON

### Backend
·NestJS

·Node.js

·TypeORM

·MySQL

### Security
·JWT (JSON Web Tokens)

·Bcrypt (password hashing)

·Explicitly configured CORS

·Protected route control

·Support for environment variables

### Testing
·Postman (testing collection for REST endpoints)

### Architecture
The application follows a Client-Server architecture:

````
Frontend (Vue + Vite)  →  REST API (NestJS)  →  MySQL Database (TypeORM)
````

The backend is structured into independent modules (e.g., AuthModule, UserModule), following the single responsibility principle to facilitate scalability and maintenance.

### Main Features
·User registration

·Login with JWT generation

·Route protection in the frontend

·User persistence in the database

·Secure password hashing with Bcrypt

·Structured communication using DTOs and repositories

### Installation and Setup
1. Clone the repository:
````
git clone https://github.com/Iriarte93/Free_Art_Academy
cd Free_Art_Academy
````

2. Install dependencies for both frontend and backend:
````

Backend: cd backend
npm install
Frontend: cd frontend
npm install
````

3. Configure the MySQL connection parameters in ````app.module.ts```` of the backend:

·host

·port

·user

·password

·database name

If ````synchronize: true````, tables will be generated automatically. It is recommended to use **environment variables (.env)** in production environments. 

Example:

````
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=tfm
JWT_SECRET=your_secret_key
````
Run the application:

Backend: ````npm run start:dev````
Frontend: ````npm run dev````

By default:

Frontend: http://localhost:5173

Backend: http://localhost:3000

##Test User
If the included database is restored:

·Email: admin@gmail.com
·Password: 1234

## Implemented Security Features
·CORS configuration restricting origins and HTTP methods.

·Route protection through token verification.

·Stateless authentication with JWT.

·Password hashing with Bcrypt.

·Separation of business logic, controllers, and persistence.

## Testing
The API can be tested using Postman.

Example endpoint:


````
POST /login

Body: { "userEmail": "admin@gmail.com", "userPassword": "123456" }
````

A collection was included to simulate complete authentication and validation flows.

### Project Motivation
The project was conceived with the goal of centralizing free educational resources in a single structured and accessible environment. It is designed with a didactic focus but applies real practices in backend and frontend development.
