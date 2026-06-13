require('dotenv').config();
const express = require("express");
const cors = require("cors");

const HomePageRouter = require("./routes/homeRouter");
const studentRouter = require("./routes/studentRouter");
const connectDB = require("./config/db");

const app = express();

// DB connect
connectDB();
console.log("Success DB");

// middleware
app.use(cors());
app.use(express.json());

// logger (must be before routes)
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// routes
app.use("/", HomePageRouter);
app.use("/api/student", studentRouter);

// server listen (MOBILE FIX)
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://192.168.1.12:${PORT}`);
});