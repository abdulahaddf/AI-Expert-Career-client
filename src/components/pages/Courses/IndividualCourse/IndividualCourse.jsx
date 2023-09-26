import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { BsHeart, BsFillPeopleFill, BsStopwatch } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import Right from '../Assests/rights.svg';
import bkash from '../Assests/bkash.svg';
import rocket from '../Assests/rocket.svg';
import nagad from '../Assests/nagad.svg';
import upay from '../Assests/upay.svg';
import masterCard from '../Assests/masterCard.svg';
import paypal from '../Assests/paypal.svg';
import instructor from '../Assests/instructor.svg';
import image1 from '../Assests/image1.png';
import image2 from '../Assests/image2.png';
import image3 from '../Assests/image3.png';
import image4 from '../Assests/image4.png';
import { useContext } from 'react';
import { MyContext } from '../../../../Contaxt/Context';
import { useEffect } from 'react';
const IndividualCourse = () => {
  const { addToCart, setAddToCart, language } = useContext(MyContext);
  const handleAddtoCart = () => {
    setAddToCart([...addToCart, 'one']);
  };
  // for course content
  const courseContent = [
    {
      title: 'Module 1: Introduce to web design',
      contents: [
        '1. Introduction to Web designing preview topic',
        '2. Introduce to Html',
        '3. Introduce to Css',
        '4. Introduce to Java Script',
        '5. Introduce to Php, JQuery',
      ],
    },
    {
      title: 'Module 2: Introduce to JavaScript',
      contents: [
        '1. Introduction to Web designing preview topic',
        '2. Introduce to Html',
        '3. Introduce to Css',
        '4. Introduce to Java Script',
        '5. Introduce to Php, JQuery',
      ],
    },
    {
      title: 'Module 1: Introduce to DOM',
      contents: [
        '1. Introduction to Web designing preview topic',
        '2. Introduce to Html',
        '3. Introduce to Css',
        '4. Introduce to Java Script',
        '5. Introduce to Php, JQuery',
      ],
    },
  ];

  //   for course ensure
  const courseEnsures = [
    'Responsive web page and interactive website design',
    'Responsive web page and interactive website design',
    'All tag & Customized Feature',
    'All tag & Customized Feature',
  ];

  //   for About course
  const aboutCourses = [
    {
      title: 'What is Web design course',
      contents: [
        'Learn the A to Z of web designing, starting from HTML, CSS, and domain hosting to responsive website design',
        'Learn the A to Z of web designing, starting from HTML, CSS, and domain hosting to responsive website design',
        'Learn the A to Z of web designing, starting from HTML, CSS, and domain hosting to responsive website design',
      ],
    },
    {
      title: 'What is Web design course',
      contents: [
        'Learn the A to Z of web designing, starting from HTML, CSS, and domain hosting to responsive website design',
        'Learn the A to Z of web designing, starting from HTML, CSS, and domain hosting to responsive website design',
        'Learn the A to Z of web designing, starting from HTML, CSS, and domain hosting to responsive website design',
      ],
    },
  ];

  //   payment methods

  const methods = [bkash, rocket, nagad, upay, masterCard, paypal];

  //   for earn certificate

  const earnCertificates = [
    'Watch the course videos',
    'Complete the Class Projects - look out for the videos marked with image',
    'Request your certificate when all your module are complete.',
  ];

  //   for FAQ

  const faqs = [
    {
      question: 'I need to ask a question, where do I do that?',
      answer: 'then use the contact us form found at the bottom of the site.',
    },
    {
      question: 'I need to ask a question, where do I do that?',
      answer: 'then use the contact us form found at the bottom of the site.',
    },
    {
      question: 'I need to ask a question, where do I do that?',
      answer: 'then use the contact us form found at the bottom of the site.',
    },
  ];

  //   for more courses
  const machineLearningCourse = [
    {
      id: 1,
      courseName: 'Machine Learning Courses',
      totalCourses: '11 Courses',
      image: image1,
    },
    {
      id: 2,
      courseName: 'Machine Learning Courses',
      totalCourses: '11 Courses',
      image: image2,
    },
    {
      id: 3,
      courseName: 'Machine Learning Courses',
      totalCourses: '11 Courses',
      image: image3,
    },
    {
      id: 4,
      courseName: 'Machine Learning Courses',
      totalCourses: '11 Courses',
      image: image4,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-4 py-2 mx-auto max-w-full text-md md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:px-20 2xl:px-8">

      <div className="grid grid-rows-2 lg:grid-cols-8 sm:gap-y-12 lg:gap-x-12 mt-[100px]">
        
        {/* left side  */}
        <div className="col-span-8 row-span-3 lg:col-span-5">
          <p className=" font-bold text-[#4E4E4E] pb-4">
            {language == 'bn'? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' :'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
          </p>

          {/* course contents  */}
          <div>

            <span className="lg:text-2xl font-bold">{language == 'bn' ? 'কোর্স মডিউল' : 'Course Contents'}</span>
            
            <div className=" rounded-tr-[10px] rounded-bl-[10px] bg-white w-full lg:w-[692px] mt-4">

              {courseContent?.map((course, i) => (

                <div key={i} className="pt-5 ">

                  <div className=" rounded-[10px] p-2">

                    <Disclosure>
                      {({ open }) => (
                        <>
                          
                          <Disclosure.Button className="w-full flex space-x-3 lg:flex items-center justify-between px-4 pb-6 text-left border-b-2 border-dashed border-black">

                            <span className="text-[#DE000A] font-bold lg:text-2xl">
                              {course.title}
                            </span>

                            <div className="flex gap-4">
                              <div className="w-20 lg:w-40 text-center group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

                                <span
                                className="absolute inset-y-0 left-0 w-[2px]  bg-[#ffffff] transition-all group-hover:w-full"
                                ></span>
                                
                                <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                                  {language == 'bn'? 'দেখুন' :'Checkout'}
                                </span>

                              </div>

                              <ChevronUpIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                  } h-10 w-10 text-[#DE000A] font-bold`}
                              />

                            </div>
                          </Disclosure.Button>

                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">

                            {course.contents?.map((content, i) => (
                              <p key={i}>{content}</p>
                            ))}

                          </Disclosure.Panel>

                        </>
                      )}
                    </Disclosure>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* course ensure  */}
          <div className="mt-12 ">
            <span className="lg:text-2xl font-bold">{language == 'bn' ? 'কোর্সটি আপনাকে নিশ্চিত করবে' : 'Course Ensure'}</span>
            <div className="grid lg:grid-cols-2 gap-8 lg:w-[699px] bg-white p-7 mt-5">
              {courseEnsures.map((courseEnsure, i) => (
                <div key={i} className="flex gap-x-3">
                  <img src={Right} alt="" />
                  <p>{courseEnsure}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor  */}

          <div className="mt-[55px]">
            <h4 className="mb-4 lg:text-2xl font-bold">{language == 'bn' ? 'কোর্স ইন্সট্রাক্টর' : 'Instructor'}</h4>
            <div className="lg:w-[699px] bg-white rounded p-4">
              <div className="flex items-center gap-x-4">
                <div>
                  <img src={instructor} alt="" />
                </div>
                <div className="">
                  <h5 className="font-bold lg:text-2xl cursor-pointer">
                    John Doe
                  </h5>
                  <p className="font-bold">Web Designer & Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Course  */}

          <div className="mt-[55px]">
            <div>
              <h2 className="lg:text-2xl font-bold mb-4">
                {language == 'bn' ? 'কোর্স বিবরণ' : 'Details About The Courses'}
              </h2>
              <div className=" rounded-tr-[10px] rounded-bl-[10px] bg-white lg:w-[692px] mt-4">
                {aboutCourses?.map((about, i) => (
                  <div key={i} className="pt-5 ">
                    <div className=" rounded-[10px] p-2">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between px-4 py-2 text-left border-b-2 border-dashed border-black">
                              <span className="text-[#DE000A] font-bold lg:text-2xl">
                                {about.title}
                              </span>
                              <div className="flex gap-4">
                                <ChevronUpIcon
                                  className={`${open ? 'rotate-180 transform' : ''
                                    } h-10 w-10 text-[#DE000A] font-bold`}
                                />
                              </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              {about.contents?.map((content, i) => (
                                <li key={i} className="text-xl">
                                  {content}
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* payment methods  */}
          <div>
            <div>
              <h2 className="mt-8 lg:text-2xl font-bold">{language == 'bn' ? 'পেমেন্ট সম্পন্ন করুন' : 'Payment Accept'}</h2>
              <div className=" rounded-tr-[10px] rounded-bl-[10px] bg-white lg:w-[692px] mt-4 p-4">
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
                  {methods.map((method, i) => (
                    <img key={i} src={method} alt="" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* earn certificate  */}

          <div className="mt-[35px]">
            <h2 className="font-bold lg:text-2xl">{language == 'bn' ? 'কিভাবে সার্টিফিকেট পাবেন' : 'How to earn your certificate'}</h2>
            <div className="rounded-tr-[10px] rounded-bl-[10px] bg-white lg:w-[692px] mt-4">
              <div className="grid gap-y-3 p-5">
                {earnCertificates.map((certificate, i) => (
                  <div key={i} className="flex gap-x-3 ">
                    <img src={Right} alt="" />
                    <p>{certificate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* skills and elements  */}

          <div className="mt-[35px]">
            <h2 className="font-bold lg:text-2xl">{language == 'bn' ? 'প্রয়োজনীয় স্কিল ও উপকরণ' : 'Necessary Skills and Elements'}</h2>
            <div className="rounded-tr-[10px] rounded-bl-[10px] bg-white lg:w-[692px] mt-4">
              <div className="grid gap-y-3 p-5">
                {earnCertificates.map((certificate, i) => (
                  <div key={i} className="flex gap-x-3 ">
                    <img src={Right} alt="" />
                    <p>{certificate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ section */}

          <div>
            <h2 className="font-bold lg:text-2xl mt-[35px]">{language == 'bn' ? 'যেকোনো জিজ্ঞাসা' : 'FAQ'}</h2>
            <div className=" rounded-tr-[10px] rounded-bl-[10px] bg-white lg:w-[692px] mt-4">
                {faqs?.map((faq, i) => (
                  <div key={i} className="pt-5 ">
                    <div className=" rounded-[10px] p-2">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between px-4 py-2 text-left border-b-2 border-dashed border-black">
                              <span className="text-[#DE000A] font-bold lg:text-2xl">
                                {faq.question}
                              </span>
                              <div className="flex gap-4">
                                <ChevronUpIcon
                                  className={`${open ? 'rotate-180 transform' : ''
                                    } h-10 w-10 text-[#DE000A] font-bold`}
                                />
                              </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <li key={i} className="text-xl">
                                  {faq.answer}
                                </li>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          
        </div>

        {/* right side  */}
        <div className="lg:w-[446px] h-[582px] bg-white rounded-[10px] col-span-8 row-span-2 lg:col-span-3">
          <div>
            <iframe
              width="100%"
              height="250"
              className="rounded-t-[10px]"
              src="https://www.youtube.com/embed/MH94g9zOMSg"
              title="Baarishein | Anuv Jain | Lo-Fi Mix | RAHUL NEXT LEVEL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="px-4">
            <div className="flex justify-between pt-4 pb-5">
              <p className="font-bold text-[20px]">TK 1600</p>
              <BsHeart className="text-red-700 font-extrabold h-6 w-6 cursor-pointer"></BsHeart>
            </div>
            <div className="pb-5 flex gap-x-6 items-center">
              <BsFillPeopleFill className="text-[#EB3223]"></BsFillPeopleFill>
              <p className="font-bold">1002 Students</p>
            </div>
            <div className="flex gap-x-6 items-center pb-5">
              <BsStopwatch className="text-[#EB3223]"></BsStopwatch>
              <p className="font-bold text-[#313131]">
                Course duration 8 hours + your study.
              </p>
            </div>
            <div className="flex gap-x-6 items-center pb-5">
              <FaClipboardList className="text-[#EB3223]"></FaClipboardList>
              <p className="font-bold text-[#313131]">8 Module</p>
            </div>
            <div className="flex gap-x-6 items-center pb-5">
              <SiYoutubemusic className="text-[#EB3223]"></SiYoutubemusic>
              <p className="font-bold text-[#313131]">50 video</p>
            </div>
            <button
              onClick={handleAddtoCart}
              className="lg:w-[406px] w-full text-[#ED1B24] font-bold border border-[#ED1B24] rounded-[6px] py-3"
            >
              Add To Cart
            </button>
          </div>
        </div>
        
      </div>

      {/* Related Course  */}
      <div>
        <h2 className="lg:text-2xl font-bold mt-10">{language == 'bn' ? 'উক্ত কোর্স সম্পর্কিত আরো কোর্সসমূহ' : 'Related Courses'}</h2>
        <div className=" grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-[40px] justify-center pt-[30px]  pb-[50px]">
          {machineLearningCourse?.map((machineLearning) => (
            <div
              key={machineLearning.id}
              className="lg:w-[280px] lg:h-[300px] bg-white flex items-center flex-col rounded-[7px]">
              <img
                className="lg:w-[279px] lg:h-[168px] pt-0"
                src={machineLearning?.image}
                alt=""
              />
              <h2 className="pt-[15px] lg:text-2xl font-bold px-[43px] text-center">
                {machineLearning.courseName}
              </h2>
              <p className="lg:text-2xl">{machineLearning.totalCourses}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default IndividualCourse;
