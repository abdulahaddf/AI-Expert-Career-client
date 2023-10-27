import { Link } from "react-router-dom";

import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";
import useCourses from "../../../../hooks/UseCourses";
import CourseCard from "../CourseCard";
import Loader from "../../../common/loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllCourses = () => {
  const { language } = useContext(MyContext);
  const [courses, isLoading] = useCourses();
  const freeCourses = courses?.filter(
    (course) => course.mainCategory == "Free"
  );
  const fundamentalCourses = courses?.filter(
    (course) => course.mainCategory == "Fundamental"
  );
  const jobBasedCourses = courses?.filter(
    (course) => course.mainCategory == "Job Requirement Based");
  const [banners, setBanners] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");
  useEffect(() => {
    fetch(" https://ai-server-sooty.vercel.app/banners")
      .then((response) => response.json())
      .then((data) => setBanners(data));
  }, [banners]);
  const banner = banners[0];
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


  const onSubmit = async (data) => {
    console.log(data);
    if (data !== "null"){
    try {
      // Send Data to API
      const apiResponse = await fetch(
        "https://ai-server-sooty.vercel.app/seminar",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Request failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        if (openPicModalIndex) {
          openPicModalIndex.close();
        }
        toast.success("You'll be notified");
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  }
  







  if (isLoading && !banner && !courses) return <Loader />;
  return (
    <div className="w-4/5 mx-auto">
      {/* Banner */}
      <div className="my-10 flex flex-col lg:flex-row justify-around mx-auto">
        {/* Dynamic banners and titles */}
        <div className="border-[1px] border-black/25 lg:w-1/3 mx-auto rounded-lg p-3 order-1 lg:order-2 space-y-3 ">
          <h1 className="text-2xl text-center">{banner?.title}</h1>
          <img src={banner?.banner} alt="" />
          <h2>{banner?.subtitle}</h2>
          <button
            onClick={() => {
              const modalId = `${banner._id}`;
              const modal = document.getElementById(modalId);
              setPicOpenModalIndex(modal);
              if (modal) {
                modal.showModal();
              }
            }}
            className="btn-add w-full"
          >
            Join Free seminar
          </button>

          <dialog id={`${banner?._id}`} className="modal">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className="modal-box   text-black "
            >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  const modalId = `${banner._id}`;
                  const modal = document.getElementById(modalId);
                  if (modal) {
                    modal.close();
                  }
                }}
              >
                ✕
              </button>

              <div className="mb-2">
                <h1 className="text-2xl text-center font-bold mb-3">Join Free seminar</h1>
                <p className="">Your Name:</p>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="block   mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                />
              </div>
              <div className="mb-2">
                <p className="">Phone Number:</p>
                <input
                  type="number"
                  {...register("phone", { required: true })}
                  className="block   mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                />
              </div>
              <div className="mb-2">
                <p className="">Email:</p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block   mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                />
              </div>
              <div className="mt-6">
                <button type="submit" className="btn-add">
                  Confirm
                </button>
              </div>
            </form>
          </dialog>
        </div>

        {/* Course categories */}
       <div className="">
          <h1 className="text-xl text-center font-semibold mb-5">{language == "bn" ? "প্রজেক্ট বেইজড কোর্সগুলো" : "Free Courses"}</h1>
       <div className="grid grid-cols-2 md:grid-cols-3 text-md h-fit w-full gap-5 order-2 my-5 lg:my-0 lg:order-1 content-center ">
          {categories?.map((categoryItem) => (
            <Link
              key={categoryItem.category}
              to={`/all-courses/${categoryItem.category}`}
              state={courses}
              className="glass md:w-[190px] p-3 hover:bg-slate-200 rounded-lg"
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
          {language == "bn" ? "প্রজেক্ট বেইজড কোর্সগুলো" : "Free Courses"}
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
            <Link state={courses} to="/allCourses/Free" className="btn-see">
              {language == "bn" ? "আরো দেখুন" : "See More"}
            </Link>
          </div>
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-[30px] font-bold text-center">
          {language == "bn"
            ? "প্রজেক্ট বেইজড কোর্সগুলো"
            : "Fundamental Courses"}
        </h2>
        <hr className="w-20 h-2 bg-[#FF265A]/90 rounded-full mx-auto " />

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
              className="btn-see"
            >
              {language == "bn" ? "আরো দেখুন" : "See More"}
            </Link>
          </div>
        </div>
      </section>
      <section className="my-14">
        <h2 className="text-[30px] font-bold text-center">
          {language == "bn"
            ? "প্রজেক্ট বেইজড কোর্সগুলো"
            : "Job Requirement Based Courses"}
        </h2>
        <hr className="w-20 h-2 bg-[#FF265A]/90 rounded-full mx-auto " />

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
              className="btn-see"
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
