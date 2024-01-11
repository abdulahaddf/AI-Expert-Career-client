import { Link } from "react-router-dom";
import banner from "../../../../src/assets/banner/banner.svg"
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../common/loader/Loader";

const HeroAria = () => {
  const gradientColor =
  "linear-gradient(176.98deg, #FFF3F8 -4.94%, #E1F9F0 42.2%, rgba(244, 213, 255, 0.96) 110.23%)";
  const { language } = useContext(MyContext);
  useTitle("Home");




  if (!banner) return <Loader/>;
  return (
    
    <div className=" bg-[#fff] mb-[40px]  " style={{ background: gradientColor }}>
      
      <div className="px-4 relative pt-2 mx-auto sm:max-w-xl md:max-w-full 2xl:max-w-screen-2xl  md:px-24 lg:px-8 md:h-[90dvh]">
        <div className="md:flex">
          <div className="flex flex-col justify-center lg:text-start md:w-1/2 md:pl-3">
            {/* <h3 className="text-[16px] lg:text-[20px] xl:text-[14px] 2xl:text-[16px] font-[700] mb-[16px] text-[#ED1B24] lg:text-start">
              {language == "bn"
                ? "সেরা অনলাইন ভিডিও কোর্স পছন্দ করুন"
                : " Choose best online video courses"}
            </h3> */}
            <div className="text-[35px] sm:text-[42px] flex flex-col lg:text-[55px]  xl:text-[60px] font-semibold leading-none lg:text-start pt-10 md:pt-0 ">
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
            <div className="flex justify-start gap-2 mt-6 md:w-full md:items-center md:gap-8">
              <Link
                className="flex items-center text-lg text-white bg-black border-2 border-black btn-view btn-black btn-md md:px-8"
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
          <div className="flex justify-end mt-8 sm:mt-0 md:w-1/2">
          {banner ?  <img src={banner} alt="aiexpertcareer_homephoto" width="100%" height="1" fetchpriority="high" /> : <div className="w-1/2 skeleton"></div>}
            
          </div>
        </div>
      </div>







   {/* <Scrollbtn/> */}
    </div>
  );
};

export default HeroAria;
