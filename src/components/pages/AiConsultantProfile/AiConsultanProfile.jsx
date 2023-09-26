import profile from '../../../assets/AiConsultant/Ellipse 46.png';
import { BsFillStarFill } from 'react-icons/bs';
import AboutSection from './AboutSection';
import Expertise from './Expertise';
import { useEffect } from 'react';
const AiConsultanProfile = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <div className="bg-[#F3F2FF] w-screen mx-auto mt-10">

      <div className="py-2  px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8 pt-20">
        
        <div className="md:flex">

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={profile}
              alt=""
              className="border rounded-full p-2 border-dashed border-[#FF0944]"
            />
          </div>

          <div className="w-full md:w-1/2 mt-[30px] md:mt-0 flex items-center ">

            <div className="space-y-[20px]">

              <h1 className="font-bold text-[30px]">Eleanor Rena</h1>

              <p className="w-[193px] font-medium text-xl ">
                Data Science, AI software engineer
              </p>

              <p className="w-full lg:w-[491px] font-medium">
                Artificial Intelligence’s demand is increasing at a rapid pace
                with new roles such as AI and ML developers, AI engineers, AI
                consultants, AI architects, AI scientists.
              </p>

              <div className="flex items-center">
                <BsFillStarFill className="text-xs mr-1 mb-1 text-[#ED1B24]" />{' '}
                <span className="font-semibold">4.8 of 5</span>
              </div>

            </div>

          </div>

        </div>

        <div className=" grid grid-cols-8 lg:gap-x-[117px] mt-12">

          <div className="col-span-8 lg:col-span-5 border-t border-black">
            <AboutSection />
          </div>

          <div className="col-span-8 lg:col-span-3 border-t border-black">
            <Expertise />
          </div>

        </div>

      </div>

    </div>
  );
};

export default AiConsultanProfile;
