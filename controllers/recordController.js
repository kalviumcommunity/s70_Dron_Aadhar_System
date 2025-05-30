const Record = require("../models/recordModel");

// GET all records
const getAllRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch records" });
  }
};

module.exports = { getAllRecords };
