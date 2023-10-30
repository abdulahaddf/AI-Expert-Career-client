import line from "../../../assets/line.svg";
import intel from "../../../assets/Intel.svg";
import disnep from "../../../assets/disnep.svg";
import amazon from "../../../assets/amazon.svg";
import microsoft from "../../../assets/microsoft.svg";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

const HomePartnership = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="my-10 md:my-20 ">
      <h3 className="text-center font-bold text-[30px]">
        {" "}
        {language === "bn" ? "আমাদের পার্টনারসমূহ" : "Our Partners"}
      </h3>
      <center>

      </center>
      <div className="md:flex hidden items-center justify-center flex-wrap gap-6 mt-[40px]">
      <Marquee speed={100}>
        <img
          src={intel}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
        <img
          src={disnep}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
        <img
          src={amazon}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
        <img
          src={microsoft}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
        <img
          src={amazon}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
        <img
          src={microsoft}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
        </Marquee>
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper  lg:hidden py-10"
      >
        <SwiperSlide className="flex justify-center">
          {" "}
          <img
            src={intel}
            alt=""
            className="select-none pointer-events-none no-select unselectable"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          {" "}
          <img
            src={disnep}
            alt=""
            className="select-none pointer-events-none no-select unselectable"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            src={amazon}
            alt=""
            className="select-none pointer-events-none no-select unselectable"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          {" "}
          <img
            src={microsoft}
            alt=""
            className="select-none pointer-events-none no-select unselectable"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            src={amazon}
            alt=""
            className="select-none pointer-events-none no-select unselectable"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          {" "}
          <img
            src={microsoft}
            alt=""
            className="select-none pointer-events-none no-select unselectable"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePartnership;
