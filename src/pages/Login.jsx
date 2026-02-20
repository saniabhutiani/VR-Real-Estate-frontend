import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiPhone, FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const cleanEmail = email.trim();
    const cleanPass = password.trim();

    // 🔐 USERS FROM STORAGE
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ CHECK REGISTERED USERS
    const foundUser = users.find(
      (u) =>
        u.email === cleanEmail &&
        u.password === cleanPass
    );

    // ✅ FALLBACK DEMO USER (DIRECT LOGIN FIX)
    const demoUser =
      cleanEmail === "sania@gmail.com" &&
      cleanPass === "sania123";

    if (!foundUser && !demoUser) {
      setError("Incorrect email or password ❌");
      return;
    }

    const finalUser = foundUser || {
      name: "Sania",
      email: cleanEmail,
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(finalUser)
    );

    setSuccess("Login successful ✅");
    setTimeout(() => navigate("/"), 700);
  };

  // 🌐 SOCIAL LOGIN
  const socialLogin = (type) => {
    const user = {
      name: type === "google" ? "Google User" : "Phone User",
      email:
        type === "google"
          ? "googleuser@gmail.com"
          : "phoneuser@gmail.com",
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    setSuccess("Login successful ✅");
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h2>

        <p className="text-center text-slate-300 text-sm mb-4">
          Login to continue to VR Real Estate
        </p>

        {error && <p className="text-red-400 text-center mb-3">{error}</p>}
        {success && <p className="text-green-400 text-center mb-3">{success}</p>}

        <button
          onClick={() => socialLogin("google")}
          className="w-full flex justify-center gap-2 bg-white/20 rounded-xl py-3 text-white mb-3">
          <FcGoogle /> Continue with Google
        </button>

        <button
          onClick={() => socialLogin("phone")}
          className="w-full flex justify-center gap-2 bg-white/20 rounded-xl py-3 text-white mb-6">
          <FiPhone /> Continue with Phone
        </button>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex gap-3 bg-white/20 px-4 py-3 rounded-xl">
            <FiMail className="text-slate-300" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-white w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex gap-3 bg-white/20 px-4 py-3 rounded-xl">
            <FiLock className="text-slate-300" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl
            bg-gradient-to-r from-indigo-500 to-cyan-500
            text-white font-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-slate-300 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
