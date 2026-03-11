const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({

Category:{
type:String,
required:true
},

Subject:{
type:String,
required:true
},

Topic:{
type:String,
required:true
},

Hours:{
type:Number,
required:true
},

Date:{
type:Date,
required:true
},

Notes:{
type:String,
required:false
}

},{timestamps:true})

const progress = mongoose.model("progress",progressSchema);

module.exports = progress;