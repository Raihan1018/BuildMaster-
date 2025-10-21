import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceTitle } = useParams();
  const data = useLoaderData();

  // Find the selected service by title (case-insensitive)
  const service = data.find(
    (item) => item.serviceTitle.toLowerCase() === serviceTitle.toLowerCase()
  );

  if (!service) {
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        Service not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Service Card */}
      <div className="max-w-3xl mx-auto  shadow-md rounded-xl p-6">
        {/* Service Image */}
        <img
          src={service.image}
          alt={service.serviceTitle}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        {/* Overview Section */}
        <h2 className="underline italic decoration-yellow-400 underline-offset-8 text-xl md:text-2xl lg:text-4xl font-bold my-2">
          SERVICE OVERVIEW
        </h2>
        <h1 className="text-3xl font-semibold mb-4">{service.serviceTitle}</h1>
        <p className="text-base leading-relaxed mb-6">
          {service.serviceOverview}
        </p>

        {/* Plan & Detail Section */}
        <h2 className="underline italic decoration-yellow-400 underline-offset-8 text-xl md:text-2xl lg:text-4xl font-bold my-4 uppercase">
          Plan & Detail
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {service.planAndDetails?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.task}</td>
                  <td>{item.price}</td>
                </tr>
              ))}

              {/* Fallback row if planAndDetails is empty */}
              {!service.planAndDetails?.length && (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500">
                    No plan details available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Back to Services Button */}
        <div className="mt-6">
          <Link
            to="/services"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-all"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
