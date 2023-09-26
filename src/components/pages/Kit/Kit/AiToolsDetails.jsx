import { useContext, useEffect, useState } from "react";
import aiToolsImg from "../../../../assets/Kit/aitools-1.png";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import cover from "../../../../assets/Kit/aitoolCart.png";
import ProgressBar from "./ProgressBar";
import { MyContext } from "../../../../Contaxt/Context";

const AiToolsDetails = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const { language } = useContext(MyContext);
  const aiToolsData = [
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

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const performance = [
    {
      progress: 0,
    },
    {
      progress: 30,
    },
    {
      progress: 44,
    },
    {
      progress: 20,
    },
    {
      progress: 55,
    },
    {
      progress: 100,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 mb-[50px] mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl  lg:px-20 2xl:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8  mt-28">
        <div className="lg:col-span-1">
          <img className="w-full" src={aiToolsImg} alt="" />
        </div>
        <div className="lg:col-span-2">
          <div>
            <div className="lg:flex mb-4 border-b border-[black] justify-between mt-3">
              <div>
                <h2 className="text-[#ED1B24CC] text-2xl">
                  {language === "bn" ? "বিস্তারিত :" : "Description:"}
                </h2>
              </div>
              <div className="mb-3">
                <button className=" py-1 px-4">
                  <FaRegBookmark />
                </button>
                <button className=" py-1 px-4">
                  <FaShareAlt />
                </button>
                <button className="border border-black py-2 px-8   ms-4">
                  website.com
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="lg:flex border-b border-[black]   items-center gap-7">
              <div>
                <p className="">
                  {language === "bn"
                    ? "আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা। আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা। আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট"
                    : "Lorem Ipsum as their default model text, and a search for lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolvedover the years,sometimes by accident, sometimesLorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various veryears."}
                </p>
              </div>
              <div className="">
                <h2 className="bg-white my-3 h-[66px] flex justify-center items-center border-red-600 border-b-2 w-[187px]">
                  PRICE: $ 3.99/month
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 text-center md:space-y-0 space-y-4  justify-evenly mt-10">
            <div className="py-2 px-9 border border-black hover:border-[#ED1B24] text-black text-xl font-medium hover:text-[#ED1B24]">
              Link
            </div>
            <div className="py-2 px-9 border border-black hover:border-[#ED1B24] text-black text-xl font-medium hover:text-[#ED1B24]">
              Link
            </div>
            <div className="py-2 px-9 border border-black hover:border-[#ED1B24] text-black text-xl font-medium hover:text-[#ED1B24]">
              Link
            </div>
            <div className="py-2 px-9 border border-black hover:border-[#ED1B24] text-black text-xl font-medium hover:text-[#ED1B24]">
              Link
            </div>
          </div>

          <div className="mt-14">
            <div className="lg:flex mb-4 border-b border-[black] justify-between mt-3">
              <div>
                <h2 className="text-[#ED1B24CC] gap-3 items-center flex text-[30px]">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span className="text-black">10k+ Review</span>
                  <span>
                    <MdArrowForward />
                  </span>
                </h2>
              </div>
              <div className="mb-3">
                <button className=" border border-black py-2 px-8   ms-4">
                  {language === "bn" ? "+ রিভিও এড করুন" : " + Add A review"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-28 py-8 px-8 mt-[26px] bg-[#ed1b240d]">
        <div>
          {performance.map((item, i) => (
            <ProgressBar key={i} item={item} />
          ))}
          <div>
            <h1 className="text-[#ED1B24] text-center text-[20px]">
              Your Total Rating: 5/10
            </h1>
          </div>
        </div>

        <div>
          <div>
            <textarea
              name=""
              id=""
              cols="50"
              rows="7"
              placeholder={
                language === "bn" ? "রিভিও লিখুন..." : "Write your review..."
              }
              className="border-[0.2px] border-[#000000]/30  block w-full p-3 outline-none rounded-[5px]"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="my-btn py-[14px] mt-[30px] px-[50px] text-[19px font-semibold] bg-[#F72A4F] text-white rounded-[7px] ">
              {language === "bn" ? "সাবমিট" : "Submit"}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mt-[71px]">
          {language === "bn"
            ? "একই সম্পর্কিত আরো কিছু টপিক্স"
            : "You may interest also those topics"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 gap-10 lg:gap-20">
          {aiToolsData.slice(0, visibleItems).map((data, index) => (
            <div key={index} className="bg-[white] ">
              <img className=" w-full" src={data.img} alt="cart img " />
              <div className="p-6 ">
                <h3 className="text-2xl font-bold mt-4 ">{data.title}</h3>
                <p className="text-[gray] mt-4">{data.description}</p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-[#FF000B]/80 border border-[#FF000B] hover:bg-white hover:text-black text-xl text-white w-[185px] py-3">
                    {language === "bn" ? "দেখুন" : "Read"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSeeMore}
            className="bg-[#E70830] text-white font-semibold py-3 px-14 my-btn"
          >
            {language === "bn" ? "সকল এ আই টুলস" : "All Ai Tools"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiToolsDetails;
