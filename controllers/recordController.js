const Record = require("../models/recordModel");

// Add new record
const addRecord = async (req, res) => {
  try {
    const { aadhaarNumber, name, age, medicalHistory } = req.body;
    const newRecord = new Record({ aadhaarNumber, name, age, medicalHistory });
    await newRecord.save();
    res.status(201).json({ message: "Record added", record: newRecord });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};

// Get all records
const getAllRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

// ✅ Update record (PUT API)
const updateRecord = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const updatedRecord = await Record.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json({ message: "Record updated", record: updatedRecord });
  } catch (error) {
    res.status(500).json({ error: "Update failed", details: error.message });
  }
};

module.exports = { getAllRecords, addRecord, updateRecord };
