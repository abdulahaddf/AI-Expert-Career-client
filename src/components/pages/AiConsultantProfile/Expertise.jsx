/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import UseUser from "../../../hooks/useUser";
import { SiSocketdotio } from "react-icons/si";
import { FaRegDotCircle } from "react-icons/fa";

const Expertise = ({ consultant }) => {
  const {
    displayName: cName,
    email: cMail,
    photoURL,
    phone: cPhone,
    designation,
    description,
    about,
    recentWorks,
    successes,
    experience,
    qualification,
    availability,
    workingWith,
    selectedDays,
  } = consultant;
  const [userinfo] = UseUser();
  const { language } = useContext(MyContext);
  const [hideButton, setHideButton] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { email: userinfo?.email },
  });

  // console.log(conMail);

  const onSubmit = async (data) => {
    const {
      name,
      email,
      phone,
      appointDate,
      appointTime,
      problemType,
      fileLink,
      caseSummary,
      urgent,
    } = data;

    try {
      // Prepare Appointment Data
      const appointmentData = {
        name,
        email,
        phone,
        appointDate,
        appointTime,
        problemType,
        fileLink,
        caseSummary,
        urgent,
        cName,
        cMail,
        cPhone,
        cId : consultant._id,
        request: "pending",
        confirmation: "pending",
      };

      // Send Course Data to API
      const apiResponse = await fetch(
        "https://ai-server-sooty.vercel.app/appoint",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Request failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        toast.success("You've Successfully requested for the appointment");
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong, try again");
    }
  };

  return (
    <div>
      <h3 className="font-semibold text-2xl">Availability</h3>
      <div className=" space-y-2 section text-lg ml-2 mt-2">
        {selectedDays?.map((d) => (
          <p className="flex items-center gap-1" key={d}>
            <FaRegDotCircle /> {d}
          </p>
        ))}
      </div>
      <h3 className="font-semibold text-2xl mt-4">Works With</h3>
      <div className="section text-lg ml-2 mt-2 space-y-2 ">
        {/* {workingWith.map((w,i) => <p key={i}>{w}</p>)} */}
        {workingWith?.map((d) => (
          <p className="flex items-center gap-1" key={d}>
            {" "}
            <SiSocketdotio /> {d}
          </p>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setHideButton(true)}
          className=" py-2 px-5 bg-[#ED1B24] rounded-[5px] text-white font-semibold"
        >
          {language == "bn" ? "এপয়েন্টমেন্ট বুক করুন" : "Book Your Appointment"}
        </button>
      </div>

      {hideButton && (
        <div className="mt-5 bg-[#FFFFFF]/30">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 section">
            <div>
              <label htmlFor="name" className="text-xl font-semibold">
                Name*
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Enter your name"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xl font-semibold">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    value={userinfo.email}
                    type="email"
                    placeholder="Enter your email address"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-xl font-semibold">
                Phone number
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="appointDate" className="text-xl font-semibold">
                Appointment date
              </label>
              <Controller
                name="appointDate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    placeholder="Select an appointment date"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="appointTime" className="text-xl font-semibold">
                Appointment time
              </label>
              <Controller
                name="appointTime"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="time"
                    placeholder="Select an appointment time"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="problemType" className="text-xl font-semibold">
                Type of Problem
              </label>
              <Controller
                name="problemType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  >
                    <option value="Career Consulting">Career Consulting</option>
                    <option value="Project">Project</option>
                    <option value="Research">Research</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label htmlFor="fileLink" className="text-xl font-semibold">
                Insert a file link (optional)
              </label>
              <Controller
                name="fileLink"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="url"
                    placeholder="Enter a file link (optional)"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="caseSummary" className="text-xl font-semibold">
                Case summary (optional)
              </label>
              <Controller
                name="caseSummary"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Enter case summary (optional)"
                    rows="4"
                    className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                  ></textarea>
                )}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="urgent" className="text-xl text-primary mr-2">
                Is it urgent?
              </label>
              <Controller
                name="urgent"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-error"
                  />
                )}
              />
              
            </div>



            <div className="flex justify-center">
              <button
                type="submit"
                className="py-[12px] px-[78px] text-xl font-bold bg-[#F6002C] text-white rounded-2xl mt-5"
              >
                {language === "bn" ? "জমা দিন" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Expertise;




