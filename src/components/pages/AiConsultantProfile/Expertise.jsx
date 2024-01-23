/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { SiSocketdotio } from "react-icons/si";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link, useLocation } from "react-router-dom";

const Expertise = ({ consultant }) => {
  const { language } = useContext(MyContext);
const { user } = useContext(AuthContext);
const [isVisible, setIsVisible] = useState(true);

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
const [hideButton, setHideButton] = useState(false);
const { handleSubmit, register, reset } = useForm({
defaultValues: {
email: user?.email,
displayName: user?.displayName,
},
});

const [showhide,setshowhide] = useState('');
const handlebudget = (event) => {
  const getoption = event.target.value;
  setshowhide(getoption);
}
const location = useLocation();

const onSubmit = async (data) => {
const {
name,
email,
phone,
appointDate,
appointTime,
problemType,
budget,
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
budget,
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
  <h3 className="text-2xl font-semibold"> {language === "bn" ? "উপস্থিতি" : "Availability"}</h3>
  <div className="mt-2 ml-2 space-y-2 text-lg section">
    {selectedDays?.map((d) => (
    <p className="flex items-center gap-2" key={d}>
      <FaRegDotCircle /> {d}
    </p>
    ))}
  </div>
  <h3 className="mt-4 text-2xl font-semibold"> {language === "bn" ? "কাজ করছেন" : "Working With"}</h3>
  <div className="mt-2 ml-2 space-y-2 text-lg section ">
    {workingWith?.map((d) => (
    <p className="flex items-center gap-2" key={d}>
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
  <div className="fixed bottom-0 z-10 w-11/12 p-2 mx-auto bg-white rounded-lg md:hidden">
    {user ? (
    <button onClick={()=> document.getElementById("my_modal_5").showModal()}
      className="w-full btn-view-red"
      >
      {language == "bn"
      ? "এপয়েন্টমেন্ট বুক করুন"
      : "Book Your Appointment"}{" "}
      <IoIosArrowForward />
    </button>
    ) : (
    <Link to="/login" state={{ from: location }} onClick={()=> toast.error("Please Login first")}
    className="w-full btn-view-red"
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
          className="absolute text-white btn btn-sm btn-circle btn-ghost right-2 top-2 bg-primary hover:bg-primary">
          ✕
        </button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 section">
        <div>
          <label htmlFor="name" className="text-xl font-semibold">
            Your Name*
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
            Estimated time*
          </label>
          <input {...register("appointTime", { required: true })} type="time" placeholder="Select an appointment time"
            className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
        </div>
        <div>
          <label htmlFor="problemType" className="text-xl font-semibold">
            Type of Consultancy*
          </label>
          <select {...register("problemType", { required: true })} value={showhide}
            className="py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" onChange={handlebudget}>
            {workingWith?.map((d) => (
              <option value={d} key={d}>{d}</option>
            ))
            }
          </select>
        </div>
        {showhide === 'Career Consultancy' && (<input type="hidden" {...register("budget")} value="free" />)}
    
        {showhide === 'Research (Thesis/Report/Patent)' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="1000 - 10000 Tk"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="10000 - 20000 Tk"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="21000 - 30000 Tk"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      }

      {showhide === '1:1 Mentorship Program' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      }

      {showhide === 'AI Project(Basic to Advanced)' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      } 
      {showhide === 'Corporate Consultancy' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      }
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
          <label htmlFor="urgent" className="mr-2 text-xl text-primary">
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
         Your Name*
        </label>
        {/* value={user?.displayName}  defaultValue={user?.displayName} */}
        <input {...register("name", { required: true })} type="text" placeholder="Enter your name"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"  />
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
          appointment date*
        </label>
        <input {...register("appointDate", { required: true })} type="date" placeholder="Select an appointment date"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="appointTime" className="text-xl font-semibold">
          Estimated time*
        </label>
        <input {...register("appointTime", { required: true })} type="time" placeholder="Select an appointment time"
          className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80" />
      </div>
      <div>
        <label htmlFor="problemType" className="text-xl font-semibold">
          Type of consultancy*
        </label>
        <select {...register("problemType", { required: true })} value={showhide} 
          className="py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"  onChange={handlebudget}>
            <option value="select">select</option>
            
          {workingWith?.map((d) => (
            <option selected="select" value={d} key={d}>{d}</option>
            ))
          }
        </select>
      </div>
      
      {showhide === 'Career Consultancy' && (<input type="hidden" {...register("budget")} value="free" />)}
      {showhide === 'Research (Thesis/Report/Patent)' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="1000 - 10000 Tk"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="10000 - 20000 Tk"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="21000 - 30000 Tk"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      }

      {showhide === '1:1 Mentorship Program' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      }

      {showhide === 'AI Project(Basic to Advanced)' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      } 
      {showhide === 'Corporate Consultancy' &&
        (
        <div>
         <label htmlFor="problemType" className="text-xl font-semibold ">
          Your Budget*
        </label>
          <label className="flex items-center gap-2 mt-4 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            1000 - 10000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            10000 - 20000 Tk
          </label>
          <label className="flex items-center gap-2 text-lg ">
            <input
              type="radio"
              {...register("budget")}
              value="module"
              className="radio"
              required
            />
            21000 - 30000 Tk
          </label>
        </div>
        )
      }
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
        <label htmlFor="urgent" className="mr-2 text-xl text-primary">
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