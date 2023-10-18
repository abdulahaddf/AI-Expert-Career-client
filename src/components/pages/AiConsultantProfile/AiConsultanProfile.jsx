/* eslint-disable react/no-unescaped-entities */
import profile from '../../../assets/AiConsultant/Ellipse 46.png';
import { BsFillStarFill } from 'react-icons/bs';
import Expertise from './Expertise';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../../Context/Context';
const AiConsultanProfile = () => {
  const { language } = useContext(MyContext);
  const location = useLocation();
  const consultant = location.state;
  console.log(consultant)
  const { displayName, email, photoURL, phone, designation, description, about, recentWorks, successes, experience, qualification, availability, workingWith,selectedDays } = consultant;
  console.log(consultant);
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <div className="  mx-auto my-7">

      <div className="py-2  px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
        
        <div className="md:flex">

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={photoURL}
              alt="photo"
              className="border w-72  rounded-full p-2 border-dashed border-[#FF0944]"
            />
          </div>

          <div className="w-full md:w-1/2 mt-[30px] md:mt-0 flex items-center ">

            <div className="space-y-[20px]">

              <h1 className="font-bold text-[30px]">{displayName}</h1>

              <p className="w-[193px] font-medium text-xl ">
                {designation}
              </p>

              <p className="w-full lg:w-[491px] font-medium">
               {description}
              </p>

              {/* <div className="flex items-center">
                <BsFillStarFill className="text-xs mr-1 mb-1 text-[#ED1B24]" />{' '}
                <span className="font-semibold">4.8 of 5</span>
              </div> */}

            </div>

          </div>

        </div>

        <div className=" grid grid-cols-8 lg:gap-x-[117px] mt-12">

          <div className="col-span-8 lg:col-span-5 border-t border-black">
          <div>
      <h2 className="text-[30px] font-bold mt-7">
        {language == "bn" ? "কন্সাল্টেন্টের বিবরণ" : "About"}
      </h2>
      <p className="text-lg  font-medium mt-2.5">
        {about}
      </p>
      <h2 className="text-[30px] font-bold mt-7">
        {language == "bn"
          ? "সাম্প্রতিক কাজের উদাহরণ"
          : "Recent Works"}
      </h2>
      <ul className="space-y-2 ml-5 my-2">
        {recentWorks?.map(r => <div key={r} className="flex items-center">
          <div className="w-2 mr-3">
            <div className="bullet"></div>
          </div>
          <li className="text-xl font-medium ">
            {r}
          </li>
        </div>)}
       
      </ul>
      <hr className="border-[0.5] mt-8 border-black" />

      <div>
        <h2 className="text-[30px] font-bold mt-[30px]">
          {language == "bn" ? "সমসাময়িক সফলতাগুলো" : "Recent Success"}
        </h2>
        {successes?.map(s =>  <div key={s} className="ml-5 space-y-2 ">
          <p className="text-lg">
            {s}
          </p>
        
        </div>)}
       
      </div>
      <hr className="border-[0.5] mt-12 border-black" />
      <h2 className="text-[30px] font-bold my-[30px]">
        {language == "bn" ? "অভিজ্ঞতা" : "Experience"}
      </h2>
      {experience?.map((e,i) => <div key={i} className="ml-[50px]">
        <p className="font-semibold lg:text-[24px]">
        {e}
        </p>
      </div>  )}
     
      <h2 className="text-[30px] font-bold my-[30px]">
        {language == "bn" ? "শিক্ষাগত যোগ্যতা" : "Educational Qualification"}
      </h2>
      {qualification?.map((e,i) => <div key={i} className="ml-[50px] space-y-5">
        <p className="font-semibold lg:text-[24px]">
        {e}
        </p>
        
      </div> )}
      <hr className="border-[0.5] mt-8 mb-36 border-black" />
    </div>
          </div>

          <div className="col-span-8 lg:col-span-3 border-t border-black">
            <Expertise consultant={consultant}/>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AiConsultanProfile;
