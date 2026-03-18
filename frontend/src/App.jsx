

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProgress from "./pages/AddProgress";
import ViewProgress from "./pages/ViewProgress";
import UpdateProgress from "./pages/UpdateProgress";
import Intro from "./pages/Intro";
import DeleteProgress from "./pages/DeleteProgress";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Routes>

       
      <Route path="/" element={<Intro />} />

<Route path="/home" element={<Home />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/add" element={<AddProgress />} />

<Route path="/view" element={<ViewProgress />} />

<Route path="/update/:id" element={<UpdateProgress />} />

<Route path="/delete/:id" element={<DeleteProgress />} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/about" element={<About/>} />

    </Routes>
  );
}

export default App;