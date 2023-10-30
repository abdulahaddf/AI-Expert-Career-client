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
import { MyContext } from "../../../Context/Context";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ConReview = ({ cMail }) => {
  const { language } = useContext(MyContext);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/review")
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data);
        // setIsLoading(false);
      });
  }, []);
  console.log(cMail);
  const filtered = feedback.filter((f) => f.email === cMail);
  console.log(filtered);
  return (
    <div className="mt-[80px] mb-[35px] relative">
      <h3 className="text-center font-bold text-[30px]">
        {" "}
        {language === "bn" ? "শিক্ষার্থীরা যা বলছেন" : "Feedbacks"}
      </h3>
    
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
          {filtered.length > 0 ? (
            <>
              {" "}
              {filtered?.map(
                ({ _id, name, imageURL, designation, feedback }) => (
                  <SwiperSlide key={_id} className=" pb-16">
                    <div className="p-10 bg-[#fff] shadow-xl rounded-[20px] text-center mt-[120px] relative">
                      <span className="absolute left-[16px] top-[-15px]">
                        <BsQuote className="text-black text-4xl" />
                      </span>
                      <div className="-mt-[45%] z-50 mx-auto">
                        <img
                          className="mx-auto w-40 h-40 rounded-full"
                          src={imageURL}
                          alt=""
                        />
                      </div>

                      <h3 className="text-[30px] font-bold mt-4">{name}</h3>
                      <h5 className="text-[18px] font-bold  mb-[15px]">
                        {designation}
                      </h5>
                      <p className="text-sm">{feedback.slice(0, 90)}</p>
                    </div>
                  </SwiperSlide>
                )
              )}
            </>
          ) : (
            <p className="text-center text-xl my-10">No Reviews</p>
          )}
        </Swiper>

        {/* Pagination */}
      </div>
    </div>
  );
};

export default ConReview;
