# Role-Based Access Control (RBAC) with Authentication and Authorization - MERN Stack

since i used paas for server deployment wait for couple of seconds to start server at initial request.

## live link: https://role-based-management-task-lv42.vercel.app/

This project demonstrates the implementation of **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** in a **MERN stack** application. It allows for the creation of users with different roles and access permissions, ensuring that only authorized users can access certain parts of the system.

## **Project Overview**
since i done this task in 4-5 hours every line code is written by my own. there is no extra functionalities but just overview of role based access and jwt authenication demonstration
The goal of this project is to provide a secure system by managing user roles, authentication, and authorization using the MERN (MongoDB, Express.js, React, Node.js) stack. I have implemented a 3-level role management system, where users can have roles such as **Admin**, **Seller**, and **Buyer**. Based on these roles, users will have different levels of access to resources.

### **Project Features:**
- **Authentication:** Users are authenticated via JWT (JSON Web Tokens) after providing valid login credentials. The authentication process ensures that users are who they claim to be.
- **Authorization:** Access to resources and features is granted based on the user's role. Only users with the proper role can access specific sections of the application.
- **Role-Based Access Control (RBAC):** Three different user roles are defined, each having a specific set of permissions and access levels:
  - **Admin:** Full access to all resources and features. Can manage both Seller and Buyer accounts.
  - **Seller:** Can manage their own products and view Buyer information, but does not have access to admin resources.
  - **Buyer:** Can browse and purchase products but does not have access to administrative features or seller-related resources.

## **System Architecture**
The system is built using the **MERN stack**, and it follows a clean architecture pattern with the following components:
- **Frontend (React):** The React application handles the user interface and communicates with the backend API for user authentication and role management.
- **Backend (Node.js, Express.js):** The backend is responsible for handling authentication, authorization, and enforcing RBAC rules. It uses JWT for user authentication and checks the user's role to authorize access to protected routes.
- **Database (MongoDB):** MongoDB stores user information, including their credentials and assigned roles.

## **Technologies Used**
- **MongoDB**: Database to store user data, including roles.
- **Express.js**: Backend framework to create RESTful APIs.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the backend server.
- **JWT (JSON Web Token)**: Used for authentication to ensure users are authorized to access the system.
- **Bcrypt.js**: Library for hashing passwords securely before storing them in the database.

## **Features Implemented**
1. **User Registration:** Users can sign up by providing their details. The application hashes passwords before storing them in the database.
2. **Login System:** Users can log in using their registered email and password. Upon successful authentication, a JWT token is issued.
3. **Role Management:** Each user is assigned a role (Admin, Seller, or Buyer) during registration. The role determines the level of access the user has in the system.
4. **Protected Routes:** Different routes in the application are protected based on the user's role. Only authorized users with the correct role can access certain pages.
5. **Role-Based Permissions:**
   - **Admin:** Can access all routes, manage users (Sellers and Buyers), and configure system settings.
   - **Seller:** Can manage their own products, view the list of Buyers, and manage their inventory.
   - **Buyer:** Can browse and purchase products but cannot manage or access seller and admin-related features.

## **Installation Instructions**
To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/role-based-access-control.git
