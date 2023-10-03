/* eslint-disable react/prop-types */

import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { language } = useContext(MyContext);
  return (
    <div
      key={course._id}
      className="w-full md:w-[280px] p-[16px] bg-white flex flex-col rounded-[7px] hover:shadow-xl"
    >
      <img
        className="w-full md:w-[279px] lg:h-[220px] md:h-[168px] pt-0"
        src={course?.cover}
        alt=""
      />
      <h2 className="pt-[15px] text-[18px] font-bold ">{course.title}</h2>
      <p className="text-[14px] text-[#818181]">{course.subtitle.slice(0,80)}...</p>

      <div className="flex w-full justify-between items-center mt-6">
        <Link
          to={`/individualCourse/${course._id}`}
          className="px-[16px]  py-1 text-white bg-[#FF265A]/90  rounded-[10px] hover:scale-105 duration-300"
        >
          {language == "bn" ? "বিস্তারিত দেখুন" : "View Details"}
        </Link>
        <p className="font-semibold">TK {course.courseFee}</p>
      </div>
    </div>
  );
};

export default CourseCard;
