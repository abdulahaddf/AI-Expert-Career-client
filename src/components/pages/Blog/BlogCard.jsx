/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { FaArrowRight, FaCommentAlt, FaThumbsUp } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import axios from 'axios';


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
      await axios.put(`https://ai-server-sooty.vercel.app/increment-view-count/${blog._id}`);
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  // console.log(blog);
  return (
    <div  className="section w-full flex flex-col justify-between  p-2">
      <img
          className="w-[268px] h-[170px] mx-auto rounded-lg"
          src={blog.imageURL}
          alt="cover"
        />
        <div className='space-y-4 flex flex-col justify-center items-center '>
     
       
      
        <Link to={`/single-blog/${blog._id}`}>
          <h2 className="font-bold text-[16px]">{blog.blogName}</h2>
        </Link>
        
        <div className="" dangerouslySetInnerHTML={{ __html: blog.description.length > 150 ? blog.description.substring(0, 100) + ' ...' : blog.description }}></div>
        </div>

        <div className="flex justify-between items-end mt-2">
          <div>
           
              <Link  to={`/single-blog/${blog._id}`}>
                <button className="btn-black" onClick={incrementViewCount}>
                 <FaArrowRight/> Read More
                </button>
              </Link>
         
          </div>
          <div className="flex items-center justify-between gap-5 text-xl">
            <div className="flex gap-1 items-center cursor-pointer">
            
              <FaThumbsUp className=''/> 
              <p className="font-bold text-[14px]">{blog.likes.length}</p>
            </div>

            <div className="flex gap-1 items-center cursor-pointer">
              <AiFillEye />
              <p className="font-bold text-[14px]">{formatViewCount(blog?.view)}</p>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default BlogCard;
