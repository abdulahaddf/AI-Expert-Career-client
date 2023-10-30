import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import useCourses from "../../../hooks/UseCourses";
import CourseCard from "../Courses/CourseCard";

const categories = [
  "Free",
"Fundamental",
"Job Requirement Based"
];

const HomeCourseSection = () => {
  const { language } = useContext(MyContext);
  const [courses, isLoading] = useCourses();


  return (
    <div className="mt-5 md:mt-20 mb-10">
      <h2 className="text-[30px] font-bold text-center">
        {language == "bn" ? "কোর্স সমূহ" : "Choose Your AI Journey"}
      </h2>
      <h3 className="text-center">We are the first ever Artificial Intelligence based Ed-tech and Consultancy Service Platform in Bangladesh</h3>
     
      <div className=" mx-auto px-2 py-5 md:py-16 sm:px-0">
        <Tab.Group>
       <div className="md:flex justify-between">
       <Tab.List className="flex md:space-x-5 rounded-lg border text-black p-1 md:w-3/4 whitespace-nowrap overflow-x-auto">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-2 text-sm  leading-5 text-black
                  ring-white/60  focus:outline-none font-semibold mr-2
                  ${
                    selected
                      ? "bg-black shadow text-white px-2"
                      : "text-black hover:bg-black hover:text-white px-2"
                  }`
                }
              >
                {category} Courses
              </Tab>
            ))}
          </Tab.List>
          <Link to="/courses" className="btn btn-md btn-ghost btn-outline border-black normal-case  hover:shadow-lg hover:bg-black hover:text-white flex justify-center mt-5 md:mt-0">Vew All Courses</Link>
       </div>
          <Tab.Panels className="mt-2">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              categories.map((category, index) => (
                <Tab.Panel
                  key={index}
                  className="rounded-full bg-white md:p-3 focus:outline-none "
                >
                  <div className="pt-3 grid gap-x-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] mb-10">
                    {courses
                      .filter((blog) => blog.mainCategory === category)
                      .slice(0, 4) // Display the first four courses in this category
                      .map((filteredCourse, idx) => (
                        <CourseCard key={idx} course={filteredCourse}></CourseCard>
                      ))}
                  </div>
                  <Link
                    to="/courses"
                    className="btn-view w-fit flex justify-center  mx-auto "
                  >
                    View More
                  </Link>
                </Tab.Panel>
              ))
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default HomeCourseSection;
