import { useState } from "react";
import { antfire, card1, person1 } from "../assets";
import { houses } from "../constants";
export default function FeaturedHouse() {
  const [active, setActive] = useState("house");
  const [arrow, setArrow] = useState("right");
  return (
    <section className="px-10 xl:px-28 mt-28 min-h-[20vh] pb-10">
      <h6 className="text-secondary flex items-center gap-2 ">
        {" "}
        <span className="w-10 h-[2px] bg-secondary"></span> Our Recommendation
      </h6>
      <div className="flex flex-col gap-4 pl-12">
        <div className="flex justify-between items-center flex-wrap gap-4 lg:gap-0">
          <h3 className="text-blue-950 text-3xl font-semibold">
            Featured House
          </h3>
          <ul className="flex gap-4 flex-wrap">
            <button
              onClick={() => setActive("house")}
              className={`${
                active === "house"
                  ? "text-primary bg-greeny"
                  : "text-gray-500 border-2"
              } px-4 py-2  flex gap-2 items-center  font-semibold rounded-3xl cursor-pointer`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${
                  active === "house" ? "fill-primary" : "fill-gray-500"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 10.8319V19.5C20.9998 19.7719 20.9262 20.0386 20.7868 20.272C20.6475 20.5054 20.4476 20.6968 20.2084 20.8259C19.9916 20.9432 19.7485 21.0031 19.5021 20.9999H14.9967C14.7978 20.9999 14.607 20.9209 14.4664 20.7803C14.3257 20.6396 14.2467 20.4488 14.2467 20.2499V15.7493C14.2467 15.5504 14.1677 15.3596 14.0271 15.2189C13.8864 15.0783 13.6956 14.9993 13.4967 14.9993H10.4967C10.2978 14.9993 10.107 15.0783 9.9664 15.2189C9.82574 15.3596 9.74673 15.5504 9.74673 15.7493V20.2499C9.74673 20.4488 9.66771 20.6396 9.52706 20.7803C9.3864 20.9209 9.19564 20.9999 8.99673 20.9999H4.5002C4.28754 21.0005 4.07723 20.9556 3.88335 20.8682C3.68948 20.7808 3.51651 20.653 3.37604 20.4934C3.12946 20.2082 2.99571 19.8427 3.00001 19.4657V10.8318C3.00017 10.6228 3.04392 10.4162 3.12846 10.225C3.21299 10.0339 3.33646 9.86251 3.49098 9.7218L10.9903 2.90308C11.2658 2.65075 11.6258 2.51078 11.9994 2.51074C12.3729 2.51071 12.733 2.65062 13.0085 2.90289L20.5091 9.72189C20.6636 9.86263 20.787 10.034 20.8716 10.2252C20.9561 10.4163 20.9998 10.6229 21 10.8319Z" />
              </svg>
              House
            </button>
            <button
              onClick={() => setActive("villa")}
              className={`${
                active === "villa"
                  ? "text-primary bg-greeny"
                  : "text-gray-500 border-2"
              } px-4 py-2  flex gap-2 items-center  font-semibold rounded-3xl cursor-pointer`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${
                  active === "villa" ? "fill-primary" : "fill-gray-500"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 20.9999H4C3.45 20.9999 3 20.5499 3 19.9999V8.68994C3 8.26994 3.25 7.89994 3.64 7.74994L14.64 3.51994C14.7921 3.46126 14.9561 3.44064 15.118 3.45986C15.2798 3.47909 15.4345 3.53758 15.5686 3.63025C15.7027 3.72292 15.8121 3.84696 15.8873 3.99156C15.9624 4.13617 16.0012 4.29696 16 4.45994V9.99994H8C7.45 9.99994 7 10.4499 7 10.9999V20.9999ZM17 11.9999H10C9.45 11.9999 9 12.4499 9 12.9999V19.9999C9 20.5499 9.45 20.9999 10 20.9999H14V16.9999C14 16.4499 14.45 15.9999 15 15.9999C15.55 15.9999 16 16.4499 16 16.9999V20.9999H20C20.55 20.9999 21 20.5499 21 19.9999V11.9999C21 10.8999 20.1 9.99994 19 9.99994C17.9 9.99994 17 10.8999 17 11.9999Z" />
              </svg>
              Villa
            </button>
            <button
              onClick={() => setActive("apart")}
              className={`${
                active === "apart"
                  ? "text-primary bg-greeny"
                  : "text-gray-500 border-2"
              } px-4 py-2  flex gap-2 items-center  font-semibold rounded-3xl cursor-pointer`}
            >
              <svg
                width="24"
                height="24"
                className={`${
                  active === "apart" ? "fill-primary" : "fill-gray-500"
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 11V5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V7H5C3.9 7 3 7.9 3 9V19C3 20.1 3.9 21 5 21H11V17H13V21H19C20.1 21 21 20.1 21 19V13C21 11.9 20.1 11 19 11H17ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11 7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z" />
              </svg>
              Apartment
            </button>
          </ul>
          <ul className="flex gap-4">
            <button
              onClick={() => setArrow("left")}
              className={`px-4 py-2  rounded-3xl cursor-pointer ${
                arrow === "left" ? "bg-primary" : "bg-gray-400"
              }`}
            >
              <svg
                width="28"
                height="28"
                className={`${
                  arrow === "left" ? "fill-white" : "fill-gray-500"
                }`}
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5078 22.1645C17.7781 22.165 18.04 22.0703 18.2482 21.8967C18.3653 21.799 18.4622 21.679 18.5331 21.5436C18.6041 21.4081 18.6478 21.2599 18.6618 21.1075C18.6758 20.955 18.6597 20.8012 18.6145 20.655C18.5694 20.5088 18.496 20.373 18.3986 20.2554L13.2158 14.0159L18.2135 7.76475C18.3096 7.64567 18.3813 7.50867 18.4246 7.3616C18.4679 7.21453 18.4819 7.0603 18.4658 6.90777C18.4497 6.75524 18.4038 6.60742 18.3307 6.47281C18.2576 6.3382 18.1588 6.21945 18.0399 6.12339C17.9202 6.01741 17.7801 5.93748 17.6282 5.8886C17.4764 5.83972 17.3161 5.82295 17.1575 5.83935C16.9989 5.85574 16.8454 5.90495 16.7066 5.98388C16.5678 6.0628 16.4467 6.16975 16.3509 6.298L10.7632 13.2825C10.593 13.4908 10.5 13.7521 10.5 14.0217C10.5 14.2913 10.593 14.5526 10.7632 14.7609L16.5476 21.7454C16.6636 21.8863 16.811 21.9976 16.9779 22.0705C17.1447 22.1433 17.3263 22.1755 17.5078 22.1645Z" />
              </svg>
            </button>
            <button
              onClick={() => setArrow("right")}
              className={`px-4 py-2  rounded-3xl cursor-pointer ${
                arrow === "right" ? "bg-primary" : "bg-gray-400"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`${
                  arrow === "right" ? "fill-white" : "fill-gray-500"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z" />
              </svg>
            </button>
          </ul>
        </div>
        <div className="pt-4 flex flex-wrap gap-6">
          {houses.map((item, index) => {
            return <CardFeaturedHouse key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

interface CardFeatureHouseProps {
  id: string;
  name: string;
  price: string;
  image: any;
  badge: {
    name: string;
    color: string;
    background: string;
    icon: any;
  };
  owner: {
    name: string;
    image: string;
    place: string;
  };
}
const CardFeaturedHouse = (props: CardFeatureHouseProps) => {
  return (
    <div className="card relative flex flex-col gap-5">
      <div
        className={`badge absolute px-4 py-2 flex gap-2 items-center font-medium rounded-3xl ${props.badge.background} top-[21rem] left-5 text-[12px] ${props.badge.color}`}
      >
        <img src={props.badge.icon} alt="" /> {props.badge.name}
      </div>
      <img src={props.image} className="w-[19rem] h-96" alt="card1" />
      <div className="text-blue-950">
        <h2 className="font-semibold text-xl pb-2">{props.name}</h2>
        <p className="font-medium">$ {props.price}</p>
      </div>
      <div className="flex gap-3">
        <img src={props.owner.image} alt="person1" className="w-12 h-12" />
        <div className="flex flex-col ">
          <h2 className="text-blue-950 font-semibold ">{props.owner.name}</h2>
          <p className="text-gray-500">{props.owner.place}</p>
        </div>
      </div>
    </div>
  );
};
