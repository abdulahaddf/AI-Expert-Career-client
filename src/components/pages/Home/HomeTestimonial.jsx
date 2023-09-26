import line from "../../../assets/line.svg";
import TestImg from "../../../assets/test.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { BsQuote } from "react-icons/bs";
import { MyContext } from "../../../Contaxt/Context";
import { useContext } from "react";

const HomeTestimonial = () => {
  const { language } = useContext(MyContext)
  const testimonialData = [
    {
      id: "1",
      img: TestImg,
      name: "Name",
      designation: "Designation",
      description:
        "Lorem Ipsum as their default model text, and search for 'lorem ipsum'Lorem Ipsumbdsf; dsjh le hello world as their default model t",
    },
    {
      id: "2",
      img: TestImg,
      name: "Name",
      designation: "Designation",
      description:
        "Lorem Ipsum as their default model text, and search for 'lorem ipsum'Lorem Ipsumbdsf; dsjh le hello world as their default model t",
    },
    {
      id: "3",
      img: TestImg,
      name: "Name",
      designation: "Designation",
      description:
        "Lorem Ipsum as their default model text, and search for 'lorem ipsum'Lorem Ipsumbdsf; dsjh le hello world as their default model t",
    },
    {
      id: "4",
      img: TestImg,
      name: "Name",
      designation: "Designation",
      description:
        "Lorem Ipsum as their default model text, and search for 'lorem ipsum'Lorem Ipsumbdsf; dsjh le hello world as their default model t",
    },
    {
      id: "5",
      img: TestImg,
      name: "Name",
      designation: "Designation",
      description:
        "Lorem Ipsum as their default model text, and search for 'lorem ipsum'Lorem Ipsumbdsf; dsjh le hello world as their default model t",
    },
    {
      id: "6",
      img: TestImg,
      name: "Name",
      designation: "Designation",
      description:
        "Lorem Ipsum as their default model text, and search for 'lorem ipsum'Lorem Ipsumbdsf; dsjh le hello world as their default model t",
    },
  ];
  return (
    <div className="mt-[80px] mb-[35px] relative">
      <h3 className="text-center font-bold text-[30px]"> {language === 'bn' ? 'শিক্ষার্থীরা যা বলছেন' : 'Our Testimonial'}</h3>
      <center>
        <img src={line} alt="" />
      </center>
      <div className="w-[90%] mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          breakpoints={{
            140: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-[95%] mx-auto"
        >
          {testimonialData.map(
            ({ id, img, name, description, designation }) => (
              <SwiperSlide
                key={id}
                className=" pb-16"
              >
                <div className="p-10 bg-[#fff] rounded-[20px] text-center mt-[120px] relative">
                  <span className="absolute left-[16px] top-[-15px]">
                    <BsQuote className="text-black text-4xl" />
                  </span>
                  <div className="-mt-[45%] z-50 mx-auto">
                    <img className="mx-auto" src={img} alt="" />
                  </div>

                  <h3 className="text-[30px] font-bold mt-4">{name}</h3>
                  <h5 className="text-[18px] font-bold  mb-[15px]">
                    {designation}
                  </h5>
                  <p className="text-sm">{description.slice(0, 90)}</p>
                </div>

              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* Pagination */}
      </div>
    </div>
  );
};

export default HomeTestimonial;
