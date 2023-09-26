import line from "../../../assets/line.svg";
import aboutSvg1 from "../../../assets/aboutSvg1.svg";
import aboutSvg2 from "../../../assets/aboutSvg2.svg";
import aboutSvg3 from "../../../assets/aboutSvg3.svg";
import aboutSvg4 from "../../../assets/aboutSvg4.svg";
import aboutSvg5 from "../../../assets/aboutSvg5.svg";
import aboutSvg6 from "../../../assets/aboutSvg6.svg";
import aboutSvg7 from "../../../assets/aboutSvg4.svg";
import aboutSvg8 from "../../../assets/aboutSvg2.svg";
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";

const HomeAbout = () => {
const { language } = useContext(MyContext)

  const aboutCard = [
    {
      id: "1",
      img: aboutSvg1,
      headline: "Ai Experts Contents",
      headlineBn: 'এ আই এক্সপার্টদের কন্টেন্ট',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "2",
      img: aboutSvg2,
      headline: "AI Career Consultancy",
      headlineBn: 'এ আই ক্যারিয়ার কন্সালটেন্সি',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "3",
      img: aboutSvg3,
       headline: "Corporate AI Consultancy",
      headlineBn: 'কর্পোরেট এ আই কন্সালটেন্সি',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "4",
      img: aboutSvg4, 
      headline: "Project Based Course Material",
      headlineBn: 'প্রজেক্ট বেইজড কোর্স ম্যাটেরিয়াল',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "5",
      img: aboutSvg5,
        headline: 'Job ready workshop program',
       headlineBn: 'জব রেডি ওয়ার্কশপ প্রোগ্রাম',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: " মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "6",
      img: aboutSvg6,
        headline: 'AI development kit',
      headlineBn: 'এ আই ডেভেলপমেন্ট কিট',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: " মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "7",
      img: aboutSvg7,
        headline: 'Free e-books and support groups',
       headlineBn: 'ফ্রি ই-বুক ও সাপোর্ট গ্রুপ',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: " মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
    {
      id: "8",
      img: aboutSvg8,
      headline: 'Possibility of getting an internship or job',
       headlineBn: 'ইন্টার্ণ বা জব পাওয়ার সম্ভাবনা',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      infoBn: " মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল"
    },
  ];
  return (
    <div className="mt-[30px] mb-[35px]">
      <h3 className="text-center font-bold lg:text-[30px] text-xl ">{language === 'bn' ? 'কি কি সুবিধা পাবেন আমাদের থেকে ?' : 'What benefits will you get from us?'}</h3>
      <center>
        <img src={line} alt="" />
      </center>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 mt-[40px]">
        {aboutCard.map(({ id, img, headline, info, headlineBn, infoBn }) => (
          <div
            key={id}
            className="px-3 pb-8 border-[0.5px] cursor-pointer border-gray-50 shadow hover:shadow-lg text-center bg-[#ffffff0a]">
            <center>
              <img className="lg:w-[83px] w-16 my-7"  src={img} alt="" />
            </center>
            <h3 className="text-[20px] text-lg font-semibold mb-[17px]">{language === 'bn' ? headlineBn : headline}</h3>
            <p className="text-sm">{language === 'bn' ? infoBn : info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
