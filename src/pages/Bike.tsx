import BikeSearchBox from "../components/BikeSearchBox";
import HorizontalScrollableTags from "../components/HorizontalScrollableTags";
import TwoColumnGrid from "../components/TwoColumnGrid";

const tags = ["splendor", "ntorque", "activa", "vespa", "royal enfield"];

const data = [
  { photo: "/splendor.jpg", text: "Bike 1" },
  { photo: "/splendor.jpg", text: "bike 2" },
  { photo: "/splendor.jpg", text: "bike 1" },
  { photo: "/splendor.jpg", text: "bike 2" },
  { photo: "/splendor.jpg", text: "bike 1" },
  { photo: "/splendor.jpg", text: "bike 2" },
  { photo: "/splendor.jpg", text: "bike 1" },
  { photo: "/splendor.jpg", text: "bike 2" },
  { photo: "/splendor.jpg", text: "bike 1" },
  { photo: "/splendor.jpg", text: "bike 2" },
];

function Bike() {
  return (
    <div className="mx-auto my-4 px-4 max-w-md md:border min-h-screen">
      <div className="container py-4">
        <BikeSearchBox />
      </div>
      <div className="container py-4">
        <HorizontalScrollableTags tags={tags} />
      </div>
      <div className="container py-4">
        <TwoColumnGrid data={data} />
      </div>
    </div>
  );
}

export default Bike;
