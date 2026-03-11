const mongoose=require("mongoose")

const dbConnect=async()=>{
   await mongoose.connect("mongodb+srv://shravanibodare_db_user:dfoy5jLygyaoIEvE@cluster0.gyjs50t.mongodb.net/?appName=Cluster0")
   .then(()=>{
        console.log("Database Connected");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports=dbConnect;