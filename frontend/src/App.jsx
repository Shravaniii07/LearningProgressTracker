
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import AddProgress from "./pages/AddProgress";
// import ViewProgress from "./pages/ViewProgress";
// import UpdateProgress from "./pages/UpdateProgress";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />


//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add" element={<AddProgress />} />
//         <Route path="/view" element={<ViewProgress />} />
//         <Route path="/update/:id" element={<UpdateProgress />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add" element={<AddProgress />} />
//         <Route path="/view" element={<ViewProgress />} />
//         <Route path="/update/:id" element={<UpdateProgress />} />
//       </Routes>
//     </BrowserRouter>

   
//   );
// }


// export default App;

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProgress from "./pages/AddProgress";
import ViewProgress from "./pages/ViewProgress";
import UpdateProgress from "./pages/UpdateProgress";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/add"
        element={
          <Layout>
            <AddProgress />
          </Layout>
        }
      />

      <Route
        path="/view"
        element={
          <Layout>
            <ViewProgress />
          </Layout>
        }
      />

      <Route
        path="/update/:id"
        element={
          <Layout>
            <UpdateProgress />
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;