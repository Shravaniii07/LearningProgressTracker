const progress = require("../model/progressModel");

const handleAddProgress = async (req,res)=>{

try{

const data = req.body;

console.log(data);

if(!data.Category || !data.Subject || !data.Topic || !data.Hours || !data.Date){
return res.status(400).json({msg:"All required fields needed"})
}

const newProgress = new progress(data);

await newProgress.save();

res.status(200).json({
msg:"Progress Added Successfully",
data:newProgress
})

}

catch(err){
res.status(500).json({
msg:"Server Error",
error:err.message
})
}

}

// GET PROGRESS
const handleGetProgress = async(req,res)=>{
try{

const list = await progress.find();

res.status(200).json({
ProgressList:list
})

}
catch(err){
res.status(500).json({msg:"Server Error"})
}
}


// DELETE PROGRESS
const handleDeleteProgress = async(req,res)=>{
try{

const {Id} = req.body;

await progress.findByIdAndDelete(Id);

res.status(200).json({
msg:"Progress Deleted"
})

}
catch(err){
res.status(500).json({msg:"Server Error"})
}
}


// UPDATE PROGRESS
const handleUpdateProgress = async(req,res)=>{
try{

const {Id,...data} = req.body;

await progress.findByIdAndUpdate(Id,data);

res.status(200).json({
msg:"Progress Updated"
})

}
catch(err){
res.status(500).json({msg:"Server Error"})
}
}


module.exports = {
handleAddProgress,
handleGetProgress,
handleDeleteProgress,
handleUpdateProgress
};

// module.exports = {handleAddProgress};