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
import { MyContext } from "../../../Context/Context";

const HomeAbout = () => {
  const { language } = useContext(MyContext);

  const aboutCard = [
    {
      id: "1",
      img: aboutSvg1,
      headline: "Ai Experts Contents",
      headlineBn: "এ আই এক্সপার্টদের কন্টেন্ট",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      infoBn:
        "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল",
    },
    {
      id: "2",
      img: aboutSvg2,
      headline: "AI Career Consultancy",
      headlineBn: "এ আই ক্যারিয়ার কন্সালটেন্সি",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
      infoBn:
        "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল",
    },
    {
      id: "3",
      img: aboutSvg3,
      headline: "Corporate AI Consultancy",
      headlineBn: "কর্পোরেট এ আই কন্সালটেন্সি",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
      infoBn:
        "হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল",
    },
   
    {
      id: "5",
      img: aboutSvg5,
      headline: "Job ready workshop program",
      headlineBn: "জব রেডি ওয়ার্কশপ প্রোগ্রাম",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      infoBn:
        " মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম 1500 এর দশক থেকে শিল্পের মানক ডামি পাঠ্য, যখন একটি অজানা প্রিন্টার একটি গ্যালি নিয়েছিল",
    },
 
   
  ];
  return (
    <div className="my-20 bg-slate-100 py-20 px-6 rounded-md flex justify-between">
<div className="w-5/6 flex flex-col  justify-center mx-auto ml-6 ">
  <h4 className="text-primary pb-3">About Us</h4>
<h3 className=" font-bold lg:text-[36px] text-xl leading-10">
        {language === "bn"
          ? "কি কি সুবিধা পাবেন আমাদের থেকে ?"
          : <p>Transform your Career through <span className="text-primary">Learning</span> </p>}
      </h3>
      <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem reiciendis laboriosam praesentium accusamus iusto corrupti tempore voluptate? Ipsum, saepe.</p>


</div>

<div>
<div className="w-11/12 mx-auto grid grid-cols-2 justify-center  gap-4 ">
        {aboutCard.map(({ id, img, headline, info, headlineBn, infoBn }) => (
          <div
            key={id}
            className="px-3 border-[0.5px] cursor-pointer  border-gray-50 shadow hover:shadow-lg  bg-white rounded-lg flex gap-5 p-2 "
          >
            <figure>
              <img className=" w-[150px] " src={img} alt="" />
            </figure>
           <div className="pt-2">
           <h3 className="text-[20px] text-lg font-semibold mb-[10px]">
              {language === "bn" ? headlineBn : headline}
            </h3>
            <p className="text-sm">{language === "bn" ? infoBn : info}</p>
           </div>
          </div>
        ))}
      </div>
</div>

    </div>
  );
};

export default HomeAbout;
