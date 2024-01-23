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
        <div className="py-5 my-5 rounded-md md:my-20 bg-slate-100 md:py-20 md:px-6">
        <div className="items-stretch grid-cols-2 gap-3 mt-4 md:grid md:mt-0">
          <div className="flex flex-col justify-center px-4 md:ml-6">
            <h1 className="pb-3 text-primary">AI Consultancy</h1>
            <h1 className="text-2xl font-bold md:text-4xl">
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
            <button className="w-full btn-view md:w-fit">
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
                  className="flex p-2 mb-5 "
                >
                  {/* <div className="relative flex flex-col-reverse w-full gap-2 mx-auto md:flex-row section">
                    <div className="my-2 md:w-4/6 md:my-3 ">
                      <p className="mb-3">
                        {c?.selectedDays?.includes(today) ? (
                          <span className="absolute px-2 text-white rounded-full bg-primary top-2 left-4">
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
                      
                      
                      
                      <h2 className="text-[17px] font-bold">Works With</h2>
                      <p className="text-[#515151]/90 flex flex-wrap gap-3 mt-1">
                        {c?.workingWith?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            {" "}
                            <SiSocketdotio /> {d}
                          </p>
                        ))}
                      </p>

                      <button className="w-full mt-4 btn-black md:hidden">View Profile</button>
                    </div>
                    <div className="flex flex-col justify-between text-center ">
                      <img
                        className="w-32 h-32 mx-auto mb-2 rounded-full object-fit"
                        src={c.photoURL}
                        alt=""
                      />
                      <button className="hidden btn-black md:block">View Profile</button>
                    </div>
                  </div> */}
                  <div className="relative flex flex-col w-full gap-2 mx-auto md:flex-col section">
                    <div className="my-2 md:my-3">
                      <p className="mb-3">
                        {c?.selectedDays?.includes(today) ? (
                          <span className="absolute px-2 text-white rounded-full bg-primary top-2 left-4">
                            Available
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                      
                      <div className="grid grid-cols-4 md:flex md:flex-row">
                        <div className="col-span-3 md:inline-block md:w-5/6">
                          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] md:text-left font-bold md:my-2">
                            {c.displayName}
                          </h2>
                          <p className="mb-5 md:text-left">{c.designation}, {c.description}</p>
                          
                        </div>
                        <div className="col-span-1 md:w-2/5">
                          <img
                          className="inline-block float-right ml-4 rounded-full lg:h-28 lg:w-28 shrink sm:w-28 sm:h-28 object-fit md:w-20 md:h-20"
                          src={c.photoURL}
                          alt="consultant image"
                        />
                        </div>
                        
                      </div>
                      
                      {/* <h2 className="text-[17px] font-bold">Availability</h2>
                      <p className="text-[#515151]/90 flex flex-wrap gap-3 mt-1 mb-2">
                        {c?.selectedDays?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            <FaRegDotCircle /> {d}
                          </p>
                        ))}
                      </p> */}
                      <h2 className="text-[17px] font-bold">Works With</h2>
                      <p className=" text-[#515151]/90 flex flex-wrap gap-3 mt-1">
                        {c?.workingWith?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            {" "}
                            <SiSocketdotio /> {d}
                          </p>
                        ))}
                      </p>

                      <button className="w-full mt-4 btn-black md:hidden">View Profile</button>
                    </div>
                    <div className="flex flex-row-reverse justify-between text-center">
                      <button className="hidden md:float-right btn-black md:block">View Profile</button>
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