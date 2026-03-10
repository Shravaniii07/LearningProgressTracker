const mongoose=require('mongoose');

const LangSchema=new mongoose.Schema({
LanguageTitle:{
type:String,
required:true
},
BookAuthor:{
type:String,
required:true
},
PublishDate:{
type:Date,
required:true
},
Price:{
type:Number,
required:true
},
Description:{
type:String,
required:false
}

},{timestamps:true})

const book=mongoose.model("book",langSchema);

module.exports=book;