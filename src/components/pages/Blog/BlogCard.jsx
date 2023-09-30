/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import viwes from './Assests/views.png';
import comment from './Assests/comment.png';
import { AiFillLike } from "react-icons/ai";


const BlogCard = ({ blog }) => {
  // console.log(blog);
  return (
    <div  className="bg-white w-[288px] h-[389px] rounded-[10px]">
      <div className="flex flex-col gap-5 justify-center items-center p-2">
        <img
          className="w-[254px] h-[170px] pt-[15px]"
          src={blog.imageURL}
          alt="cover"
        />
        <Link to="/individual-blog">
          <h2 className="font-bold text-[16px]">{blog.blogName}</h2>
        </Link>
        {/* <p className="w-[240px]">
          {blog.description.length > 100
            ? blog.description.slice(0, 70) + '...' + ' See More...'
            : blog.description}
        </p> */}
        <div className="" dangerouslySetInnerHTML={{ __html: blog.description.length > 150 ? blog.description.substring(0, 100) + ' ...' : blog.description }}></div>

        <div className="flex justify-between items-center gap-[40px]">
          <div>
           
              <Link  to={`/single-blog/${blog._id}`}>
                <button className="w-[71px] h-[24px] bg-[#ED1B23] text-white text-[16px] font-[600] rounded-[10px]">
                  Read
                </button>
              </Link>
         
          </div>
          <div className="flex items-center justify-between gap-[30px]">
            <div className="flex gap-1 items-center cursor-pointer">
              {/* <img className="w-[22px] h-[15px]" src={viwes} alt="" /> */}
              <AiFillLike className='text-primary'/> 
              <p className="font-bold text-[14px]">{blog.likes.length}</p>
            </div>

            <div className="flex gap-1 items-center cursor-pointer">
              <img className="w-[16px] h-[16px]" src={comment} alt="" />
              <p className="font-bold text-[14px]">{blog?.comments.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
