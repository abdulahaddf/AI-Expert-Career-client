/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaArrowRight, FaCommentAlt, FaThumbsUp } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

const BlogCard = ({ blog }) => {
  const formatViewCount = (view) => {
    if (view >= 1000000) {
      return `${(view / 1000000).toFixed(1)}M`;
    } else if (view >= 1000) {
      return `${(view / 1000).toFixed(1)}k`;
    }
    return view.toString();
  };
  const incrementViewCount = async () => {
    try {
      await axios.put(
        `https://ai-server-sooty.vercel.app/increment-view-count/${blog._id}`
      );
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  };

  // console.log(blog);
  return (
    <div className="flex flex-col justify-between w-full p-2 section">
      <figure className="rounded-lg">
        <img
          className="object-cover pb-3 mx-auto rounded-lg md:w-fit"
          src={blog.imageURL}
          alt="cover"
          width="100%"
          height="1"
        />
      </figure>
      <div className="flex flex-col items-center justify-center space-y-4 ">
        <Link to={`/blog/${blog.blogName}`} onClick={incrementViewCount}>
          {/* Font bold */}
          <h2 className="font-bold text-[18px] text-center li-ador-noirrit-semibold">{blog.blogName}</h2> 
        </Link>

        <div
          className=""
          dangerouslySetInnerHTML={{
            __html:
              blog.description.length > 100
                ? blog.description.substring(0, 80) + " ..."
                : blog.description,
          }}
        ></div>
      </div>

      <div className="flex items-end justify-between mt-2">
        <div>
          <Link to={`/blog/${blog.blogName.trim().replace(/\s+/g, '-')}`}>
            <button className="btn-black" onClick={incrementViewCount}>
              <FaArrowRight /> Read More
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-5 text-xl">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaThumbsUp className="" />
            <p className="font-bold text-[14px]">{blog.likes.length}</p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillEye />
            <p className="font-bold text-[14px]">
              {formatViewCount(blog?.view)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
