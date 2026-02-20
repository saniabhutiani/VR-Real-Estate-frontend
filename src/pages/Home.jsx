import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-all">

      {/*HERO*/}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0b1d3a] to-[#2b2f7f]">
        <div className="absolute w-[600px] h-[600px] bg-blue-900/30 rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-900/30 rounded-full -bottom-40 -right-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Virtual Reality Based Real Estate Platform
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-10">
            A modern web-based real estate solution that allows users to explore
            verified properties using high-quality images and immersive
            VR-powered virtual tours, providing a realistic and interactive
            property viewing experience.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/properties"
              className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg transition"
            >
              View Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-md bg-white text-[#0b1d3a] hover:bg-gray-100 font-medium shadow-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/*WHY CHOOSE*/}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Why Choose Our Platform
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-14 text-lg">
            This project is developed as a major academic project with a strong
            focus on clean user interface design, scalable architecture,
            performance optimization, and delivering an immersive real estate
            browsing experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Verified Properties
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                All property listings are carefully verified to ensure accurate
                pricing, authentic images, and correct location details, helping
                users make reliable and informed decisions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-violet-600">
              <h3 className="text-2xl font-semibold text-violet-600 mb-4">
                Immersive VR Experience
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                The platform integrates virtual reality technology to provide
                interactive 360-degree virtual tours, allowing users to explore
                properties remotely as if they were physically present.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-emerald-600">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
                Secure & Scalable Architecture
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Designed with modern backend technologies to ensure data
                security, scalability, and smooth performance even with growing
                numbers of users and property listings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK*/}
      <section className="py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Technology Stack
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-14 text-lg">
            The system follows a full-stack web development approach using
            industry-standard technologies to ensure reliability, performance,
            and maintainability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {/* HTML */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">HTML</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Used to structure web pages and define the layout of content.
              </p>
            </div>

            {/* CSS */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">CSS</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Responsible for styling, layout design, and visual enhancements.
              </p>
            </div>

            {/* Tailwind */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-600 mb-3">
                Tailwind CSS
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Utility-first CSS framework for rapid and responsive UI design.
              </p>
            </div>

            {/* JavaScript */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                JavaScript
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Core scripting language for dynamic behavior and logic.
              </p>
            </div>

            {/* React */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-sky-500">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                React.js
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Component-based library for building modern user interfaces.
              </p>
            </div>

            {/* Node */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                Node.js
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Scalable server-side runtime for backend operations.
              </p>
            </div>

            {/* Express */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Express.js
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Lightweight framework for RESTful API development.
              </p>
            </div>

            {/* MongoDB */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                MongoDB
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400">
                NoSQL database for scalable and flexible data storage.
              </p>
            </div>

          </div>
        </div>
      </section>

      { }
      <section className="bg-[#020617] py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Start Exploring Properties Today
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-6">
            Login to the platform and explore verified properties through an
            interactive and immersive virtual reality experience.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/login"
              className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/properties"
              className="px-6 py-2 rounded-md border border-slate-500 text-slate-200 hover:bg-white hover:text-black transition"
            >
              View Properties
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
