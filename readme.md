# Portfolio Builder

A full-stack web application that empowers users to effortlessly create and customize stunning online portfolios.  Users can register, log in, manage their profiles (including profile pictures, resumes, and social media links), craft compelling blog posts, showcase projects, and choose from a variety of professionally designed templates to instantly generate a polished, ready-to-share online presence.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Blog Routes](#blog-routes)
  - [Post Routes](#post-routes)
- [Frontend Overview](#frontend-overview)
- [Contributing](#contributing)  *(New Section)*
- [License](#license)

## Features

- **User Authentication:** Secure registration, login, and logout functionality powered by JWT (JSON Web Token) for protected access.
- **Profile Management:** Comprehensive profile management, allowing users to upload and update personal details, including:
    - Profile picture
    - Resume
    - Social media links (LinkedIn, GitHub, Facebook, Instagram)
    - Professional title and description
    - Phone number
    - Profession
    - Skills (add and remove)
- **Portfolio Templates:**  A selection of pre-designed, responsive portfolio templates to choose from, providing a quick and easy way to create a professional look.  *(Consider mentioning if templates are customizable)*
- **Blog Management:**  Create, edit, and delete blog posts to share insights, experiences, and showcase thought leadership.
- **Project/Post Management:**  Upload, edit, and delete project/post entries with images and descriptions to highlight accomplishments and work samples.  *(Clarified "Post" to "Project/Post")*
- **File Uploads:** Seamless handling of file uploads for profile pictures, resumes, and project/post images.
- **Responsive Design:**  Ensures optimal viewing experience across various devices (desktops, tablets, and mobile phones). *(Added this important feature)*

## Tech Stack

- **Backend:**
  - JavaScript (Node.js)
  - Express.js (Web Framework)
  - MongoDB (Database)
  - JWT (JSON Web Token - Authentication)
  - Multer (File Upload Handling)
- **Frontend:**
  - React (JavaScript Library)
  - CSS/SCSS (Styling)
  - Axios (HTTP Client)

### Frontend Overview
The frontend, built with React, provides a user-friendly interface for:

User registration and login.
Comprehensive profile management.
Creating and managing blog posts.
Uploading and managing projects/posts.
Selecting and customizing portfolio templates.
Contributing (New Section - Highly Recommended)
Contributions are welcome!  Please see the readme.md file for guidelines.  (Create this file)

## API Routes

This section details the available API endpoints for the Portfolio Builder application.

### User Routes

- **Authentication:**
    - `POST /user/register`: Register a new user.
    - `POST /user/login`: Log in an existing user.
    - `GET /user/logout`: Log out the current user.

- **Profile Management:**
    - `GET /user/user-info`: Retrieve information for the logged-in user.
    - `GET /user/all-info/:id`: Retrieve information for a specific user (by ID).  *(Consider security implications of exposing all user info)*
    - `POST /user/profile`: Upload/update user profile details (profile picture, resume, etc.).  *(Renamed for clarity)*
    - `PATCH /user/update-image`: Update the user's profile image.
    - `PATCH /user/update-resume`: Update the user's resume.
    - `PATCH /user/update-name`: Update the user's name.
    - `PATCH /user/update-email`: Update the user's email.
    - `PATCH /user/update-title`: Update the user's professional title.
    - `PATCH /user/update-description`: Update the user's description/bio.
    - `PATCH /user/update-phone`: Update the user's phone number.
    - `PATCH /user/update-profession`: Update the user's profession.
    - `PATCH /user/update-linkedin`: Update the user's LinkedIn profile URL.
    - `PATCH /user/update-github`: Update the user's GitHub profile URL.
    - `PATCH /user/update-facebook`: Update the user's Facebook profile URL.
    - `PATCH /user/update-instagram`: Update the user's Instagram profile URL.
    - `PATCH /user/update-skills`: Add or update user skills (consider how you handle adding/updating).
    - `PATCH /user/delete-skill/:skill`: Delete a specific skill from the user's profile (by name/ID). *(More specific delete route)*

### Blog Routes

- `POST /blog/create`: Create a new blog post.
- `GET /blog/get-all`: Retrieve all blog posts for the logged-in user.
- `GET /blog/get/:id`: Retrieve a specific blog post by ID.
- `PATCH /blog/update-title/:id`: Edit the title of a specific blog post (by ID).
- `PATCH /blog/update-content/:id`: Edit the content of a specific blog post (by ID).
- `DELETE /blog/delete/:id`: Delete a specific blog post (by ID).

### Project/Post Routes

- `POST /project/create`: Upload a new project/post with an image.
- `GET /project/get/:id`: Retrieve a specific project/post by ID.
- `PATCH /project/update-image/:id`: Edit the image of a specific project/post (by ID).
- `PATCH /project/update-title/:id`: Edit the title of a specific project/post (by ID).
- `PATCH /project/update-description/:id`: Edit the description of a specific project/post (by ID).
- `PATCH /project/update-link/:id`: Edit the link associated with a specific project/post (by ID).
- `DELETE /project/delete/:id`: Delete a specific project/post (by ID).

## Installation

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/Manjeetmathur/portfolio-builder.git

cd portfolio-backend

//Set up environment variables:
//Create a .env file in the backend directory and populate it with your configuration:

PORT=*000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Add any other necessary environment variables

nmp run dev

 ### frontend

cd portfolio

//Install dependencies:
npm install

//start
npm run dev