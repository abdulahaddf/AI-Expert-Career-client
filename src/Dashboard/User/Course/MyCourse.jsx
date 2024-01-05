import { useContext, useEffect, useState } from "react";

import CourseCart from "../../../components/pages/MyProfile/CourseCart";
import { MyContext } from "../../../Context/Context";
import axios from "axios";
import UseUser from "../../../hooks/useUser";
import Loader from "../../../components/common/loader/Loader";
const MyCourse = () => {
  const { language } = useContext(MyContext);
  const [courses, setCourses] = useState([]);
  const [userinfo] = UseUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://ai-server-sooty.vercel.app/enrolled-course?email=${userinfo?.email}`
      )
      .then((data) => setCourses(data.data));
      setLoading(false);
  }, [userinfo]);

  // console.log(courses);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading && !courses) return <Loader />;
  return (
    <div className="mx-auto mb-12  md:w-11/12">
      {courses ? (
        <div className="px-6 mx-auto xl:w-11/12">
          <h3 className="text-2xl font-bold text-center ">
            {" "}
            {language === "bn" ? "কোর্স সমূূহ" : "My courses"}{" "}
          </h3>
          <>
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 justify-between mt-[30px] gap-5  mx-auto ">
                {courses?.map((course, i) => (
                  
                  <CourseCart
                    key={i}
                    courseData={course}
                    userId={userinfo._id}
                  />
                ))}
              </div>
            ) : (
              <p className="my-20 text-3xl font-semibold text-center">
                You did not enrolled in any Course
              </p>
            )}
          </>
        </div>
      ) : (
        <p className="my-20 text-3xl font-semibold text-center">
          You did not enrolled in any Course
        </p>
      )}
    </div>
  );
};

export default MyCourse;
