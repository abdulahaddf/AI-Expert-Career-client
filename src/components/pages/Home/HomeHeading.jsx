import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import line from "../../../assets/line.svg";
import img1 from "../../../assets/profile.svg";
import TimeLineComponent from "./TimeLineComponents";
import HomeConsultant from "./HomeConsultant";
import { MyContext } from "../../../Contaxt/Context";


const HomeHeading = () => {


  const [activeNavLink, setActiveNavLink] = useState("/home");
  const [active, setActive] = useState("roadmap")

  const { language } = useContext(MyContext)

  const activeValue = (path, link) => {
    setActiveNavLink(path)
    setActive(link)
  }
  const menuItem = (
    <>
      <li>
        <NavLink
          to="/home"
          className={`${active === "roadmap" ? "border-b-[4px] border-[#EB3223] text-sm md:text-lg  bg-[#ffff0000] text-[#EB3223]" : " bg-transparent"} md:px-8 px-2 py-4 text-sm md:text-lg`}
          onClick={() => activeValue("/home", "roadmap")}
        >
          {language === 'bn' ? 'ক্যারিয়ার রোডম্যাপ' : "Career Roadmap"}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={`${active === "consultant" ? "border-b-[4px] text-sm md:text-lg border-[#EB3223] bg-[#ffff0000] text-[#EB3223]" : "bg-transparent"} text-sm md:text-lg  md:px-8 px-2 py-4`}
          onClick={() => activeValue("/home", "consultant")}
        >
          {language === 'bn' ? "ক্যারিয়ার কনসালট্যান্ট" : "Career Consultant"}
        </NavLink>
      </li>
    </>
  );

  const showRoadmapComment = activeNavLink === "/home";
  const showConsultantComment = activeNavLink === "/";

  return (
    <div className="mt-[80px] mb-[35px] relative">
      <h3 className="text-center font-bold text-[30px]">{language === 'bn' ? 'সফলতার দেখা পেতে দরকার, সঠিক রোডম্যাপ!' : 'Success needs to be seen, the right roadmap!'}</h3>
      <p className="sm:w-[60%] mx-auto text-center mt-4 mb-[25px]">
        {language === 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'No matter what background you are a student or learner, the right roadmap can get you there. Can give top success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
      </p>
      <center>
        <img src={line} alt="" />
      </center>

      <ul className="items-center text-[18px] font-[700] flex justify-center my-[55px] border-b-2 border-[#7E7E7E] gap-3 lg:gap-72 py-3">
        {menuItem}
      </ul>



      {/* Roadmap */}
      {showRoadmapComment && (
        <div>
          {
            active === "roadmap" ? <TimeLineComponent /> : <HomeConsultant />
          }

        </div>
      )}

      {/* Consultant */}
      {showConsultantComment && (
        <div>
          <div className="grid lg:grid-cols-2 items-center gap-4 mt-[100px]">
            <div>
              <h1 className="text-[40px] font-bold">Consultant</h1>
              <p className="my-[24px] font-bold text-[16px] lg:pr-8">
                {`Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident`}
              </p>
              <button className="px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white shadow-lg mt-5">
                Get more
              </button>
            </div>
            <div className="lg:flex p-6 bg-[#fff] lg:divide-x-2 divide-[#000000d7] shadow-lg">
              <div className="flex flex-col text-center lg:w-[40%] px-10">
                <img className="lg:w-[70%] mx-auto" src={img1} alt="" />
                <h2 className="text-[20px] font-bold mt-[10px] mb-[12px]">
                  Eleanor Rena
                </h2>
                <p>Data Science, AI software engineer</p>
                <button className="px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white shadow-lg mt-5">
                  View Profile
                </button>
              </div>
              <div className="lg:flex flex-col justify-between lg:w-[60%] px-10 mt-5 lg:mt-0">
                <h2 className="text-[17px] font-bold">Qualification</h2>
                <p>M.sc of computer science</p>
                <h2 className="text-[17px] font-bold">Speciality</h2>
                <p>Senior at AI software engineer</p>
                <h2 className="text-[17px] font-bold">Place </h2>
                <p>IDB Bhaban, Shah ali plaza, </p>
                <button className="lg:px-[32px] py-[8px] border-2 border-[#ED1B24] rounded-md text-black shadow-lg mt-5 w-full lg:w-auto">
                  View Profile
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-[30px]">
            <Link to="/ai-consultant">
              <button className="px-[32px] py-[8px] bg-[#000] rounded-md text-white text-[19px] font-bold shadow-lg ">
                See more
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHeading;
