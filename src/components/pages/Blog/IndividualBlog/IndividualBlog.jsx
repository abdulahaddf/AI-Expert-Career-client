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
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";
import { useLoaderData } from "react-router-dom";

const IndividualBlog = () => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const { language } = useContext(MyContext);
  const blog = useLoaderData();
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
              {blog.blogName}
            </h2>
            <p>
              <span className="text-[#ED1B24] font-bold">{blog.category}</span> ||
              <span> {blog.subcategory}</span>
            </p>
            <p>{blog.selectedTags} ||  </p> 
            {/* <p>{blog?.createAt?.toISOString()?.substring(0,10)}</p> */}
          </div>
          <div className="pt-[9px]">
            <img src={blog.imageURL} alt="" className="rounded pb-12" />
            <p className="font-semibold text-xm">
            <p className="my-20  " dangerouslySetInnerHTML={{__html:blog.description}}></p>
            </p>
          </div>
          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex items-center gap-x-[25px] bg-[#FF0944] w-[175px] h-[45px] py-4 justify-center rounded-[40px]">
              {like ? (
                <AiFillLike
                  onClick={() => setLike(!like)}
                  className="text-2xl text-center text-white"
                />
              ) : (
                <BiLike
                  onClick={() => setLike(!like)}
                  className="text-2xl text-center text-white"
                />
              )}
              {disLike ? (
                <AiFillDislike
                  onClick={() => setDisLike(!disLike)}
                  className="text-2xl text-center text-white"
                />
              ) : (
                <BiDislike
                  onClick={() => setDisLike(!disLike)}
                  className="text-2xl text-center text-white"
                />
              )}

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
                placeholder={language == "bn" ? "কমেন্ট করুন" : "Add a comment"}
                className="border-none w-full bg-[#eefaf993] text-lg font-bold p-2"
              />
            </div>
            <div className="flex flex-row-reverse gap-7 pt-2">
              <button className="bg-[#FF0944] w-[130px] text-white rounded font-bold">
                {language == "bn" ? "ঙ্কমেন্ট" : "Comment"}
              </button>
              <button className="font-bold">
                {language == "bn" ? "বাতিল করুন" : "Cancel"}
              </button>
            </div>
          </div>
          {/* <div>
            {allComments.map((cmt, index) => (
              <Comment cmt={cmt} key={index}></Comment>
            ))}
          </div> */}
        </div>
      </div>

      <div>
        <div className=" mt-20">
          <h2 className="md:text-[35px] text-xl font-bold">
            {language == "bn"
              ? "একই সম্পর্কিত আরো কিছু টপিক্স"
              : "You may interest also those topics"}
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
