import { Business } from "../types/Business";

const ServiceModal = ({ service }: { service: Business }) => {
  const { name, location } = service;

  return (
    <div className="flex max-h-28 min-w-[55%] border border-gray-300 rounded-xl mr-2">
      {/* Left Side (Image) */}
      <div className="flex-shrink-0 w-1/2">
        <img
          src="/service.jpg"
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
