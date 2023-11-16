/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { SiSocketdotio } from "react-icons/si";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import UseUser from "../../../hooks/useUser";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link, useLocation } from "react-router-dom";

const Expertise = ({ consultant }) => {
const { user } = useContext(AuthContext);
const [isVisible, setIsVisible] = useState(true);
console.log(user ? user : "nai");
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

const { language } = useContext(MyContext);
const [hideButton, setHideButton] = useState(false);
const { handleSubmit, register, reset } = useForm({
defaultValues: {
email: user?.email,
},
});
const location = useLocation();

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
cId: consultant._id,
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
reset();
toast.success("You've Successfully requested for the appointment");
document.getElementById("my_modal_5").close();
}
} catch (error) {
console.error("Error:", error);
toast.error("Something went wrong, try again");
}
};

// hide on footer
useEffect(() => {
const handleScroll = () => {
const scrollPosition = window.scrollY;
const viewportHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;
const last400Pixels = documentHeight - viewportHeight - 1560;

if (scrollPosition > last400Pixels) {
setIsVisible(false);
} else {
setIsVisible(true);
}
};

window.addEventListener("scroll", handleScroll);

return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);
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

  <div className="flex justify-center md:mt-12 ">
    {user ? (
    <button onClick={()=> setHideButton(true)}
      className=" py-2 px-5 bg-[#ED1B24] rounded-[5px] text-white font-semibold hidden md:block"
      >
      {language == "bn"
      ? "এপয়েন্টমেন্ট বুক করুন"
      : "Book Your Appointment"}
    </button>
    ) : (
    <Link to="/login" state={{ from: location }} onClick={()=> toast.error("Please Login first")}
    className=" py-2 px-5 bg-[#ED1B24] rounded-[5px] text-white font-semibold hidden md:block"
    >
    {language == "bn"
    ? "এপয়েন্টমেন্ট বুক করুন"
    : "Book Your Appointment"}
    </Link>
    )}
  </div>

  {/* Fixed button for mobile */}
  {isVisible && (
  <div className="bg-white rounded-lg fixed bottom-0 p-2   z-10 md:hidden w-11/12 mx-auto">
    {user ? (
    <button onClick={()=> document.getElementById("my_modal_5").showModal()}
      className=" btn-view-red w-full "
      >
      {language == "bn"
      ? "এপয়েন্টমেন্ট বুক করুন"
      : "Book Your Appointment"}{" "}
      <IoIosArrowForward />
    </button>
    ) : (
    <Link to="/login" state={{ from: location }} onClick={()=> toast.error("Please Login first")}
    className=" btn-view-red w-full "
    >
    {language == "bn"
    ? "এপয়েন্টমেন্ট বুক করুন"
    : "Book Your Appointment"}{" "}
    <IoIosArrowForward />
    </Link>
    )}
  </div>
  )}

  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-primary text-white hover:bg-primary">
          ✕
        </button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 section">
        <div>
          <label htmlFor="name" className="text-xl font-semibold">
            Name*
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="Enter your name"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="email" className="text-xl font-semibold">
            Email*
          </label>
          <input {...register("email", { required: true })} type="email" value={user?.email}
            placeholder="Enter your email address"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="phone" className="text-xl font-semibold">
            Phone number*
          </label>
          <input {...register("phone", { required: true })} type="tel" placeholder="Enter your phone number"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="appointDate" className="text-xl font-semibold">
            Appointment date*
          </label>
          <input {...register("appointDate", { required: true })} type="date" placeholder="Select an appointment date"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="appointTime" className="text-xl font-semibold">
            Appointment time*
          </label>
          <input {...register("appointTime", { required: true })} type="time" placeholder="Select an appointment time"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="problemType" className="text-xl font-semibold">
            Type of Problem*
          </label>
          <select {...register("problemType", { required: true })}
            className="py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80">
            <option value="Career Consulting">Career Consulting</option>
            <option value="Project">Project</option>
            <option value="Research">Research</option>
          </select>
        </div>
        <div>
          <label htmlFor="fileLink" className="text-xl font-semibold">
            Insert a file link (optional)
          </label>
          <input {...register("fileLink")} type="url" placeholder="Enter a file link (optional)"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="caseSummary" className="text-xl font-semibold">
            Case summary (optional)
          </label>
          <textarea {...register("caseSummary")} placeholder="Enter case summary (optional)" rows="4"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"></textarea>
        </div>
        <div className="flex items-center">
          <label htmlFor="urgent" className="text-xl text-primary mr-2">
            Is it urgent?
          </label>
          <input {...register("urgent")} type="checkbox" className="checkbox checkbox-xs checkbox-error" />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="btn-view">
            Submit
          </button>
        </div>
      </form>
      <div className="modal-action"></div>
    </div>
  </dialog>

  {/* For large device */}
  {hideButton && (
  <div className="mt-5 bg-[#FFFFFF]/30">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 section">
      <div>
        <label htmlFor="name" className="text-xl font-semibold">
          Name*
        </label>
        <input {...register("name", { required: true })} type="text" placeholder="Enter your name"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="email" className="text-xl font-semibold">
          Email*
        </label>
        <input {...register("email", { required: true })} value={user?.email} defaultValue={user?.email} type="email"
          placeholder="Enter your email address"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="phone" className="text-xl font-semibold">
          Phone number*
        </label>
        <input {...register("phone", { required: true })} type="tel" placeholder="Enter your phone number"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="appointDate" className="text-xl font-semibold">
          Appointment date*
        </label>
        <input {...register("appointDate", { required: true })} type="date" placeholder="Select an appointment date"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="appointTime" className="text-xl font-semibold">
          Appointment time*
        </label>
        <input {...register("appointTime", { required: true })} type="time" placeholder="Select an appointment time"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="problemType" className="text-xl font-semibold">
          Type of Problem*
        </label>
        <select {...register("problemType", { required: true })}
          className="py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80">
          <option value="Career Consulting">Career Consulting</option>
          <option value="Project">Project</option>
          <option value="Research">Research</option>
        </select>
      </div>
      <div>
        <label htmlFor="fileLink" className="text-xl font-semibold">
          Insert a file link (optional)
        </label>
        <input {...register("fileLink")} type="url" placeholder="Enter a file link (optional)"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="caseSummary" className="text-xl font-semibold">
          Case summary (optional)
        </label>
        <textarea {...register("caseSummary")} placeholder="Enter case summary (optional)" rows="4"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"></textarea>
      </div>
      <div className="flex items-center">
        <label htmlFor="urgent" className="text-xl text-primary mr-2">
          Is it urgent?
        </label>
        <input {...register("urgent")} type="checkbox" className="checkbox checkbox-xs checkbox-error" />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="btn-view">
          Submit
        </button>
      </div>
    </form>
  </div>
  )}
</div>
);
};

export default Expertise;