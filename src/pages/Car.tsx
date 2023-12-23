import CarSearchBox from "../components/CarSearchBox";
import HorizontalScrollableTags from "../components/HorizontalScrollableTags";
import TwoColumnGrid from "../components/TwoColumnGrid";

const tags = ["Hatchback", "Crossover", "Sedan", "MPV", "SUV", "Pick-up"];

const data = [
  { photo: null, text: "Mercedes 1" },
  { photo: null, text: "Mercedes 2" },
  { photo: null, text: "Mercedes 1" },
  { photo: null, text: "Mercedes 2" },
  { photo: null, text: "Mercedes 1" },
  { photo: null, text: "Mercedes 2" },
  { photo: null, text: "Mercedes 1" },
  { photo: null, text: "Mercedes 2" },
  { photo: null, text: "Mercedes 1" },
  { photo: null, text: "Mercedes 2" },
];

function Car() {
  return (
    <div className="mx-auto my-4 px-4 max-w-md md:border min-h-screen">
      <div className="container py-4">
        <CarSearchBox />
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

export default Car;
