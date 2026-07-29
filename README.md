# 🚀 Dev Session Tracker

A modern full-stack **Developer Coding Session Tracker** built with the **MERN Stack** that helps developers log, organize, and analyze their coding sessions. Track the technologies you've worked with, monitor productivity, maintain development notes, and visualize your coding history through an intuitive dashboard.

Built using **MongoDB, Express.js, React, Node.js, Tailwind CSS v4, and Vite**, this project demonstrates production-ready MERN architecture with secure JWT authentication and RESTful APIs.

---

# 📸 Screenshots
<img width="800" height="488" alt="image" src="https://github.com/user-attachments/assets/acec497b-bf9b-49f2-bd16-95f09560e6d7" />
<img width="800" height="488" alt="image" src="https://github.com/user-attachments/assets/5c858360-e5d7-4c46-9caa-3e004d11b381" />
<img width="800" height="488" alt="image" src="https://github.com/user-attachments/assets/6347f155-10a5-41fc-af36-6730d2a76f69" />



# ✨ Features

### 🔐 Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Hashing using bcryptjs
- Protected API Routes

### 📝 Session Management
- Create Coding Sessions
- View Session History
- Delete Sessions
- Add Session Notes
- Track Technologies Used
- Store Session Duration
- Track Development Date

### 📊 Dashboard
- Total Coding Hours
- Total Sessions
- Recent Activity
- Productivity Overview

### ⚡ Frontend
- React + Vite
- Tailwind CSS v4
- Axios API Integration
- Responsive UI
- Component-Based Architecture

### 🚀 Backend
- Express REST API
- MongoDB Database
- Mongoose ODM
- Environment Variables
- Authentication Middleware
- Modular MVC Architecture

### 🛠 Developer Experience
- Vite Development Server
- Nodemon Auto Reload
- API Proxy Configuration
- Clean Folder Structure
- Production Ready

---

# 🛠 Tech Stack

## Frontend

- React 18+
- Vite
- Tailwind CSS v4
- Axios
- React Hooks

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

## Development Tools

- Git
- GitHub
- VS Code
- Nodemon

## Deployment

- MongoDB Atlas
- Render
- Vercel

---

# 📂 Project Structure

```text
dev-session-tracker/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AuthModal.jsx
│   │   │   ├── SessionForm.jsx
│   │   │   ├── SessionList.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── sessionController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── Session.js
│   │   │   └── User.js
│   │   │
│   │   ├── routes/
│   │   │   ├── sessionRoutes.js
│   │   │   └── userRoutes.js
│   │   │
│   │   └── index.js
│   │
│   ├── .env
│   └── package.json
│
├── screenshots/
├── .gitignore
├── LICENSE
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/VedantGiri117/dev-session-tracker.git

cd dev-session-tracker
```

---

## 2. Backend Setup

```bash
cd server

npm install
```

Create a `.env` file inside the `server` directory.

```env
PORT=5001

MONGO_URI=*********

JWT_SECRET=***********
```

Start the backend server.

```bash
npm run dev
```

---

## 3. Frontend Setup

Open another terminal.

```bash
cd client

npm install

npm run dev
```

Open

```
localhost
```

---

# 🔌 REST API Endpoints

## Authentication (`/api/users`)

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/api/users/register` | Register a new user | Public |
| POST | `/api/users/login` | Login user | Public |

---

## Sessions (`/api/sessions`)

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| GET | `/api/sessions` | Get all sessions | Protected |
| POST | `/api/sessions` | Create a session | Protected |
| DELETE | `/api/sessions/:id` | Delete a session | Protected |

---

# 🔒 Authentication Flow

1. Register a new account.
2. Login using your credentials.
3. Receive a JWT token.
4. Store the token on the client.
5. Send the token in the `Authorization` header.
6. Access protected routes securely.

---

# 💻 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5001

MONGO_URI=************

JWT_SECRET=*********
```

---

# 🧠 What I Learned

This project helped me understand:

- MERN Stack Architecture
- Building REST APIs
- Express.js Routing
- MongoDB & Mongoose
- JWT Authentication
- Password Hashing
- React State Management
- Axios API Integration
- Environment Variables
- Protected Routes
- CRUD Operations
- Full-Stack Project Structure
- Deployment Workflow

---

# 🚀 Future Improvements

- ✏️ Edit Sessions
- 📅 Calendar View
- 📈 Charts & Analytics
- 🌙 Dark Mode
- 🏷 Technology Tags
- 🔍 Search Sessions
- 📄 Pagination
- 📊 Weekly Productivity Reports
- ⏱ Live Coding Timer
- ☁ Cloud Image Uploads
- 📱 Progressive Web App (PWA)

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Vedant Giri**

GitHub: **https://github.com/VedantGiri117**

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
