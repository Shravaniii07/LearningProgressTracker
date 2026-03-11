const express = require("express");

const {handleAddProgress} = require("../controller/progressController");

const router = express.Router();

router.get("/",(req,res)=>{
res.send("Progress Router Working")
})

router.post("/add-progress",handleAddProgress);

module.exports = router;