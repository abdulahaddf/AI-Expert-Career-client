import { Link } from 'react-router-dom';
import line from '../../../assets/line.svg';
import Blog1 from '../../../assets/Blog1.svg';
import Blog2 from '../../../assets/Blog2.svg';
import viewIcon from '../../../assets/viewIcon.svg';
import commentIcon from '../../../assets/commentIcon.svg';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../../Contaxt/Context';
import { RiMenu2Fill, RiMenu4Line } from 'react-icons/ri'

const BlogData = [
  {
    id: '1',
    img: Blog1,
    price: '$50',
    view: '50',
    comment: '50',
    headline: '6-DOF AI Vision Robotic Arm....',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_1',
  },
  {
    id: '2',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B...',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_2',
  },
  {
    id: '3',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B...',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_2',
  },
  {
    id: '4',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B...',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_3',
  },
  {
    id: '5',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B...',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_4',
  },
  {
    id: '6',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B...',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_5',
  },
];

const CaseStudiesData = [
  {
    id: '1',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: '6-DOF AI Vision Robotic Arm',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
  },
  {
    id: '2',
    img: Blog2,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_2',
  },
  {
    id: '3',
    img: Blog1,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_2',
  },
  {
    id: '4',
    img: Blog1,
    price: '$50',
    view: '50',
    comment: '50',
    headline: 'Top 7 Robotics-Only News B',
    info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,..... ",
    category: 'blog_1',
  },
];

