// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import CoursesHeaderImg from './coursesHeader.png';
import CoursesHeaderSVG from './headerSVG.svg';

// import required modules
import { Pagination } from 'swiper';
import { useContext } from 'react';
import { MyContext } from '../../../Contaxt/Context';
const CoursesHeader = () => {

  const { language } = useContext(MyContext)

  return (
    <div className="">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">

        <SwiperSlide>
          <div
            className="w-screen lg:py-12 lg:pl-28 h-full"
            style={{
              backgroundImage: `url(${CoursesHeaderImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >

            <div className="lg:flex  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  flex-col lg:flex-row h-full px-4 ">

              <div className="h-full  lg:ml-3 pt-12 lg:w-1/2">

                <h2 className="text-[32px] pt-2 lg:text-[42px] text-white font-extrabold text-left">
                  Learn Advance Python
                </h2>

                <p className="text-[11px] lg:text-[15px] text-[#BCBCBC] mt-10 text-left">
                  tt remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>

                <div className="w-40 text-center mt-5 group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

                  <span
                    className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                  ></span>

                  <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                    {language == 'bn' ? 'এনরোল' : 'Enroll'}
                  </span>

                </div>
              </div>

              <div className="h-full flex justify-end lg:justify-center items-center lg:w-1/2">
                <img src={CoursesHeaderSVG} alt="" />
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-screen lg:py-12 lg:pl-28 h-full"
            style={{
              backgroundImage: `url(${CoursesHeaderImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >

            <div className="lg:flex  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  flex-col lg:flex-row h-full px-4 ">

              <div className="h-full  lg:ml-3 pt-12 lg:w-1/2">

                <h2 className="text-[32px] pt-2 lg:text-[42px] text-white font-extrabold text-left">
                  Learn Advance Python
                </h2>

                <p className="text-[11px] lg:text-[15px] text-[#BCBCBC] mt-10 text-left">
                  tt remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>

                <div className="w-40 text-center mt-5 group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

                  <span
                    className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                  ></span>

                  <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                    {language == 'bn' ? 'এনরোল' : 'Enroll'}
                  </span>

                </div>
              </div>

              <div className="h-full flex justify-end lg:justify-center items-center lg:w-1/2">
                <img src={CoursesHeaderSVG} alt="" />
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-screen lg:py-12 lg:pl-28 h-full"
            style={{
              backgroundImage: `url(${CoursesHeaderImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >

            <div className="lg:flex  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  flex-col lg:flex-row h-full px-4 ">

              <div className="h-full  lg:ml-3 pt-12 lg:w-1/2">

                <h2 className="text-[32px] pt-2 lg:text-[42px] text-white font-extrabold text-left">
                  Learn Advance Python
                </h2>

                <p className="text-[11px] lg:text-[15px] text-[#BCBCBC] mt-10 text-left">
                  tt remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>

                <div className="w-40 text-center mt-5 group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

                  <span
                    className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                  ></span>

                  <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                    {language == 'bn' ? 'এনরোল' : 'Enroll'}
                  </span>

                </div>
              </div>

              <div className="h-full flex justify-end lg:justify-center items-center lg:w-1/2">
                <img src={CoursesHeaderSVG} alt="" />
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default CoursesHeader;
