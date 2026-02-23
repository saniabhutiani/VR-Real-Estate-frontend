import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";

const PropertyCard = ({ property }) => {
  if (!property) return null;

  // MongoDB fields
  const imgPath =
    property.images?.[0] ||
    property.vrImage;

  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-lg">

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">
        {imgPath ? (
          <img
            src={`${BACKEND_URL}${imgPath}`}
            className="w-full h-full object-cover"
            alt="property"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{property.title}</h3>

        <p className="text-sm text-gray-500">{property.location}</p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-green-600 font-bold">₹{property.price}</p>

          <Link
            to={`/properties/${property._id}`}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg"
          >
            View Details →
          </Link>
        </div>
      </div>

    </div>
  );
};

export default PropertyCard;