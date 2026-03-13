import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isAdmin = localStorage.getItem("admin") === "true";

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  /* -------- USER LOGOUT -------- */
  const logout = () => {
    localStorage.removeItem("currentUser");
    setOpen(false);
    navigate("/login");
  };

  /* -------- ADMIN LOGOUT -------- */
  const adminLogout = () => {
    localStorage.removeItem("admin");
    setOpen(false);
    navigate("/admin-login");
  };

  return (
    <header
      className="sticky top-0 z-50
      bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900
      shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-white text-2xl font-bold">
          VR Real Estate
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <nav
          className={`
          absolute md:static top-full left-0 w-full md:w-auto
          bg-slate-900 md:bg-transparent
          flex flex-col md:flex-row
          items-start md:items-center
          gap-6 md:gap-8
          p-6 md:p-0
          text-slate-200
          ${menuOpen ? "block" : "hidden md:flex"}
        `}
        >
          <NavLink to="/" className={navClass}>Home</NavLink>

          <NavLink to="/properties" className={navClass}>
            Properties
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact Us
          </NavLink>

          {/* ADMIN LOGIN BUTTON */}
          {!isAdmin && (
            <NavLink to="/admin-login" className={navClass}>
              Admin
            </NavLink>
          )}

          {/* USER AUTH */}
          {!currentUser && !isAdmin && (
            <>
              <NavLink to="/login" className={navClass}>Login</NavLink>
              <NavLink to="/register" className={navClass}>Register</NavLink>
            </>
          )}

          {/* USER DROPDOWN */}
          {currentUser && (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-white
                           hover:text-blue-300 transition">
                👤 {currentUser.name} ▾
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-44
                  bg-white rounded-xl shadow-xl overflow-hidden">

                  <NavLink
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-slate-800 font-medium
                               hover:bg-slate-100 hover:text-indigo-600
                               hover:underline transition">
                    My Profile
                  </NavLink>

                  <button
                    onClick={logout}
                    className="group w-full text-left px-4 py-3
                               text-red-600 font-medium
                               hover:bg-red-50 transition">
                    <span className="group-hover:underline group-hover:text-red-700">
                      Logout
                    </span>
                  </button>

                </div>
              )}
            </div>
          )}

          {/* ADMIN DROPDOWN */}
          {isAdmin && (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-white
                           hover:text-indigo-300 transition">
                🛡️ Admin ▾
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-44
                  bg-white rounded-xl shadow-xl overflow-hidden">

                  <NavLink
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-slate-800 font-medium
                               hover:bg-slate-100 hover:text-indigo-600
                               hover:underline transition">
                    Admin Panel
                  </NavLink>

                  <button
                    onClick={adminLogout}
                    className="group w-full text-left px-4 py-3
                               text-red-600 font-medium
                               hover:bg-red-50 transition">
                    <span className="group-hover:underline group-hover:text-red-700">
                      Admin Logout
                    </span>
                  </button>

                </div>
              )}
            </div>
          )}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

const navClass = ({ isActive }) =>
  `hover:text-white transition ${
    isActive ? "text-white underline" : ""
  }`;

export default Navbar;