/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaUpRightFromSquare} from "react-icons/fa6";

const FeaturedBlogs = ({featuredBlogs}) => {
    console.log(featuredBlogs)

    
    return (
        <div>
             <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-[-80px]"
      >
        {featuredBlogs?.map((b, i) => (
          <SwiperSlide key={i} className="bg-[#de858500] pb-10">
            <div className="mt-[80px] mb-[35px] relative">
              <div className="grid lg:grid-cols-2 items-center gap-4 mt-[100px]">
              <div>
                <img className="rounded-lg" src={b.imageURL} alt="" />
                </div>
                <div className="space-y-4 ">
                  <Link to={`/single-blog/${b._id}`} className="text-xl md:text-[40px] leading-[40px] font-bold">{b.blogName}</Link>
                  <div className="" dangerouslySetInnerHTML={{ __html: b.description.length > 250 ? b.description.substring(0, 350) + ' ...' : b.description }}></div>
                  <button className="">
                    <Link
                      className="btn-view flex items-center "
                      to={`/single-blog/${b._id}`}
                    >
                      
                    <FaUpRightFromSquare/>  Read More
                    </Link>
                  </button>
                </div>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default FeaturedBlogs;