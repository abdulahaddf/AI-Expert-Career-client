import { useContext, useEffect, useState } from "react";
import courseImg from "../../../assets/Dashboard/mycourses.png";
import CourseCart from "../../../components/pages/MyProfile/CourseCart";
import { MyContext } from "../../../Context/Context";
import axios from "axios";
import UseUser from "../../../hooks/useUser";
import Loader from "../../../components/common/loader/Loader";
const MyCourse = () => {
  const { language } = useContext(MyContext);
  const [courses, setCourses] = useState([]);
  const [userinfo] = UseUser();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/enrolled-course?email=${userinfo?.email}`)
      .then((data) => setCourses(data.data));
  }, [userinfo]);

  console.log(courses);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!courses) return <Loader />;
  return (
    <div className="lg:h-screen mb-12 w-4/5 mx-auto">
      {courses ? (
        <div>
          <h3 className=" font-bold text-center text-2xl">
            {" "}
            {language === "bn" ? "আমার কোর্স সমূূহ" : "My courses"}{" "}
          </h3>
          <>
            {courses.length > 0 ? (
              <div className="grid  lg:grid-cols-2 mt-[30px] gap-5 2xl:gap-x-0 mx-auto">
                {courses?.map((course, i) => (
                  <CourseCart
                    key={i}
                    courseData={course}
                    userId={userinfo._id}
                  />
                ))}
              </div>
            ) : (
              <p className="my-10 text-3xl font-semibold text-center">
                You did not enrolled in any Course
              </p>
            )}
          </>
        </div>
      ) : (
        <p className="my-10 text-3xl font-semibold text-center">
          You have not purchased any course yet
        </p>
      )}
    </div>
  );
};

export default MyCourse;