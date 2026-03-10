import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600">
          Learning Progress Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Track your daily learning journey 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">📖 Track Topics</h2>
          <p className="text-gray-600 mb-4">
            Save what you studied like React, Java, Python etc.
          </p>

          <Link
            to="/add"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add Progress
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">📊 View Learning</h2>
          <p className="text-gray-600 mb-4">
            Check all your learning records anytime.
          </p>

          <Link
            to="/view"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            View Progress
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">🚀 Stay Consistent</h2>
          <p className="text-gray-600">
            Build daily learning habits and track growth.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;