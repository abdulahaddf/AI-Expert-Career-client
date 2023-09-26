import {
  FaMapMarkerAlt,
  FaMicrophone,
  FaRegCalendarAlt,
  FaUserFriends,
} from 'react-icons/fa';
import EventAbout from './EventAbout/EventAbout';
import EventConference from './EventConference/EventConference';
import EventFaq from './EventFaq/EventFaq';
import EventSponsor from './EventSponsor/EventSponsor';
import ResentEvent from './ResentEvent/ResentEvent';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../Contaxt/Context';

// import user from '../../../../public/img/event/user.jpg';
// import user2 from '../../../../public/img/event/Polygon 22.png';
// import cover from '../../../../public/img/event/cart.jpg';

const Event = () => {

  const { language } = useContext(MyContext)

  const [event, setEvent] = useState({
    "id:": 0,
    "img": "https://events.devby.io/ckeditor_assets/pictures/27306/content_x600.jpg",
    "title": "Ai event for beginners 1",
    "date": "january 17-19, 2023",
    "location": "online",
    "ticketRemainig": 50,
    "ticketId": "ad32as",
    "eventTime": "2023-6-22 20:49:59",
    "holderInfo": {
      "img": "https://randomuser.me/api/portraits/men/55.jpg",
      "name": "Shahin khan",
      "address": "Dhaka, mirpur",
      "email": "example@example.com"
    },
    "eventFaq": [
      {
        "id": 0,
        "title": "Question Number 1",
        "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over cy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions ha",
        "tags": [
          "All tag & Customized Feature",
          "All tag & Customized Feature",
          "All tag & Customized Feature",
          "All tag & Customized Feature"
        ]
      },
      {
        "id": 1,
        "title": "Question Number 2",
        "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over cy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions ha",
        "tags": [
          "All tag & Customized Feature",
          "All tag & Customized Feature",
          "All tag & Customized Feature"
        ]
      },
      {
        "id": 2,
        "title": "How to make a event ? 3",
        "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over cy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions ha",
        "tags": [
          "All tag & Customized Feature",
          "All tag & Customized Feature"
        ]
      }
    ],
    "details": "Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
    "speaker:": 20,
    "about": {
      "details": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
      "lastDate": "2023-12-11:59:59"
    },
    "eventConference": {
      "Schedule": [
        {
          "date": "30.5.2023",
          "address": "Hall A"
        },
        {
          "date": "30.5.2023",
          "address": "Hall A"
        },
        {
          "date": "30.5.2023",
          "address": "Hall A"
        },
        {
          "date": "30.5.2023",
          "address": "Hall A"
        }
      ],
      "ProfessionalSpeaker": [
        {
          "img": "https://i.ibb.co/Qjszc5w/Polygon-22.png",
          "name": "speaker 1 ",
          "profession": "Developer",
          "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many "
        },
        {
          "img": "https://i.ibb.co/Qjszc5w/Polygon-22.png",
          "name": "speaker 2 ",
          "profession": "Designer",
          "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many "
        },
        {
          "img": "https://i.ibb.co/Qjszc5w/Polygon-22.png",
          "name": "speaker 3 ",
          "profession": "Developer",
          "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many "
        },
        {
          "img": "https://i.ibb.co/Qjszc5w/Polygon-22.png",
          "name": "speaker 4",
          "profession": "Developer",
          "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many "
        }
      ],
      "eventCart": [
        {
          "id:": 0,
          "title": "Speaker headline",
          "img": "user",
          "time": "08:00-9:30",
          "description": "Lorem Ipsum as their default model text, and a search for afsdasaadsads dasfd will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        },
        {
          "id:": 1,
          "title": "Speaker headline",
          "img": "user",
          "time": "08:00-9:30",
          "description": "Lorem Ipsum as their default model text, and a search for afsdasaadsads dasfd will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        },
        {
          "id:": 2,
          "title": "Speaker headline",
          "img": "user",
          "time": "08:00-9:30",
          "description": "Lorem Ipsum as their default model text"
        }
      ]
    }
  },);

  useEffect(() => {
    fetch("Event.json")
      .then(res => res.json())
      .then(data => setEvent(data[0]));
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);



  return (
    <div className="" id='eventHome'>
      <header
        className="event-header md:h-[590px] h-[350px] flex items-center justify-center ">
        <div className="">
          <h4 className="md:text-[40px] text-xl text-center text-white md:h-[50px]">
            {event?.date}
          </h4>
          <br />
          <h1 className="text-center text-white md:text-[66px] text-3xl font-bold">
            {event?.title}
          </h1>
        </div>
      </header>

      {/* event hero cart */}
      <div className="hero-cart bg-[#ED1B23] lg:w-[1078px] md:[90%] w-[97%] m-auto mt-[-60px] px-6 py-4 rounded-3xl border-2 border-white grid md:gap-0 gap-4 grid-cols-2 md:grid-cols-4">
        <div className="flex items-center gap-4">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <span>
            <h5 className="text-white font-bold">{language == 'bn' ? 'তারিখ' : 'Date'}</h5>
            <p className="text-[#E9E9E9]">{event?.date}</p>
          </span>
        </div>
        <div className="flex items-center gap-4 md:border-l-2 border-dashed  py-6 px-2">
          <FaMapMarkerAlt className="text-white text-2xl" />
          <span>
            <h5 className="text-white font-bold">{language == 'bn' ? 'অবস্থান' : 'Location'}</h5>
            <p className="text-[#E9E9E9]">{event?.location}</p>
          </span>
        </div>
        <div className="flex items-center gap-4  md:border-l-2 border-dashed  py-6 px-2">
          <FaUserFriends className="text-white text-2xl" />
          <span>
            <h5 className="text-white font-bold">{language == 'bn' ? 'টিকেট বাকি' : 'Remaining'}</h5>
            <p className="text-[#E9E9E9]">{event?.ticketRemainig} Tickets</p>
          </span>
        </div>
        <div className="flex items-center gap-4  md:border-l-2 border-dashed  py-6 px-2">
          <FaMicrophone className="text-white text-2xl" />
          <span>
            <h5 className="text-white font-bold">{language == 'bn' ? 'স্পিকারস' : 'Speaker'}</h5>
            <p className="text-[#E9E9E9]">
              {event?.speaker} Professional speaker
            </p>
          </span>
        </div>
      </div>

      {/* event main content */}
      <main className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <EventAbout about={event} />
        <EventConference event={event} eventConference={event.eventConference} />
        <EventFaq event={event} />
        <EventSponsor />
        <ResentEvent event={event} setEvent={setEvent} />
      </main>
    </div>
  );
};

export default Event;
