import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {

return(

<div className="min-h-screen bg-slate-100 flex flex-col">

<Navbar/>

{/* HERO SECTION */}
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
className="bg-pink-400 text-white px-8 py-3 rounded-lg hover:bg-pink-700"
>
Go To Dashboard
</Link>

{/* INFO CARDS */}
<div className="grid md:grid-cols-3 gap-8 mt-16">

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-xl font-bold mb-3">📚 Track Learning</h2>
<p className="text-gray-600">
Save subjects, topics and hours studied.
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-xl font-bold mb-3">📊 Monitor Progress</h2>
<p className="text-gray-600">
View your complete learning history anytime.
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-xl font-bold mb-3">🚀 Stay Consistent</h2>
<p className="text-gray-600">
Build a strong daily learning habit.
</p>
</div>

</div>

</div>

{/* EXTRA SCROLLABLE SECTION */}
<div className="bg-white py-16 px-6">

<div className="max-w-5xl mx-auto text-center">

<h2 className="text-3xl font-bold text-indigo-600 mb-6">
Why Use This App?
</h2>

<p className="text-gray-600 mb-10">
Consistency is the key to success. This app helps you stay on track by recording your learning
activities and showing your improvement over time.
</p>

<div className="grid md:grid-cols-2 gap-8 text-left">

<div className="p-6 border rounded-lg">
<h3 className="font-bold text-lg mb-2">⏱ Save Time</h3>
<p className="text-gray-600">
Quickly log your daily study without any complexity.
</p>
</div>

<div className="p-6 border rounded-lg">
<h3 className="font-bold text-lg mb-2">📈 Visual Growth</h3>
<p className="text-gray-600">
Understand how much you are improving every day.
</p>
</div>

<div className="p-6 border rounded-lg">
<h3 className="font-bold text-lg mb-2">🎯 Goal Focus</h3>
<p className="text-gray-600">
Stay focused on your learning targets and achievements.
</p>
</div>

<div className="p-6 border rounded-lg">
<h3 className="font-bold text-lg mb-2">💡 Simple UI</h3>
<p className="text-gray-600">
Clean and easy interface for better user experience.
</p>
</div>

</div>

</div>

</div>

{/* FOOTER */}
<footer className="bg-pink-600 text-white text-center py-6 mt-auto">

<p className="text-lg font-semibold">
Learning Tracker © 2026
</p>

<p className="text-sm mt-2">
Built for students to improve daily learning habits 🚀
</p>

</footer>

</div>

)

}

export default Home;

// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Home() {

// return(

// <div className="min-h-screen bg-slate-100">

// <Navbar/>

// <div className="max-w-6xl mx-auto py-20 text-center">

// <h1 className="text-5xl font-bold text-indigo-600 mb-6">
// Learning Progress Tracker
// </h1>

// <p className="text-gray-600 text-lg mb-10">
// Track your daily learning journey and stay consistent.
// Record what you study and monitor your progress easily.
// </p>

// <Link
// to="/dashboard"
// className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
// >
// Go To Dashboard
// </Link>

// {/* Info Section */}

// <div className="grid md:grid-cols-3 gap-8 mt-16">

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// 📚 Track Learning
// </h2>

// <p className="text-gray-600">
// Save subjects, topics and hours studied.
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// 📊 Monitor Progress
// </h2>

// <p className="text-gray-600">
// View your complete learning history anytime.
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-bold mb-3">
// 🚀 Stay Consistent
// </h2>

// <p className="text-gray-600">
// Build a strong daily learning habit.
// </p>

// </div>

// </div>

// </div>

// </div>

// )

// }

// export default Home


