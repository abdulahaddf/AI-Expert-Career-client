import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import useCourses from "../../../hooks/UseCourses";
import CourseCard from "../Courses/CourseCard";

const categories = [
  "Machine learning",
  "Data science",
  "Data analysis",
  "Computer vision",
  "Deep learning",
  "Prompt Engineering",
  "Artificial Intelligence",
  "NLP",
  "IoT",
];

const HomeCourseSection = () => {
  const { language } = useContext(MyContext);
  const [courses, isLoading] = useCourses();


  return (
    <div>
      <h2 className="text-[30px] font-bold text-center">
        {language == "bn" ? "কোর্স সমূহ" : "Courses"}
      </h2>
      <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " />
      <div className="11/12 mx-auto px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-5 rounded-full bg-blue-900/20 text-black p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-full py-2.5 text-sm font-medium leading-5 text-black
                  ring-white/60  focus:outline-none
                  ${
                    selected
                      ? "bg-white shadow text-black"
                      : "text-black hover:bg-white/[0.12] hover:text-white"
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              categories.map((category, index) => (
                <Tab.Panel
                  key={index}
                  className="rounded-full bg-white p-3 focus:outline-none "
                >
                  <div className="pt-3 grid grid-cols-2 gap-x-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-10">
                    {courses
                      .filter((blog) => blog.category === category)
                      .slice(0, 4) // Display the first four courses in this category
                      .map((filteredCourse, idx) => (
                        <CourseCard key={idx} course={filteredCourse}></CourseCard>
                      ))}
                  </div>
                  <Link
                    to="/courses"
                    className="btn-black flex justify-center w-fit mx-auto btn-md"
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
