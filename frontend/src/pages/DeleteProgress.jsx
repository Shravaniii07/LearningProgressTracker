import { useEffect, useState } from "react";
import axios from "axios";

function DeleteProgress(){

const [list,setList]=useState([]);

const fetchData = async()=>{
    try{
const res = await axios.get("http://localhost:8000/book/get-progress");
console.log("API DATA",res.data);

setList(res.data.ProgressList);
    }
    catch(err){
        console.log(err);
        
    }
};

const deleteItem = async(id)=>{
await axios.delete("http://localhost:8000/book/delete-progress",{
data:{Id:id}
});
fetchData();
};

useEffect(()=>{
fetchData();
},[]);

return(

<div className="min-h-screen bg-gray-100 p-10">

<h2 className="text-3xl font-bold mb-6 text-red-600">
Delete Progress
</h2>

{/* {list.map(item=>(
<div key={item._id} className="bg-white p-4 mb-4 shadow rounded flex justify-between">

<span>
{item.Subject} - {item.Topic}
</span>

<button
onClick={()=>deleteItem(item._id)}
className="bg-red-500 text-white px-4 py-1 rounded"
>
Delete
</button>

</div>
))} */}

{list.map(item=>(
<div key={item._id} className="bg-white p-5 mb-4 shadow rounded flex justify-between items-center">

<div>

<p className="font-bold text-lg">
{item.Subject}
</p>

<p className="text-gray-600">
Topic: {item.Topic}
</p>

<p className="text-gray-600">
Hours: {item.Hours}
</p>

</div>

<button
onClick={()=>deleteItem(item._id)}
className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
>
Delete
</button>

</div>
))}

</div>

)

}

export default DeleteProgress