import { FaClipboardList, FaHandPointRight } from "react-icons/fa";

import { useContext, useState } from "react";
import { MyContext } from "../../../../Context/Context";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineVideoLibrary } from "react-icons/md";
import Loader from "../../../common/loader/Loader";
import { AiFillLock } from "react-icons/ai";
import CountDown from "./CountDown";
import moment from "moment";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import PromoCode from "./PromoCode";
const IndividualCourse = () => {
  
  const { addToCart, setAddToCart, language } = useContext(MyContext);
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  console.log(course);

  //fetching data for individual course
  useEffect(() => {
    fetch(`http://localhost:5000/singlecourse/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
    
  }, [id, course]);

  const handleAddtoCart = () => {
    setAddToCart([...addToCart, "one"]);
  };

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
  // console.log(coverVideo)
  // const discountAmount = (discount / 100) * courseFee;
  const discountAmount = courseFee * (1 - discount / 100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!title) return <Loader />;
  return (
    <section className="px-4 py-2 my-10 mx-auto  max-w-full xl:w-11/12 md:px-10 flex gap-10 ">
      {/* Left Side Contents */}
      <section className="space-y-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-xl ">{subtitle}</h2>
        <div className="w-[768px]">
          {coverVideo ? (
            <ReactPlayer url={coverVideo} />
          ) : (
            <img src={cover} alt="" className="max-w-3xl" />
          )}
        </div>

        {/* description */}

        <div>
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn" ? "কোর্স বিবরণ:" : "Course Details:"}
          </h3>
          <div className="section">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>

        {/* who can do the course */}
        <div>
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "কারা এই কোর্সের জন্য উপযুক্ত:"
              : "Who Are Suitable For This Course:"}
          </h3>
          <div className="section grid grid-cols-2 text-lg">
            {eligibleUsers?.map((eli) => (
              <div key={eli}>
                <p className="flex items-center gap-3 my-3 ">
                  <FaHandPointRight className="text-primary text-lg" /> {eli}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>

        {/* preRequisites */}
        <div>
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "কোর্সের প্রয়োজনীয়তা:"
              : "Course Requirements:"}
          </h3>
          <div className="section grid grid-cols-2">
            {preRequisites?.map((pre) => (
              <div key={pre}>
                <p className="flex items-center gap-3 my-3 text-lg">
                  <FaHandPointRight className="text-primary text-lg" /> {pre}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
        {/* Course Goals */}
        <div>
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn" ? "কোর্সের লক্ষ্য:" : "Course Goals:"}
          </h3>
          <div className="section grid grid-cols-2 text-lg">
            {goals?.map((goal) => (
              <div key={goal}>
                <p className="flex items-center gap-3 my-3">
                  <FaHandPointRight className="text-primary text-lg" /> {goal}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
        {/* Course Curriculum */}
        <div className="">
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "কোর্সের পরিপূর্ণ কারিকুলাম:"
              : "Course Curriculum:"}
          </h3>

          <div className="bg-white p-4 rounded-lg">
            {modules?.map((module) => (
              <div key={module}>
                <details className="group [&_summary::-webkit-details-marker]:hidden rounded-xl p-2 bg-white ">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-100 p-3 text-gray-900">
                    <h2 className="font-bold cursor-pointer">{module.title}</h2>
                    <svg
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
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
                  <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                    {module.contents.map((c) => (
                      <div
                        className="flex items-center justify-between"
                        key={c}
                      >
                        <p className="flex items-center gap-3 my-3 cursor-pointer text-lg font-semibold">
                          <MdOutlineVideoLibrary /> {c.title}
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
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "আপনি যার কাছ থেকে শিখবেন:"
              : "Course Instructor:"}
          </h3>
          <div className="section">
            <div className="flex items-center gap-5 p-5 border-b-[1px]">
              <figure>
                <img className="rounded-full w-20 h-20" src={insImage} alt="" />
              </figure>
              <div>
                <h4 className="text-xl font-bold py-2">{instructor}</h4>
                <p>{insDesignation}</p>
              </div>
            </div>
            <br className=" " />
            <p className="">{insDescription}</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "সচরাচর প্রশ্নগুলোর উত্তর:"
              : "Frequently Asked Questions:"}
          </h3>
          <div>
            <div className="space-y-2 ">
              {faqItems?.map((faq) => (
                <div key={faq}>
                  <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                      <h2 className="text-lg font-bold text-gray-900">
                        {faq.question}
                      </h2>

                      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
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

                    <p className="mt-4 leading-relaxed font-normal text-gray-700">
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
      <section className="">
        {/* Features */}
        <div className="section w-96 text-sm ">
          <h3 className="text-xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "এই কোর্সের ভেতরে যা যা রয়েছে"
              : "Main Features:"}
          </h3>
          <div>
            {features?.map((feature) => (
              <div key={feature}>
                <p className="flex items-center gap-3 my-3 text-lg">
                  <FaHandPointRight className="text-primary text-lg" />{" "}
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <div className=" border-t-[1px] py-2">
            <div className="course-details text-base mt-5">
              {/* paid course enrollment */}
              {courseType === "paid" ? (
                <>
                  {" "}
                  <PromoCode
                    discountAmount={discountAmount}
                    courseFee={courseFee}
                    discount={discount}
                    course={course}
                  />
                </>
              ) : (
                //  free course enrollment
                <>
                  <p className="text-xl font-semibold my-5">Free Course</p>
                  <Link state={{_id, title, course}} to="/free-course" className="button-30">Enroll Now</Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Course count down */}

        {courseType === "paid" && (
          <>
            <CountDown startDate={startDate} endDate={endDate} />
            <div className="section flex justify-between ">
              <div className="">
                <h3 className="text-md font-semibold my-3">
                  {" "}
                  {language == "bn" ? "ভর্তি শেষ:" : "Admission will end on:"}
                </h3>
                <p>{moment(endDate).format("MMMM Do YYYY")}</p>
              </div>
              <p className="border-[1px] border-black/25" />
              <div className="">
                <h3 className="text-sm font-semibold my-3">
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
      </section>
    </section>
  );
};

export default IndividualCourse;
