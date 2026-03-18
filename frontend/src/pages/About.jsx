import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5 bg-pink-500 text-white shadow-md">
        <h1 className="text-2xl font-bold">Learning Tracker</h1>

        <div className="space-x-6">
          <Link to="/home" className="hover:text-gray-200">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/" className="hover:text-gray-200">Logout</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">
          About Our Project
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Learning Progress Tracker is a web application designed to help students
          track their daily learning activities, improve consistency, and visualize
          their growth over time.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 px-10 mb-12">

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-pink-500 mb-3">🎯 Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to help learners stay consistent by tracking their daily
            study progress and motivating them through visual insights and analytics.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-pink-500 mb-3">🚀 Our Vision</h3>
          <p className="text-gray-600">
            We aim to build a platform where students can monitor their growth,
            set goals, and achieve success through disciplined learning habits.
          </p>
        </div>

      </div>

      {/* Features */}
      <div className="px-10 mb-12">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          ✨ Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">📊 Track Progress</h3>
            <p className="text-gray-600">
              Add and monitor your daily learning activities easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">📈 Visual Analytics</h3>
            <p className="text-gray-600">
              View charts and graphs for better understanding of progress.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">🎯 Goal Setting</h3>
            <p className="text-gray-600">
              Stay motivated and achieve your learning goals efficiently.
            </p>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div className="px-10 mb-16">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          👩‍💻 Our Team
        </h2>

        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
            <h3 className="text-xl font-bold text-pink-500">
              xyz
            </h3>
            <p className="text-gray-600 mt-2">
              Developer of Learning Progress Tracker
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-pink-500 text-white text-center py-4">
        © 2026 Learning Tracker | All Rights Reserved
      </div>

    </div>
  );
}

export default About;