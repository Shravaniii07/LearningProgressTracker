import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (

<div className="min-h-screen bg-gray-100 p-10">
    <Navbar />

<h1 className="text-4xl font-bold text-indigo-600 mb-10">
Learning Dashboard
</h1>

<div className="grid md:grid-cols-3 gap-8">

{/* Add Progress */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">

<h2 className="text-2xl font-bold mb-3">➕ Add Progress</h2>

<p className="text-gray-600 mb-5">
Record what you learned today.
</p>

<Link
to="/add"
className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
>
Add Learning
</Link>

</div>

{/* View Progress */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">

<h2 className="text-2xl font-bold mb-3">📊 View Progress</h2>

<p className="text-gray-600 mb-5">
Check all your learning records.
</p>

<Link
to="/view"
className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
>
View Progress
</Link>

</div>

{/* Motivation */}

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">

<h2 className="text-2xl font-bold mb-3">🔥 Stay Consistent</h2>

<p className="text-gray-600">
Small daily progress leads to big results.
Keep learning every day!
</p>

</div>

</div>

</div>

  );
}

export default Dashboard;