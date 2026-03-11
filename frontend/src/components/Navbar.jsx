import { Link } from "react-router-dom";

function Navbar() {
  return (

    <div className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <h1 className="text-2xl font-bold text-indigo-600">
        Learning Tracker
      </h1>

      <div className="space-x-6">

        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          Dashboard
        </Link>

        <Link
          to="/add"
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          Add Progress
        </Link>

        <Link
          to="/view"
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          View Progress
        </Link>

      </div>

    </div>

  );
}

export default Navbar;