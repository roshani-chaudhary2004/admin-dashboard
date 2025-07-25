// backend/server.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());                      // Enable Cross-Origin requests
app.use(express.json());             // Parse JSON bodies

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/challan", require("./routes/challanRoutes"));
app.use("/api/id", require("./routes/idRoutes"));
app.use("/api/project", require("./routes/projectRoutes"));
app.use("/api/notice", require("./routes/noticeRoutes"));

// ✅ Test route for browser check
app.get("/", (req, res) => {
  res.send("🚀 Backend is working fine!");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
