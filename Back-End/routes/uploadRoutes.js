const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

// 👉 POST route - Upload file
router.post("/", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.json({
      filename: req.file.filename,
      url: fileUrl
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 👉 GET route - Get all uploaded files
router.get("/files", (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) return res.status(500).json({ error: "Could not list files" });

    const urls = files.map(file => `http://localhost:5000/uploads/${file}`);
    res.json(urls);
  });
});

// 👉 DELETE route - Delete file by filename
router.delete("/:filename", (req, res) => {
  const filePath = path.join("uploads", req.params.filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Delete error:", err);
      return res.status(500).json({ error: "File not found or could not delete" });
    }

    res.json({ message: "File deleted successfully", filename: req.params.filename });
  });
});

module.exports = router;
