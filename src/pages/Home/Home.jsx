import React from "react";
import Services from "../services/Services";
import Slider from "./Slider";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const limitedServices = data?.slice(0, 3);

  return (
    <div>
      <Slider />

      {/* Services Grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {limitedServices?.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.serviceTitle}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {service.serviceTitle}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {service.serviceOverview}
              </p>
              <Link to={`/services-details/${service.serviceTitle}`}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-all">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
