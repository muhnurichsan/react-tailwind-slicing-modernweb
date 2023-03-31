import { FeaturedHouse, Hero, ReadyHouse, Review } from "../Container";
import Article from "../Container/Article";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar></Navbar>
      <div className="hidden xl:block p-0 w-[36%] h-[300px] z-0 absolute rounded-br-full bg-radiant-hero blur-[120px]"></div>
      <Hero></Hero>
      <FeaturedHouse></FeaturedHouse>
      <div className="hidden xl:block p-0 w-[36%] h-[19rem] z-0  lg:left-[70rem] 2xl:left-[85rem] absolute rounded-br-full bg-radiant-ready blur-[120px]"></div>
      <ReadyHouse></ReadyHouse>
      <Review></Review>
      <Article></Article>
    </div>
  );
}
