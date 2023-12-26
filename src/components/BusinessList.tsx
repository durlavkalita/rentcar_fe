import { Business } from "../types/Business";
import BusinessModal from "./BusinessModal";

const BusinessList = ({ businesses }: { businesses: Business[] }) => {
  return (
    <div className="">
      {businesses.map((business, index) => (
        <BusinessModal key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
