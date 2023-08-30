import { PortableText } from "@portabletext/react";
import {
  getPages,
  getPublications,
  getBenefits,
  getIndustries,
} from "@/sanity/sanity-utils";

const Home = async () => {
  const industries = await getIndustries();

  return (
    <div>
      {industries.map((industry) => (
        <div key={industry._id}>
          <h1>{industry.name}</h1>

          <div className="text-lg text-gray-700 mt-5">
            <PortableText value={industry.content} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
