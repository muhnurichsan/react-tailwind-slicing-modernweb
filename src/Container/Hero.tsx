import {
  airbnb,
  arrowR,
  heroR,
  location,
  tiket,
  traveloka,
  triadvisor,
} from "../assets";

export default function Hero() {
  return (
    <section className="xl:pl-28 flex justify-between xl:flex-row flex-col xl:gap-0 gap-10 relative">
      <div className="left-hero mt-52 xl:w-1/3 w-full flex gap-8 flex-col sm:mx-0 px-10">
        <h1 className="uppercase font-semibold text-5xl text-blue-950 text-center xl:text-start">
          find the place to live
          <span className="text-stroke font-normal"> your dreams</span> easily
          here
        </h1>
        <p className="text-gray-500 text-center xl:text-star">
          {" "}
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        {/* Search Input */}
        <div className="xl:mx-0 mx-auto w-full h-4 flex border-2 py-5 xl:py-8 pl-4 xl:pl-7 rounded-full gap-3 items-center">
          <div>
            <img src={location} alt="location" />
          </div>
          <input
            type="text"
            placeholder="Search for the location you want!"
            className="w-full xl:w-[65%] border-none outline-none text-lg placeholder:text-[10px]  placeholder:xl:text-base"
          />
          <button className="text-white text-[10px] xl:text-base items-center  mr-1 px-4 py-2 xl:px-5 xl:py-3 rounded-3xl cursor-pointer bg-primary font-semibold flex">
            Search <img src={arrowR} alt="arrowR" className="w-4 xl:w-full" />
          </button>
        </div>
        {/* End Search Input */}

        {/* Our Partner */}
        <div className="flex flex-col text-center xl:text-start">
          <p>Our Partnership</p>
          <div className="flex gap-9 flex-row justify-center flex-wrap xl:flex-nowrap xl:justify-normal">
            <img
              src={traveloka}
              alt="traveloka"
              className=" w-24 sm:w-30 h-20"
            />
            <img src={tiket} alt="traveloka" className=" w-24 sm:w-30 h-20" />
            <img src={airbnb} alt="traveloka" className=" w-24 sm:w-30 h-20" />
            <img
              src={triadvisor}
              alt="traveloka"
              className=" w-24 sm:w-30 h-20"
            />
          </div>
        </div>
        {/* End Our Partner */}
      </div>
      <div className="right-hero">
        <img
          src={heroR}
          alt="heroR"
          className="w-full h-1/4 xl:h-[720px] object-contain"
        />
      </div>
    </section>
  );
}
