const express = require("express");
const { getAllRecords } = require("../controllers/recordController");

const router = express.Router();

// GET /records
router.get("/records", getAllRecords);

module.exports = router;
