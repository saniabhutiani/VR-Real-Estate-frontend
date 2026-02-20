import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImageUrl } from "../utils/image";
import Loader from "../components/Loader";

const PropertyDetails = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  /* EMI */
  const [tenure, setTenure] = useState(20);
  const interestRate = 8.5;

  /* FETCH PROPERTY */
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/property/${id}`);
        const data = await res.json();
        setProperty(data.property || data);
      } catch {
        setError("Property not found");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const images = Array.isArray(property?.images) ? property.images : [];

  useEffect(() => {
    if (images.length > 0) setActiveImage(0);
  }, [images]);

  /* EMI CALC */
  const price = Number(property?.price || 0);
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi =
    price && monthlyRate
      ? Math.round(
          (price * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1)
        )
      : 0;

  if (loading) return <Loader />;
  if (error) return <p className="p-6 text-red-500 text-center">{error}</p>;
  if (!property) return null;

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen transition-colors">

      {/* HERO IMAGE */}
      <div className="w-full h-[520px] relative overflow-hidden">
        {images[activeImage] && (
          <img
            src={getImageUrl(images[activeImage])}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            alt="Property"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-12 left-10 text-white">
          <h1 className="text-4xl font-bold">{property.title}</h1>
          <p className="text-lg text-slate-200 mt-1">📍 {property.location}</p>
          <p className="text-3xl font-bold text-green-300 mt-3">
            ₹{property.price}
          </p>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-6 mt-6 grid grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={getImageUrl(img)}
            onClick={() => setActiveImage(i)}
            className={`h-24 w-full object-cover rounded-xl cursor-pointer
              border-4 transition-all duration-300 hover:scale-105
              ${i === activeImage ? "border-indigo-500" : "border-transparent"}`}
            alt="Thumbnail"
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-10">

          {/* PROJECT OVERVIEW */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              Project Overview
            </h2>
           <p className="text-slate-600 leading-relaxed mb-3">
            This real estate project is part of a modern virtual property platform that
             allows users to explore verified residential properties digitally with
             immersive visuals and interactive browsing features.</p>

             <p className="text-slate-600 leading-relaxed mb-3">
            It focuses on transparency, user-friendly design, and accurate property
            information, reducing the need for repeated physical site visits while
            supporting informed decision-making.</p>

           <p className="text-slate-600 leading-relaxed">
            The project is suitable for families seeking comfort and security, as well as
             investors looking for long-term value appreciation and strong rental
            potential.</p>
       </div>

          {/* PROPERTY DETAILS */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
              Property Details
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                ["🏠 Property Type", "Villa", "text-indigo-600"],
                ["🛏 Configuration", "3 BHK", "text-purple-600"],
                ["🚿 Bathrooms", "2", "text-pink-600"],
                ["📐 Built-up Area", "850 sq.ft", "text-blue-600"],
                ["🚗 Parking", "Available", "text-green-600"],
                ["📄 Status", "Ready to Move", "text-emerald-600"],
              ].map(([label, value, color], i) => (
               <div
  key={i}
  className="
    bg-slate-50 dark:bg-slate-800
    rounded-xl p-5 text-center
    border border-slate-200 dark:border-slate-700
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:-translate-y-2 hover:scale-[1.03]
    hover:shadow-xl hover:border-indigo-400
    active:scale-[0.98]
  "
>

                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    {label}
                  </p>
                  <p className={`font-bold mt-2 ${color}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
              Amenities
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-slate-600 dark:text-slate-300">
              <li>✔ Modular Kitchen</li>
              <li>✔ Power Backup</li>
              <li>✔ Lift Facility</li>
              <li>✔ 24×7 Security</li>
              <li>✔ Landscaped Garden</li>
              <li>✔ Rain Water Harvesting</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">

          {/* PRICE */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h3 className="text-slate-600 dark:text-slate-300">Price</h3>
            <p className="text-2xl font-bold text-green-600">₹{price}</p>
            <p className="text-sm text-slate-500">Negotiable</p>
          </div>

          {/* EMI */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h3 className="text-slate-600 dark:text-slate-300 mb-2">
              EMI Calculator
            </h3>
            <p className="text-xl font-bold text-green-600">
              ₹{emi} / month
            </p>
            <p className="text-sm text-slate-500 mb-3">
              @ {interestRate}% for {tenure} years
            </p>
            <input
              type="range"
              min="5"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full accent-indigo-600"
            />
          </div>

          {/* VERIFIED */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-5 shadow">
            <h4 className="font-semibold">100% Verified Property</h4>
            <p className="text-sm opacity-90">
              Legal documents & site verification completed
            </p>
          </div>

          {/* CONTACT AGENT */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-slate-800 dark:to-slate-900 text-white rounded-2xl p-8 shadow">
            <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>

            <ul className="text-sm space-y-2 mb-6 text-white/90">
              <li>⏱ Response within 30 mins</li>
              <li>📍 Free site visit</li>
              <li>🧾 Verified consultant</li>
            </ul>

            <button
              onClick={() => (window.location.href = "tel:+919999999999")}
              className="w-full bg-white dark:bg-slate-700 text-blue-600 dark:text-white font-semibold py-3 rounded-xl mb-3 hover:scale-105 transition"
            >
              📞 Call Agent
            </button>

            <button
              onClick={() => alert("Our agent will contact you shortly.")}
              className="w-full bg-black/25 dark:bg-white/10 py-3 rounded-xl hover:scale-105 transition"
            >
              ✉ Request Callback
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER INFO */}
      <div className="w-full bg-gradient-to-r from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-slate-200">
          <div>
            <h3 className="text-indigo-400 font-semibold mb-2">
              Why Choose This Property?
            </h3>
            <p className="text-slate-400 text-sm">
              Perfect blend of comfort, connectivity and appreciation.
            </p>
          </div>
          <div>
            <h3 className="text-emerald-400 font-semibold mb-2">
              Buyer Support
            </h3>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>✔ Home loan assistance</li>
              <li>✔ Legal documentation</li>
              <li>✔ Site visit coordination</li>
            </ul>
          </div>
          <div>
            <h3 className="text-pink-400 font-semibold mb-2">
              Investment Benefits
            </h3>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>✔ High rental demand</li>
              <li>✔ Strong resale value</li>
              <li>✔ Growing location</li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 text-xs text-slate-500 border-t border-white/10">
          © 2026 VR Real Estate · Trusted Property Platform
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
