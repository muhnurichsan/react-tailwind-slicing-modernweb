import {
  Article,
  FeaturedHouse,
  Footer,
  Hero,
  ReadyHouse,
  Review,
  Subscribe,
} from "../Container";
import { Navbar } from "../components";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar></Navbar>
      <div className="hidden xl:block p-0 w-[36%] h-[300px] z-0 absolute right-[60rem] 2xl:right-[80rem] rounded-br-full bg-radiant-hero blur-[120px]"></div>
      <Hero></Hero>
      <FeaturedHouse></FeaturedHouse>
      <div className="hidden xl:block p-0 w-[36%] h-[19rem] z-0  lg:left-[70rem] 2xl:left-[85rem] absolute rounded-br-full bg-radiant-ready blur-[120px]"></div>
      <ReadyHouse></ReadyHouse>
      <Review></Review>
      <div className="hidden xl:block p-0 w-[36%] h-[19rem] z-0 right-[70rem] xl:right-[70rem] 2xl:right-[85rem]  bottom-[65rem] 2xl:bottom-[80rem] absolute rounded-full bg-radiant-article blur-[120px]"></div>
      <Article></Article>
      <Subscribe></Subscribe>
      <div className="hidden xl:block p-0 w-[36%] h-[19rem] absolute  z-0 bottom-0 left-[70rem] 2xl:left-[90rem] bg-radiant-article blur-[120px]"></div>
      <Footer></Footer>
    </div>
  );
}
