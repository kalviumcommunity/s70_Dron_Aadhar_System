const express = require("express");
const { getAllRecords, addRecord, updateRecord, deleteRecord } = require("../controllers/recordController");

const router = express.Router();

router.get("/records", getAllRecords);     
router.post("/records", addRecord);        
router.put("/record/:id", updateRecord);   // ✅ PUT route for updating record
router.delete("/record/:id", deleteRecord); // ✅ DELETE route added here

module.exports = router;
