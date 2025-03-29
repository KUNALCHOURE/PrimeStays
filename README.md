# PrimeStays – Luxury Property Listings

A modern full-stack web application for listing, discovering, and managing premium properties.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

PrimeStays is a luxury property listing platform where users can list, browse, and manage premium properties. Built using the MERN stack (MongoDB, Express, React, Node.js), the platform allows secure authentication, image uploads via Cloudinary, and user reviews.

## Features

- User Authentication: Secure login and signup with JWT tokens
- Create, Read, Update, Delete (CRUD): Manage property listings
- Image Uploads: Store property images via Cloudinary
- Search and Filtering: Find properties based on location, price, etc.
- User Reviews and Ratings: Leave feedback on listings
- Responsive UI: Works on both desktop and mobile devices
- Secure Transactions: Uses HTTP-only cookies for authentication

## Tech Stack

### Frontend
- React.js (Vite for fast builds)
- Tailwind CSS (Modern styling)
- React Router (Client-side navigation)
- Axios (API requests)
- React Hot Toast (Notifications)

### Backend
- Node.js and Express.js (RESTful API)
- MongoDB with Mongoose (Database)
- Cloudinary (Image storage)
- JWT Authentication (Secure login)
- Multer (File uploads)

### Deployment
- Frontend: Vercel
- Backend: Render

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/KUNALCHOURE/PrimeStays.git
    cd PrimeStays
    ```

2. Install backend dependencies:
    ```bash
    cd Backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../Frontend
    npm install
    ```

 ## Usage

 1. Start the backend server:
    ```bash
    cd Backend
    npm start
    ```
    Server runs on `http://localhost:3030`

 2. Start the frontend development server:
    ```bash
    cd ../Frontend
    npm run dev
    ```
    Client runs on `http://localhost:5173`

 ## API Endpoints

 ### Authentication Endpoints
 | Method | Endpoint | Description |
 |--------|----------|-------------|
 | POST | `/api/auth/signup` | Register a new user |
 | POST | `/api/auth/login` | User login |
 | POST | `/api/auth/logout` | User logout |

 ### Listing Endpoints
 | Method | Endpoint | Description |
 |--------|----------|-------------|
 | GET | `/api/listings` | Fetch all listings |
 | GET | `/api/listings/:id` | Get specific listing |
 | POST | `/api/listings` | Create new listing |
 | PUT | `/api/listings/:id` | Update listing |
 | DELETE | `/api/listings/:id` | Delete listing |

 ### Review Endpoints
 | Method | Endpoint | Description |
 |--------|----------|-------------|
 | POST | `/api/reviews/:listingId` | Add review to listing |
 | DELETE | `/api/reviews/:id` | Delete review |


 ## Contributing

 1. Fork the repository
 2. Create a feature branch
    ```bash
    git checkout -b feature/your-feature-name
    ```
 3. Commit changes
    ```bash
    git commit -m "Add some feature"
    ```
 4. Push to branch
    ```bash
    git push origin feature/your-feature-name
    ```
 5. Open a pull request



 ## Live Demo
 [PrimeStays](https://prime-stays.vercel.app)

## Screenshots

![Image](https://github.com/user-attachments/assets/5a543808-c6b7-49e2-9071-ba3673790964)



![Image](https://github.com/user-attachments/assets/a44c2896-d763-4b63-8599-5eab1bdb174e)



![Image](https://github.com/user-attachments/assets/470e2d02-1e8d-405e-8a66-8ce374740b2d)



![Image](https://github.com/user-attachments/assets/c617a46c-d358-40f7-a9c7-5e63ed10a685)