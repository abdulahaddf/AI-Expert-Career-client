/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CourseCard = ({ course }) => {
  const { language } = useContext(MyContext);
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");
  const {courseFee, discount} = course;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const discountAmount = courseFee * (1 - discount / 100);





  const onSubmit = async (data) => {
    console.log(data);
    if (data !== "null") {
      const info = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        course: course.title,
      };
      try {
        // Send Data to API
        const apiResponse = await fetch(
          "https://ai-server-sooty.vercel.app/bookCourse",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
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
  };
  return (
    <Link
    to={`/course/${course.title.trim().replace(/\s+/g, '-')}`}
      key={course._id}
      className="w-full md:w-[280px] p-2 bg-white flex flex-col rounded-[7px] shadow-md  hover:shadow-xl relative"
    >
      
      {
        discount ? 
        <div className="absolute bg-primary text-white rounded-full p-2 py-3 text-xs font-semibold -top-3 -right-3 h-10 w-10">-{discount}%</div> : ""
      }
      <img className="w-full md:w-[279px]  pt-0" src={course?.cover} alt="" />
      <h2 className="pt-[15px] text-[18px] font-bold ">{course?.title}</h2>
      <p className="text-[14px] text-[#818181]">
        {course?.subtitle?.slice(0, 115)}...
      </p>

      <div className="flex w-full justify-between items-center mt-6">
        {course?.description ? (
          <Link to={`/course/${course.title.trim().replace(/\s+/g, '-')}`} className="btn-black">
            {language == "bn" ? "বিস্তারিত দেখুন" : "View Details"}
          </Link>
        ) : (
          <p className=" font-semibold p-1 ">Coming Soon...</p>
        )}
        {course?.description ? (
          <p className="font-semibold">
            
            {course?.courseFee > 0 ? <>{discount ? discount != 0 ? <span className="line-through text-gray-500 mx-2 text-md">
            ৳ {courseFee}
          </span> : "" : ""}
          <span className="text-xl">৳{discountAmount}</span></> : "Free"}
          </p>
        ) : (
          <button
            onClick={() => {
              const modalId = `${course._id}`;
              const modal = document.getElementById(modalId);
              setPicOpenModalIndex(modal);
              if (modal) {
                modal.showModal();
              }
            }}
            className="btn-black"
          >
            Book your seat
          </button>
        )}
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
            <h1 className="text-lg  mb-3">
              Book Your Seat for the course : <br />{" "}
              <span className="font-bold text-2xl">{course.title}</span>{" "}
            </h1>
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
          {errors.phone ? (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          ) : (
            ""
          )}
          <div className="mt-6">
            <button type="submit" className="btn-add">
              Confirm
            </button>
          </div>
        </form>
      </dialog>
    </Link>
  );
};

export default CourseCard;
