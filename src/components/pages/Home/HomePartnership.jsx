import line from "../../../assets/line.svg";
import intel from "../../../assets/Intel.svg";
import disnep from "../../../assets/disnep.svg";
import amazon from "../../../assets/amazon.svg";
import microsoft from "../../../assets/microsoft.svg";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

const HomePartnership = () => {
  const { language } = useContext(MyContext);

  const [partners, setPartner] = useState([]);
  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/partner")
      .then((response) => response.json())
      .then((data) => setPartner(data));
  }, [partners]);
  // console.log(partners)
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
        {
          partners?.map(p => <div key={p._id}>
          <img
            src={p.imageURL}
            alt=""
            className="select-none pointer-events-none no-select unselectable w-64  mr-7"
          />
          
          </div>)
        }
       
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
        {
          partners?.map(p => <div key={p._id}>
            <SwiperSlide className="flex justify-center">
          <img
            src={p.imageURL}
            alt=""
            className="select-none pointer-events-none no-select unselectable w-64  mr-7"
          />
          
        </SwiperSlide>
          </div>)
        }
       
      </Swiper>
    </div>
  );
};

export default HomePartnership;
