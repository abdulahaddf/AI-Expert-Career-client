import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import profile from '../../../assets/AiConsultant/Ellipse 46.png'
import { useContext } from 'react';
import { MyContext } from '../../../Contaxt/Context';

const HomeConsultant = () => {
  const { language } = useContext(MyContext)
  const data = [
    {
      id: 0,
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "eleanor",
      title: "Data Science, AI software engineer",
      Qualification: "M.sc of computer science",
      Speciality: "Senior at AI software engineer",
      Place: "IDB Bhaban, Shah ali plaza,  ",
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "eleanor2",
      title: "Data Science, AI software engineer",
      Qualification: "M.sc of computer science",
      Speciality: "Senior at AI software engineer",
      Place: "IDB Bhaban, Shah ali plaza,  ",
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "eleanor3",
      title: "Data Science, AI software engineer",
      Qualification: "M.sc of computer science",
      Speciality: "Senior at AI software engineer",
      Place: "IDB Bhaban, Shah ali plaza,  ",
    }
  ]
  return (
    <div>
      <div className="md:grid items-stretch md:mt-0 mt-4 grid-cols-2 gap-3">
        <div className="">
          <h1 className="text-[#FE0651] font-bold text-3xl">{language === 'bn' ? 'কর্পোরেট বা ক্যারিয়ার কনসালটেন্টের মাধ্যমে নিশ্চিত করুণ আপনার সঠিক জার্নিটা!' : 'Confirm your right journey with a corporate or career consultant!'}</h1>
          <p className="mt-6 w-[80%]">
            {language === 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করাআপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে' : 'No matter what background you are a student or learner, the right roadmap can get you there. Can give top success. Our AI roadmap and consultancy services are developed by these experts in various fields Whether you are a student or learner from any background, The Right Roadmap can help you'}
          </p>
        </div>
        <div className="">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {
              data?.map(itm => <SwiperSlide key={itm.id} className="">
                <div
                  to={'/ai-consultant-profile/2'}
                  className="flex items-center p-2 pb-10   "
                >
                  <div className="lg:flex p-6 bg-[#fff] lg:divide-x-2 divide-[#000000d7] shadow-lg">
                    <div className="flex flex-col text-center lg:w-[40%] lg:px-10">
                      <img className="lg:w-[130px] h-[130px] rounded-full border-[2px] p-1 border-dashed border-[red] mx-auto" src={itm?.img} alt="" />
                      <h2 className="text-[20px] font-bold mt-[10px] mb-[12px]">
                        {itm?.name}
                      </h2>
                      <p>{itm?.title}</p>
                      <button className="px-[3px] py-[8px] bg-[#ED1B24] rounded-md text-sm text-white shadow-lg mt-5">
                        View Profile
                      </button>
                    </div>
                    <div className="lg:flex flex-col justify-between lg:w-[60%] lg:px-10 mt-5 lg:mt-0">
                      <h2 className="text-[17px] font-bold">Qualification</h2>
                      <p className="text-[#515151]/90">{itm.Qualification}</p>
                      <h2 className="text-[17px] font-bold">Speciality</h2>
                      <p className="text-[#515151]/90">
                        {itm?.Speciality}
                      </p>
                      <h2 className="text-[17px] font-bold">Place </h2>
                      <p className="text-[#515151]/90">
                        {itm?.Place}
                      </p>
                      <button className=" py-[8px] border-2 border-[#ED1B24] rounded-md text-black shadow-lg mt-5 w-full lg:w-auto">
                        Booking available online
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center  mt-[57px]">
        <Link to="/ai-consultant">
          <button className="my-btn py-[16px] px-[30px] text-[19px] rounded-md bg-[#23292F] text-white">
            view more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeConsultant;
