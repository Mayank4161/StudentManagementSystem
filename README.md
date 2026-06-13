# 📚 Student Management System

A full-stack **MERN (MongoDB, Express, React, Node.js)** application for managing student records, with a clean, responsive UI built using **Tailwind CSS**.

---

## 🚀 Live Demo

- 🌐 Frontend: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- ⚙️ Backend API: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

> Replace the links above with your actual deployed URLs.

---

## 🧑‍💻 Features

- ➕ Add new student (with full form validation)
- 📄 View all students in a table/card layout
- ❌ Delete student with confirmation prompt
- 📱 Fully responsive UI (Mobile + Desktop)
- ⚡ Instant UI update (no page refresh needed)
- 🎨 Clean, modern UI using Tailwind CSS
- ✅ Field-level error messages and loading states

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

```
StudentManagementSystem/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Mayank4161/StudentManagementSystem.git
cd StudentManagementSystem
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔥 API Endpoints

| Method | Route          | Description       |
|--------|----------------|--------------------|
| GET    | `/api/student`     | Get all students      |
| POST   | `/api/student`     | Add a new student      |
| DELETE | `/api/student/:id` | Delete a student by ID |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mayank4161/StudentManagementSystem/issues).

---

## 👤 Author

**Mayank**
- GitHub: [@Mayank4161](https://github.com/Mayank4161)

---

## ⭐ Support

If you like this project, give it a ⭐ on [GitHub](https://github.com/Mayank4161/StudentManagementSystem)!
