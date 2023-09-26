// import { useState } from 'react';
import { LuTicket } from 'react-icons/lu';
// import EventTitle from '../EventTitle/EventTitle';
import pointIcon from '../../../../../public/img/event/icon/Group 595.png';
// import whiteFaq from '../../../.../../../../public/img/event/icon/whiteFaq.png';
// import check from '../../../.../../../../public/img/event/icon/check.png';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { MyContext } from '../../../../Contaxt/Context';

import { Link } from "react-router-dom";
import EventTitle from '../EventTitle/EventTitle';
import { useContext } from 'react';
import { MyContext } from '../../../../Contaxt/Context';
import { useState } from 'react';

// import activeFaq from '../../../.../../../../public/img/event/icon/activeFaq.png'
const EventFaq = ({ event }) => {
  const {setEventData, language} = useContext(MyContext);
  const [faqData, setFaqData] = useState({
    id: 3,
    title: 'How to make a event ?',
    name: 'How to make a event?',
    description:
      "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over  cy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions ha",
    tags: [
      'All tag & Customized Feature',
      'All tag & Customized Feature',
      'All tag & Customized Feature',
    ],
  });

  const handleEvents = (data) => {
    setFaqData(data);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 py-5">
          <img src={pointIcon} className="" alt="" />
          <EventTitle title={language == 'bn' ? 'ইভেন্ট নিয়ে কিছু কথা' : 'Event FAQ'} />
        </div>
        <a href="#idStart">
            <Link
          onClick={()=> setEventData(event)}
          to="/buy_ticket"
          className="flex my-btn items-center gap-2 bg-[#ED1B24] text-white px-6 py-3 rounded-lg"
        >
          {' '}
          <LuTicket className="text-2xl" />{language == 'bn' ? 'টিকেট কিনুন' : 'Buy a ticket'}
        </Link>
        </a>
      
      </div>
      <main className="grid grid-cols-3 gap-3 n-group">
        <ul
          id="myDiv"
          className="bg-[#a2a2a259] col-span-3 lg:col-span-1 p-4 overflow-y-scroll"
        >
          {event?.eventFaq?.map((itm) => (
            <li
              onClick={() => handleEvents(itm)}
              className="bg-white mt-6 p-3 flex items-center gap-3 text-lg cursor-pointer font-bold rounded"
              key={itm.id}
            >
              <img src="https://i.ibb.co/zbBRGF2/active-Faq.png" className="w-[35px]" /> {itm.title}
            </li>
          ))}
        </ul>
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-white p-8 m">
            <h2 className="text-[25px] font-bold">{faqData.title}</h2>
            <p className="text-[#B5B5B5] text-[15px]">{faqData.description}</p>

            <ul className="mt-6">
              {faqData.tags.map((itm, index) => (
                <li
                  className="flex items-center mt-3 gap-3 font-bold"
                  key={index}
                >
                  <img src="https://i.ibb.co/RSVxNQN/check.png" className="w-[20px] h-[18px]" alt="" /> {itm}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventFaq;
