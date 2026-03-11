import { useState } from "react";
import axios from "axios";

function AddProgress() {

const [data,setData]=useState({
Category:"",
Subject:"",
Topic:"",
Hours:"",
Date:"",
Notes:""
})

const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
e.preventDefault()

try{



const res= await axios.post("http://localhost:8000/book/add-progress",data)

console.log(res.data);

alert("Progress Added Successfully")

setData({
Category:"",
Subject:"",
Topic:"",
Hours:"",
Date:"",
Notes:""
})

}
catch(err){
    console.log(err);
    alert("error adding progress")
}
}

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

<h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
Add Learning Progress
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

{/* Category */}

<select
name="Category"
className="w-full border p-3 rounded"
onChange={handleChange}
>

<option value="">Select Category</option>
<option value="Programming">Programming</option>
<option value="Language">Language</option>
<option value="Design">Design</option>
<option value="Accessibility">Accessibility</option>
<option value="Other">Other</option>

</select>

{/* Subject */}

<input
name="Subject"
placeholder="Subject / Skill (React, Spanish, Braille etc)"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

{/* Topic */}

<input
name="Topic"
placeholder="Topic"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

{/* Hours */}

<input
type="number"
name="Hours"
placeholder="Hours Studied"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

{/* Date */}

<input
type="date"
name="Date"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

{/* Notes */}

<textarea
name="Notes"
placeholder="Notes"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

<button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
Add Progress
</button>

</form>

</div>

</div>

)

}

export default AddProgress