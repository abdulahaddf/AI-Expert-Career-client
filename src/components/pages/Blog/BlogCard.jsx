/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { FaArrowRight, FaCommentAlt, FaThumbsUp } from 'react-icons/fa';


const BlogCard = ({ blog }) => {
  // console.log(blog);
  return (
    <div  className="section w-full flex flex-col justify-between  p-2">
     
        <div className='space-y-4 flex flex-col justify-center items-center '>
     
        <img
          className="w-[268px] h-[170px] rounded-lg mb-2"
          src={blog.imageURL}
          alt="cover"
        />
      
        <Link to={`/single-blog/${blog._id}`}>
          <h2 className="font-bold text-[16px]">{blog.blogName}</h2>
        </Link>
        
        <div className="" dangerouslySetInnerHTML={{ __html: blog.description.length > 150 ? blog.description.substring(0, 100) + ' ...' : blog.description }}></div>
        </div>

        <div className="flex justify-between items-end mt-2">
          <div>
           
              <Link  to={`/single-blog/${blog._id}`}>
                <button className="btn-black">
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
              <FaCommentAlt />
              <p className="font-bold text-[14px]">{blog?.comments.length}</p>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default BlogCard;
