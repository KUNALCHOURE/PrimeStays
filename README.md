# Hotel Booking Website

## Overview

This is a Hotel Booking Website built with Node.js, Express, and MongoDB. The application allows users to view, create, and edit hotel listings, add reviews, and manage user authentication. It also integrates with Cloudinary for image storage and provides a responsive user interface.

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Listings**: Users can view, create, edit, and delete hotel listings.
- **Reviews**: Users can post and delete reviews for listings.
- **Image Storage**: Uses Cloudinary for image uploading and storage.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive.

## Technologies Used

- **Node.js**: Runtime environment for server-side JavaScript.
- **Express**: Web framework for building web applications.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for MongoDB, used for schema definition and data modeling.
- **Cloudinary**: Image management service for uploading and storing images.
- **EJS**: Templating engine for rendering views.
- **Bootstrap**: CSS framework for responsive design.
- **Passport.js**: Authentication middleware for Node.js.
- **Method-Override**: Middleware to support HTTP verbs such as PUT and DELETE.
- **Connect-Flash**: Middleware for flash messages.

## Setup

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account (for image storage)


## Usage

- **Home Page**: View the list of hotel listings.
- **Listing Details**: Click on a listing to view details, including reviews and images.
- **Create Listing**: Users can create a new listing by filling out the form.
- **Edit Listing**: Users can edit their existing listings.
- **Add Review**: Post reviews on listings.
- **Authentication**: Sign up, log in, and manage user sessions.

## Routes

- **`/listings`**: Displays all listings.
- **`/listings/new`**: Form to create a new listing.
- **`/listings/:id`**: Displays a specific listing.
- **`/listings/:id/edit`**: Form to edit an existing listing.
- **`/listings/:id/reviews`**: Post a review for a listing.
- **`/listings/:id/reviews/:reviews_id`**: Delete a specific review.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

