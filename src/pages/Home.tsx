import UserInfo from "../components/UserInfo";
import SearchBox from "../components/SearchBox";
import CategoryLine from "../components/CategoryLine";
import ServiceList from "../components/ServiceList";
import VehicleList from "../components/VehicleList";
import BusinessModal from "../components/BusinessModal";
import Navigation from "../components/Navigation";

const sampleServices = [
  {
    name: "Sample Service",
    location: "Karol Bagh, New Delhi",
    imageUrl: null,
  },
  {
    name: "Sample Service 2",
    location: "Karol Bagh, New Delhi",
    imageUrl: null,
  },
  {
    name: "Sample Service 3",
    location: "Karol Bagh, New Delhi",
    imageUrl: null,
  },
  {
    name: "Sample Service 4",
    location: "Karol Bagh, New Delhi",
    imageUrl: null,
  },
];

const sampleVehicles = [
  {
    name: "mercedes",
    imageUrl: null,
  },
  {
    name: "mercedes 1",
    imageUrl: null, // Replace with the actual image URL
  },
  {
    name: "mercedes",
    imageUrl: null,
  },
  {
    name: "mercedes",
    imageUrl: null,
  },
  {
    name: "mercedes",
    imageUrl: null,
  },
  {
    name: "mercedes 1",
    imageUrl: null, // Replace with the actual image URL
  },
  {
    name: "mercedes",
    imageUrl: null,
  },
  {
    name: "mercedes",
    imageUrl: null,
  },
  {
    name: "mercedes",
    imageUrl: null,
  },
];

const sample = {
  name: "RentFly Services",
  imageUrl: null,
  location: "Karol Bagh, New Delhi",
  rating: "4.2",
  distance: "25 min",
  price: "2k-4k",
  cars: ["Kia", "Mercedes", "Tata"],
};

function Home() {
  return (
    <div className="mx-auto my-4 px-4 max-w-md md:border min-h-screen">
      <div className="container mb-4">
        <UserInfo></UserInfo>
      </div>
      <div className="container py-4">
        <SearchBox />
      </div>
      <div className="container py-4">
        <CategoryLine category="Services near you" />
        <div className="my-4"></div>
        <ServiceList services={sampleServices}></ServiceList>
      </div>
      <div className="container py-4">
        <CategoryLine category="choose by vehicle" />
        <div className="my-4"></div>
        <VehicleList vehicles={sampleVehicles}></VehicleList>
      </div>
      <div className="container py-4">
        <CategoryLine category="all services" />
        <div className="my-4"></div>
        <BusinessModal business={sample}></BusinessModal>
        <BusinessModal business={sample}></BusinessModal>
        <BusinessModal business={sample}></BusinessModal>
        <BusinessModal business={sample}></BusinessModal>
      </div>
      <Navigation />
    </div>
  );
}

export default Home;
