// connect creates server

const express = require("express");
const dbConnect = require("./database");

const router = require("./routes/progressRoute");

const port = 8000;

dbConnect();

const app = express();

const cors = require("cors");
app.use(cors()); 

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Learning Progress Tracker backend is running");
})



app.use("/book", router);

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})

console.log("Server Running");