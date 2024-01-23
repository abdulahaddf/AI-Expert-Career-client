import consultantI from "../../../../src/assets/homeAboutUs/consul.svg"
import courseI from "../../../../src/assets/homeAboutUs/course.svg"
import blogI from "../../../../src/assets/homeAboutUs/blog.svg"
import magazI from "../../../../src/assets/homeAboutUs/magazine.svg"
import corpI from "../../../../src/assets/homeAboutUs/corporate.png"
import mentorI from "../../../../src/assets/homeAboutUs/mentorship.png"

import { useContext } from "react";
import { MyContext } from "../../../Context/Context";

const HomeAbout = () => {
  const { language } = useContext(MyContext);

  const aboutCard = [

    {
      id: "1",
      img: consultantI,
      headline: "AI Career Consultancy",
      headlineBn: "ক্যারিয়ার কন্সাল্টেন্সি",
      info: "Our AI Career Consultancy helps you to find suitable AI career and guides you to accelerate on it",
      infoBn:
        "এ আই ফিল্ডে আপনার ক্যারিয়ারের যাত্রা শুরু থেকে এগিয়ে নিয়ে যেতে সাহায্য করবে আমাদের ক্যারিয়ার কনসাল্টেন্টরা।",
    },
    
    {
      id: "2",
      img: courseI,
      headline: "Project Based AI Courses",
      headlineBn: "প্রজেক্ট বেইজড কোর্স সমূহ",
      info: "We offer hands-on experience in mastering AI intricacies, preparing you to be at the forefront of the tech revolution",
      infoBn:
        "আমাদের হ্যান্ডস অন প্রজেক্ট বেইজড এবং প্রোফেশনাল কোর্স সমুহ আপনার এ আই ফিল্ডে ক্যারিয়ার গড়তে আপনাকে রাখবে এক ধাপ এগিয়ে।",
    },
    
    {
      id: "3",
      img: blogI,
      headline: "AI Blogs & Newsletter",
      headlineBn: "এ আই ব্লগ ও নিউজলেটার ",
      info: "Enhance your knowledge over AI Trends and news with our daily updated AI Blogs and news.",
      infoBn:
        "নিত্যনতুন এ আই ব্লগ ও নিউজলেটার পড়ে স্মার্ট বিশ্বের প্রথম সারির একজন হয়ে উঠুন আজই।",
    },
    
    {
      id: "4",
      img: mentorI,
      headline: "1:1 Mentorship Program",
      headlineBn: "১:১ মেন্টরশিপ প্রোগ্রাম",
      info: "This mentorship is designed for customized learning to learn your own desired way of AI Career ",
      infoBn:
        "স্বপ্নের এ আই ক্যারিয়ার গড়তে নিজের সুবিধানুযায়ী শিখুন ১:১ মেন্টরশিপ প্রোগ্রামের মাধ্যমে।",
    },

    {
      id: "5",
      img: corpI,
      headline: "Corporate AI Training",
      headlineBn: "কর্পোরেট এ আই ট্রেইনিং",
      info: " Upskill your team with advanced skills and organizational excellence with our customized corporate AI training programs",
      infoBn:
        "ইন্ডাসট্রির টপ এআই এক্সপার্টদের সরাসরি সাপোর্ট ও কর্পোরেট ট্রেইনিংয়ের মাধ্যমে ডাইনামিক টিম গড়ে তুলুন। ",
    },
    {
      id: "6",
      img: magazI,
      headline: "Bangla AI Magazine",
      headlineBn: "বাংলা এ আই মাগাজিন",
      info: "Expand your knowledge of the world of AI through our first-ever Bangla language AI magazine in Bangladesh",
      infoBn:
        "বিশ্বের প্রথম কৃত্রিম বুদ্ধিমত্তা সম্পর্কিত বাংলা ম্যাগাজিনে এ আই ফিল্ডের অগ্রগতি জানুন মাতৃভাষায়।",
    },
  ];
  return (
    <div name='about' className="justify-between py-5 mb-5 text-center rounded-md md:my-20 md:py-16 md:px-6">
      <div className="flex flex-col justify-center mx-auto mb-10 md:w-auto">
        {/* <h4 className="pb-3 text-xl text-primary">{language === "bn"
            ? "আমাদের সম্পর্কে"
            : <p>About Us</p>}</h4> */}
        <h3 className=" font-bold lg:text-[36px] text-xl leading-10">
          {language === "bn"
            ? "কি কি সুবিধা পাবেন আমাদের থেকে ?"
            : <p>Transform your Career through <span className="text-primary">Learning</span> </p>}
        </h3>
        <p className="px-20 pt-3">{language === "bn"
            ? "আমরা বাংলাদেশের কৃত্রিম বুদ্ধিমত্তা নিয়ে ক্যারিয়ার টু কর্পোরেট কনসালটেন্সি এবং ইন্ডাসট্রি স্ট্যান্ডার্ড প্রজেক্ট বেইজড লার্নিং প্লাটফর্ম। আমরাই প্রথম এ আই এক্সপার্ট ও প্রফেশনালদের নিয়ে কৃত্রিম বুদ্ধিমত্তা সেক্টরে দেশের ডিজিটাল লিটারেসিতে ভূমিকা রেখে চলেছি।"
            : <p>We aim to democratize AI education in Bangladesh by making it accessible to all learners. Our AI Consultancy Services cater to every individual, addressing their pain points through surveys and offering fundamental and job role-based courses. </p>}</p>
      </div>  
      <div className="mx-6 text-center md:mx-40">
        <div>
        <div className="grid mx-6 mt-4 md:grid-cols-3 md:mt-0 md:mx-2">
          
          {aboutCard.map(({ id, img, headline, info, headlineBn, infoBn }) => (
            <div
              key={id}
              className="transition ease-in delay-0 m-3 border-[0.5px] cursor-pointer border-gray-50 shadow hover:shadow-lg hover:bg-slate-50 hover:delay-150 rounded-lg gap-5 flex px-4 pt-4 pb-6 md:m-2"
            >
              
            <div className="pt-2 text-center">
            
                <img width="20%" height="1" src={img} alt="" className="mx-auto"/>
              
            <h3 className="text-[20px] text-lg font-semibold mb-[10px]">
                {language === "bn" ? headlineBn : headline}
              </h3>
              <p className="mx-2 text-sm">{language === "bn" ? infoBn : info}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      

    </div>
  );
};

export default HomeAbout;
