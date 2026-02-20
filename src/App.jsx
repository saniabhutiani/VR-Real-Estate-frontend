import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/AboutUs";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/propertyDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";

/* ⭐ ADMIN FILES */
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/AdminRoute";

import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* USER ROUTES */}

        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN LOGIN */}

        <Route path="/admin-login" element={<AdminLogin />} />

        {/* PROTECTED ADMIN PANEL */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-xl">
              Page Not Found
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
