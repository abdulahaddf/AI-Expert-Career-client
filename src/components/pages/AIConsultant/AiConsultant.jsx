import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { MyContext } from "../../../Context/Context";
import UseUsers from "../../../hooks/useUsers";
import CallBtn from "./CallBtn";
const AiConsultant = () => {
  const { language } = useContext(MyContext);
  const [users, loading,] =UseUsers();
  const [searchText, setSearchText] = useState('');
  const [filteredCon, setFilteredCon] = useState([]);





  const consultants = users.filter(user => user.role === "consultant");
  console.log(consultants)
  //





  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    filterCon(event.target.value);
  };

  const filterCon = (search) => {
    console.log(search)
    const filtered = consultants.filter((c) => {
      // Define flags to check if a match is found in any of the arrays
      let qualificationMatch = false;
      let recentWorksMatch = false;
      let selectedDaysMatch = false;
  
      // Check if the search text is found in qualification array
      c?.qualification?.forEach((qualification) => {
        if (qualification.toLowerCase().includes(search.toLowerCase())) {
          qualificationMatch = true;
        }
      });
  
      // Check if the search text is found in recentWorks array
      c?.recentWorks?.forEach((work) => {
        if (work.toLowerCase().includes(search.toLowerCase())) {
          recentWorksMatch = true;
        }
      });
  
      // Check if the search text is found in selectedDays array
      c?.selectedDays.forEach((day) => {
        if (day.toLowerCase().includes(search.toLowerCase())) {
          selectedDaysMatch = true;
        }
      });
  
      // Return true if any of the fields match the search text
      return (
        c.displayName.toLowerCase().includes(search.toLowerCase()) 
       
      );
    });
  
    setFilteredCon(filtered);
  };
  







 
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <p className="text-center Roboto">
            {language == "bn"
              ? "আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা"
              : "No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields"}
          </p>
          <div className="w-fit mx-auto my-8">

<CallBtn/>
          </div>
         </div>


         <div className="mt-10 md:my-12 md:flex items-center gap-5 ">
        <h3 className=" font-semibold text-lg lg:text-2xl ">
          {language == "bn"
            ? "ক্যাটাগরি নির্বাচন করুণ"
            : "Search Your Consultant"}
        </h3>
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-4  w-full md:w-auto border border-[#B8B8B8] "
            value={searchText}
        onChange={handleSearchInputChange}
          />
        

          
        </div>
      </div>





       

          <hr className="border-[0.5px] border-[#ACACAC] my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-5 mt-10">
            {filteredCon.map((c, i) => (
              <Link
                key={i}
                to={"/ai-consultant-profile"}
                state={c}
                className="flex items-center p-2    "
              >
                <div className="lg:flex p-6 bg-[#fff] lg:divide-x-2 divide-[#000000d7] shadow-lg">
                  <div className="flex flex-col text-center  lg:px-10">
                    <img className="w-44 h-40 rounded-full mx-auto" src={c.photoURL} alt="" />
                    <h2 className="text-[20px] font-bold mt-[10px] mb-[12px]">
                      {c.displayName}
                    </h2>
                    <p>{c.designation}</p>
                    <button className="px-[3px] py-[8px] bg-[#ED1B24] rounded-md text-sm text-white shadow-lg mt-5">
                      View Profile
                    </button>
                  </div>
                  <div className="lg:flex flex-col justify-between lg:w-[60%] lg:px-10 mt-5 lg:mt-0">
                    <h2 className="text-[17px] font-bold">Availability</h2>
                    <p className="text-[#515151]/90">
                      {c?.selectedDays?.map(d => <p key={d}>{d}</p> )}
                    </p>
                    <h2 className="text-[17px] font-bold">Works With</h2>
                    <p className="text-[#515151]/90">
                    {c?.workingWith?.map(d => <p key={d}>{d}</p> )}
                    </p>
                    
                    <button className=" py-[8px] border-2 border-[#ED1B24] rounded-md text-black shadow-lg mt-5 w-full lg:w-auto">
                      Booking available online
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
