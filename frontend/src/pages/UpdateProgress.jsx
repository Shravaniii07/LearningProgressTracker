import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function UpdateProgress(){

const {id}=useParams();

const [data,setData]=useState({
Topic:"",
Technology:"",
Hours:"",
Date:"",
Notes:""
});

const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value});
}

const handleSubmit=async(e)=>{
e.preventDefault();

await axios.put("http://localhost:8000/book/update-progress",{
Id:id,
...data
});

alert("Progress Updated");

}

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

<h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
Update Progress
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input name="Topic" placeholder="Topic"
className="w-full border p-3 rounded"
value={data.Topic}
onChange={handleChange}/>

<input name="Subject" placeholder="Subject"
className="w-full border p-3 rounded"
onChange={handleChange}/>

<input name="Hours" placeholder="Hours"
className="w-full border p-3 rounded"
onChange={handleChange}/>

<input type="date" name="Date"
className="w-full border p-3 rounded"
onChange={handleChange}/>

<textarea name="Notes" placeholder="Notes"
className="w-full border p-3 rounded"
onChange={handleChange}/>

<button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
Update
</button>

</form>

</div>

</div>

);
}

export default UpdateProgress;