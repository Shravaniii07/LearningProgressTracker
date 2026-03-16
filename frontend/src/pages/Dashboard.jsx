import { Link } from "react-router-dom";

function Dashboard() {

return(

<div className="min-h-screen flex bg-slate-100">

{/* Sidebar */}

<div className="w-64 bg-pink-500 text-white p-6">

<h2 className="text-2xl font-bold mb-10">
Learning App
</h2>

<ul className="space-y-5">

<li>
<Link to="/home" className="block hover:text-gray-200">
🏠 Home
</Link>
</li>

<li>
<Link to="/add" className="block hover:text-gray-200">
➕ Add Progress
</Link>
</li>

<li>
<Link to="/view" className="block hover:text-gray-200">
📊 View Progress
</Link>
</li>

<li>
<Link to="/update" className="block hover:text-gray-200">
✏ Update Progress
</Link>
</li>

<li>
<Link to="/delete" className="block hover:text-gray-200">
🗑 Delete Progress
</Link>
</li>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<li>
<Link to="/home" className="block hover:text-gray-200">
🏠 Logout
</Link>
</li>

</ul>

</div>

{/* Right Content */}

<div className="flex-1 p-10">

<h1 className="text-4xl font-bold text-pink-600 mb-10">
Dashboard
</h1>

<div className="grid md:grid-cols-4 gap-8">

{/* Add */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
➕ Add Learning
</h2>

<p className="text-gray-600 mb-5">
Record today's learning progress.
</p>

<Link
to="/add"
className="bg-indigo-400 text-white px-5 py-2 rounded"
>
Add Progress
</Link>

</div>

{/* View */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
📊 View Progress
</h2>

<p className="text-gray-600 mb-5">
Check your learning records.
</p>

<Link
to="/view"
className="bg-red-300 text-white px-5 py-2 rounded"
>
View Progress
</Link>

</div>

{/* Update */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
✏ Update Progress
</h2>

<p className="text-gray-600 mb-5">
Modify existing learning records.
</p>

<Link
to="/view"
className="bg-yellow-500 text-white px-5 py-2 rounded"
>
Update Progress
</Link>

</div>

{/* Delete */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-xl font-bold mb-3">
🗑 Delete Progress
</h2>

<p className="text-gray-600 mb-5">
Remove unwanted records.
</p>

<Link
to="/delete/:id"
className="bg-red-400 text-white px-5 py-2 rounded"
>
Delete Progress
</Link>

</div>

</div>

{/* Motivation */}

<div className="mt-10 bg-white p-8 rounded-xl shadow text-center">

<h2 className="text-2xl font-bold mb-3 text-purple-600">
🔥 Stay Consistent
</h2>

<p className="text-gray-600">
Small daily progress leads to big results. Keep learning every day.
</p>

</div>

</div>

</div>

)

}

export default Dashboard

// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Dashboard() {
//   return (

// <div className="min-h-screen bg-slate-100 p-10">

// <Navbar />

// <h1 className="text-4xl font-bold text-indigo-600 mb-10 text-center">
// Learning Dashboard
// </h1>

// {/* Dashboard Cards */}

// <div className="grid md:grid-cols-4 gap-8">

// {/* Add Progress */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-2xl font-bold mb-3 text-indigo-600">
// ➕ Add Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Record what you learned today.
// </p>

// <Link
// to="/add"
// className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
// >
// Add Learning
// </Link>

// </div>

// {/* View Progress */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-2xl font-bold mb-3 text-green-600">
// 📊 View Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Check all your learning records.
// </p>

// <Link
// to="/view"
// className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
// >
// View Progress
// </Link>

// </div>

// {/* Update */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-2xl font-bold mb-3 text-yellow-600">
// ✏ Update Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Edit your learning records.
// </p>

// <Link
// to="/view"
// className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600"
// >
// Update
// </Link>

// </div>

// {/* Delete */}

// <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

// <h2 className="text-2xl font-bold mb-3 text-red-600">
// 🗑 Delete Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Remove unwanted records.
// </p>

// <Link
// to="/view"
// className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
// >
// Delete
// </Link>

// </div>

// </div>

// {/* Motivation Section */}

// <div className="mt-12 bg-white p-8 rounded-xl shadow-lg text-center">

// <h2 className="text-2xl font-bold text-purple-600 mb-3">
// 🔥 Stay Consistent
// </h2>

// <p className="text-gray-600">
// Small daily progress leads to big results. Keep learning every day!
// </p>

// </div>

// </div>

//   );
// }

// export default Dashboard;

