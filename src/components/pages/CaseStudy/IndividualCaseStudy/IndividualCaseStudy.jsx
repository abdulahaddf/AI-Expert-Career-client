import Comment from "../../Blog/IndividualBlog/Comment";
import NewsLetter from "../../Blog/NewsLetter";
import like from "../../Blog/Assests/like.svg";
import dislike from "../../Blog/Assests/dislike.svg";
import comment from "../../Blog/Assests/comment.svg";
import facebook from "../../Blog/Assests/facebook.svg";
import linkdeIn from "../../Blog/Assests/linkdeIn.svg";
import share from "../../Blog/Assests/share.svg";
import avatar from "../../Blog/Assests/avatar.png";
import demo from "../Assests/caseStudy.svg";
import IndividualCaseStudyCard from "./IndividualCaseStudyCard";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../../Contaxt/Context";
const IndividualCaseStudy = () => {

  const {language} = useContext(MyContext)

  const allComments = [
    {
      author: "Robert Albert",
      authorImage: avatar,
      time: "1 year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores.",
      replyComments: [
        {
          author: "Robert Albert",
          authorImage: avatar,
          time: "1 year",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores.",
        },
        {
          author: "Robert Albert",
          authorImage: avatar,
          time: "1 year",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores.",
        }
      ]
    }, {
      author: "Robert Albert22222222",
      authorImage: avatar,
      time: "1 year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores.",
    }

  ]
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-[60px] lg:mt-[80px]">
      <div className="pt-[43px] gap-x-[15px]">
        <div className="">
          <div>
            <h2 className="font-bold text-3xl">
              Artificial Intelligence Master
            </h2>
            <p className="font-bold">Connect next world in the future</p>
          </div>
          <div className="pt-[9px]">
            <img src={demo} alt="" className="rounded pb-12 w-full" />
            <p className="font-bold text-lg lg:text-2xl">
              {language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে' : 'AI is the word of the year, with ChatGPT making waves since it was initially introduced in November 2022. With every new iteration of the powerful tool, users managed to find innovative ways of using the all-powerful AI bot to speed up and simplify their work. AI is the word of the year, with ChatGPT making waves since it was initially introduced in November 2022. With every new iteration of the powerful tool, users managed to find innovative ways of using the all-powerful AI bot to speed up and simplify their work. AI is the word of the year, with ChatGPT making waves since it was initially introduced in November 2022. With every new iteration of the powerful tool, users managed to find innovative ways of using the all-powerful AI bot to speed up and simplify their work.'}
            </p>
          </div>
          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex gap-x-[25px] bg-[#FF0944] w-[175px] h-[45px] py-4 justify-center rounded-[40px]">
              <img src={like} alt="" />
              <img src={dislike} alt="" />
              <img src={comment} alt="" />
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="bg-[#FF0944] h-[24px] w-[24px] rounded-[50px] p-1 cursor-pointer">
                <img src={facebook} alt="" />
              </div>

              <div className="bg-[#FF0944] h-[24px] w-[24px] rounded-[50px] p-1 cursor-pointer">
                <img src={linkdeIn} alt="" className=" " />
              </div>
              <img src={share} alt="" className="cursor-pointer" />
            </div>
          </div>
          <div className="pt-[32px]">
            <div className="flex justify-center items-center gap-x-[10px] ">
              <img src={avatar} alt="" className="" />
              <input
                type="text"
                placeholder={language == 'bn' ? 'কমেন্ট করুন......' : 'Add a comment'}
                className="border-b-2 border-[#000000] w-full bg-[#eefaf993] text-lg font-bold p-2"
              />
            </div>
            <div className="flex flex-row-reverse gap-7 pt-2">
              <button className="bg-[#FF0944] w-[130px] text-white rounded font-bold">
                {language == 'bn' ? 'কমেন্ট' : 'Comment'}
              </button>
              <button className="font-bold">{language == 'bn' ? 'বাতিল' : 'Cancel'}</button>
            </div>
          </div>
          <div>
            {
              allComments.map((cmt, index) => <Comment cmt={cmt} key={index}></Comment>)
            }
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-[35px] font-bold">
            {language == 'bn' ? 'একই সম্পর্কিত আরো কিছু টপিক্স' : 'You may interest also those topics'}
          </h2>
          <div className="pb-[50px] pt-[35px]">
            <IndividualCaseStudyCard></IndividualCaseStudyCard>
          </div>
          <div className="pb-[50px]">
            <NewsLetter></NewsLetter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualCaseStudy;
