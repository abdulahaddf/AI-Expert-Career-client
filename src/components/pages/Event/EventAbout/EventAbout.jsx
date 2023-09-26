/* eslint-disable react/prop-types */
import 'tailwindcss/tailwind.css';
import pointIcon from '../../../../../public/img/event/icon/Group 592.png';
import EventTitle from '../EventTitle/EventTitle';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { MyContext } from '../../../../Contaxt/Context';
// import timeBg from '../../../../../public/img/event/icon/timeBg.png';

const EventAbout = ({ about }) => {
  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const deadline = about.lastDate;
  const { language } = useContext(MyContext)

  console.log(about, 'about')


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor(time / 1000 / 60) % 60);
    setSecs(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const intervel = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(intervel);
  }),
    [];
  //   const targetDate =  new Date('2023-12-11:59:59');
  return (
    <div className=" grid grid-cols-3 md:gap-7 lg:gap-20 py-12">
      <div className="col-span-3 lg:col-span-2">
        <div className=" gap-3">
          <div className="flex items-center gap-3">
            <img src={pointIcon} className="" alt="" />
            <EventTitle title={language == 'bn' ? 'ইভেন্ট সম্পর্কে জানুন' : 'Whats about event'} />
          </div>
          <span>

            <p>{language == 'bn' ? about.about.detailsBN : about.about.detailsEN} </p><br /><br />
            <div className="w-40 h-12 text-center pb-[20px] group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

              <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

              <Link to="/registration" className="relative text-lg font-bold text-white transition-colors  group-hover:text-red-600 flex items-center justify-center">
                {language == 'bn' ? 'রেজিস্টার' : 'Register'}
              </Link>

            </div>
          </span>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1">
        <h4 className="text-[22px] font-bold text-[#404040] mt-5 md:mt-0">
          {language == 'bn' ? 'সময় বাকি' : 'Upcomming'}
        </h4>

        {about.eventTime && <CountdownTimer time={about.eventTime} />}


        {/* <CountdownTimer /> */}
        {/* <CountDownTimer targetDate={targetDate} /> */}
        {/* <div style={{ backgroundImage: `url('${timeBg}')`, backgroundSize: "cover", backgroundPosition: "center" }} className="bg-none  h-[100px] w-full mt-6 rounded-xl">

        </div> */}
      </div>
    </div>
  );
};

export default EventAbout;