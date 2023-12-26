import React, { useEffect, useState } from "react";
import VehicleModal from "./VehicleModal";
import { Vehicle } from "../types/Vehicle";
import pb from "../services/pocketbase";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        const records = await pb.collection("vehicles").getFullList({
          sort: "-created",
        });
        console.log(records);
        const modRecords: Vehicle[] = [];
        records.map((record) => {
          const newRecord = {
            id: record.id,
            brand: record.brand,
            model: record.model,
            variant: record.variant,
            fuel_type: record.fuel_type,
            year: record.year,
            number_plate: record.number_plate,
            price_per_day: record.price_per_day,
            color: record.color,
            availability: record.availability,
            business: record.business,
            vehicle_images: record.vehicle_images,
            vehicle_type: record.vehicle_type,
          };
          modRecords.push(newRecord);
        });
        setVehicles(modRecords);
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
      {vehicles.map((vehicle, index) => (
        <VehicleModal key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
