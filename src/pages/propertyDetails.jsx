import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const PropertyDetails = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <Loader />;
  if (error) return <p className="p-6 text-red-500 text-center">{error}</p>;
  if (!property) return null;

  /* EMI CALC */
  const price = Number(property.price || 0);
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;

  const emi =
    price && monthlyRate
      ? Math.round(
          (price * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1)
        )
      : 0;

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[520px] overflow-hidden">
        {(property.images?.[0] || property.vrImage) && (
          <img
            src={`http://localhost:3000${property.images?.[0] || property.vrImage}`}
            alt="Property"
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-12 left-10 text-white">
          <h1 className="text-4xl font-bold">{property.title}</h1>
          <p className="text-lg text-slate-200 mt-1">📍 {property.location}</p>
          <p className="text-3xl font-bold text-green-300 mt-3">
            ₹{property.price}
          </p>
        </div>
      </div>

      {/* THUMBNAIL */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        {property.images?.length > 0 && (
          <img
            src={`http://localhost:3000${property.images[0]}`}
            className="h-24 w-40 object-cover rounded-xl border-4"
            alt="Thumbnail"
          />
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-10">

          {/* PROJECT OVERVIEW */}
          <div className="bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              Project Overview
            </h2>

            <p className="text-slate-600 mb-3">
              This real estate project is part of a modern virtual property platform that
              allows users to explore verified residential properties digitally.
            </p>

            <p className="text-slate-600 mb-3">
              It focuses on transparency and accurate property information.
            </p>

            <p className="text-slate-600">
              Suitable for families and investors seeking long-term value.
            </p>
          </div>

          {/* PROPERTY DETAILS */}
          <div className="bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
              Property Details
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              <div className="bg-slate-50 rounded-xl p-5 text-center">
                🏠 Property Type
                <div className="font-bold text-indigo-600">Villa</div>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 text-center">
                🛏 Configuration
                <div className="font-bold text-purple-600">3 BHK</div>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 text-center">
                🚿 Bathrooms
                <div className="font-bold text-pink-600">2</div>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 text-center">
                📐 Built-up Area
                <div className="font-bold text-blue-600">850 sq.ft</div>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 text-center">
                🚗 Parking
                <div className="font-bold text-green-600">Available</div>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 text-center">
                📄 Status
                <div className="font-bold text-emerald-600">Ready to Move</div>
              </div>

            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
              Amenities
            </h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <li>✔ Modular Kitchen</li>
              <li>✔ Power Backup</li>
              <li>✔ Lift Facility</li>
              <li>✔ 24×7 Security</li>
              <li>✔ Landscaped Garden</li>
              <li>✔ Rain Water Harvesting</li>
            </ul>
          </div>

          {/* ✅ BLACK CARD — SAME STYLE AS OTHER CARDS */}
       <div className="bg-slate-900 rounded-2xl p-8 shadow text-white w-full lg:w-[190%] lg:-ml-[20%]">
            <h2 className="text-2xl font-semibold mb-20 text-green-400">
              Why Choose This Property?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <h3 className="text-blue-400 font-semibold mb-10">
                  Comfort & Lifestyle
                </h3>
                <p className="text-slate-300 text-sm">
                  Spacious rooms, peaceful surroundings and modern design.
                </p>
              </div>

              <div>
                <h3 className="text-orange-400 font-semibold mb-2">
                  Buyer Support
                </h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✔ Home loan assistance</li>
                  <li>✔ Legal documentation</li>
                  <li>✔ Site visit coordination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-pink-400 font-semibold mb-2">
                  Investment Benefits
                </h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✔ High rental demand</li>
                  <li>✔ Strong resale value</li>
                  <li>✔ Growing location</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3>Price</h3>
            <p className="text-2xl font-bold text-green-600">₹{price}</p>
            <p className="text-sm">Negotiable</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3>EMI Calculator</h3>
            <p className="text-xl font-bold text-green-600">
              ₹{emi} / month
            </p>
            <input
              type="range"
              min="5"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="bg-green-500 text-white rounded-2xl p-5 shadow">
            <h4 className="font-semibold">100% Verified Property</h4>
            <p className="text-sm">
              Legal documents & site verification completed
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow">
            <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>

            <button
              onClick={() => (window.location.href = "tel:+919999999999")}
              className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl mb-3"
            >
              📞 Call Agent
            </button>

            <button
              onClick={() => alert("Agent will contact you")}
              className="w-full bg-black/25 py-3 rounded-xl"
            >
              ✉ Request Callback
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;