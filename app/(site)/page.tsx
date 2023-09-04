import { getHomePages } from "@/sanity/sanity-utils";

import Homehero from "@/components/homehero/Homehero";
import Benefit from "@/components/benefits/Benefit";
import Feature from "@/components/features/Feature";
import Homesearch from "@/components/search/Homesearch";

const Home = async () => {
  const home = await getHomePages();

  return (
    <div>
      {home.map((item) => (
        <div key={item._id}>
          <Homehero data={item} />
          <Benefit data={item} />
          <Feature data={item} />
        </div>
      ))}

      <div>
        <Homesearch />
      </div>
    </div>
  );
};

export default Home;
