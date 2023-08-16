// import swiper react componenets
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Frontend",
    description: "Passionate about creating exceptional frontend experiences ",
  },
  {
    icon: <RxPencil2 />,
    title: "Backend",
    description: "Loves creating API's and managing the databases ",
  },
  {
    icon: <RxDesktop />,
    title: "App Dev",
    description: "Currently exploring the app Development with flutter",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "I possess strong expertise in SEO tech and strategies.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMode, Pagination }}
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className=" bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex flex-col
              gap-x-6  cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-200"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-500" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
