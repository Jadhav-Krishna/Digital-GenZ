const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const axios = require("axios");
require("dotenv").config();
const db=require("./config/db");
db();


const { connectRedis } = require("./config/redis")
connectRedis();

const app = express();
app.set("trust proxy", 1);
axios.defaults.withCredentials = true;

// ✅ CORS for local dev
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ✅ Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "localSecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // ❌ no HTTPS locally
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// ✅ Passport (disabled for now)
// app.use(passport.initialize());
// app.use(passport.session());

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", limiter);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// Data sanitization (Express 5 safe config)
app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);

app.use(hpp());
app.use(compression());
app.use(morgan("dev"));

// Health check routes
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

module.exports = app;
