import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from "recharts";

function Dashboard() {

  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        // ✅ FIXED API
        const res = await axios.get("http://localhost:8000/book/get-progress");

        const progress = res.data.ProgressList || [];

        console.log("API DATA:", progress);

        // ✅ FORMAT FOR BAR CHART
        const formattedData = progress.map(item => ({
          Subject: item.Subject,
          Hours: Number(item.Hours)
        }));

        setData(formattedData);

        // ✅ CATEGORY CALCULATION
        const map = {};

        progress.forEach(item => {
          const category = item.Category || "Other";
          map[category] = (map[category] || 0) + Number(item.Hours);
        });

        const formattedCategory = Object.keys(map).map(key => ({
          name: key,
          value: map[key]
        }));

        setCategoryData(formattedCategory);

      } catch (err) {
        console.log("ERROR:", err);
      }
    };

    fetchData();

  }, []);

  const COLORS = ["#ec4899", "#f472b6", "#fb7185", "#f43f5e"];

  return (

    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <div className="w-64 bg-pink-500 text-white p-6">

        <h2 className="text-2xl font-bold mb-10">
          Learning App
        </h2>

        <ul className="space-y-5">

          <li><Link to="/home">🏠 Home</Link></li>
          <li><Link to="/add">➕ Add Progress</Link></li>
          <li><Link to="/view">📊 View Progress</Link></li>

          {/* ✅ FIXED */}
          <li><Link to="/view">✏ Update Progress</Link></li>
          <li><Link to="/view">🗑 Delete Progress</Link></li>

          <li className="mt-40">
            <Link to="/home">🏠 Logout</Link>
          </li>

        </ul>

      </div>

      {/* Right Content */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-pink-600 mb-10">
          Dashboard
        </h1>

        {/* Cards
        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">
            <h2>➕ Add Learning</h2>
            <Link to="/add">Add</Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2>📊 View Progress</h2>
            <Link to="/view">View</Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2>✏ Update</h2>
            <Link to="/view">Update</Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2>🗑 Delete</h2>
            <Link to="/view">Delete</Link>
          </div>

        </div> */}

        {/* Cards */}
<div className="grid md:grid-cols-4 gap-8">

  {/* Add */}
  <div className="bg-white p-8 rounded-xl shadow">
    <h2 className="text-xl font-bold mb-3">➕ Add Learning</h2>
    <p className="text-gray-600 mb-5">
      Record today's learning progress.
    </p>
    <Link
      to="/add"
      className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded"
    >
      Add Progress
    </Link>
  </div>

  {/* View */}
  <div className="bg-white p-8 rounded-xl shadow">
    <h2 className="text-xl font-bold mb-3">📊 View Progress</h2>
    <p className="text-gray-600 mb-5">
      Check your learning records.
    </p>
    <Link
      to="/view"
      className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded"
    >
      View Progress
    </Link>
  </div>

  {/* Update */}
  <div className="bg-white p-8 rounded-xl shadow">
    <h2 className="text-xl font-bold mb-3">✏ Update Progress</h2>
    <p className="text-gray-600 mb-5">
      Modify existing records.
    </p>
    <Link
      to="/view"
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded"
    >
      Update Progress
    </Link>
  </div>

  {/* Delete */}
  <div className="bg-white p-8 rounded-xl shadow">
    <h2 className="text-xl font-bold mb-3">🗑 Delete Progress</h2>
    <p className="text-gray-600 mb-5">
      Remove unwanted records.
    </p>
    <Link
      to="/view"
      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
    >
      Delete Progress
    </Link>
  </div>

</div>

        {/* Charts */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              📊 Hours per Subject
            </h2>

            <BarChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Hours" fill="#ec4899" />
            </BarChart>

          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              🥧 Category Distribution
            </h2>

            <PieChart width={400} height={250}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;

// import { Link } from "react-router-dom";

// function Dashboard() {

// return(

// <div className="min-h-screen flex bg-slate-100">

// {/* Sidebar */}

// <div className="w-64 bg-pink-500 text-white p-6">

// <h2 className="text-2xl font-bold mb-10">
// Learning App
// </h2>

// <ul className="space-y-5">

// <li>
// <Link to="/home" className="block hover:text-gray-200">
// 🏠 Home
// </Link>
// </li>

// <li>
// <Link to="/add" className="block hover:text-gray-200">
// ➕ Add Progress
// </Link>
// </li>

// <li>
// <Link to="/view" className="block hover:text-gray-200">
// 📊 View Progress
// </Link>
// </li>

// <li>
// <Link to="/update" className="block hover:text-gray-200">
// ✏ Update Progress
// </Link>
// </li>

// <li>
// <Link to="/delete" className="block hover:text-gray-200">
// 🗑 Delete Progress
// </Link>
// </li>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <li>
// <Link to="/home" className="block hover:text-gray-200">
// 🏠 Logout
// </Link>
// </li>

// </ul>

// </div>

// {/* Right Content */}

// <div className="flex-1 p-10">

// <h1 className="text-4xl font-bold text-pink-600 mb-10">
// Dashboard
// </h1>

// <div className="grid md:grid-cols-4 gap-8">

// {/* Add */}

// <div className="bg-white p-8 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// ➕ Add Learning
// </h2>

// <p className="text-gray-600 mb-5">
// Record today's learning progress.
// </p>

// <Link
// to="/add"
// className="bg-indigo-400 text-white px-5 py-2 rounded"
// >
// Add Progress
// </Link>

// </div>

// {/* View */}

// <div className="bg-white p-8 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// 📊 View Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Check your learning records.
// </p>

// <Link
// to="/view"
// className="bg-red-300 text-white px-5 py-2 rounded"
// >
// View Progress
// </Link>

// </div>

// {/* Update */}

// <div className="bg-white p-8 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// ✏ Update Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Modify existing learning records.
// </p>

// <Link
// to="/view"
// className="bg-yellow-500 text-white px-5 py-2 rounded"
// >
// Update Progress
// </Link>

// </div>

// {/* Delete */}

// <div className="bg-white p-8 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// 🗑 Delete Progress
// </h2>

// <p className="text-gray-600 mb-5">
// Remove unwanted records.
// </p>

// <Link
// to="/delete/:id"
// className="bg-red-400 text-white px-5 py-2 rounded"
// >
// Delete Progress
// </Link>

// </div>

// </div>

// {/* Motivation */}

// <div className="mt-10 bg-white p-8 rounded-xl shadow text-center">

// <h2 className="text-2xl font-bold mb-3 text-purple-600">
// 🔥 Stay Consistent
// </h2>

// <p className="text-gray-600">
// Small daily progress leads to big results. Keep learning every day.
// </p>

// </div>

// </div>

// </div>

// )

// }

// export default Dashboard

