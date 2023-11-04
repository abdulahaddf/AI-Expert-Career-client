import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { MyContext } from "../../../Context/Context";
import UseUsers from "../../../hooks/useUsers";
import CallBtn from "./CallBtn";
import Loader from "../../common/loader/Loader";
import moment from "moment";
import { FaRegDotCircle } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import useTitle from "../../../hooks/useTitle";
const AiConsultant = () => {
  const { language } = useContext(MyContext);
  const [users, loading] = UseUsers();
  const [searchText, setSearchText] = useState("");
  const consultants = users?.filter((user) => user?.role === "consultant");
  const [filteredCon, setFilteredCon] = useState([]);
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedWorkingWith, setSelectedWorkingWith] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  //
  useEffect(() => {
    setFilteredCon(consultants);
  }, [users]);

  // console.log(filteredCon);

  const today = moment().format("dddd");
  // console.log(today);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    filterCon(event.target.value);
  };

  const filterCon = (search) => {
    console.log(search);
    const filtered = consultants.filter((c) => {
      // Define flags to check if a match is found in any of the arrays
      let qualificationMatch = false;
      let recentWorksMatch = false;
      let selectedDaysMatch = false;

      // Check if the search text is found in qualification array
      c?.qualification?.forEach((qualification) => {
        if (
          qualification &&
          qualification.toLowerCase().includes(search.toLowerCase())
        ) {
          qualificationMatch = true;
        }
      });

      // Check if the search text is found in recentWorks array
      // c?.recentWorks?.forEach((work) => {
      //   if (work && work.toLowerCase().includes(search.toLowerCase())) {
      //     recentWorksMatch = true;
      //   }
      // });

      // Check if the search text is found in selectedDays array
      c?.selectedDays?.forEach((day) => {
        if (day && day.toLowerCase().includes(search.toLowerCase())) {
          selectedDaysMatch = true;
        }
      });

      // Return true if any of the fields match the search text
      return (
        c?.displayName?.toLowerCase().includes(search.toLowerCase()) ||
        c?.designation?.toLowerCase().includes(search.toLowerCase()) ||
        c?.description?.toLowerCase().includes(search.toLowerCase()) ||
        qualificationMatch ||
        recentWorksMatch ||
        selectedDaysMatch
      );
    });

    setFilteredCon(filtered);
  };

  const daysOfWeek = [
    "All",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const workingWithOptions = [
    "All",
    "Research",
    "Career Consulting",
    "Project" /* Add more options as needed */,
  ];

  const handleDayChange = (e) => {
    const selected = e.target.value;
    setSelectedDay(selected);
    filterConsultants(selected, selectedWorkingWith);
  };

  const handleWorkingWithChange = (e) => {
    const selected = e.target.value;
    setSelectedWorkingWith(selected);
    filterConsultants(selectedDay, selected);
  };

  const filterConsultants = (day, workingWith) => {
    if (day === "All" && workingWith === "All") {
      setFilteredCon(consultants);
    } else if (day === "All") {
      const filtered = consultants.filter((consultant) =>
        consultant.workingWith.includes(workingWith)
      );
      setFilteredCon(filtered);
    } else if (workingWith === "All") {
      const filtered = consultants.filter((consultant) =>
        consultant.selectedDays.includes(day)
      );
      setFilteredCon(filtered);
    } else {
      const filtered = consultants.filter(
        (consultant) =>
          consultant.selectedDays.includes(day) &&
          consultant.workingWith.includes(workingWith)
      );
      setFilteredCon(filtered);
    }
  };

  // Pagination
  const totalPages = Math.ceil(filteredCon.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted and filtered data for pagination
  const paginatedCon = filteredCon.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useTitle("Consultants");
  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (loading && filterCon ) return <Loader />;
  return (
    <div className=" lg:mt-[10px] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className=" ">
        <div className="">
          <div className="w-4/5 mx-auto ">
            <h1 className="font-bold text-center text-[35px]">
              {language == "bn"
                ? "ক্যারিয়ারের সঠিক দিক নির্দেশনার জন্য কনসালটেন্ট খুঁজুন"
                : "One Stop Solution in your AI Career paths"}
            </h1>
            <p className="text-center ">
              {language == "bn"
                ? "আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা"
                : "No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields"}
            </p>
            <div className="w-fit mx-auto my-8">
              <CallBtn />
            </div>
          </div>

          <div className="mt-10 md:my-12 md:flex space-y-2 items-center justify-between gap-5 ">
            <h3 className=" font-semibold text-lg lg:text-2xl ">
              {language == "bn"
                ? "ক্যাটাগরি নির্বাচন করুণ"
                : "Search Your Consultant"}
            </h3>
            <div className="border p-2 flex justify-between md:justify-evenly ">
              <label htmlFor="daySelect" className="mr-2 text-left">
                Select Day:
              </label>
              <select
                id="daySelect"
                onChange={handleDayChange}
                value={selectedDay}
              >
                {daysOfWeek.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="border p-2 flex justify-between md:justify-evenly">
              <label htmlFor="workingWithSelect" className="mr-2">
                Select Working With:
              </label>
              <select
                className=""
                id="workingWithSelect"
                onChange={handleWorkingWithChange}
                value={selectedWorkingWith}
              >
                {workingWithOptions.map((workingWith, index) => (
                  <option key={index} value={workingWith}>
                    {workingWith}
                  </option>
                ))}
              </select>
            </div>
            <div className="  ">
              <input
                type="text"
                placeholder="Search Consultants"
                className="py-2 px-4  w-full  border  "
                value={searchText}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>

          <hr className="border-[0.5px] border-[#ACACAC] my-4" />

          {paginatedCon.length > 0 && paginatedCon ? (
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-5 mt-10 md:w-5/6 mx-auto">
              {paginatedCon.map((c, i) => (
                <Link
                  key={i}
                  to={`/ai-consultant-profile/${c._id}`}
                  state={c}
                  className="flex items-center p-2    "
                >
                  <div className="flex flex-col-reverse md:flex-row section w-full mx-auto gap-2  relative">
                    <div className="w-4/6  my-5 md:my-3 ">
                      <p className="mb-3">
                        {c?.selectedDays?.includes(today) ? (
                          <span className="bg-primary text-white rounded-full px-2 absolute top-2 left-4">
                            Available
                          </span>
                        ) : (
                          ""
                        )}
                      </p>

                      <h2 className="text-[22px] font-bold my-2">
                        {c.displayName}
                      </h2>
                      <p className="mb-5">{c.designation}</p>
                      <h2 className="text-[17px] font-bold">Availability</h2>
                      <p className="text-[#515151]/90 flex flex-wrap gap-3 mt-1 mb-2">
                        {c?.selectedDays?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            <FaRegDotCircle /> {d}
                          </p>
                        ))}
                      </p>
                      <h2 className="text-[17px] font-bold">Works With</h2>
                      <p className="text-[#515151]/90 flex flex-wrap gap-3 mt-1">
                        {c?.workingWith?.map((d) => (
                          <p className="flex items-center gap-1" key={d}>
                            {" "}
                            <SiSocketdotio /> {d}
                          </p>
                        ))}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between text-center  ">
                      <img
                        className="w-36 h-36 rounded-full mx-auto mb-2"
                        src={c.photoURL}
                        alt=""
                      />

                      <button className="btn-black">View Profile</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-2xl text-center">No Consultants Found</p>
          )}
        </div>

        <div className="flex gap-4 justify-center pt-[40px]">
          {/* pagination */}

          {paginatedCon.length > 5 && paginatedCon ? (
            <div className="flex justify-center mt-8">
              <button
                className={`px-4 py-2 rounded-md mx-2 ${
                  currentPage === 1
                    ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-black text-white"
                      : "bg-slate-200 hover:bg-gray-300 text-gray-700"
                  } px-3 py-1 mx-1 rounded-md cursor-pointer`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`px-4 py-2 rounded-md mx-2 ${
                  currentPage === totalPages
                    ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
