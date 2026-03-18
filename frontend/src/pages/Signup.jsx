import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [data,setData] = useState({
name:"",
email:"",
password:""
});

const handleChange = (e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()

if(!data.name || !data.email || !data.password){
alert("Please fill all fields")
return
}

// get existing users
const users = JSON.parse(localStorage.getItem("users")) || []

// check if email exists
const userExists = users.find(user => user.email === data.email)

if(userExists){
alert("User already exists")
return
}

// save user
users.push(data)
localStorage.setItem("users",JSON.stringify(users))

alert("Signup Successful")

navigate("/login")

}

return(

<div className="min-h-screen flex items-center justify-center bg-pink-200">

<div className="bg-white p-10 rounded-lg shadow-lg w-96">

<h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
name="name"
placeholder="Name"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
className="w-full border p-3 rounded"
onChange={handleChange}
/>

<button className="w-full bg-pink-300 text-white p-3 rounded">
Signup
</button>

</form>

<p className="text-center mt-4">
Already have account? <Link to="/login" className="text-indigo-600">Login</Link>
</p>

</div>

</div>

)

}

export default Signup