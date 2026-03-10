import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewProgress() {

const [list,setList] = useState([]);

const fetchData = async () => {
  try{
    const res = await axios.get("http://localhost:5000/get-progress");
    setList(res.data.ProgressList);
  }
  catch(err){
    console.log(err);
  }
};

const deleteProgress = async (id) => {

  try{

  await axios.delete("http://localhost:5000/delete-progress",{
    data:{Id:id}
  });

  fetchData();

  }
  catch(err){
    console.log(err);
  }

};

useEffect(()=>{
fetchData();
},[]);

return(

<div className="min-h-screen bg-gray-100 p-10">

<h2 className="text-3xl font-bold text-indigo-600 mb-6">
Learning Progress
</h2>

<div className="overflow-x-auto bg-white shadow-lg rounded-lg">

<table className="w-full text-center">

<thead className="bg-indigo-600 text-white">

<tr>

<th className="p-3">Category</th>
<th className="p-3">Subject</th>
<th className="p-3">Topic</th>
<th className="p-3">Hours</th>
<th className="p-3">Date</th>
<th className="p-3">Notes</th>
<th className="p-3">Action</th>

</tr>

</thead>

<tbody>

{list.map((item)=>(
<tr
key={item._id}
className="border-b hover:bg-gray-100"
>

<td className="p-3">{item.Category}</td>

<td className="p-3">{item.Subject}</td>

<td className="p-3">{item.Topic}</td>

<td className="p-3">{item.Hours}</td>

<td className="p-3">{item.Date}</td>

<td className="p-3">{item.Notes}</td>

<td className="p-3 space-x-2">

<Link
to={`/update/${item._id}`}
className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
>
Edit
</Link>

<button
onClick={()=>deleteProgress(item._id)}
className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

);

}

export default ViewProgress;