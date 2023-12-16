import React from "react";
import ServiceModal from "./ServiceModal";

type ServiceDetails = {
  name: string;
  location: string;
  imageUrl: string | null;
};

const ServiceList = ({ services }: { services: ServiceDetails[] }) => {
  return (
    <div className="flex overflow-x-auto">
      {services.map((service, index) => (
        <ServiceModal key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
