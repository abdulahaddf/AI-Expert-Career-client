import line from '../../../assets/line.svg';
import aboutSvg1 from '../../../assets/Courses1.svg';
import aboutSvg2 from '../../../assets/Courses2.svg';
import aboutSvg3 from '../../../assets/Courses3.svg';
import aboutSvg4 from '../../../assets/Courses4.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MyContext } from '../../../Contaxt/Context';
import { useContext } from 'react';

const aboutCard = [
  {
    id: '1',
    img: aboutSvg1,
    price: '$50',
    headline: 'AI Content writing tools',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
    category: 'ai_basic',
  },
  {
    id: '2',
    img: aboutSvg2,
    price: '$50',
    headline: 'Top 10 AI video editing tools',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
    category: 'web',
  },
  {
    id: '3',
    img: aboutSvg3,
    price: '$50',
    headline: 'Flair AI Design Tool ',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
    category: 'ai_basic',
  },
  {
    id: '4',
    img: aboutSvg4,
    price: '$50',
    headline: 'UX/UI design impact series',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
    category: 'web',
  },
];

const HomeCourses = () => {
  const [active, setActive] = useState('all');
  const { language } = useContext(MyContext)
  const menuItem = (
    <div className="">
      <ul className="flex justify-center md:hidden flex-wrap  lg:border-b-2 lg:border-black w-full items-center lg:gap-3 gap-4">
        <li>
          <button
            onClick={() => setActive("ai")}
            className={`${active === "ai" ? "py-[14px] bg-[#ff013c] text-white px-3  rounded font-bold text-[#FF0944]/80 h-full " : "pending bg-[#ffc5d3] rounded-lg text-black hover:bg-[#EF7794]/30 md:bg-transparent py-[14px] px-3 "
              }`}
          >
            {language === 'bn' ? 'সকল কিছু' : 'All'}
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("web")}
            className={`${active === "web" ? "py-[14px] bg-[#ff013c] text-white px-3  rounded font-bold text-[#FF0944]/80 h-full  " : "pending bg-[#ffc5d3] rounded-lg text-black hover:bg-[#EF7794] md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'ফ্রি কোর্স' : 'Free Courses '}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive("web")}
            className={`${active === "web" ? "py-[14px] bg-[#ff013c] text-white px-3  rounded font-bold text-[#FF0944]/80 h-full  " : "pending bg-[#ffc5d3] rounded-lg text-black hover:bg-[#EF7794] md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'ডিপ লার্নিং' : 'Deep Learning '}
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("deep")}
            className={`${active === "deep" ? "py-[14px] bg-[#ff013c] text-white px-3  rounded font-bold text-[#FF0944]/80 h-full  " : "pending bg-[#ffc5d3] rounded-lg text-black hover:bg-[#EF7794]/30 md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'বেসিক কোর্স' : ' Basic Courses'}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive("mach")}
            className={`${active === "mach" ? "py-[14px] bg-[#ff013c] text-white px-3  rounded font-bold text-[#FF0944]/80 h-full " : "pending  bg-[#ffc5d3] rounded-lg text-black hover:bg-[#EF7794]/30 md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'কম্পিউটার ভিশন' : 'Computer Vision'}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive("mach")}
            className={`${active === "mach" ? "py-[14px] bg-[#ff013c] text-white px-3  rounded font-bold text-[#FF0944]/80 h-full " : "pending  bg-[#ffc5d3] rounded-lg text-black hover:bg-[#EF7794]/30 md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'ম্যাশিন লার্নিং' : 'Machine Learning'}
          </button>
        </li>
      </ul>
      <ul className="md:flex hidden items-center flex-wrap justify-center lg:gap-x-16">
        <li>
          <button
            onClick={() => setActive("all")}
            className={`py-[14px] text-black px-3  rounded-t font-bold h-full ${active === "all" ? "bg-[#ff003c] text-white" : "pending bg-[#EF7794]/10 hover:bg-[#f2396493]  hover:text-black md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'সকল কিছু' : 'All'}
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("Ui-Design")}
            className={`py-[14px] text-black px-3  rounded-t font-bold h-full ${active === "Ui-Design" ? "bg-[#ff003c] text-white" : "pending bg-[#EF7794]/10 hover:bg-[#f2396493]  hover:text-black md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'ফ্রি কোর্স' : 'Free Courses'}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive("ai_basic")}
            className={`py-[14px] text-black px-3  rounded-t font-bold h-full ${active === "ai_basic" ? "bg-[#ff003c] text-white" : "pending bg-[#EF7794]/10 hover:bg-[#f2396493]  hover:text-black md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'বেসিক কোর্স' : 'Basic Courses'}
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("web")}
            className={`py-[14px] text-black px-3  rounded-t font-bold h-full ${active === "web" ? "bg-[#ff003c] text-white" : "pending bg-[#EF7794]/10 hover:bg-[#f2396493]  hover:text-black md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'ডিপ লার্নিং' : 'Deep Learning'}
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("ai_tool")}
            className={`${active === "ai_tool"
              ? "py-[14px] bg-[#EF7794]/60 px-3  rounded-t font-bold text-[#FF0944]/80 h-full "
              : "pending bg-[#EF7794]/10 hover:bg-[#EF7794]/30 md:bg-transparent py-[14px] px-3"
              }`}
          >
            {language === 'bn' ? 'কম্পিউটার ভিশন' : 'Computer Vision'}
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="mt-[80px] mb-[35px] py-[14px]">
      <h3 className="text-center font-bold text-[30px]">{language === 'bn' ? 'ফ্রি কোর্স সহ পাচ্ছেন বিভিন্ন বিষয়ের লাইভ কোর্স' : 'Live courses on various subjects are available along with free courses'}</h3>
      <p className="sm:w-[60%] mx-auto text-center mt-4 mb-[25px]">
        {language === 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'No matter what background you are a student or learner, the right roadmap can get you there. Can give top success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
      </p>

      <center>
        <img src={line} alt="" />
      </center>

      <div className="mt-[19px] h-10 lg:h-14 ">
        <ul className="items-center lg:border-b-2 lg:border-[#B7B7B7] text-sm lg:text-[18px] lg:font-[700] flex ">{menuItem}</ul>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-[100px] lg:mt-[30px] ">
        {aboutCard
          .filter((card) => active === 'all' || card.category === active)
          .map(({ id, img, headline, info, price }) => (
            <div
              key={id}
              className="px-[17px] border-[0.5px] border-gray-50 shadow-lg hover:shadow-lg  bg-[#FFFFFF] rounded-[10px] py-[14px] ">
              <center>
                <img
                  className="mb-[18px] w-full shadow-md rounded-[10px]"
                  src={img}
                  alt=""
                />
              </center>
              <div className="">
                <h3 className="text-lg font-bold md:mb-[8px]">
                  {headline}
                </h3>
                <p className="md:mb-[20px] mb-2 text-sm">{info.slice(0, 100)}</p>
                <div className="flex m-auto left-0 right-0 justify-between items-center">
                  <Link
                    className="px-[32px] duration-200 my-btn py-[8px] bg-[#FF265A] rounded-md text-white text-[11px] md:text-lg h-full shadow-lg"
                    to={`/payment/${id}`}
                  >
                    {language === 'bn' ? 'ক্রয় করুন' : 'Buy'}
                  </Link>
                  <h3 className="text-[10px] md:text-lg font-bold">{price}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
      {
        aboutCard.length == 0 ? <h2 className='text-lg font-bold text black text-center '>0 item</h2> : <center>
          <Link to="/courses">
            <button className="px-[32px] py-[8px] bg-[#000] rounded-md text-white h-full text-[19px] font-bold shadow-lg mt-[30px]">
              {language === 'bn' ? 'আরো দেখুন' : 'See More'}
            </button>
          </Link>
        </center>
      }

    </div>
  );
};

export default HomeCourses;
