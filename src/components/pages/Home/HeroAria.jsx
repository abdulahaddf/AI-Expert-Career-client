import { Link } from "react-router-dom";
import banner from "../../../../src/assets/banner/banner.png"
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import useTitle from "../../../hooks/useTitle";
import Scrollbtn from "../../common/button/Scrollbtn";
import Loader from "../../common/loader/Loader";

const HeroAria = () => {
  const gradientColor =
  "linear-gradient(176.98deg, #FFF3F8 -4.94%, #E1F9F0 42.2%, rgba(244, 213, 255, 0.96) 110.23%)";
  const { language } = useContext(MyContext);
  useTitle("Home");




  if (!banner) return <Loader/>;
  return (
    <div className=" bg-[#fff] mb-[40px]  " style={{ background: gradientColor }}>
      <div className="px-4 relative pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:h-[86dvh]">
        <div className="md:flex">
          <div className="lg:text-start md:w-1/2 flex flex-col  justify-center md:pl-7">
            <h3 className="text-[16px] lg:text-[20px] xl:text-[14px] 2xl:text-[16px] font-[700] mb-[16px] text-[#ED1B24] lg:text-start">
              {language == "bn"
                ? "সেরা অনলাইন ভিডিও কোর্স পছন্দ করুন"
                : " Choose best online video courses"}
            </h3>
            <div className="text-[26px] flex flex-col lg:text-[45px]  xl:text-[45px] 2xl:text-[40px]  font-[1500] leading-none lg:text-start ">
              <h1>
                {language == "bn"
                  ? "কৃত্রিম বুদ্ধিমত্তার কঠিন জার্নিতে"
                  : "Find Your Proper "}
              </h1>
              <h1 className="mt-4">
                {language == "bn"
                  ? "নিজেকে রাখুন একধাপ এগিয়ে"
                  : "AI Career Guideline"}
              </h1>
            </div>

            <h4 className="text-[16px] text-red-600 font-bold my-[15px] lg:w-[80%]  ">
              {language == "bn"
                ? "  ক্যারিয়ার গড়ুন আর্টিফিশিয়াল ইন্টেলিজেন্স এক্সপার্ট হয়ে এ আই এক্সপার্ট ক্যারিয়ারের সাথে।"
                : "We are the first ever Artificial Intelligence based Ed-tech and Consultancy Service Platform in Bangladesh."}
            </h4>
            <div className="flex  justify-start md:w-full md:items-center gap-2 md:gap-8 mt-6">
              <Link
                className="btn-black btn-md md:px-8 text-lg bg-black text-white flex items-center border-2 border-black"
                to="/ai-consultant"
              >
             Get Started <BsArrowRightShort/> 
              </Link>
              <Link
                className="btn-view"
                to="/courses"
              >
              View Courses <FaTelegramPlane />
              </Link>

            </div>
          </div>
          <div className="mt-8 sm:mt-0 flex justify-end md:w-1/2">
          {banner ?  <img src={banner} alt=""  /> : <div className="skeleton w-1/2"></div>}
            
          </div>
        </div>
      </div>







   {/* <Scrollbtn/> */}
    </div>
  );
};

export default HeroAria;
