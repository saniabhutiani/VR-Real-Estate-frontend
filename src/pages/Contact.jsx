import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill all fields");
      return;
    }

    setSuccess("Message sent successfully ✅");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="min-h-[calc(100vh-80px)] flex items-center justify-center
      bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617]
      px-6 py-16"
    >
      <div
        className="w-full max-w-6xl rounded-3xl
        bg-[#0f172a]/70 backdrop-blur-xl
        border border-white/10
        shadow-[0_18px_50px_rgba(0,0,0,0.45)]
        p-10"
      >
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT PANEL */}
          <div
            className="rounded-2xl p-8
            bg-gradient-to-br from-[#4338ca] via-[#2563eb] to-[#0891b2]
            text-white shadow-[0_15px_40px_rgba(59,130,246,0.45)]"
          >
            <h2
              className="text-3xl font-bold mb-4 tracking-wide
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400"
            >
              Contact Us
            </h2>

            <p className="text-sm leading-relaxed text-white/90 mb-8">
              VR Real Estate is a modern full-stack academic project
              designed with a strong focus on clean UI design,
              scalable architecture and immersive real-estate
              browsing experiences using modern web technologies.
            </p>

            <div className="space-y-5 text-sm">

              {/* EMAIL */}
              <a
                href="mailto:vrrealestate@gmail.com"
                className="flex items-center gap-3
                hover:underline hover:text-cyan-200 transition"
              >
                <FiMail className="text-cyan-200" />
                vrrealestate@gmail.com
              </a>

              {/* PHONE */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3
                hover:underline hover:text-cyan-200 transition"
              >
                <FiPhone className="text-cyan-200" />
                +91 98765 43210
              </a>

              {/* LOCATION – FIXED */}
              <a
                href="https://www.google.com/maps/place/India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3
                cursor-pointer transition"
              >
                <FiMapPin className="text-cyan-200 group-hover:text-cyan-300" />
                <span className="group-hover:underline group-hover:text-cyan-200">
                  India
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8
            bg-[#020617]/60
            border border-white/10
            shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >
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

            <div className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl
                bg-[#0f172a] text-white
                border border-white/10 outline-none
                focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl
                bg-[#0f172a] text-white
                border border-white/10 outline-none
                focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl
                bg-[#0f172a] text-white
                border border-white/10 outline-none
                focus:ring-2 focus:ring-blue-500 transition"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl
                bg-[#0f172a] text-white
                border border-white/10 outline-none resize-none
                focus:ring-2 focus:ring-blue-500 transition"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2
                py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500
                shadow-[0_10px_30px_rgba(59,130,246,0.45)]
                hover:scale-105 hover:shadow-[0_15px_45px_rgba(34,211,238,0.6)]
                transition"
              >
                <FiSend />
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
