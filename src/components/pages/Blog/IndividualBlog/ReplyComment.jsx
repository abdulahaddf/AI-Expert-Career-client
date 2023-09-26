import star from "../Assests/star.svg";
import avatar from "../Assests/avatar.png";
import like from "../Assests/like1.svg";
import dislike from "../Assests/dislike1.svg";

const ReplyComment = () => {
    return (
           <div  className="pb-9 ml-8 mt-6">
          <div className="flex gap-4">
            <div>
              <img src={avatar} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="md:flex items-center gap-x-7">
                <p className="md:font-bold text-semibold text-black">author name</p>
                <p className="md:font-bold text-[#222121]">3223</p>
                <span className="flex gap-[5px] mt-2">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </span>
              </div>
              <div>
                <p className="text-[#555555] mt-1">
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
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default ReplyComment;