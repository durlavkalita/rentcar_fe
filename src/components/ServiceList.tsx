import React, { useEffect, useState } from "react";
import ServiceModal from "./ServiceModal";
import pb from "../services/pocketbase";
import { Business } from "../types/Business";

const ServiceList = () => {
  const [services, setServices] = useState<Business[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        const records = await pb.collection("businesses").getFullList({
          sort: "-created",
        });
        console.log(records);
        const modRecords: Business[] = [];
        records.map((record) => {
          const newRecord = {
            id: record.id,
            name: record.name,
            description: record.description,
            location: record.location,
            owner: record.owner,
            email: record.email,
            contact_number: record.contact_number,
          };
          modRecords.push(newRecord);
        });
        setServices(modRecords);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();

    return function () {
      controller.abort();
    };
  }, []);

  return (
    <div className="flex overflow-x-auto">
      {services.map((service, index) => (
        <ServiceModal key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
