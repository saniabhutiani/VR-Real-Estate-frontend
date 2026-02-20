import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white text-xl font-bold mb-3">
            VR Real Estate
          </h3>
          <p className="text-sm text-gray-400">
            A modern real estate platform where users can explore
            properties with images and immersive VR views.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/register" className="hover:text-white">Register</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Contact
          </h4>
          <p className="text-sm">📍 India</p>
          <p className="text-sm">📧 vrrealestate@gmail.com</p>
          <p className="text-sm">📞 +91 98765 43210</p>
        </div>

        {/* PROJECT INFO */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Project Info
          </h4>
          <p className="text-sm text-gray-400">
            This project is developed as a Major Project using
            React, Node.js, Express, MongoDB and VR concepts.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} VR Real Estate Platform |
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
