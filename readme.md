Portfolio Builder
A full-stack web application that allows users to create and customize their portfolios. Users can register, log in, upload their details (such as profile pictures, resumes, and social media links), and choose from various template designs to generate a ready-to-use portfolio.

Table of Contents
Features

Tech Stack

Installation

API Routes

User Routes

Blog Routes

Post Routes

Frontend Overview

License

Features
User Authentication: Register, login, and logout functionality with JWT (JSON Web Token) verification.

Profile Management: Upload and update user details, including profile images, resumes, social media links, skills, and professional information.

Portfolio Templates: Choose from various pre-designed templates to generate a personalized portfolio.

Blog Management: Create, edit, and delete blog posts to showcase your work or thoughts.

Post Management: Upload, edit, and delete posts with images to share updates or projects.

File Uploads: Support for uploading profile pictures, resumes, and post images.

Tech Stack
Backend
JavaScript: Primary programming language.

Node.js: Runtime environment.

Express.js: Web framework for building APIs.

MongoDB: Database for storing user and portfolio data.

JWT: For user authentication and authorization.

Multer: For handling file uploads.

Frontend
React: JavaScript library for building the user interface.

CSS/SCSS: For styling the application and portfolio templates.

Axios: For making API requests to the backend.

Installation
Backend Setup
Clone the repository:

bash
Copy
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/backend
Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env file in the backend directory and add the following:

env
Copy
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the server:

bash
Copy
npm start
Frontend Setup
Navigate to the frontend directory:

bash
Copy
cd ../frontend
Install dependencies:

bash
Copy
npm install
Run the frontend:

bash
Copy
npm start
API Routes
User Routes
POST /user/register: Register a new user.

POST /user/login: Log in an existing user.

GET /user/logout: Log out the user.

POST /user/upload-details: Upload user details (profile picture, resume, etc.).

GET /user/user-info: Get the logged-in user's information.

GET /user/all-info/:id: Get information for a specific user by ID.

PATCH /user/update-image: Update the user's profile image.

PATCH /user/update-resume: Update the user's resume.

PATCH /user/update-name: Update the user's name.

PATCH /user/update-email: Update the user's email.

PATCH /user/update-user-title: Update the user's title.

PATCH /user/update-user-desc: Update the user's description.

PATCH /user/update-user-phone: Update the user's phone number.

PATCH /user/update-user-profession: Update the user's profession.

PATCH /user/update-linkedin: Update the user's LinkedIn link.

PATCH /user/update-git: Update the user's GitHub link.

PATCH /user/update-face: Update the user's Facebook link.

PATCH /user/update-insta: Update the user's Instagram link.

PATCH /user/update-skills: Add or update user skills.

PATCH /user/delete-skills: Delete a skill from the user's profile.

Blog Routes
POST /blog/create-blog: Create a new blog post.

GET /blog/get-blogs: Get all blog posts by the logged-in user.

PATCH /blog/edit-blog-title: Edit the title of a blog post.

PATCH /blog/edit-blog-content: Edit the content of a blog post.

POST /blog/delete-blog: Delete a blog post.

Post Routes
POST /post/upload-post: Upload a new post with an image.

GET /post/get-post/:id: Get a specific post by ID.

PATCH /post/edit-post-image: Edit the image of a post.

PATCH /post/edit-post-title: Edit the title of a post.

PATCH /post/edit-post-desc: Edit the description of a post.

PATCH /post/edit-post-link: Edit the link of a post.

POST /post/delete-post: Delete a post.

Frontend Overview
The frontend is built using React and provides a user-friendly interface for:

Registering and logging in.

Uploading and updating user details.

Creating and managing blog posts.

Uploading and managing general posts.

Selecting and customizing portfolio templates.

License
This project is licensed under the MIT License. See the LICENSE file for details.