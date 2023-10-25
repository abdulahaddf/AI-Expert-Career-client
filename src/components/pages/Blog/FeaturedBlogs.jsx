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
                  <Link to={`/single-blog/${b._id}`} className="text-[40px] font-bold">{b.blogName}</Link>
                  <div className="" dangerouslySetInnerHTML={{ __html: b.description.length > 250 ? b.description.substring(0, 350) + ' ...' : b.description }}></div>
                  <button className="">
                    <Link
                      className="btn-add flex items-center px-8 "
                      to={`/single-blog/${b._id}`}
                    >
                      
                    <FaUpRightFromSquare/>  Read More
                    </Link>
                  </button>
                </div>
                <div>
                <img src={b.imageURL} alt="" />
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