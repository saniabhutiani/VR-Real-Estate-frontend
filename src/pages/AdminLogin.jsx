import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (email === "admin@gmail.com" && pass === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="py-20 flex justify-center">

      <div
        className="
          w-full max-w-sm p-8 rounded-xl shadow-lg
          bg-white text-slate-800
          dark:bg-slate-800 dark:text-white
          transition-colors duration-300
        "
      >
        <h2 className="text-xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full p-3 mb-4 rounded-lg border
            border-slate-300
            bg-slate-100
            dark:bg-slate-700 dark:border-slate-600
            focus:outline-none
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="
            w-full p-3 mb-6 rounded-lg border
            border-slate-300
            bg-slate-100
            dark:bg-slate-700 dark:border-slate-600
            focus:outline-none
          "
        />

        <button
          onClick={login}
          className="
            w-full py-3 rounded-lg text-white font-semibold
            bg-indigo-600 hover:bg-indigo-700
            transition
          "
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default AdminLogin;
