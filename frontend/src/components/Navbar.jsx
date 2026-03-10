import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide">
          📚 Learning Tracker
        </h1>

        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/add" className="hover:text-yellow-300 transition">
            Add Progress
          </Link>

          <Link to="/view" className="hover:text-yellow-300 transition">
            View Progress
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;