# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CRUD App Front-end with React

This React application serves as the front-end to Spring Boot APIs for managing employees. It implements authentication and authorization using JWT tokens, enabling users to perform CRUD operations on the employee database. The application ensures security with JWT implementation and protected routes, storing tokens in `local storage` for API access post-login.

## Installation

1. Clone this repo.
2. Navigate to the root folder and run `npm i` to install the dependencies listed in `package.json`.
3. Run `npm run dev` to start the project.

## Roles

There are three roles in the application:
- **User**: Can only read data.
- **Admin**: Has full privileges and can perform all CRUD operations.

## Folder Structure

<img width="267" alt="Folder Structure" src="https://github.com/user-attachments/assets/b53a5b30-0b62-42b5-8a2e-2684b00ea9b2">

## Workflow

### Signup Page
Helps in registering a new user (role is `user` by default).
<img width="1432" alt="Signup Page" src="https://github.com/user-attachments/assets/74dcb35e-0a96-4c29-b52a-e41ef55a3896">

### Signin Page
Handles the login functionality.
<img width="1438" alt="Signin Page" src="https://github.com/user-attachments/assets/80d6ec86-7fcb-4ce8-a469-88eb858ab61d">

### Token
JWT token management.
<img width="1440" alt="Token" src="https://github.com/user-attachments/assets/9b4fbfd2-f22d-4bb8-9ea4-85a6edc8f6e7">

### Home Page
Displays all employees from the database.
<img width="1440" alt="Home Page" src="https://github.com/user-attachments/assets/4775c746-1551-4841-a8f4-3b0321561038">

#### CRUD Operations for Admin

**Create**
<img width="1440" alt="Create Operation" src="https://github.com/user-attachments/assets/4775c746-1551-4841-a8f4-3b0321561038">
<img width="1440" alt="Create Form" src="https://github.com/user-attachments/assets/d06c7fdb-fb0f-4e20-94b8-702a1046fc59">
<img width="1439" alt="Create Success" src="https://github.com/user-attachments/assets/0d64114a-01fd-47f0-8e63-b50dbb257ec1">

**Details Page**
<img width="1440" alt="Details Page" src="https://github.com/user-attachments/assets/6b099a06-b259-4798-9d73-9eb251925367">
<img width="1424" alt="Details Data" src="https://github.com/user-attachments/assets/34d2336a-ed74-465d-b4f9-2fbdad0d5787">
<img width="1420" alt="Detailed View" src="https://github.com/user-attachments/assets/09cbd529-b81d-4efa-8010-40983bf43516">

**Delete**
<img width="1440" alt="Delete Confirmation" src="https://github.com/user-attachments/assets/a42a498c-9c7f-4b5e-b375-6245b23a605c">
<img width="1440" alt="Delete Success" src="https://github.com/user-attachments/assets/22747e03-c531-477e-b470-6a73c46b8b7e">

**Search by ID**
<img width="1440" alt="Search by ID" src="https://github.com/user-attachments/assets/39af0fd2-fec3-47f5-86c6-899dedf8b710">

### Logout
Logs the user out and deletes the token.
<img width="1440" alt="Logout" src="https://github.com/user-attachments/assets/f591e908-35d0-456d-a252-aa7741208e52">

## Notes
- Users with the `user` role can only view the list of employees and cannot edit or delete any records.
- The home page includes a logout functionality for all users.

For more details on the backend implementation with Spring Boot, visit [CRUD WITH SPRINGBOOT REPOSITORY](https://github.com/Aman3407/CRUD-WITH-SPRINGBOOT).
