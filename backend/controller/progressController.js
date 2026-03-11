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

module.exports = {handleAddProgress};