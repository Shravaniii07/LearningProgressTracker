// const express = require("express");

// const {handleAddProgress} = require("../controller/progressController");

// const router = express.Router();

// router.get("/",(req,res)=>{
// res.send("Progress Router Working")
// })

// router.post("/add-progress",handleAddProgress);

// module.exports = router;

const express = require("express");

const { 
handleAddProgress,
handleGetProgress,
handleDeleteProgress,
handleUpdateProgress
} = require("../controller/progressController");

const router = express.Router();

router.get("/",(req,res)=>{
res.send("Progress Router Working")
})

router.post("/add-progress",handleAddProgress);

router.get("/get-progress",handleGetProgress);

router.delete("/delete-progress",handleDeleteProgress);

router.put("/update-progress/:id",handleUpdateProgress);

module.exports = router;