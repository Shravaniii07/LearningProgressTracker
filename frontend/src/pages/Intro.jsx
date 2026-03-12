import { Link } from "react-router-dom";

function Intro() {

return(

<div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-300 flex items-center justify-center">

<div className="text-center text-white">

<h1 className="text-6xl font-bold mb-6">
Learning Progress Tracker
</h1>

<p className="text-xl mb-10">
Track your daily learning and stay consistent 🚀
</p>

<Link
to="/home"
className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200"
>
Get Started
</Link>

</div>

</div>

)

}

export default Intro