// import Search from '../../../assets/search.svg';
// import Arrow from '../../../assets/arror.svg';
import Search from "../../../../assets/Kit/search.svg";
import Arrow from "../../../../assets/Kit/arror.svg";
import { useContext } from "react";
import { MyContext } from "../../../../Contaxt/Context";

const HomeSearch = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="mb-[60px]">
      <div className="px-5 max-w-full  sm:max-w-3xl mx-auto">
        <div className=" flex items-center relative">
          <img
            className="z-10 left-4 top-[15px] absolute"
            src={Search}
            alt=""
          />
          <input
            className="pl-20 rounded-full bg-white w-full h-[55px] relative"
            placeholder={language === "bn" ? "খুজুন..." : "Search..."}
            type="search"
            name="jobSearch"
            id=""
          />
          <div className="-ml-14 ">
            <button className="p-5 rounded-full bg-[#ED1B24] relative">
              <img
                className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src={Arrow}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex   lg:justify-center lg:items-center gap-1 sm:gap-8 mt-[30px]">
        <div className="flex justify-center mb-4">
          {/* <button className="w-full lg:px-10  inline py-4 hover:bg-[#ED1B24]/50 bg-[#ED1B2426] rounded-full text-black shadow-lg"></button> */}
          <button className="w-full lg:px-10 duration-200 hover:bg-[#ff053f] hover:text-white inline py-4 bg-[#ED1B2426] rounded-full text-black shadow-lg">
            {language === "bn" ? "কন্টেন্ট রাইটিং" : "Content Writing"}
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <button className="w-full lg:px-10 hover:bg-[#ff053f] hover:text-white inline py-4 bg-[#ED1B2426] rounded-full text-black shadow-lg">
            {language === "bn" ? "অডিও ইডিটিং" : "Audio Editing"}
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <button className="w-full lg:px-10 hover:bg-[#ff053f] hover:text-white inline py-4 bg-[#ED1B2426] rounded-full text-black shadow-lg">
            {language === "bn" ? "ভিডিও ইডিটিং" : " Vedio Editing"}
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <button className="w-full lg:px-10 hover:bg-[#ff053f] hover:text-white inline py-4 bg-[#ED1B2426] rounded-full text-black shadow-lg">
            {language === "bn" ? "ইমেজ ইডিটিং" : "Image Editing"}
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <button className="w-full lg:px-10 hover:bg-[#ff053f] hover:text-white inline py-4 bg-[#ED1B2426] rounded-full text-black shadow-lg">
            {language === "bn" ? "সিভি রাইটিং" : "CV Writing"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
