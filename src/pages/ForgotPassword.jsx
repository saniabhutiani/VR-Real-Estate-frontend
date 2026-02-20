import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your registered email");
      return;
    }

    // backend integration
    setSuccess("Password reset link has been sent to your email");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617]
      px-4">

      <div className="w-full max-w-md rounded-2xl
        bg-[#0f172a]/80 backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_50px_rgba(0,0,0,0.6)]
        p-8 text-center">

        <h2 className="text-2xl font-bold mb-2
          text-transparent bg-clip-text
          bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
          Forgot Password
        </h2>

        <p className="text-slate-400 mb-6 text-sm">
          Enter your registered email to reset your password
        </p>

        {error && (
          <p className="text-red-400 text-sm mb-4">
             {error}
          </p>
        )}

        {success && (
          <p className="text-green-400 text-sm mb-4">
             {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl
              bg-[#020617] text-white
              border border-white/10 outline-none
              focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl
              font-semibold text-white
              bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500
              shadow-[0_10px_30px_rgba(59,130,246,0.45)]
              hover:scale-105 hover:shadow-[0_15px_45px_rgba(34,211,238,0.6)]
              transition">
            Send Reset Link
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="mt-6 text-sm text-cyan-400
            hover:underline transition">
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
