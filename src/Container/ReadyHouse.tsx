import {
  bed,
  call,
  garage,
  person1,
  ready1,
  ready2,
  ready3,
  ready4,
  shower,
  stairs,
} from "../assets";

export default function ReadyHouse() {
  return (
    <div
      className="px-10 xl:px-28 mt-28 min-h-[20vh] pb-10 relative
    "
    >
      <h6 className="text-secondary flex items-center gap-2 ">
        {" "}
        <span className="w-10 h-[2px] bg-secondary"></span> Ready To Sell!
      </h6>
      <div className="flex justify-between gap-10  lg:flex-row flex-col">
        <div className="left-ready pt-4 flex gap-5 flex-col w-full lg:w-[50rem] px-4 xl:pl-12">
          <h2 className="text-blue-950 font-semibold text-4xl ">
            Let’s tour and see our house!
          </h2>
          <p className="text-gray-500">
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </p>
          <h3 className="text-blue-950 font-medium">House Detail</h3>
          <div className="detail flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-5">
            <div className="text-gray-500 flex gap-2 items-center">
              <img src={bed} alt="" /> 4 Bedrooms
            </div>
            <div className="text-gray-500 flex gap-4 items-center">
              <img src={garage} alt="" /> 1 Carpot
            </div>
            <div className="text-gray-500 flex gap-4  items-center">
              <img src={shower} alt="" /> 2 Bathrooms
            </div>
            <div className="text-gray-500 flex gap-3 items-center">
              <img src={stairs} alt="" /> 2 Floors
            </div>
          </div>
          <span className="w-full h-[2px] bg-gray-300 mt-2" />
          <div className="flex gap-7 justify-between flex-col sm:flex-row">
            <div className="flex gap-5">
              <img src={person1} alt="person1" className="w-12 h-12" />
              <div className="flex flex-col ">
                <h2 className="text-blue-950 font-semibold ">Dianne Russell</h2>
                <p className="text-gray-500">Manager Director</p>
              </div>
            </div>
            <button className="text-white text-[10px] xl:text-base items-center  mr-1 px-4 py-2 xl:px-5 xl:py-3 rounded-3xl bg-primary font-semibold flex justify-center gap-2">
              <img src={call} alt="call" /> Contact Now
            </button>
          </div>
        </div>
        <div className="right-ready grid w-full lg:w-1/2 grid-rows-2 grid-flow-col gap-2">
          <img src={ready1} alt="" className="w-[20rem] h-[10rem] rounded-xl" />
          <img src={ready3} alt="" className="w-[20rem] h-[10rem] rounded-xl" />
          <img src={ready2} alt="" className="w-[20rem] h-[10rem] rounded-xl" />
          <img src={ready4} alt="" className="w-[20rem] h-[10rem] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
