import star from "../Assests/star.svg";
// import star1 from "../Assests/star1.svg";
import avatar from "../Assests/avatar.png";
import like from "../Assests/like1.svg";
import dislike from "../Assests/dislike1.svg";
import ReplyComment from "./ReplyComment";
import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa';

const Comment = ({ cmt }) => {
  console.log(cmt);
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <div className="pb-9">
        <div className="flex gap-4">
          <div>
            <img src={avatar} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="md:flex items-center gap-x-7">
              <p className="md:font-bold text-semibold">{cmt.author}</p>
              <p className="">{cmt.time}</p>
              <span className="flex gap-[5px]">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </span>
            </div>
            <div>
              <p className="md:font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                dolorem?
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-8 pt-8">
                <img src={like} alt="" />
                <img src={dislike} alt="" />
                <p className="font-bold">Reply</p>
              </div>
              <div className="cursor-pointer">

                <div className="">
                  {
                    open ? <ReplyComment replyComments={cmt} /> : <div onClick={() => setOpen(!open)} className="flex items-center gap-2 mt-3">Reply <FaAngleDown /></div>
                  }

                  {
                    open == true ? <div onClick={() => setOpen(!open)} className="font-bold ">close reply comment</div> : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;