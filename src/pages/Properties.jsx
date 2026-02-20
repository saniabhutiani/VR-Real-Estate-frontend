import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/api/property")
      .then((res) => res.json())
      .then((data) => {
        const safeProperties = Array.isArray(data?.properties)
          ? data.properties.filter(Boolean) // 🔥 IMPORTANT
          : [];
        setProperties(safeProperties);
      })
      .catch(() => setProperties([]));
  }, []);

  return (
    <div
      className="
        min-h-[calc(100vh-80px)] w-full
        bg-[linear-gradient(180deg,#e1eaf6_0%,#d3def0_45%,#c8d6eb_100%)]
        dark:bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-14 text-slate-800 dark:text-slate-100">
          All Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <PropertyCard
              key={property?._id}
              property={property}
            />
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center text-slate-500 dark:text-slate-400 mt-24">
            No properties available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
