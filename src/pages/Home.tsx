import FeaturedHouse from "../Container/FeaturedHouse";
import Hero from "../Container/Hero";
import ReadyHouse from "../Container/ReadyHouse";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="hidden xl:block p-0 w-[36%] h-[300px] z-0 absolute rounded-br-full bg-radiant blur-[120px]"></div>
      <Hero></Hero>
      <FeaturedHouse></FeaturedHouse>
      <ReadyHouse></ReadyHouse>
    </div>
  );
}
