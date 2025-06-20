import Drinkware from "@/components/Drinkware";
import GGEnergy from "@/components/GGEnergy";
import HeroHeader from "@/components/HeroHeader";
import LatestCollections from "@/components/LatestCollections";
import LatestDrops from "@/components/LatestDrops";
import Navbar from "@/components/Navbar";
import SingleBanner from "@/components/SingleBanner";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <LatestDrops />
      {/* featured too be  */}
      <GGEnergy />
      <LatestCollections/>
      <Drinkware/>
      <SingleBanner/>
    </div>
  );
}
