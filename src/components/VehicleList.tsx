import React from "react";
import VehicleModal from "./VehicleModal";

type VehicleDetails = {
  name: string;
  imageUrl: string | null;
};

const VehicleList = ({ vehicles }: { vehicles: VehicleDetails[] }) => {
  return (
    <div className="flex overflow-x-auto">
      {vehicles.map((vehicle, index) => (
        <VehicleModal key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
