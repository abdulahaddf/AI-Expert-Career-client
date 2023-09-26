import { MyContext } from '../../../../Contaxt/Context';
import EventTitle from '../EventTitle/EventTitle';
import { useContext, useEffect, useState } from 'react';
import pointIcon from '../../../../../public/img/event/icon/Group 594.png';

const ResentEvent = ({ setEvent }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [resendEventData, setResendEventData] = useState([])
  const [readMore, setReadMore] = useState(false)
  const {language} = useContext(MyContext)
  useEffect(() => {
    fetch('ResentEvent.json')
      .then(res => res.json())
      .then(data => setResendEventData(data))
  }, [])
  console.log(resendEventData);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };
  return (
    <div className="my-12">
      <div className="flex items-center gap-3 py-5">
        <img src={pointIcon} className="" alt="" />
        <EventTitle title={language == 'bn' ? 'সাম্প্রতিক ইভেন্ট সমূহ' : 'Resent Event'} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {resendEventData?.slice(0, visibleItems)?.map((data, index) => (
          <div key={index} className="bg-[white] p-3 rounded-xl">
            <img className="rounded-[14px]" src={data?.img} alt="cart img" />
            <h3 className="text-xl font-bold mt-4 ">{data?.title}</h3>
            <p className="text-[gray] mt-4 text-sm">{data?.details.slice(0, 185)}</p>
            <button

              onClick={() => setEvent(data)}
              className="mt-4 bg-[#f31939] text-white my-btn relative w-full py-3 h-[40px] flex items-center  rounded-lg"
            >
              <a href="#eventHome" className=' absolute top-0 bg-[] flex items-center justify-center left-0 right-0 bottom-0'>{language == 'bn' ? 'দেখুন' : 'Read more'}</a>
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleSeeMore}
          className="bg-[#E70830] my-btn text-white font-semibold py-3 px-14 rounded-lg"
        >
          {language == 'bn' ? 'সব ইভেন্ট দেখুন' : 'Show more events'}
        </button>
      </div>
    </div>
  );
};

export default ResentEvent;