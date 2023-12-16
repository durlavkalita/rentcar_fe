import React from "react";

type ServiceDetails = {
  name: string;
  location: string;
  imageUrl: string | null;
};

const ServiceModal = ({ service }: { service: ServiceDetails }) => {
  const { name, location, imageUrl } = service;

  return (
    <div className="flex max-h-28 min-w-[55%] border border-gray-300 rounded-xl mr-2">
      {/* Left Side (Image) */}
      <div className="flex-shrink-0 w-1/2">
        <img
          src={imageUrl ? imageUrl : "/public/service.jpg"}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Side (Service Details) */}
      <div className="p-2">
        <h2 className="font-semibold mb-2 text-sm">{name}</h2>
        <p className="text-gray-600 text-xs">{location}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
