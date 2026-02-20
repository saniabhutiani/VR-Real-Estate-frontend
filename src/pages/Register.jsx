import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirm) {
      setError("All fields are required");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    //  email already exists
    const exists = users.find(
      (u) => u.email === email.trim()
    );
    if (exists) {
      setError("Account already exists. Please login");
      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully");

    setTimeout(() => navigate("/login"), 800);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center
      bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#0f172a] px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>

        <p className="text-center text-slate-300 text-sm mb-4">
          Start your VR Real Estate journey
        </p>

        {error && <p className="text-red-400 text-center mb-3">{error}</p>}
        {success && <p className="text-green-400 text-center mb-3">{success}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl
            bg-gradient-to-r from-indigo-500 to-cyan-500
            text-white font-semibold">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-300 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
