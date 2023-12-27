import UserInfo from "../components/UserInfo";
import SearchBox from "../components/SearchBox";
import CategoryLine from "../components/CategoryLine";
import ServiceList from "../components/ServiceList";
import VehicleList from "../components/VehicleList";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { Vehicle } from "../types/Vehicle";
import { Business } from "../types/Business";
import pb from "../services/pocketbase";
import BusinessList from "../components/BusinessList";

function Home() {
  const auth = useAuth();
  console.log(auth);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [services, setServices] = useState<Business[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchVehicles = async () => {
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

    fetchVehicles();
    fetchServices();

    return function () {
      controller.abort();
    };
  }, []);

  return (
    <div className="mx-auto my-4 px-4 max-w-md min-h-screen md:max-w-5xl">
      <div className="container mb-4">
        <UserInfo></UserInfo>
      </div>
      <div className="container py-4">
        <SearchBox />
      </div>
      <div className="container py-4">
        <CategoryLine category="Services near you" />
        <div className="my-4"></div>
        <ServiceList services={services}></ServiceList>
      </div>
      <div className="container py-4">
        <CategoryLine category="choose by vehicle" />
        <div className="my-4"></div>
        <VehicleList vehicles={vehicles}></VehicleList>
      </div>
      <div className="container py-4">
        <CategoryLine category="all services" />
        <div className="my-4"></div>
        <BusinessList businesses={services} />
      </div>
    </div>
  );
}

export default Home;
