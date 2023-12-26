import { Vehicle } from "../types/Vehicle";

const VehicleModal = ({ vehicle }: { vehicle: Vehicle }) => {
  const { brand, model } = vehicle;

  return (
    <div className="border mr-2 min-w-[35%] rounded-xl">
      <img src="/mercedes.jpg" alt={brand + model} className="rounded-t-xl" />

      <div className="py-2">
        <h2 className="text-xs text-center">
          {brand.toUpperCase() + " " + model.toUpperCase()}
        </h2>
      </div>
    </div>
  );
};

export default VehicleModal;
