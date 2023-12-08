/* eslint-disable react/prop-types */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';



const DynamicBanner = ({ banners }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");
  // console.log(banners);

  const onSubmit = async (data) => {
    console.log(data);
    if (data !== "null") {
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
  };
  return (
    <div className="w-full md:w-1/2 order-1 lg:order-2 space-y-3">
      <Swiper
      modules={[Autoplay]}
      autoplay
      >
        {banners?.map((banner) => (
            <SwiperSlide key={banner._id}>
          <div
            
            className="border-[1px] border-black/25  mx-auto rounded-lg p-3  "
          >
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
                  <h1 className="text-2xl text-center font-bold mb-3">
                    Join Free seminar
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
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicBanner;
