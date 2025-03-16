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

## Environment Variables

### Backend `.env`
# Server Configuration
PORT=3030

# MongoDB Connection
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/primestays?retryWrites=true&w=majority

# JWT Authentication
JWT_SECRET=your_extremely_long_and_secure_random_secret_key_here

# Cloudinary Credentials for Image Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Optional: CORS Configuration
CORS_ORIGIN=http://localhost:5173

# Optional: Additional Security
NODE_ENV=development


### Frontend `.env`
# Base API URL for Backend
REACT_APP_API_BASE_URL=https://primestays-oxct.onrender.com

# Cloudinary Configuration (Optional)
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset

# Google Analytics (Optional)
REACT_APP_GA_TRACKING_ID=your_google_analytics_tracking_id

# Environment Mode
REACT_APP_ENV=development

# Optional Feature Flags
REACT_APP_ENABLE_REVIEWS=true
REACT_APP_ENABLE_BOOKING=true


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

- **Frontend:** [PrimeStays](https://prime-stays.vercel.app)
- **Backend API:** [PrimeStays API](https://primestays-oxct.onrender.com)

