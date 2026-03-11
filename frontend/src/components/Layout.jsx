import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Layout({ children }) {

return (

<div>

{/* Top Navbar */}

<Navbar />

<div className="flex">

{/* Sidebar */}

<div className="w-60 min-h-screen bg-indigo-700 text-white p-6">

<h2 className="text-2xl font-bold mb-8">
Learning Tracker
</h2>

<nav className="space-y-4">

<Link
to="/dashboard"
className="block hover:bg-indigo-600 p-2 rounded"
>
Dashboard
</Link>

<Link
to="/add"
className="block hover:bg-indigo-600 p-2 rounded"
>
Add Progress
</Link>

<Link
to="/view"
className="block hover:bg-indigo-600 p-2 rounded"
>
View Progress
</Link>

</nav>

</div>

{/* Page Content */}

<div className="flex-1 p-10 bg-gray-100 min-h-screen">

{children}

</div>

</div>

</div>

);

}

export default Layout;