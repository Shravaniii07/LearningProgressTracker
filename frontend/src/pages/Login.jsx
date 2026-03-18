import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const navigate = useNavigate()

const [data,setData] = useState({
email:"",
password:""
})

const handleChange = (e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()

const users = JSON.parse(localStorage.getItem("users")) || []

const user = users.find(
u => u.email === data.email && u.password === data.password
)

if(user){

localStorage.setItem("currentUser",JSON.stringify(user))

alert("Login Successful")

navigate("/dashboard")

}
else{
alert("Invalid Email or Password")
}

}

return(

<div className="min-h-screen flex items-center justify-center bg-pink-300">

<div className="bg-white p-10 rounded-lg shadow-lg w-96">

<h2 className="text-2xl font-bold text-center mb-6">Login</h2>

<form onSubmit={handleSubmit} className="space-y-4">

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

<button className="w-full bg-pink-500 text-white p-3 rounded">
Login
</button>

</form>

<p className="text-center mt-4">
Don't have account? <Link to="/signup" className="text-purple-600">Signup</Link>
</p>

</div>

</div>

)

}

export default Login