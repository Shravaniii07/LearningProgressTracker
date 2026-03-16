import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-600 to-pink-300 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Learning Tracker
        </h1>

        <div className="space-x-6">

          <Link
            to="/home"
            className="hover:text-gray-200 font-medium"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-gray-200 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="hover:text-gray-200 font-medium"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hover:text-gray-200 font-medium"
          >
            Signup
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;