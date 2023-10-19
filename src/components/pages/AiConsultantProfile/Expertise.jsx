/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import hand from "../../../assets/AiConsultant/image 3.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown } from "react-icons/fi";
import DateIcon from "../../../assets/AiConsultant/🦆 icon _calendar_.png";
import { MyContext } from "../../../Context/Context";
const Expertise = ({consultant}) => {
  const {selectedDays, workingWith} = consultant;
  const [startDate, setStartDate] = useState(new Date());
  const [appointDate, setAppointDate] = useState(new Date());
  const { language } = useContext(MyContext);
  const [hideButton, setHideButton] = useState(false);
  return (
    <div>
      <h3 className="font-semibold text-2xl mt-4">Availability</h3>
      <div className="mt-3 space-y-2 text-lg">
        {selectedDays.map((a,i) => <p key={i}>{a}</p>)}
      </div>
      <h3 className="font-semibold text-2xl mt-4">Works With</h3>
      <div className="mt-3 space-y-2 text-lg">
        {workingWith.map((w,i) => <p key={i}>{w}</p>)}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setHideButton(true)}
          className=" py-2 px-5 bg-[#ED1B24] rounded-[5px] text-white font-semibold"
        >
          {language == "bn"
            ? "ফ্রি এপয়েন্টমেন্ট বুক করুন"
            : "Book a Free Appointment"}
        </button>
      </div>

      {hideButton && (
        <div className="mt-24 bg-[#FFFFFF]/30 p-9">
          <form action="" className="space-y-5">
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Name*
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Phone number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
              />
            </div>
            
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Appointment date
              </label>
              <div className="relative">
                <DatePicker
                  selected={appointDate}
                  onChange={(date) => setAppointDate(date)}
                  className="py-2 cursor-pointer px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                />
                <img
                  src={DateIcon}
                  alt=""
                  className="absolute top-[28px] h-[19px] w-[17px] right-4 cursor-pointer pointer-events-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Appointment time
              </label>
              <input
                type="time"
                placeholder="Enter your appointment time"
                className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Department
              </label>
              <div className="relative">
                <select
                  name=""
                  id=""
                  className="py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
                >
              
                  <option value="Machine Learning">Career Consulting</option>
                  <option value="Machine Learning">Project</option>
                  <option value="Machine Learning">Research</option>
                </select>
                <FiChevronDown className="absolute top-[14px] right-3 text-xl pointer-events-none text-[#EB3223]" />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                I
              </label>
              <input
                type="url"
                placeholder="Enter your email address"
                className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
              />
            </div>
           
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Case summary
              </label>
              <textarea
                name=""
                placeholder="Enter case summary"
                cols="30"
                rows="4"
                className="py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="py-[12px] px-[78px] text-xl font-bold bg-[#F6002C] text-white rounded-2xl mt-5">
                {language == "bn" ? "জমা দিন" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Expertise;
