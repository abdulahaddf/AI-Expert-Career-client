// import React from 'react';
// import AiKit from '../AiKit/AiKit';
import { useContext, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import aboutSvg1 from "../../../../assets/Courses1.svg";
import aboutSvg2 from "../../../../assets/Courses2.svg";
import aboutSvg3 from "../../../../assets/Courses3.svg";
import aboutSvg4 from "../../../../assets/Courses4.svg";
import left from "../../../../assets/Kit/left.svg";
import right from "../../../../assets/Kit/right.svg";
import kitBanner from "../../../../assets/Kit/kit-banner.png";
import { Link } from "react-router-dom";
import cover from "../../../../../public/img/event/cart.jpg";
import { MyContext } from "../../../../Contaxt/Context";
// import cover from '../../../../../public/img/event/cart.jpg';

const Kit = () => {
  const [activeButton, setActiveButton] = useState("Ai Kit");
  const [activeSection, setActiveSection] = useState("Ai Kit");
  const pagination = [1, 2, 3, 4, 5];
  const { language } = useContext(MyContext);

  const AiKit = [
    {
      id: "1",
      img: aboutSvg1,
      price: "$50",
      headline: "AI Content writing tools",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    },
    {
      id: "2",
      img: aboutSvg2,
      price: "$50",
      headline: "Top 10 AI video editing tools to minimize manual work",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    },
    {
      id: "3",
      img: aboutSvg3,
      price: "$50",
      headline: "Flair AI Design Tool - Enhance Your Design Workflow",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    },
    {
      id: "4",
      img: aboutSvg4,
      price: "$50",
      headline: "UX/UI design impact series: Edtech sector - Strate Scho...",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    },
  ];
  const AiTools = [
    {
      id: 0,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 1,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 2,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 3,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 4,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 5,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 6,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
    {
      id: 7,
      title: "Ai event for beginners",
      img: cover,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi molestiae ab error, quis aliquam dolorum quidem deleniti quos suscipit magni. Cumque, maxime dolorem optio soluta culpa ratione animi autem.",
    },
  ];
  return (
    <div className="px-4 mt-[140px] mb-72 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
      {/* toggle button  */}
      <div className="my-16  grid bg-[#0000001A] rounded-xl grid-cols-2 lg:w-[60%] mx-auto text-[22px] font-bold">
        <button
          className={`py-[10px] ${activeButton === "Ai Kit"
              ? "text-[#ED1B24] rounded-xl bg-white border-none"
              : ""
            }`}
          onClick={() => {
            setActiveButton("Ai Kit");
            setActiveSection("Ai Kit");
          }}
        >
          {language === "bn" ? "এআই কিট" : "Ai Kit"}
        </button>
        <button
          className={` ${activeButton === "Ai Tools"
              ? "text-[#ED1B24] rounded-xl bg-white border-none"
              : ""
            }`}
          onClick={() => {
            setActiveButton("Ai Tools");
            setActiveSection("Ai Tools");
          }}
        >
          {language === "bn" ? "এআই টুলস" : "Ai Tools"}
        </button>
      </div>

      {activeSection === "Ai Kit" && (
        <div className=" relative">
          <div>
            <div>
              <img className="w-full" src={kitBanner} alt="" />
            </div>
            <h1 className="absolute text-white top-3 text-2xl md:top-10 left-28 md:text-3xl">
              {language === "bn"
                ? "এ আই কিট দিয়ে নিজের প্রজেক্ট বানান নিমিষেই!"
                : "Create your own project with AI kit instantly!"}
            </h1>
          </div>
        </div>
      )}

      {activeSection === "Ai Tools" && (
        <div className=" text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language === "bn"
              ? "দৈনন্দিন কাজের গতি বাড়াতে ব্যবহার করুন এ আই টুলস!"
              : "Ai tool Heading"}
          </h1>
          <p>
            {language === "bn"
              ? "আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা। আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা। আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা"
              : "Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes Lorem Ipsum as their default model text, and a search folorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,metimes Lorem"}
          </p>
        </div>
      )}

      <div className="mt-14">
        <SearchBar />
      </div>

      <div>
        {activeSection === "Ai Kit" && (
          <div>
            <div className="lg:flex lg:justify-end">
              <div className=" mb-[33px] ">
                <select className="bg-gray-50 border w-full lg:w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultChecked>
                    {language === "bn" ? "সব" : "All"}
                  </option>
                  <option value="Trends">
                    {language === "bn" ? "ট্রেন্ডস" : "Trends"}
                  </option>
                  <option value="Most Reviews">
                    {language === "bn" ? "সর্বাধিক রিভিউ" : "Most Reviews"}
                  </option>
                  <option value="Other">
                    {language === "bn" ? "অন্যান্য" : "Other"}
                  </option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[17px]">
              {AiKit.map(({ id, img, headline, info, price }) => (
                <div
                  key={id}
                  className="px-[10px] py-[10px] border-[0.5px] border-gray-50 shadow-lg hover:shadow-lg bg-[#FFFFFF] rounded-[10px]"
                >
                  <center>
                    <img
                      className="mb-[10px] w-full shadow-md rounded-[10px]"
                      src={img}
                      alt=""
                    />
                  </center>
                  <div className="h-[230px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-[18px] font-bold mb-[10px]">
                        {headline}
                      </h3>
                      <p className="mb-[10px]">{info.slice(0, 80) + "..."}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link to={`/aikitdetails/${id}`}>
                        <button className="my-btn px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white shadow-lg">
                          Buy
                        </button>
                      </Link>
                      <h3 className="text-[16px] font-bold">{price}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center pt-[40px]">
              <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold flex justify-center items-center">
                <img src={left} alt="" />
              </div>
              {pagination?.map((pageNumber, i) => (
                <button
                  key={i}
                  className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold"
                >
                  {pageNumber}
                </button>
              ))}
              <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold flex justify-center items-center">
                <img src={right} alt="" />
              </div>
            </div>
          </div>
        )}
        {activeSection === "Ai Tools" && (
          <div>
            <div className="lg:flex justify-end">
              <div className=" mb-[33px]">
                <select className="bg-gray-50 border w-full lg:w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultChecked>All</option>
                  <option value="Trends">Trends</option>
                  <option value="Most Reviews">Most Reviews</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[17px]">
              {AiTools.map((data, index) => (
                <div key={index} className="bg-[white] ">
                  <img className=" w-full" src={data.img} alt="cart img " />
                  <div className="p-6 ">
                    <h3 className="text-2xl font-bold mt-4 ">{data.title}</h3>
                    <p className="text-[gray] mt-4">{data.description}</p>
                    <div className="flex justify-center items-center">
                      <Link to={`/aitoolsdetails/${data.id}`}>
                        <button className="mt-4 bg-[#FF000B]/80 border border-[#FF000B] hover:bg-white hover:text-black text-xl text-white w-[185px] py-3 ">
                          {language === "bn" ? "বিস্তারিত" : "details"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center pt-[40px]">
              <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold flex justify-center items-center">
                <img src={left} alt="" />
              </div>
              {pagination?.map((pageNumber, i) => (
                <button
                  key={i}
                  className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold"
                >
                  {pageNumber}
                </button>
              ))}
              <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold flex justify-center items-center">
                <img src={right} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kit;
