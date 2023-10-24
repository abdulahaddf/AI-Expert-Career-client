import { useLocation, useParams } from "react-router-dom";
import CourseCard from "../CourseCard";
import { useEffect } from "react";

const AllCategoryCourses = () => {
  const { category } = useParams();
  const location = useLocation();
  const courses = location.state;
  const filteredCourses = courses?.filter(
    (course) => course.category == category
  );
  // console.log(filteredCourses);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-11/12 mx-auto mb-10">
      <h1 className="text-3xl text-center my-10">All {category} Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {filteredCourses?.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCategoryCourses;
