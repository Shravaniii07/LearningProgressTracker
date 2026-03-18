import { useState } from "react";

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()

alert("Message Sent Successfully 💌")

setForm({
name:"",
email:"",
message:""
})

}

return(

<div className="min-h-screen bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 flex justify-center items-center p-6">

<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">

<h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
Contact Us 
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
className="w-full border p-3 rounded focus:outline-pink-500"
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
className="w-full border p-3 rounded focus:outline-pink-500"
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
className="w-full border p-3 rounded h-32 focus:outline-pink-500"
/>

<button className="w-full bg-pink-400 text-white p-3 rounded hover:bg-pink-600 transition">
Send Message
</button>

</form>

</div>

</div>

)

}

export default Contact