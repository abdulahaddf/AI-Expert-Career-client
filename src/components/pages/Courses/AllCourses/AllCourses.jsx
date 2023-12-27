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
    (course) => course.mainCategory == "Professional"
  );

  
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
  ReactGA.send({
    hitType: "pageview",
    page: "/courses",
    title: "Courses Page",
  });
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (isLoading && !banners && !courses) return <Loader />;
  return (
    <div className="px-3 mx-auto md:w-4/5 max-w-7xl md:px-0 ">
      {/* Banner */}
      <div className="flex flex-col items-center justify-center gap-5 mx-auto my-10 md:gap-10 xl:flex-row">
        {/* Dynamic banners and titles */}
        <DynamicBanner banners={banners} />

        {/* Course categories */}
        <div className="mx-auto md:w-3/5">
          <h1 className="mb-5 text-3xl font-semibold text-center">
            {language == "bn"
              ? "কোর্স ক্যাটাগরি"
              : "Course Categories"}
          </h1>
          <div className="grid content-center order-2 w-full grid-cols-2 gap-5 my-5 md:grid-cols-3 text-md h-fit lg:my-0 lg:order-1 ">
            {categories?.map((categoryItem) => (
              <Link
                key={categoryItem.category}
                to={`/all-courses/${categoryItem.category}`}
                state={courses}
                className="glass md:w-[180px] p-3 hover:bg-zinc-900 bg-black rounded-lg text-center text-white"
              >
                <h2 className="text-white">{categoryItem.label}</h2>
                <p>
                  {
                    courses?.filter(
                      (course) => course.category === categoryItem.category
                    ).length == 0 ? <p className="text-red-600">Coming Soon</p>  : courses?.filter(
                      (course) => course.category === categoryItem.category
                    ).length + " Courses"
                  }
                  
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
          {freeCourses?.length > 0 ? (
            <>
              <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {freeCourses?.slice(0, 4).map((course) => (
                  <CourseCard key={course._id} course={course}></CourseCard>
                ))}
              </div>

              <div className="flex justify-center my-10">
                <Link
                  state={courses}
                  to="/allCourses/Free"
                  className="btn-view"
                >
                  {language == "bn" ? "আরো দেখুন" : "See More"}
                </Link>
              </div>
            </>
          ) : (
            <p className="text-2xl text-center ">Courses are Coming Soon</p>
          )}
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
          {fundamentalCourses?.length > 0 ? (
            <>
              <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            </>
          ) : (
            <p className="text-2xl text-center ">Courses are Coming Soon</p>
          )}
        </div>
      </section>
      <section className="my-14">
        <h2 className="text-[30px] font-bold text-center">
          {language == "bn"
            ? "প্রোফেশনাল কোর্স সমূহ"
            : "Professional Courses"}
        </h2>
        <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " />

        <div className="my-10">
          {/* Development courses card ** data from array of object  */}
          {jobBasedCourses?.length > 0 ? (
            <>
              <div className="grid justify-center gap-4 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {jobBasedCourses?.slice(0, 4).map((course) => (
                  <CourseCard key={course._id} course={course}></CourseCard>
                ))}
                <div className="flex justify-center my-10 ">
                  <Link
                    state={courses}
                    to="/allCourses/Professional"
                    className="btn-view"
                  >
                    {language == "bn" ? "আরো দেখুন" : "See More"}
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <p className="text-2xl text-center ">Courses are Coming Soon</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllCourses;
