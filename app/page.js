import GGEnergy from "@/components/GGEnergy";
import HeroHeader from "@/components/HeroHeader";
import LatestDrops from "@/components/LatestDrops";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <LatestDrops />
      {/* featured too be  */}
      <GGEnergy />
    </div>
  );
}
