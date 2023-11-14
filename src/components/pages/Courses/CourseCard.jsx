/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CourseCard = ({ course }) => {
  const { language } = useContext(MyContext);
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    if (data !== "null"){
    try {
      // Send Data to API
      const apiResponse = await fetch(
        "https://ai-server-sooty.vercel.app/bookCourse",
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
  return (
    <div
      key={course._id}
      className="w-full md:w-[280px] p-2 bg-white flex flex-col rounded-[7px] shadow-md  hover:shadow-xl"
    >
      <img
        className="w-full md:w-[279px]  pt-0"
        src={course?.cover}
        alt=""
      />
      <h2 className="pt-[15px] text-[18px] font-bold ">{course?.title}</h2>
      <p className="text-[14px] text-[#818181]">{course?.subtitle?.slice(0,115)}...</p>

      <div className="flex w-full justify-between items-center mt-6">
        {
          course?.description ? <Link
          to={`/individualCourse/${course._id}`}
          className="btn-black"
        >
          {language == "bn" ? "বিস্তারিত দেখুন" : "View Details"}
        </Link> : <p className="btn-black">Coming Soon...</p>
        }
        {
          course?.description ? <p className="font-semibold">{ course.courseFee > 0 ?  <>TK {course.courseFee}</> : "Free"}</p> : 
          <button
          onClick={() => {
            const modalId = `${course._id}`;
            const modal = document.getElementById(modalId);
            setPicOpenModalIndex(modal);
            if (modal) {
              modal.showModal();
            }
          }}
          className="btn-black">Book your seat</button>
        }
      </div>
      <dialog id={`${course?._id}`} className="modal">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className="modal-box   text-black "
            >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  const modalId = `${course._id}`;
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
                  className="block   mt-2  bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                />
              </div>
              <div className="mb-2">
                <p className="">Phone Number:</p>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^01\d{9}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  
                  className="block   mt-2 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                />
              </div>
              <div className="mb-2">
                <p className="">Email:</p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block   mt-2  bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                />
              </div>
              {errors.phone ?   <p className="text-red-500 text-sm">{errors.phone.message}</p> : ""}
              <div className="mt-6">
                <button type="submit" className="btn-add">
                  Confirm
                </button>
              </div>
            </form>
          </dialog>
    </div>
  );
};

export default CourseCard;
