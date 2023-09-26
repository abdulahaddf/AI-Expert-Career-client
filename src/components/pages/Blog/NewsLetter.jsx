import email from "./Assests/email.svg";
import newsletter from "./Assests/newsLetter.svg";
import { useContext } from 'react';
import { MyContext } from '../../../Contaxt/Context';

const NewsLetter = () => {

  const {language} = useContext(MyContext)

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row  md:items-center lg:space-x-4">
        <div className="w-3/4 mx-auto">
          <h2 className="md:text-3xl lg:text-[35px] font-bold pb-3">{language == 'bn' ? 'এ আই এর সকল আপডেট নিউজ পেতে এখনই সাবস্ক্রাইব করুন' : 'Subscribe to our NEWSLETTER to get all the updates on AI'}</h2>
          <p className="text-[#696969] font-bold">
            
            {language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years'}
          </p>
          <div className="pt-14">
            <div className="border flex bg-white w-full pl-2">
              <img src={email} alt="" />
              <input
                type="email"
                placeholder={language == 'bn' ? 'ই-মেইল' : 'Email'}
                className="border-none outline-none w-full p-3"
              />
              <button className="bg-[#FF0944] text-white w-[171px] rounded-[5px]">
                {language == 'bn' ? 'সাবস্ক্রাইব' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-1/2 lg:w-3/4 mx-auto">
          <img src={newsletter} alt="" className="w-[497px] h-[379px]" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
