import { Link } from "react-router-dom";
import WatchVideo from "../../../assets/Videoplayer.svg";
import banner from "../../../../src/assets/banner/banner.png"
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { BsArrowRightShort, BsArrowUpRightCircle, BsBoxArrowUpRight } from "react-icons/bs";
import { FaArrowPointer } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


const HeroAria = () => {
  const { language } = useContext(MyContext);

  return (
    <div className=" bg-[#fff] mb-[40px]  ">
      <div className="px-4 relative pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex">
          <div className="lg:text-start w-1/2 flex flex-col  justify-center">
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
            <div className="flex flex-col md:flex-row  justify-start w-3/5 md:w-full md:items-center gap-8 mt-6">
              <Link
                className="btn-black btn-md px-8 text-lg bg-black text-white flex items-center"
                to="/ai-consultant"
              >
             Get Started <BsArrowRightShort/> 
              </Link>
              <Link
                className="btn-black btn-md px-8 text-lg"
                to="/courses"
              >
              View Courses <FaTelegramPlane />
              </Link>

            </div>
          </div>
          <div className="mt-8 sm:mt-0 flex justify-end w-1/2">
      
            <img src={banner} alt=""  />
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroAria;
