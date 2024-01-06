
import { useContext, useState } from "react";
import { MyContext } from "../../../../Context/Context";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineVideoLibrary } from "react-icons/md";
import Loader from "../../../common/loader/Loader";
import { AiFillLock } from "react-icons/ai";
import CountDown from "./CountDown";
import moment from "moment";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import PromoCode from "./PromoCode";
import { FaHandPointRight } from "react-icons/fa";
import {  IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet";
import useEnrollmentCheck from "../../../../hooks/useEnrollmentCheck";
import quizI from "../../../../../src/assets/homeAboutUs/course.svg";
import assI from "../../../../../src/assets/homeAboutUs/blog.svg";



const IndividualCourse = () => {
  const {  language } = useContext(MyContext);
  const [course, setCourse] = useState([]);
  const { name } = useParams();
  // console.log(name)
  const [isVisible, setIsVisible] = useState(true);
  // console.log(course);
  //fetching data for individual course
  useEffect(() => {
    fetch(`https://ai-server-sooty.vercel.app/single-course/${name.replace(/-/g, ' ').trim()}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, [name]);

 

  const {
    _id,
    title,
    subtitle,
    coverVideo,
    cover,
    description,
    category,
    features,
    Collaborators,
    courseType,
    courseFee,
    discount,
    duration,
    instructor,
    insDesignation,
    insDescription,
    insImage,
    modules,
    startDate,
    endDate,
    courseDate,
    faqItems,
    goals,
    comments,
    assignments,
    preRequisites,
    eligibleUsers,
  } = course;
  // console.log(course)
 
  const discountAmount = courseFee * (1 - discount / 100);

  
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const last400Pixels = documentHeight - viewportHeight - 1500;

      if (scrollPosition > last400Pixels) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  const enrolled = useEnrollmentCheck(_id);
// console.log(enrolled);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  if (!title) return <Loader />;
  return (
   <div className="w-full">
     <Helmet>
        <title>Course - {title}</title>
        <meta name="description" content={subtitle} />
        <meta name="keywords" content={subtitle} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={subtitle} />
        <meta name="og:image" content={cover} />
      </Helmet>
     <section className="max-w-full gap-6 px-4 py-2 mx-auto my-5 md:my-10 xl:max-w-7xl md:px-10 xl:flex xl:gap-10 ">
      {/* Left Side Contents */}
      <section className="space-y-5 md:space-y-10">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <h2 className="text-xl ">{subtitle}</h2>
        <div className=" h-fit">
          {coverVideo ? (
         

              <ReactPlayer   width="100%"
               url={coverVideo} />
           
          
              
          ) : (
            <img src={cover} alt="cover" className="w-full mx-auto" />
          )}
        </div>

{/* Main features for mobile view */}
<div className="text-sm section md:w-96 md:hidden">
          <h3 className="my-3 text-xl font-bold">
            {" "}
            {language == "bn"
              ? "এই কোর্সের ভেতরে যা যা রয়েছে"
              : "Main Features:"}
          </h3>
          <div>
            {features?.map((feature, i) => (
              <div key={i}>
                <p className="flex items-center gap-3 my-3 text-lg">
                  <FaHandPointRight className="text-lg text-primary" />{" "}
                  {feature}
                </p>
              </div>
            ))}
          </div> 
          </div>




        <div className="md:hidden">
{courseType === "paid" && (
          <>
            <CountDown startDate={startDate} endDate={endDate} courseDate={courseDate} />
            <div className="flex justify-between section">
              <div className="">
                <h3 className="my-3 font-semibold text-md">
                  {" "}
                  {language == "bn" ? "ভর্তি শেষ:" : "Admission will end on:"}
                </h3>
                <p>{moment(endDate).format("MMMM Do YYYY")}</p>
              </div>
              <p className="border-[1px] border-black/25" />
              <div className="">
                <h3 className="my-3 text-sm font-semibold">
                  {" "}
                  {language == "bn"
                    ? "কোর্স শুরু হবে:"
                    : "Course will start on:"}
                </h3>
                <p>{moment(courseDate).format("LL")}</p>
              </div>
            </div>
          </>
        )}
</div>




        {/* description */}

        <div>
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn" ? "কোর্স বিবরণ:" : "Course Details:"}
          </h3>
          <div className="section bg-slate-100">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>

        {/* who can do the course */}
        <div>
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn"
              ? "কারা এই কোর্সের জন্য উপযুক্ত:"
              : "Who Are Suitable For This Course:"}
          </h3>
          <div className="grid text-lg section md:grid-cols-2">
            {eligibleUsers?.map((eli,i) => (
              <div key={i}>
                <p className="flex items-center gap-3 my-3 ">
                  <FaHandPointRight className="text-lg text-primary" /> {eli}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>

        {/* preRequisites */}
        <div>
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn"
              ? "কোর্সের প্রয়োজনীয়তা:"
              : "Course Requirements:"}
          </h3>
          <div className="grid section bg-slate-50 md:grid-cols-2">
            {preRequisites?.map((pre,i) => (
              <div key={i}>
                <p className="flex items-center gap-3 my-3 text-lg">
                  <FaHandPointRight className="text-lg text-primary" /> {pre}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
        {/* Course Goals */}
        <div>
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn" ? "কোর্সের লক্ষ্য:" : "Course Goals:"}
          </h3>
          <div className="grid text-lg section md:grid-cols-2">
            {goals?.map((goal, i) => (
              <div key={i}>
                <p className="flex items-center gap-3 my-3">
                  <FaHandPointRight className="text-lg text-primary" /> {goal}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
        {/* Course Curriculum */}
        <div className="">
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn"
              ? "কোর্সের পরিপূর্ণ কারিকুলাম:"
              : "Course Curriculum:"}
          </h3>

          <div className="p-4 bg-white rounded-lg">
            {modules?.map((module, i) => (
              <div key={i}>
                <details className="group [&_summary::-webkit-details-marker]:hidden rounded-xl p-2 bg-white ">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-100 p-3 text-gray-900">
                    <h2 className="font-bold cursor-pointer">{module.title}</h2>
                    <svg
                      className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="px-4 mt-4 leading-relaxed text-gray-700 ">
                    {module.contents.map((c,i) => (
                      <div
                        className="flex items-center justify-between"
                        key={i}
                      >
                        <p className="flex items-center gap-3 my-3 font-semibold cursor-pointer text-md md:text-lg">

                          
                           { c.type == "assignment" ? <span><img className="w-5" src={assI} alt="" /></span> : c.type =="quiz" ? <span className="w-5">{quizI}</span> : <MdOutlineVideoLibrary/>   }
                           
                        
                          
                          
                          
                          
                          
                          
                          <span>{c.title}</span> 
                        </p>

                        <AiFillLock className="text-gray-400" />
                      </div>
                    ))}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Course Instructor */}
        <div>
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn"
              ? "আপনি যার কাছ থেকে শিখবেন:"
              : "Course Instructor:"}
          </h3>
          <div className="section">
            <div className="md:flex items-center gap-5 p-5 border-b-[1px] text-center md:text-left">
              <figure className="flex justify-center">
                <img className="w-20 h-20 rounded-full" src={insImage} alt=" instructor" />
              </figure>
              <div>
                <h4 className="py-2 text-xl font-bold">{instructor}</h4>
                <p>{insDesignation}</p>
              </div>
            </div>
            <br className="" />
            <p className="text-lg">{insDescription}</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pb-0 my-5 md:my-0 md:pb-5 lg:pb-0">
          <h3 className="my-3 text-xl font-bold md:text-2xl">
            {" "}
            {language == "bn"
              ? "সচরাচর প্রশ্নগুলোর উত্তর:"
              : "Frequently Asked Questions:"}
          </h3>
          <div>
            <div className="space-y-2 ">
              {faqItems?.map((faq,i) => (
                <div key={i}>
                  <details className="group border-s-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                      <h2 className="text-lg font-bold text-gray-900">
                        {faq.question}
                      </h2>

                      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 font-normal leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* right Side Contents */}
      <section className="my-5 md:my-0">
        {/* Features */}
        <div className="hidden text-sm section md:w-96 md:block">
          <h3 className="my-3 text-xl font-bold">
            {" "}
            {language == "bn"
              ? "এই কোর্সের ভেতরে যা যা রয়েছে"
              : "Main Features:"}
          </h3>
          <div>
            {features?.map((feature, i) => (
              <div key={i}>
                <p className="flex items-center gap-3 my-3 text-lg">
                  <FaHandPointRight className="text-lg text-primary" />{" "}
                  {feature}
                </p>
              </div>
            ))}
          </div> 
          </div>

          <div className="sticky hidden mt-10 top-20 md:block">
            <div className="mt-5 text-base course-details section">
              {/* paid course enrollment */}
              {courseType === "paid" ? (
                <>
                  {" "}
                  <PromoCode
                    discountAmount={discountAmount}
                    courseFee={courseFee}
                    discount={discount}
                    course={course}
                    enrolled={enrolled}
                    endDate={endDate}
                  />
                </>
              ) : (
                //  free course enrollment
                <>
                  <p className="my-5 text-xl font-semibold">Free Course</p>
                 {
                  enrolled ? <div>
                    <p>You&apos;ve Enrolled Already</p>
                    <Link className="text-blue-600 " to='/dashboard/my-courses'>Check Here</Link>
                  </div> : 
                  <Link
                  state={{ _id, title, course }}
                  to="/free-course"
                  className="btn-view-red"
                >
                  Enroll Now
                </Link>
                 }
                </>
              )}
            </div>
            <div className="">
{courseType === "paid" && (
          <>
            <CountDown startDate={startDate} endDate={endDate} courseDate={courseDate} />
            <div className="flex justify-between section ">
              <div className="">
                <h3 className="my-3 font-semibold text-md">
                  {" "}
                  {language == "bn" ? "ভর্তি শেষ:" : "Admission will end on:"}
                </h3>
                <p>{moment(endDate).format("MMMM Do YYYY")}</p>
              </div>
              <p className="border-[1px] border-black/25" />
              <div className="">
                <h3 className="my-3 text-sm font-semibold">
                  {" "}
                  {language == "bn"
                    ? "কোর্স শুরু হবে:"
                    : "Course will start on:"}
                </h3>
                <p>{moment(courseDate).format("LL")}</p>
              </div>
            </div>
          </>
        )}
</div>
          </div>
        

        {/* Course count down */}


       
      </section>

    </section>


    <div className=" md:hidden">
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full max-h-[80vh] bg-white border shadow-lg z-10 overflow-y-auto">
          
          <p className="py-1 pl-3 text-xl font-semibold text-left md:text-2xl">
            
            {courseFee > 0 ? <>{discount ? discount != 0 ? <span className="mx-2 text-gray-500 line-through text-md">
            ৳ {courseFee}
          </span> : "" : ""}
          <span className="text-xl">৳{discountAmount}</span></> : "Free"}
          </p>
          <div className="flex justify-center">
            
            {
                  enrolled ? <div>
                    <p>You&apos;ve Enrolled Already</p>
                    <Link className="text-blue-600 " to='/dashboard/my-courses'>Check Here</Link>
                  </div> : 
                  <Link to="/enroll" state={{ course, discountAmount, courseFee }} className="w-11/12 bg-white btn-view-red">
                  Enroll Now <IoIosArrowForward/>
                </Link>
                 }
          </div>
        </div>
      )}
    </div>

   </div>
  );
};

export default IndividualCourse;
