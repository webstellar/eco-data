import { getHomePages } from "@/sanity/sanity-utils";
import Homehero from "@/components/homehero/Homehero";
import Benefit from "@/components/benefits/Benefit";
import Feature from "@/components/features/Feature";
import Homecarousel from "@/components/carousel/Homecarousel";

const Home = async () => {
  const home = await getHomePages();
  return (
    <>
      <Homecarousel />
      {home.map((item) => (
        <div key={item._id}>
          {/*   <Homehero data={item} /> */}
          <Benefit data={item} />
          <Feature data={item} />
        </div>
      ))}
    </>
  );
};

export default Home;
