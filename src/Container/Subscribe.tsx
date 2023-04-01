import {
  card1,
  mail,
  person1,
  person2,
  person3,
  person4,
  ready1,
  ready2,
  ready4,
} from "../assets";

export default function Subscribe() {
  return (
    <section className="relative px-10 xl:px-28 mt-20">
      <div className="mx-auto flex flex-col lg:flex-row bg-subs w-full xl:w-[90%] 2xl:w-[70%] min-[2050px]:w-[50%] min-[2624px]:w-[40%] px-2 min-[375px]:px-10 py-10 gap-10 rounded-[2rem]">
        <div id="left" className="hidden xl:grid grid-rows-2 grid-cols-2 gap-4">
          <img
            src={ready4}
            alt="ready"
            className="w-20 h-20 rounded-3xl border-white border-[2px]"
          />
          <img
            src={person3}
            alt="ready"
            className="w-9 h-9 rounded-full m-auto border-white border-[2px]"
          />
          <img
            src={person1}
            alt="ready"
            className="w-9 h-9 rounded-full m-auto border-white border-[2px]"
          />
          <img
            src={ready1}
            alt="ready"
            className="w-14 h-14 rounded-full m-auto border-white border-[2px]"
          />
        </div>
        <div
          id="center"
          className="mx-auto xl:ml-auto w-full xl:w-1/2 flex flex-col gap-6 pt-0 sm:pt-10"
        >
          <h2 className="text-xl xl:text-3xl font-semibold text-blue-950 text-center">
            Subscribe For More Info and update from Hounter
          </h2>
          <div className="xl:mx-0 bg-white mx-auto w-full h-4 flex py-5 xl:py-8 pl-4 xl:pl-7 rounded-full gap-3 items-center">
            <div>
              <img src={mail} alt="location" />
            </div>
            <input
              type="text"
              placeholder="Your email here"
              className="w-full xl:w-[65%] border-none outline-none text-[10px] sm:text-base xl:text-lg placeholder:text-[7px]  placeholder:xl:text-base text-black bg-transparent"
            />
            <button className="text-white rounded-[2rem] bg-primary font-semibold mr-1  text-[6px] lg:text-sm w-full sm:w-[50%] lg:w-1/3 py-2 px-1 xl:py-4 ">
              Subscribe Now
            </button>
          </div>
        </div>
        <div
          id="right"
          className="hidden xl:grid grid-rows-2 grid-cols-2 gap-4 ml-auto"
        >
          <img
            src={card1}
            alt="ready"
            className="w-20 h-20 rounded-3xl border-white border-[2px]"
          />
          <img
            src={person2}
            alt="ready"
            className="w-9 h-9 rounded-full m-auto border-white border-[2px]"
          />
          <img
            src={person4}
            alt="ready"
            className="w-9 h-9 rounded-full m-auto border-white border-[2px]"
          />
          <img
            src={ready2}
            alt="ready"
            className="w-14 h-14 rounded-full m-auto border-white border-[2px]"
          />
        </div>
      </div>
    </section>
  );
}
