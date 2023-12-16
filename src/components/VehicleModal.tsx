import React from "react";

type VehicleDetails = {
  name: string;
  imageUrl: string | null;
};

const VehicleModal = ({ vehicle }: { vehicle: VehicleDetails }) => {
  const { name, imageUrl } = vehicle;

  return (
    <div className="border mr-2 min-w-[35%] rounded-xl">
      <img
        src={imageUrl ? imageUrl : "/public/mercedes.jpg"}
        alt={name}
        className="rounded-t-xl"
      />

      <div className="py-2">
        <h2 className="text-xs text-center">{name.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default VehicleModal;
