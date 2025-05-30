const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  aadhaarNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  age: Number,
  medicalHistory: [String],
});

module.exports = mongoose.model("Record", recordSchema);
