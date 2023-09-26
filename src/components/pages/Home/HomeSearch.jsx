import Search from "../../../assets/search.svg";
import Arrow from "../../../assets/arror.svg";
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";

const HomeSearch = () => {
  const { language } = useContext(MyContext)
  return (
    <div>
      <div className="mb-[60px]">
        <div className="px-5 max-w-full sm:max-w-3xl mx-auto">
          <div className=" flex items-center lg:mt-12 justify-center">
            <img className="-mr-14 z-20" src={Search} alt="" />
            <input
              className="pl-20 bg-white rounded-full w-full h-[55px] relative"
              placeholder={language === 'bn' ? 'পছন্দের কোর্সগুলো খুঁজুন' : 'Search your favorite courses'}
              type="search"
              name="jobSearch"
              id=""
            />

            <div className="-ml-14 z-20">
              <button className="p-5 rounded-full hover:bg-red-600 bg-[#ED1B24] relative">
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={Arrow}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-1 sm:gap-8 mt-[30px]">
            <button className="px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white my-btn shadow-lg">
              {language === 'bn' ? 'মেশিন লার্নিং' : 'Machine Learning'}
            </button>
            <button className="px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white my-btn shadow-lg">
              {language === 'bn' ? 'ডিপ লার্নিং ' : 'Deep Learning'}
            </button>
            <button className="px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white my-btn shadow-lg">
              {language === 'bn' ? 'প্রম্পট ইঞ্জিনিয়ারিং' : 'Prompt Engineering'}
            </button>
            <button className="px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white my-btn shadow-lg">
              {language === 'bn' ? 'এন এল পি' : 'Natural Language Processing'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
