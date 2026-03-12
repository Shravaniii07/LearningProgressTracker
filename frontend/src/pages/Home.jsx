import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {

return(

<div className="min-h-screen bg-slate-100">

<Navbar/>

<div className="max-w-6xl mx-auto py-20 text-center">

<h1 className="text-5xl font-bold text-indigo-600 mb-6">
Learning Progress Tracker
</h1>

<p className="text-gray-600 text-lg mb-10">
Track your daily learning journey and stay consistent.
Record what you study and monitor your progress easily.
</p>

<Link
to="/dashboard"
className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
>
Go To Dashboard
</Link>

{/* Info Section */}

<div className="grid md:grid-cols-3 gap-8 mt-16">

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
📚 Track Learning
</h2>

<p className="text-gray-600">
Save subjects, topics and hours studied.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
📊 Monitor Progress
</h2>

<p className="text-gray-600">
View your complete learning history anytime.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
🚀 Stay Consistent
</h2>

<p className="text-gray-600">
Build a strong daily learning habit.
</p>

</div>

</div>

</div>

</div>

)

}

export default Home


// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Home() {

// return(

// <div className="min-h-screen bg-slate-100">

// <Navbar/>

// <div className="max-w-6xl mx-auto p-10">

// <h1 className="text-4xl font-bold text-indigo-600 mb-10 text-center">
// Learning Dashboard
// </h1>

// <div className="grid md:grid-cols-4 gap-8">

// {/* ADD */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-xl font-bold mb-4">➕ Add Progress</h2>

// <p className="text-gray-600 mb-6">
// Add today's learning record
// </p>

// <Link
// to="/add"
// className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
// >
// Add
// </Link>

// </div>

// {/* VIEW */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-xl font-bold mb-4">📊 View Progress</h2>

// <p className="text-gray-600 mb-6">
// See all learning records
// </p>

// <Link
// to="/view"
// className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
// >
// View
// </Link>

// </div>

// {/* UPDATE */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-xl font-bold mb-4">✏ Update</h2>

// <p className="text-gray-600 mb-6">
// Edit your progress records
// </p>

// <Link
// to="/view"
// className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600"
// >
// Update
// </Link>

// </div>

// {/* DELETE */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-xl font-bold mb-4">🗑 Delete</h2>

// <p className="text-gray-600 mb-6">
// Remove learning record
// </p>

// <Link
// to="/view"
// className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
// >
// Delete
// </Link>

// </div>

// </div>

// </div>

// </div>

// )

// }

// export default Home