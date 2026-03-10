import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProgress from "./pages/AddProgress";
import ViewProgress from "./pages/ViewProgress";
import UpdateProgress from "./pages/UpdateProgress";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProgress />} />
        <Route path="/view" element={<ViewProgress />} />
        <Route path="/update/:id" element={<UpdateProgress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;