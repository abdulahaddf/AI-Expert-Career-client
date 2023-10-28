/* eslint-disable react/no-unescaped-entities */
import profile from "../../../assets/AiConsultant/Ellipse 46.png";
import { BsFillStarFill } from "react-icons/bs";
import Expertise from "./Expertise";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import Loader from "../../common/loader/Loader";
import { LuNewspaper } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { GrCatalogOption, GrUserExpert } from "react-icons/gr";
import moment from "moment";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import CopyURLButton from "./CopyUrlButton";

const AiConsultanProfile = () => {
  const { language } = useContext(MyContext);
  const location = useLocation();
  const consultant = location.state;
  console.log(consultant);
  const {
    displayName,
    email,
    photoURL,
    phone,
    designation,
    description,
    about,
    recentWorks,
    successes,
    experience,
    qualification,
    availability,
    workingWith,
    selectedDays,
    summary,
    facebook,
    linkedin,
    twitter,
  } = consultant;
  console.log(consultant);

  const today = moment().format("dddd");

  console.log(today);

  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (!consultant && !workingWith) return <Loader />;
  return (
    <div className=" md:w-4/5 mx-auto my-7">
      <div className="py-2  px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
        <div className="md:flex border shadow-sm p-3 lg:w-4/5 mx-auto">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={photoURL}
              alt="photo"
              className="border w-72  rounded-full p-2 border-dashed border-[#FF0944]"
            />
          </div>

          <div className="w-full md:w-1/2 mt-[30px] md:mt-0 flex items-center ">
            <div className="space-y-1">
              <h1 className="font-bold text-2xl">{displayName}</h1>

              <p className=" font-medium text-xl ">{designation}</p>

              <p className="  font-medium">{description}</p>

              <div className="lg:flex items-center space-y-3 gap-10 pt-10">
               <div>
               <p className="">
                  {selectedDays?.includes(today) ? (
                    <span className="bg-primary text-white rounded-full px-2 ">
                      Available
                    </span>
                  ) : (
                    "ertegter"
                  )}
                </p>
               </div>
                <div className="flex lg:justify-center items-center gap-3 mr-10">
                  <Link to={facebook} target="_blank">
                    <div className=" text-3xl text-primary cursor-pointer">
                      <BsFacebook />
                    </div>
                  </Link>
                  <Link to={linkedin} target="_blank">
                    <div className=" text-3xl text-primary  cursor-pointer">
                      <BsLinkedin />
                    </div>
                  </Link>
                  <Link to={twitter} target="_blank">
                    <div className="text-3xl text-primary cursor-pointer">
                      <BsTwitter />
                    </div>
                  </Link>
                </div>

                <CopyURLButton text={"Share Profile"}/>
              </div>
              
              {/* <div className="flex items-center">
                <BsFillStarFill className="text-xs mr-1 mb-1 text-[#ED1B24]" />{' '}
                <span className="font-semibold">4.8 of 5</span>
              </div> */}
            </div>
            
          </div>
          
        </div>
        

        <div className=" grid grid-cols-8 lg:gap-x-[117px] mt-12">
          <div className="col-span-8 lg:col-span-5 ">
            <div>
              <h2 className="text-2xl font-bold">
                {language == "bn" ? "কন্সাল্টেন্টের বিবরণ" : "About"}
              </h2>
              
              <p className="section text-lg ml-2 mt-2" dangerouslySetInnerHTML={{ __html: summary }}></p>
              {/* <hr className="border-[0.5] mt-12 border-black" /> */}

              <h2 className="text-2xl font-bold mt-7">
                {language == "bn" ? "সাম্প্রতিক কাজের উদাহরণ" : "Recent Works"}
              </h2>
              <ul className="space-y-2 section text-lg ml-2 mt-2">
                {recentWorks?.map((r) => (
                  <div key={r} className="flex items-center gap-2 ">
                    <LuNewspaper />
                    <li className="text-xl font-medium ">{r}</li>
                  </div>
                ))}
              </ul>
              {/* <hr className="border-[0.5] mt-8 border-black" /> */}

              <div>
                <h2 className="text-2xl font-bold mt-[30px]">
                  {language == "bn" ? "সমসাময়িক সফলতাগুলো" : "Recent Success"}
                </h2>
               <div className="section text-lg ml-2 mt-2">
               {successes?.map((s) => (
                  <div key={s} className=" space-y-2 ">
                    <p className="text-lg flex items-center gap-2">
                      <IoCheckmarkDoneCircleOutline /> {s}
                    </p>
                  </div>
                ))}
               </div>
              </div>
              {/* <hr className="border-[0.5] mt-12 border-black" /> */}
              <h2 className="text-2xl font-bold mt-[30px]">
                {language == "bn" ? "অভিজ্ঞতা" : "Experience"}
              </h2>
             <div className="section text-lg ml-2 mt-2">
             {experience?.map((e, i) => (
                <div key={i} className=" space-y-2">
                  <p className="text-lg flex items-center gap-2">
                    <GrUserExpert /> {e}
                  </p>
                </div>
              ))}
             </div>
              {/* <hr className="border-[0.5] mt-12 border-black" /> */}

              <h2 className="text-2xl font-bold mt-[30px]">
                {language == "bn"
                  ? "শিক্ষাগত যোগ্যতা"
                  : "Educational Qualification"}
              </h2>
             <div className="section text-lg ml-2 mt-2">
             {qualification?.map((e, i) => (
                <div key={i} className="ml-5 mb-2 space-y-2">
                  <p className="text-lg flex items-center gap-2">
                    <GrCatalogOption /> {e}
                  </p>
                </div>
              ))}
             </div>
              {/* <hr className="border-[0.5] mt-8 mb-36 border-black" /> */}
            </div>
          </div>

          <div className="col-span-8 lg:col-span-3 ">
            <Expertise consultant={consultant} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultanProfile;
