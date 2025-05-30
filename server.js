require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recordRoutes = require("./routes/recordRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", recordRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed", err));

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
