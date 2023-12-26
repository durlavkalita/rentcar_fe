import VehicleModal from "./VehicleModal";
import { Vehicle } from "../types/Vehicle";

const VehicleList = ({ vehicles }: { vehicles: Vehicle[] }) => {
  return (
    <div className="flex overflow-x-auto">
      {vehicles.map((vehicle, index) => (
        <VehicleModal key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
