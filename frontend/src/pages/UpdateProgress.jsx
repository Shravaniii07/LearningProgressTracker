// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// function UpdateProgress() {
//   const { id } = useParams(); // Get the progress ID from URL
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     Category: "",
//     Subject: "",
//     Topic: "",
//     Hours: "",
//     Date: "",
//     Notes: ""
//   });

//   const [loading, setLoading] = useState(true);

//   // Fetch existing progress data when component loads
//   useEffect(() => {
//     const fetchProgress = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/book/get-progress");
//         const progressItem = res.data.ProgressList.find(item => item._id === id);
//         if (progressItem) {
//           setData(progressItem);
//         } else {
//           alert("Progress not found");
//           navigate("/view-progress");
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         alert("Error fetching progress");
//         navigate("/view-progress");
//       }
//     };

//     fetchProgress();
//   }, [id, navigate]);

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8000/book/update-progress/${id}`, data);
//       alert("Progress Updated Successfully");
//       navigate("/view-progress");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Error updating progress");
//     }
//   };

//   if (loading) {
//     return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
//           Update Progress
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="Category"
//             placeholder="Category"
//             className="w-full border p-3 rounded"
//             value={data.Category}
//             onChange={handleChange}
//           />
//           <input
//             name="Subject"
//             placeholder="Subject"
//             className="w-full border p-3 rounded"
//             value={data.Subject}
//             onChange={handleChange}
//           />
//           <input
//             name="Topic"
//             placeholder="Topic"
//             className="w-full border p-3 rounded"
//             value={data.Topic}
//             onChange={handleChange}
//           />
//           <input
//             name="Hours"
//             placeholder="Hours"
//             className="w-full border p-3 rounded"
//             value={data.Hours}
//             onChange={handleChange}
//           />
//           <input
//             type="date"
//             name="Date"
//             className="w-full border p-3 rounded"
//             value={data.Date?.slice(0, 10)} // format date for input
//             onChange={handleChange}
//           />
//           <textarea
//             name="Notes"
//             placeholder="Notes"
//             className="w-full border p-3 rounded"
//             value={data.Notes}
//             onChange={handleChange}
//           />

//           <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateProgress;

import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProgress(){

const {id} = useParams();
const navigate = useNavigate();

const [data,setData] = useState({
Category:"",
Subject:"",
Topic:"",
Hours:"",
Date:"",
Notes:""
});

const handleChange = (e)=>{
setData({
...data,
[e.target.name]:e.target.value
});
}

const handleSubmit = async(e)=>{
e.preventDefault();

try{

// await axios.put("http://localhost:8000/book/update-progress",{
// Id:id,
// ...data
// });
await axios.put(`http://localhost:8000/book/update-progress/${id}`, data);

alert("Progress Updated Successfully");

navigate("/view");

}
catch(err){
console.log(err);
alert("Error updating progress");
}

}

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

<h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
Update Progress
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
name="Category"
placeholder="Category"
className="w-full border p-3 rounded"
value={data.Category}
onChange={handleChange}
/>

<input
name="Subject"
placeholder="Subject"
className="w-full border p-3 rounded"
value={data.Subject}
onChange={handleChange}
/>

<input
name="Topic"
placeholder="Topic"
className="w-full border p-3 rounded"
value={data.Topic}
onChange={handleChange}
/>

<input
name="Hours"
placeholder="Hours"
className="w-full border p-3 rounded"
value={data.Hours}
onChange={handleChange}
/>

<input
type="date"
name="Date"
className="w-full border p-3 rounded"
value={data.Date}
onChange={handleChange}
/>

<textarea
name="Notes"
placeholder="Notes"
className="w-full border p-3 rounded"
value={data.Notes}
onChange={handleChange}
/>

<button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
Update
</button>

</form>

</div>

</div>

);

}

export default UpdateProgress;

