import { Swiper, SwiperSlide } from "swiper/react";
import { star } from "../assets";
import { FreeMode, Pagination } from "swiper";
import { useMediaQuery } from "react-responsive";
import { reviews } from "../constants";

export default function Review() {
  const isDesktopOrLaptop = useMediaQuery({
    minWidth: 1058,
  });
  const isTablet = useMediaQuery({
    maxWidth: 1058,
    minWidth: 680,
  });
  const isMobile = useMediaQuery({ maxWidth: 680 });

  const handleSlidePerView = () => {
    if (isDesktopOrLaptop) {
      return 3;
    } else if (isTablet) {
      return 2;
    } else if (isMobile) {
      return 1;
    }
  };
  const handleSpace = () => {
    if (isDesktopOrLaptop) {
      return 800;
    } else if (isTablet) {
      return 500;
    } else if (isMobile) {
      return 100;
    }
  };
  return (
    <section
      className="px-10 xl:px-28 mt-28 min-h-[20vh] pb-10 relative flex justify-center items-center flex-col gap-3
  "
    >
      <span className="w-10 h-[2px] bg-secondary"></span>
      <h6 className="text-secondary">See Our Review</h6>
      <h2 className="text-blue-950 font-semibold text-4xl text-center ">
        What Our User Say About Us
      </h2>
      <div className="pt-2 w-full flex">
        <Swiper
          slidesPerView={handleSlidePerView()}
          spaceBetween={handleSpace()}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          pagination={true}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
        >
          {reviews.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ReviewCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

interface ReviewCardProps {
  id: string;
  title: string;
  content: string;
  image: any;
  rating: string;
  user: {
    name: string;
    image: any;
    job: string;
  };
}

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <>
      <div className="w-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[30rem] md:h-[30rem]  lg:w-[46rem] lg:h-[25rem] px-5">
        <img
          src={props.image}
          alt="review1"
          className="w-full h-[10rem] sm:h-full object-cover rounded-2xl"
        />
      </div>
      <div className="px-6 py-6 mx-11 md:mx-24 lg:mx-16  w-[12rem] sm:w-[18rem] md:w-[20rem]  lg:w-[38rem] flex flex-col gap-5  rounded-2xl relative bottom-10 md:bottom-28  bg-white">
        <h2 className="text-blue-950 text-xs md:text-md lg:text-xl font-semibold ">
          {" "}
          {props.title}
        </h2>
        <p className="text-gray-500 text-xs md:text-sm lg:text-xl">
          {" "}
          {props.content}
        </p>
        <div className="flex gap-7 justify-between items-center flex-col md:flex-row ">
          <div className="flex gap-5 items-center">
            <img src={props.user.image} alt="person1" className="w-12 h-12" />
            <div className="flex flex-col">
              <h2 className="text-blue-950 font-semibold text-sm lg:text-base">
                {props.user.name}
              </h2>
              <p className="text-gray-500 text-xs lg:text-base">
                {props.user.job}
              </p>
            </div>
          </div>
          <div className="star flex items-center gap-3">
            <img src={star} alt="" />
            <span className="text-blue-950">{props.rating}</span>
          </div>
        </div>
      </div>
    </>
  );
};
