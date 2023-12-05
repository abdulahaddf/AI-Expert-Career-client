import { Link, useLocation } from "react-router-dom";

import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";
import useCourses from "../../../../hooks/UseCourses";
import CourseCard from "../CourseCard";
import Loader from "../../../common/loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import useTitle from "../../../../hooks/useTitle";
import ReactGA from "react-ga4";
import DynamicBanner from "./DynamicBanner";

const AllCourses = () => {
  const { language } = useContext(MyContext);
  const [courses, isLoading] = useCourses();
  const freeCourses = courses?.filter(
    (course) => course.mainCategory == "Free"
    );
    const location = useLocation();
    const [banners, setBanners] = useState([]);
    const fundamentalCourses = courses?.filter(
    (course) => course.mainCategory == "Fundamental"
  );
  const jobBasedCourses = courses?.filter(
    (course) => course.mainCategory == "Job Requirement Based");
  

  const categories = [
    { category: "Machine learning", label: "Machine Learning Courses" },
    { category: "Data science", label: "Data Science Courses" },
    { category: "Data analysis", label: "Data Analysis Courses" },
    { category: "Computer vision", label: "Computer Vision Courses" },
    { category: "Deep learning", label: "Deep Learning Courses" },
    { category: "Prompt Engineering", label: "Prompt Engineering Courses" },
    {
      category: "Artificial Intelligence",
      label: "Artificial Intelligence Courses",
    },
    { category: "NLP", label: "NLP Courses" },
    { category: "IoT", label: "IoT Courses" },
  ];

  // console.log(courses);  


  // load dynamic banner data
  useEffect(() => {
    fetch(" https://ai-server-sooty.vercel.app/banners")
      .then((response) => response.json())
      .then((data) => setBanners(data));
  }, []);
 
  



useTitle("All Courses");
ReactGA.send({ hitType: "pageview", page: "/courses", title: "Courses Page" });
 // scrollTo
 useEffect(() => {
  window.scrollTo(0,0);
}, [location]);

  if (isLoading && !banners && !courses) return <Loader />;
  return (
    <div className="md:w-4/5 px-3 md:px-0 mx-auto">
      {/* Banner */}
      <div className="my-10 md:w-11/12 flex flex-col gap-5 lg:flex-row mx-auto">
        {/* Dynamic banners and titles */}
       <DynamicBanner banners={banners}/>

        {/* Course categories */}
       <div className="md:w-3/5 mx-auto">
          <h1 className="text-3xl text-center font-semibold mb-5">{language == "bn" ? "প্রজেক্ট বেইজড কোর্সগুলো" : "Course Categories"}</h1>
       <div className="grid grid-cols-2 md:grid-cols-3 text-md h-fit w-full gap-5 order-2 my-5 lg:my-0 lg:order-1 content-center ">
          {categories?.map((categoryItem) => (
            <Link
              key={categoryItem.category}
              to={`/all-courses/${categoryItem.category}`}
              state={courses}
              className="glass md:w-[180px] p-3 hover:bg-slate-200 rounded-lg"
            >
              <h2>{categoryItem.label}</h2>
              <p>
                {
                  courses?.filter(
                    (course) => course.category === categoryItem.category
                  ).length
                }{" "}
                Courses
              </p>
            </Link>
          ))}
        </div>
       </div>
      </div>

      <section className="my-14">
        <h2 className="text-[30px] font-bold text-center">
          {language == "bn" ? "ফ্রি কোর্স সমূহ" : "Free Courses"}
        </h2>
        <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " />

        <div className="my-10">
          {/* Development courses card ** data from array of object  */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 justify-center">
            {freeCourses?.slice(0, 4).map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>

          <div className="flex justify-center my-10">
            <Link state={courses} to="/allCourses/Free" className="btn-view">
              {language == "bn" ? "আরো দেখুন" : "See More"}
            </Link>
          </div>
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-[30px] font-bold text-center">
          {language == "bn"
            ? "ফান্ডামেন্টাল কোর্স সমূহ"
            : "Fundamental Courses"}
        </h2>
        <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " />

        <div className="my-10">
          {/* Development courses card ** data from array of object  */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 justify-center">
            {fundamentalCourses?.slice(0, 4).map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>

          <div className="flex justify-center my-10">
            <Link
              state={courses}
              to="/allCourses/Fundamental"
              className="btn-view"
            >
              {language == "bn" ? "আরো দেখুন" : "See More"}
            </Link>
          </div>
        </div>
      </section>
      <section className="my-14">
        <h2 className="text-[30px] font-bold text-center">
          {language == "bn"
            ? "জব রিকয়ারমেন্ট বেসড কোর্স সমূহ"
            : "Job Requirement Based Courses"}
        </h2>
        <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " />

        <div className="my-10">
          {/* Development courses card ** data from array of object  */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 justify-center">
            {jobBasedCourses?.slice(0, 4).map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>

          <div className="flex justify-center my-10 ">
            <Link
              state={courses}
              to="/allCourses/Job Requirement Based"
              className="btn-view"
            >
              {language == "bn" ? "আরো দেখুন" : "See More"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCourses;
