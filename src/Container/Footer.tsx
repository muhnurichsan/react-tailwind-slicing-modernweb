import { facebook, instagram, logo, twitter } from "../assets";

export default function Footer() {
  return (
    <footer className="relative px-10 pb-20 xl:px-28 mt-44 flex justify-between flex-wrap gap-10">
      <div className="flex flex-col gap-4 w-full lg:w-1/4">
        <img
          src={logo}
          alt="logo"
          className="object-contain w-28 h-20 sm:h-14 cursor-pointer "
        />
        <p className="text-gray-500">
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>
        <div id="logos" className="flex gap-5">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="flex gap-20 flex-wrap">
        <div id="links" className="flex flex-col gap-5">
          <h2 className="text-[18px] text-blue-950 font-semibold">Property</h2>
          <a href="#" className="text-gray-500">
            House
          </a>
          <a href="#" className="text-gray-500">
            Apartment
          </a>
          <a href="#" className="text-gray-500">
            Villa
          </a>
        </div>
        <div id="links2" className="flex flex-col gap-5">
          <h2 className="text-[18px] text-blue-950 font-semibold">Article</h2>
          <a href="#" className="text-gray-500">
            New Article
          </a>
          <a href="#" className="text-gray-500">
            Popular Article
          </a>
          <a href="#" className="text-gray-500">
            Most Read
          </a>
          <a href="#" className="text-gray-500">
            Tips & Tricks
          </a>
        </div>
        <div id="links3" className="flex flex-col gap-5">
          <h2 className="text-[18px] text-blue-950 font-semibold">Contact</h2>
          <p className="text-gray-500">2464 Royal Ln. Mesa, New Jersey 45463</p>
          <p className="text-gray-500">(671) 555-0110</p>
          <p className="text-gray-500">info@hounter.com</p>
        </div>
      </div>
    </footer>
  );
}