const HomeBlogs = () => {
  const [activeButton, setActiveButton] = useState('Blog');
  const [activeSection, setActiveSection] = useState('Case Studies');
  // const [seeMore, setSeeMore] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const { language } = useContext(MyContext)

  useEffect(() => {
    setActiveButton('Blog');
    setActiveSection('Case Studies');
  }, []);


  const [menu, setMenu] = useState(!true)
  const menuItem = (
    <>
      <li>
        <button
          onClick={() => {
            setActiveButton('Blog');
            setActiveSection('Blog');
          }}
          className={`${activeButton === 'Blog'
            ? 'relative bg-red-600  px-3 py-2  rounded-t font-bold text-[#ffffff] '
            : 'pending px-3 py-2 hover:bg-red-400 rounded-t'
            }`}
        >
          {language === 'bn' ? 'সকল' : 'All'}
        </button>
      </li>

      <li>
        <button
          onClick={() => setActiveButton('blog_1')}
          className={`${activeButton === 'blog_1'
            ? 'relative bg-red-600  px-3 py-2  rounded-t font-bold text-[#ffffff] '
            : 'pending px-3 py-2 hover:bg-red-400 rounded-t'
            }`}
        >
          {language === 'bn' ? 'স্বাস্থ্য' : 'Health'}
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveButton('blog_2')}
          className={`${activeButton === 'blog_2'
            ? 'relative bg-red-600  px-3 py-2  rounded-t font-bold text-[#ffffff] '
            : 'pending px-3 py-2 hover:bg-red-400 rounded-t'
            }`}
        >
          {language === 'bn' ? 'কৃষি' : 'agriculture'}
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveButton('blog_3')}
          className={`${activeButton === 'blog_3'
            ? 'relative bg-red-600  px-3 py-2  rounded-t font-bold text-[#ffffff] '
            : 'pending px-3 py-2 hover:bg-red-400 rounded-t'
            }`}
        >
          {language === 'bn' ? 'ব্যাংকিং' : 'Banking'}
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveButton('blog_4')}
          className={`${activeButton === 'blog_4'
            ? 'relative bg-red-600  px-3 py-2  rounded-t font-bold text-[#ffffff] '
            : 'pending px-3 py-2 hover:bg-red-400 rounded-t'
            }`}
        >
          {language === 'bn' ? 'শিক্ষা' : 'Education'}
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveButton('blog_5')}
          className={`${activeButton === 'blog_5'
            ? 'relative bg-red-600  px-3 py-2  rounded-t font-bold text-[#ffffff] '
            : 'pending px-3 py-2 hover:bg-red-400 rounded-t'
            }`}
        >
          {language === 'bn' ? 'ক্রাইম সনাক্তকরন' : 'Crime detection'}
        </button>
      </li>
    </>
  );

  return (
    <div className="mt-[80px] mb-[35px] relative">
      <h3 className="text-center font-bold text-[30px]">{language === 'bn' ? 'কৃত্রিম বুদ্ধিমত্তা সম্পর্কে পড়ুন' : 'Read About Artificial Intelligent'}</h3>
      <center>
        <img
          src={line}
          alt=""
          className="select-none pointer-events-none no-select unselectable"
        />
      </center>
      <p className="sm:w-[50%] mx-auto text-center mt-4 mb-[25px] text-[21px] font-bold">
        {language === 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছেদিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'No matter what background you are a student or learner, the right roadmap can get you there. Can give top success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
      </p>

      <div className="my-16 grid grid-cols-2 lg:w-[60%] mx-auto text-[22px] font-bold">
        <button
          className={`border-2 border-[#000] py-[10px] ${activeButton === 'Blog'
            ? 'bg-red-500 my-btn text-white  '
            : 'hover:bg-[#FF265A] hover:border-none'
            }`}
          onClick={() => setActiveButton('Blog')}
        >
          {language === 'bn' ? 'ব্লগ' : 'Blogs'}
        </button>
        {/* <Link
          className="px-[32px] duration-200 my-btn py-[8px] bg-[#FF265A] rounded-md text-white text-[11px] md:text-lg h-full shadow-lg"
          to={`/payment/${id}`}
        >
          {language === 'bn' ? 'ক্রয় করুন' : 'Buy'}
        </Link> */}
        <button
          className={`border-2 border-[#000] py-[10px] ${activeButton === 'Case Studies'
            ? 'bg-red-500  my-btn  text-white border-none hover:bg-[#FF265A]'
            : 'hover:bg-[#FF265A] hover:border-none'
            }`}
          onClick={() => {
            setActiveButton('Case Studies');
            setActiveSection('Case Studies');
          }}
        >
          {language === 'bn' ? 'কেইস স্টাডিজ' : 'Case Studies'}
        </button>
      </div>

      <div className=' flex lg:hidden'>
        <RiMenu2Fill onClick={() => setMenu(true)} className={!menu ? 'text-2xl ' : 'hidden'}></RiMenu2Fill>
        <RiMenu4Line onClick={() => setMenu(false)} className={menu ? 'text-2xl ' : 'hidden'}></RiMenu4Line>

      </div>
      <div className={menu ? 'items-center lg:hidden flex-wrap px-10 lg:text-[18px] font-[700] flex gap-16' : 'hidden'}>
        {menuItem}
      </div>

      <div className="mb-[17px] hidden lg:flex h-7 lg:h-10 lg:border-b-2 lg:border-[#B7B7B7]">
        <ul className="items-center  text-sm lg:text-[18px] lg:font-[700] flex  gap-16">
          {menuItem}
        </ul>
      </div>
      {/* Blog */}
      {activeButton.includes('Blog' || 'blog') && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-[17px]">
          {BlogData.filter(
            (card) => activeButton === 'Blog' || card.category === activeButton
          ).map(({ id, img, headline, info, comment, view }) => {
            const handleToggleExpand = (cardId) => {
              if (expandedCardId === cardId) {
                setExpandedCardId(null);
              } else {
                setExpandedCardId(cardId);
              }
            };

            const isCardExpanded = expandedCardId === id;

            return (
              <div
                key={id}
                className="px-[17px] py-[15px] border-[0.5px] border-gray-50 shadow-lg hover:shadow-lg bg-[#FFFFFF] rounded-[10px]"
              >
                <center>
                  <img
                    className="md:mb-[18px] mb-2 w-full shadow-md rounded-[10px]"
                    src={img}
                    alt=""
                  />
                </center>
                <div className="">
                  <h3 className="text-[20px] text-sm md:text-lg font-bold mb-[20px]">
                    {headline}
                  </h3>
                  <p className="mb-[40px] text-[10px]">
                    {isCardExpanded ? info : info.slice(0, 100) + ' ... '}
                    {info.length > 150 && (
                      <button
                        className="text-[#ED1B24] "
                        onClick={() => handleToggleExpand(id)}
                      >
                        {isCardExpanded ? 'See less' : 'See more'}
                      </button>
                    )}
                  </p>
                  <div className="flex justify-between items-center ">
                    <Link to={`/individual-blog/${id}`} >
                      <button className="md:px-[32px] px-2 text-[10px] md:text-lg py-1 md:py-[8px] bg-[#ED1B24] my-btn rounded-md text-white shadow-lg"> {language === 'bn' ? 'পড়ুন' : 'Read'}</button>
                    </Link>
                    <div className="flex justify-between items-center gap-2 md:gap-5">
                      <h6 className="flex justify-center items-center gap-2 text-[10px] md:text-[17px] font-bold">
                        <img className=' w-5 /12 md:w-full' src={viewIcon} alt="" /> {view}
                      </h6>
                      <h6 className="flex justify-center items-center text-[10px] md:text-[17px] gap-2  font-bold">
                        <img className='w-5/12 md:w-full' src={commentIcon} alt="" /> {comment}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Case Studies */}
      {activeSection === 'Case Studies' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[17px]">
          {CaseStudiesData.filter(
            (card) =>
              activeButton === 'Case Studies' || card.category === activeButton
          ).map(({ id, img, headline, info, comment, view }) => {
            const handleToggleExpand1 = (cardId) => {
              if (expandedCardId === cardId) {
                setExpandedCardId(null);
              } else {
                setExpandedCardId(cardId);
              }
            };

            const isCardExpanded = expandedCardId === id;

            return (
              <div
                key={id}
                className="px-[17px] py-[15px] border-[0.5px] border-gray-50 shadow-lg hover:shadow-lg bg-[#FFFFFF] rounded-[10px]"
              >
                <center>
                  <img
                    className="mb-[18px] w-full shadow-md rounded-[10px]"
                    src={img}
                    alt=""
                  />
                </center>
                <div className="">
                  <h3 className="text-[20px] font-bold mb-[20px]">
                    {headline}
                  </h3>
                  <p className="mb-[40px]">
                    {isCardExpanded ? info : info.slice(0, 150) + ' ... '}
                    {info.length > 150 && (
                      <button
                        className="text-[#ED1B24] "
                        onClick={() => handleToggleExpand1(id)}
                      >
                        {isCardExpanded ? 'See less' : 'See more'}
                      </button>
                    )}
                  </p>
                  <div className="flex justify-between items-center gap-6">
                    <Link to={`/individual-case-study/${id}`} >
                      <button className="px-[32px] py-[8px] bg-[#ED1B24] my-btn rounded-md text-white shadow-lg"> {language === 'bn' ? 'পড়ুন' : 'Read'}</button>
                    </Link>
                    <div className="flex justify-between items-center gap-5">
                      <h6 className="flex justify-center items-center gap-2 text-[17px] font-bold">
                        <img src={viewIcon} alt="" /> {view}
                      </h6>
                      <h6 className="flex justify-center items-center gap-1 text-[17px] font-bold">
                        <img src={commentIcon} alt="" /> {comment}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <center>
        <Link to={activeButton === 'Case Studies' ? `/case-study` : '/blog'}>
          <button className="px-[32px] py-[8px] bg-red-300 hover:bg-red-500 my-btn rounded-md text-white text-[19px] font-bold shadow-lg mt-[30px]">
            {language === 'bn' ? 'আরো পড়ুন' : 'Read More'}
          </button>
        </Link>
      </center>
    </div>
  );
};

export default HomeBlogs;
