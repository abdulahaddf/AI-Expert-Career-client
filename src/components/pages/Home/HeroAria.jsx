import { Link } from "react-router-dom";
import HeroImg from "../../../assets/heroSVG.svg";
import WatchVideo from "../../../assets/Videoplayer.svg";
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import blr1 from '../../../../public/img/blr1.png';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton
} from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./heroArea.json";

const HeroAria = () => {
  const { language } = useContext(MyContext)
  const cancelButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=" bg-[#fff] mb-[40px] absolute top-[90px] left-0 right-0 ">
      <div className="px-4 relative py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

        <div className="grid grid-cols-1 py-10 lg:grid-cols-2 md:items-center gap-0">
          <div className="lg:text-start w-auto lg:w-[800px]">
            <h3 className="text-[16px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] font-[700] mb-[16px] text-[#ED1B24] lg:text-start">
              {language == 'bn' ? "সেরা অনলাইন ভিডিও কোর্স পছন্দ করুন" : " Choose best online video courses"}
            </h3>
            <div className="text-[26px] flex flex-col lg:text-[45px]  xl:text-[45px] 2xl:text-[40px]  font-[1500] leading-none lg:text-start ">
              <h1>
                {language == 'bn' ? 'কৃত্রিম বুদ্ধিমত্তা শেখার আগে,' : 'Before learning artificial intelligence,'}
              </h1>
              <h1 className="mt-4">
                {language == 'bn' ? 'এর প্রতি আগ্রহ তৈরি করাটাই মূখ্য!' : 'It is important to create interest in it!'}
              </h1>
            </div>

            <h4 className="text-[16px] text-red-600 font-bold my-[15px] lg:w-[80%]  ">
              {language == 'bn' ? '  ক্যারিয়ার গড়ুন আর্টিফিশিয়াল ইন্টেলিজেন্স এক্সপার্ট হয়ে এ আই এক্সপার্ট ক্যারিয়ারের সাথে।' : 'Build a Career Become an Artificial Intelligence Expert with AI Expert Careers.'}
            </h4>
            <div className="flex flex-col md:flex-row  justify-start w-3/5 md:w-full md:items-center gap-8 mt-6">

              <Link
                className="group relative inline-bloc shadow-inner shadow-lg shadow-gray-600 shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 bg-red-600 focus:outline-none focus:ring"
                to="/download"
              >
                <span
                  className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                ></span>

                <span
                  className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600"
                >
                  {language == 'bn' ? 'ফ্রি সেমিনারে জয়েন করুন' : 'Register Now'}
                </span>
              </Link>
              <button onClick={() => setIsOpen(true)} className="px-[32px] py-[8px] hover:bg-red-600 border border-[#ED1B24] rounded-md text-black shadow-lg flex justify-between items-center gap-2">
                <img src={WatchVideo} alt="" />
                <span>{language == 'bn' ? "আমাদের সম্পর্কে" : "Watch demo"}</span>
              </button>

            </div>


          </div>
          <div className="mt-8 sm:mt-0 flex justify-end">
            <Lottie className='select-none pointer-events-none no-select unselectable w-full' animationData={groovyWalkAnimation} loop={true} />
            {/* <img src={HeroImg} alt=""  /> */}
          </div>
        </div>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto z-50">
            <div className="flex min-h-full  items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden  bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="bg-white  relative md:h-[435px] h-[200px] md:w-[775px] w-[400px]">
                    <Player>
                      <source src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} />
                      <BigPlayButton position="center" />
                      <ControlBar>

                        <VolumeMenuButton />
                        <ReplayControl seconds={10} order={1} />
                        <ForwardControl seconds={30} order={2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                      </ControlBar>
                    </Player>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default HeroAria;
