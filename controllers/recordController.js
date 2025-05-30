const Record = require("../models/recordModel");

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

const getAllRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

module.exports = { getAllRecords, addRecord };
