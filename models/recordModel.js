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


  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  
    required: true
  }
});

module.exports = mongoose.model("Record", recordSchema);
