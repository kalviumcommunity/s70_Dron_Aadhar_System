const express = require("express");
const { getAllRecords, addRecord, updateRecord } = require("../controllers/recordController");

const router = express.Router();

router.get("/records", getAllRecords);     
router.post("/records", addRecord);        
router.put("/record/:id", updateRecord);   // ✅ PUT route for updating record

module.exports = router;
