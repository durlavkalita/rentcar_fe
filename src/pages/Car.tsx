import CarSearchBox from "../components/CarSearchBox";
import HorizontalScrollableTags from "../components/HorizontalScrollableTags";

const tags = [
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "Redux",
  "TypeScript",
  "Hooks",
  "Responsive",
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
    </div>
  );
}

export default Car;
