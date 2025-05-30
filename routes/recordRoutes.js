const express = require("express");
const { getAllRecords, addRecord } = require("../controllers/recordController");

const router = express.Router();

router.get("/records", getAllRecords);     
router.post("/records", addRecord);        

module.exports = router;
