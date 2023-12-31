import moment from "moment";
import { useContext } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { Link } from "react-router-dom";
import { MyContext } from "../../../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Loader from "../../../common/loader/Loader";
import { BiSupport } from "react-icons/bi";
import useConsultants from "../../../../hooks/UseConsultants";


const HomeConsultantSection = () => {
  const { consultants, loading } = useConsultants();
    const { language } = useContext(MyContext);
  const today = moment().format("dddd");






if(loading && consultants) return <Loader/>;
    return (
        <div className="my-5 md:my-20 bg-slate-100 py-5 md:py-20 md:px-6 rounded-md">
        <div className="md:grid items-stretch md:mt-0 mt-4 grid-cols-2 gap-3">
          <div className="flex flex-col justify-center px-4 md:ml-6">
            <h1 className="text-primary pb-3">AI Consultancy</h1>
            <h1 className=" font-bold text-2xl md:text-4xl">
              {language === "bn"
                ? "কর্পোরেট বা ক্যারিয়ার কনসালটেন্টের মাধ্যমে নিশ্চিত করুণ আপনার সঠিক জার্নিটা!"
                : <p>One Stop Solution in Your <br /> <span className="text-primary">AI Career Problems</span> </p>}
            </h1>
            <p className="mt-6 w-[80%]">
              {language === "bn"
                ? "সঠিক ক্যারিয়ার গড়তে এবং ক্যারিয়ারের সকল সমস্যা সমাধান করতে বেছে নিতে পারেন আপনার পছন্দের কস্নাল্টেন্টকে।"
                : "Uproot all your career problems in just one session with our career Consultant."}
            </p>
            <div className="mt-5">
          <Link to="/ai-consultant">
            <button className="btn-view w-full md:w-fit">
             <BiSupport/> {language == "bn" ? "ফ্রি কল করুন" : "Go for Free Consultancy "} 
            </button>
          </Link>
        </div>
          </div>
          <div className="">
            <Swiper
              pagination={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {consultants?.slice(0,5).map((c,i) => (
                <SwiperSlide key={i} className="">
                 <Link
                  key={i}
                  to={`/consultant/${c.displayName.trim().replace(/\s+/g, '-')}`}
                  state={c}
                  className="flex items-center p-2  mb-5  "
                >
                  <div className="flex flex-col-reverse md:flex-row section w-full mx-auto gap-2  relative">
                    <div className="md:w-4/6  my-2 md:my-3 ">
                      <p className="mb-3">
                        {c?.selectedDays?.includes(today) ? (
                          <span className="bg-primary text-white rounded-full px-2 absolute top-2 left-4">
                            Available
                          </span>
                        ) : (
                          ""
                        )}
                      </p>

                      <h2 className="text-[22px] text-center md:text-left font-bold md:my-2">
                        {c.displayName}
                      </h2>
                      <p className="mb-5 text-center md:text-left">{c.designation}</p>
                      <h2 className="text-[17px] font-bold">Availability</h2>
                      <p className="text-[#515151]/90 flex flex-wrap gap-3 mt-1 mb-2">
                        {c?.selectedDays?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            <FaRegDotCircle /> {d}
                          </p>
                        ))}
                      </p>
                      <h2 className="text-[17px] font-bold">Works With</h2>
                      <p className="text-[#515151]/90 flex flex-wrap gap-3 mt-1">
                        {c?.workingWith?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            {" "}
                            <SiSocketdotio /> {d}
                          </p>
                        ))}
                      </p>

                      <button className="btn-black w-full  mt-4 md:hidden">View Profile</button>
                    </div>
                    <div className="flex flex-col justify-between text-center  ">
                      <img
                        className="w-36 h-36 rounded-full mx-auto mb-2"
                        src={c.photoURL}
                        alt=""
                      />

                      <button className="btn-black hidden md:block">View Profile</button>
                    </div>
                  </div>
                </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    );
};

export default HomeConsultantSection;