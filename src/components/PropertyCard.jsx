import { useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/image";

const PropertyCard = ({ property }) => {
  if (!property) return null; 

  const images = Array.isArray(property.images) ? property.images : [];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      className="
        group rounded-2xl overflow-hidden
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        shadow-[0_18px_40px_rgba(0,0,0,0.12)]
        hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">
        {images.length > 0 && (
          <img
            src={getImageUrl(images[activeImage])}
            alt="property"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          {property.title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {property.location}
        </p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-green-600 font-bold text-lg">
            ₹{property.price}
          </p>

          <Link
            to={`/properties/${property._id}`}
            className="
              text-sm font-semibold px-3 py-1.5 rounded-lg
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white hover:from-indigo-700 hover:to-blue-700
              transition-all
            "
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
