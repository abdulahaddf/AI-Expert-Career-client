import line from "../../../assets/line.svg";
import eventImg from "../../../assets/Eventimage.svg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";
import groovyWalkAnimation from "./events.json";
import Lottie from "lottie-react";



const HomeEvent = () => {
  const [sEvent, setSEvent] = useState([])

  const { language } = useContext(MyContext)
  useEffect(() => {
    fetch('Event.json')
      .then(res => res.json())
      .then(data => setSEvent(data))
  })
  return (
    <div className="mt-20">
      <h3 className="text-center font-bold text-[30px]"> {language === 'bn' ? 'জয়েন করুন ফ্রি সেমিনারে' : 'Join Free Event '}</h3>
      <center>
        <img src={line} alt="" />
      </center>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-[-80px]">
        {
          sEvent?.map(itm => <SwiperSlide className='bg-[#de858500] pb-10'>
            <div className="mt-[80px] mb-[35px] relative">
              <div className="grid lg:grid-cols-2 items-center gap-4 mt-[100px]">
                <div>
                  <h1 className="text-[40px] font-bold">Heading</h1>
                  <p className="my-[24px] font-bold text-[16px] lg:pr-8">
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting,Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting,`}
                  </p>
                  <button className="">
                    <Link
                      className="group relative inline-bloc shadow-inner  shadow-gray-600 shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-3 bg-red-600 focus:outline-none focus:ring"
                      to="/events"
                    >
                      <span
                        className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                      ></span>

                      <span
                        className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600"
                      >
                        {language == 'bn' ? 'ফ্রি রেজিস্ট্রেশন করুন' : 'Register Now'}
                      </span>
                    </Link>
                  </button>
                </div>
                <div>
                  <Lottie className='select-none pointer-events-none no-select unselectable w-full' animationData={groovyWalkAnimation} loop={true} />
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>

    </div>
  );
};

export default HomeEvent;
