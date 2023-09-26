import { Link } from 'react-router-dom';
import userImg from '../../../assets/AiConsultant/Ellipse 46.png';
import { FiChevronDown } from 'react-icons/fi';
import { useContext, useState } from 'react';
import ListItem from './ListItem';
import { useEffect } from 'react';
import { MyContext } from '../../../Contaxt/Context';
const AiConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const { language } = useContext(MyContext)
  //

  const data = [
    'default model text, and a ',
    'default model text, and a ',
    'default model text, and a ',
    'default model text, and a ',
  ];
  const handleClick = (text) => {
    if (selected.includes(text)) {
      const newArr = selected.filter((t) => t !== text);
      return setSelected(newArr);
    }
    // here is problem
    setSelected([...selected, text]);
    selected.push(text);
  };
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#f3f2ff00] lg:mt-[10px] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8'>
      <div className=" pb-[92px] pt-[130px]">
        <div className="">
          <h1 className="font-bold text-center text-[35px]">
            {language == 'bn' ? 'ক্যারিয়ারের সঠিক দিক নির্দেশনার জন্য কনসালটেন্ট খুঁজুন' : 'Search Ai Consultant, Make an Appointment'}
          </h1>
          <p className="text-center Roboto">
            {language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
          </p>

          <div className="mt-10 md:mt-[104px] md:flex lg:items-center">
            <h3 className="mr-0 md:mr-[55px] lg:mr-[112px] font-semibold text-lg lg:text-2xl">
              {language == 'bn' ? 'ক্যাটাগরি নির্বাচন করুণ' : 'Filter Consultant'}
            </h3>
            <div className="space-x-0 lg:space-x-2 space-y-2 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <input
                type="text"
                placeholder={language == 'bn' ? 'দেশ' : 'Country'}
                className="py-2 px-4  w-full md:w-auto border border-[#B8B8B8] "
              />
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="select-btn flex items-center rounded-sm justify-between h-10 lg:h-14 px-4 w-full lg:w-[238px]  border border-[#B8B8B8] bg-white relative"
                >
                  {selected.length > 1 ? (
                    <span className="btn-text text-sm  font-bold">
                      Multiple Selected
                    </span>
                  ) : (
                    <span className="btn-text  text-gray-400">{language == 'bn' ? 'দক্ষতা / এক্সপার্ট এরিয়া' : 'Speciality'}</span>
                  )}

                  <span
                    className={`arrow-dwn ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <FiChevronDown className="" />
                  </span>
                </div>
                <ul
                  className={`items mt-2 ${isOpen ? 'block' : 'hidden'
                    } py-2.5  border rounded-sm border-[#B8B8B8] w-[238px] bg-white top-[50px] absolute`}
                >
                  <div className="px-2">
                    <input
                      type="text"
                      className="w-full outline-none border border-[#B8B8B8] rounded-sm"
                    />
                  </div>
                  {data.map((text, index) => (
                    <ListItem key={index} text={text} handleClick={handleClick} />
                  ))}
                </ul>
              </div>

              <input
                type="text"
                placeholder={language == 'bn' ? 'অভিজ্ঞতা / যোগ্যতা' : 'Qualification'}
                className="py-2 w-full md:w-auto px-4  border border-[#B8B8B8] "
              />
              <input
                type="text"
                placeholder={language == 'bn' ? 'নাম বা এক্সপার্ট এরিয়া দিয়ে খুঁজুন' : 'Name or Expertise'}
                className="py-2 w-full md:w-auto px-4 border border-[#B8B8B8] "
              />
            </div>
          </div>

          <hr className="border-[0.5px] border-[#ACACAC] my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-5 mt-10">
            {[...Array(10)].map((item, i) => (
              <Link
                key={i}
                to={'/ai-consultant-profile/2'}
                className="flex items-center p-2    "
              >
                <div className="lg:flex p-6 bg-[#fff] lg:divide-x-2 divide-[#000000d7] shadow-lg">
                  <div className="flex flex-col text-center lg:w-[40%] lg:px-10">
                    <img className="lg:w-[70%] mx-auto" src={userImg} alt="" />
                    <h2 className="text-[20px] font-bold mt-[10px] mb-[12px]">
                      Eleanor Rena
                    </h2>
                    <p>Data Science, AI software engineer</p>
                    <button className="px-[3px] py-[8px] bg-[#ED1B24] rounded-md text-sm text-white shadow-lg mt-5">
                      View Profile
                    </button>
                  </div>
                  <div className="lg:flex flex-col justify-between lg:w-[60%] lg:px-10 mt-5 lg:mt-0">
                    <h2 className="text-[17px] font-bold">Qualification</h2>
                    <p className="text-[#515151]/90">M.sc of computer science</p>
                    <h2 className="text-[17px] font-bold">Speciality</h2>
                    <p className="text-[#515151]/90">
                      Senior at AI software engineer
                    </p>
                    <h2 className="text-[17px] font-bold">Place </h2>
                    <p className="text-[#515151]/90">
                      IDB Bhaban, Shah ali plaza,{' '}
                    </p>
                    <button className=" py-[8px] border-2 border-[#ED1B24] rounded-md text-black shadow-lg mt-5 w-full lg:w-auto">
                      Booking available online
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
