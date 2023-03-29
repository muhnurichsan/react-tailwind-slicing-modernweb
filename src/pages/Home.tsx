import Hero from "../Container/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}
