# 🧁 Bakery Management System

A full-stack web application designed to simplify bakery operations by providing an online platform for customers and management interfaces for administrators.

## 📌 About the Project

The Bakery Management System is developed to make bakery management more convenient through a web-based interface. It brings together a customer-facing frontend, an administrative dashboard, and a backend server to support the application's functionality.

This project was built using modern web development technologies as part of my full-stack development learning journey.

## ✨ Features

- 🛍️ **Customer Interface** — Browse the bakery website and explore available products.
- ⚙️ **Admin Dashboard** — Access the administrative interface for managing bakery operations.
- 🔗 **Backend API** — Handle application requests through a Node.js and Express server.
- 🗄️ **Database Integration** — Use MongoDB to store application data.
- 🔐 **Authentication Support** — Backend support for authentication using JSON Web Tokens (JWT).
- 💻 **Responsive Web Interface** — Web-based interfaces built with React.

*Note: Features depend on the functionality implemented in the current version of the project.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interfaces |
| Vite | Frontend development and build tooling |
| Node.js | JavaScript runtime for the backend |
| Express.js | Backend API and server |
| MongoDB | Database |
| JWT | Authentication support |
| JavaScript | Application logic |
| CSS | Styling and layout |

## 📂 Project Structure

```text
bakery-management-system/
├── admin/       # Admin dashboard
├── backend/     # Backend server and API
├── frontend/    # Customer-facing application
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database (local or MongoDB Atlas)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/mantasha08/bakery-management-system.git
cd bakery-management-system
```

### 2. Install dependencies

Run these commands from the project root:

```bash
cd frontend
npm install

cd ../admin
npm install

cd ../backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend/` directory. Add the environment variables required by the backend configuration, for example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Replace the placeholder values with your own credentials. Never commit your `.env` file or publish secret keys to GitHub.

### 4. Start the application

Open three separate terminals from the project root.

**Terminal 1 — Frontend**

```bash
cd frontend
npm run dev
```

**Terminal 2 — Admin Dashboard**

```bash
cd admin
npm run dev
```

**Terminal 3 — Backend**

```bash
cd backend
npm run server
```

Use the local URLs displayed in your terminals to open the frontend and admin dashboard. The backend runs on the port configured in the project.

## 🎯 Project Goals

- Apply full-stack web development concepts in a practical project.
- Understand frontend and backend integration.
- Work with APIs and database connectivity.
- Explore authentication and administrative interfaces.
- Improve practical experience with React, Node.js, Express, and MongoDB.

## 👩‍💻 Developer

GitHub: [@mantasha08](https://github.com/mantasha08)

## 📄 License

No license has been specified yet. Please add an appropriate license if you intend to permit others to reuse or distribute this project.
