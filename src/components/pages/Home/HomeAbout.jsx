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
      headline: "AI Blogs & Newsletter",
      headlineBn: "AI Blogs & Newsletter",
      info: "Elevate your online presence with our AI-based blogs and news. Stay at the forefront of innovation with updated Blogs tailored to your niche, crafted by the synergy of human creativity and artificial intelligence. ",
      infoBn:
        "আমাদের এ আই বিষয়ক ব্লগ এবং নিউজলেটার পড়ার মাধ্যমে সমৃদ্ধ করুন  আপনার জ্ঞানের পরিধি। সৃজনশীলতার সমন্বয় দ্বারা নির্মিত নতুন নতুন সব ব্লগ পড়ে  উধভাবনের জগতে প্রথম সারির একজন হয়ে উঠুন আজই।",
    },
    {
      id: "2",
      img: aboutSvg2,
      headline: "Qualitiful AI Courses",
      headlineBn: "Qualitiful AI Courses",
      info: "Embark on a transformative learning journey with our AI-based courses. Gain hands-on experience and master the zest of AI, positioning yourself at the forefront of the tech revolution. ",
      infoBn:
        "এ আই ফিল্ডে আপনার শেখার যাত্রা শুরু হোক আমাদের এ আই কোর্সের মাধ্যমে। হ্যান্ডস অন প্র্যাকটিস  এবং এ আই এর সকল সেক্টরের নানান বিষয়ের উপর রয়েছে আমাদের এ আই  কোর্স সমূহ যা আপনার এ আই  ক্যারিয়ার গড়তে আপনাকে রাখবে এক ধাপ এগিয়ে।",
    },
    {
      id: "3",
      img: aboutSvg3,
      headline: "AI Career Consultancy",
      headlineBn: "AI Career Consultancy",
      info: "Kickstart your AI career under the supervise of our AI Career Consultancy. Let us guide you towards strategic decisions that unlock doors to exciting opportunities in the ever-evolving world of AI. ",
      infoBn:
        "এ আই ক্যারিয়ারের যাত্রা শুরুর প্রথম ধাপ হোক আমাদের ক্যারিয়ার কন্সাল্টেন্টদের হাত ধরেই। এ আই ইন্ডাস্ট্রির সকল নামকরা এক্সপার্টদের মাধ্যমে কন্সাল্টেন্সি সেবা নিয়ে গড়ে তুলুন আপনার এআই ক্যারিয়ার।",
    },
   
    {
      id: "5",
      img: aboutSvg5,
      headline: "Bangla AI Magazine",
      headlineBn: "Bangla AI Magazine",
      info: "We are offering the first ever Bangla language AI magazine in Bangladesh. Widen your knowledge over the world of AI simply going through our Magazines. ",
      infoBn:
        " বাংলাদেশে প্রথম সম্পুর্ণ এ আই  বিষয়ক তথ্য নিয়ে তৈরী আমাদের এআই মাগাজিন। এ আই জগত নিয়ে আরো জানতে ও জ্ঞান আরোহণ করতে পারেন আমাদের ম্যাগাজিনটি পড়ে।",
    },
 
   
  ];
  return (
    <div name='about' className="my-5 md:my-20 bg-slate-100 py-5 md:py-20 md:px-6 rounded-md md:flex justify-between">
<div className="md:w-5/6 flex flex-col  justify-center mx-auto ml-6 ">
  <h4 className="text-primary pb-3">About Us</h4>
<h3 className=" font-bold lg:text-[36px] text-xl leading-10">
        {language === "bn"
          ? "কি কি সুবিধা পাবেন আমাদের থেকে ?"
          : <p>Transform your Career through <span className="text-primary">Learning</span> </p>}
      </h3>
      <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem reiciendis laboriosam praesentium accusamus iusto corrupti tempore voluptate? Ipsum, saepe.</p>


</div>

<div>
<div className="w-11/12 mx-auto grid md:grid-cols-2 justify-center mt-4 md:mt-0  gap-4 ">
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
