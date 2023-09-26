import demo from "../demo.png";
import comment from "../Assests/comment.svg";
import facebook from "../Assests/facebook.svg";
import linkdeIn from "../Assests/linkdeIn.svg";
import share from "../Assests/share.svg";
import avatar from "../Assests/avatar.png";
import Comment from "./Comment";
import IndividualBlogCard from "./IndividualBlogCard";
import NewsLetter from "../NewsLetter";
import BlogItem from "./BlogItem/BlogItem";
import { BiDislike, BiLike } from "react-icons/bi";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from 'react';
import { MyContext } from '../../../../Contaxt/Context';

const IndividualBlog = () => {
  const [like, setLike] = useState(false)
  const [disLike, setDisLike] = useState(false)
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
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
      <div className="lg:grid grid-cols-4 pt-[123px] gap-x-[15px]">
        <div className="lg:border-r-2 border-[#00000057] p-1">
          <BlogItem />
        </div>

        <div className="col-span-3 lg:mt-0 mt-8 ">
          <div>
            <h2 className="font-bold text-3xl">
              Artificial Intelligence Master
            </h2>
            <p>
              <span className="text-[#ED1B24] font-bold">Robert Fox</span> ||
              <span> January 7, 2023</span>
            </p>
            <p>Chatbot Chat with AI, Artificial </p>
          </div>
          <div className="pt-[9px]">
            <img src={demo} alt="" className="rounded pb-12" />
            <p className="font-semibold text-xm">
              {language == 'bn' ?
              'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে'
                :
              'AI is the word of the year, with ChatGPT making waves since it was initially introduced in November 2022. With every new iteration of the powerful tool, users managed to find innovative ways of using the all-powerful AI bot to speed up and simplify their work. AI is the word of the year, with ChatGPT making waves since it was initially introduced in November 2022. With every new iteration of the powerful tool, users managed to find innovative ways of using the all-powerful AI bot to speed up and simplify their work. AI is the word of the year, with ChatGPT making waves since it was initially introduced in November 2022. With every new iteration of the powerful tool, users managed to find innovative ways of using the all-powerful AI bot to speed up and simplify their work.'}
            </p>
          </div>
          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex items-center gap-x-[25px] bg-[#FF0944] w-[175px] h-[45px] py-4 justify-center rounded-[40px]">
              {
                like ? <AiFillLike onClick={() => setLike(!like)} className="text-2xl text-center text-white" /> : <BiLike onClick={() => setLike(!like)} className="text-2xl text-center text-white" />
              }
              {
                disLike ? <AiFillDislike onClick={() => setDisLike(!disLike)} className="text-2xl text-center text-white" /> : <BiDislike onClick={() => setDisLike(!disLike)} className="text-2xl text-center text-white" />
              }

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
                placeholder={language == 'bn' ? 'কমেন্ট করুন' : 'Add a comment'}
                className="border-none w-full bg-[#eefaf993] text-lg font-bold p-2"
              />
            </div>
            <div className="flex flex-row-reverse gap-7 pt-2">
              <button className="bg-[#FF0944] w-[130px] text-white rounded font-bold">
                {language == 'bn' ? 'ঙ্কমেন্ট' : 'Comment'}
              </button>
              <button className="font-bold">{language == 'bn' ? 'বাতিল করুন' : 'Cancel'}</button>
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
        <div className=" mt-20">
          <h2 className="md:text-[35px] text-xl font-bold">
            {language == 'bn' ? 'একই সম্পর্কিত আরো কিছু টপিক্স' : 'You may interest also those topics'}
          </h2>

          <div className="md:pb-[150px] pt-[35px]">
            <IndividualBlogCard></IndividualBlogCard>
          </div>

          <div className="pb-[200px]">
            <NewsLetter></NewsLetter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualBlog;