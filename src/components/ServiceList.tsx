import ServiceModal from "./ServiceModal";
import { Business } from "../types/Business";

const ServiceList = ({ services }: { services: Business[] }) => {
  return (
    <div className="flex overflow-x-auto">
      {services.map((service, index) => (
        <ServiceModal key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
