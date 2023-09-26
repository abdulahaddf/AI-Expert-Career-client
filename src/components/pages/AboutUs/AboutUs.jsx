import { useContext, useEffect } from 'react';
import AboutUsTabs from './AboutUsTabs';
import Activities from './Activities';
import ContuctUs from './ContuctUs';
import Instructors from './Instructors';
import OurGallary from './OurGallary/OurGallary';
import Topic from './Topic';
import { MyContext } from '../../../Contaxt/Context';

const AboutUs = () => {

  const { language } = useContext(MyContext)

  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mt-[60px] lg:mt-[100px]'>
      <div className=" py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
        <div className="">
          <div className="bg-[#d6e1ff] shadow-lg lg:px-[70px] md:px-[35px] px-[16px] py-[26px] md:py-[45px] lg:py-[90px]">
            <h1 className="text-[35px] font-bold">{language == 'bn' ? 'আমাদের সম্পর্কে' : 'About us'}</h1>
            <p className=" w-full md:w-4/6 text-[#474747] mt-4">
              {language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
            </p>
          </div>
          <AboutUsTabs />
          <Activities />
          <Topic />
          <Instructors />
          <OurGallary />
          <ContuctUs />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
