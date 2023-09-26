import { useContext, useEffect, useState } from "react";
import jobOppImg from "../../../assets/job-opportunity/job-opportunity.jpg";

import { Link, useNavigate } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { MyContext } from "../../../Contaxt/Context";

const JobOpportunity = () => {
  const [jobs, setJobs] = useState([]);
  const { language } = useContext(MyContext);
  useEffect(() => {
    fetch("/public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const navigate = useNavigate();
  const redirectIndibidualJob = (id) => {
    navigate(`/jobOpportunity/${id}`);
  };

  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" md:mt-[80px] mt-[70px] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="">
        <h1 className="mt-[32px] lg:mt-[60px] text-left-[35px] font-[700] text-center">
          {language === "bn"
            ? "বিভিন্ন কোম্পানির রিক্রুইমেন্ট দেখে, রেডি করুন নিজেকে!"
            : "Job Opportunity"}
        </h1>
        <div className="w-[62px] h-[7px] bg-[#ED1B24] rounded-md mx-auto cursor-pointer"></div>
        <div className="my-[32px] lg:my-[60px]">
          <img className="mx-auto" src={jobOppImg} alt="job-opportunity" />
        </div>
        <div>
          <ul className="md:flex justify-between grid grid-cols-2 border-b-2 border-black font-bold">
            <li className="text-red-600">
              <Link>{language === "bn" ? "সব" : " All"}</Link>
            </li>
            <li>
              <Link>{language === "bn" ? "রিমোট" : "Remote"}</Link>
            </li>
            <li>
              <Link>{language === "bn" ? "ডেভেলপমেন্ট " : "Development"}</Link>
            </li>
            <li>
              <Link>
                {language === "bn" ? "প্রজেক্ট ম্যানাজার " : "Project Manager"}
              </Link>
            </li>
            <li>
              <Link>{language === "bn" ? "প্রডাক্ট  ডিজাইনা" : "Design"}</Link>
            </li>
            <li>
              <Link>
                {language === "bn" ? "প্রডাক্ট  ডিজাইনা" : "Product Designer"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* card  */}
      <div className="my-[32px] lg:my-[60px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {jobs.map(
          ({
            id,
            img,
            headline,
            job_post,
            address,
            description,
            uploadTime,
          }) => (
            <div
              key={id}
              className="px-[17px] py-[15px] shadow-lg hover:shadow-lg rounded-[10px] bg-[#ed1b240d] w-full h-[400px]  lg:w-[358px] lg:h-[420px]"
            >
              <div className="flex items-center">
                <img
                  className="w-[81px] h-[81px] rounded-full mr-5"
                  src={img}
                  alt="courseImg"
                />
                <div>
                  <h4 className="font-bold">{headline}</h4>
                  <p className="font-semibold">{address}</p>
                </div>
              </div>
              <div className="mt-8 mb-5 ps-2 pr-8">
                <h4 className="font-bold mb-2">{job_post}</h4>

                <p className="font-semibold mb-[20px] text-[16px]">
                  {description.slice(0, 200) + "..."}{" "}
                  <button
                    onClick={() => redirectIndibidualJob(id)}
                    className="font-bold"
                  >
                    See More
                  </button>
                </p>
              </div>
              <div className="h-[1px] bg-[#ED1B24] rounded-md mx-3 "></div>
              <div className="flex justify-between items-center my-4 px-5">
                <p>{uploadTime}</p>
                <Link className="text-red-600">
                  <FaBookmark />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
      {/* pagination  */}
      <div className="pagination my-[32px] lg:my-[60px] text-center font-semibold">
        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] me-2 mx-auto p-4 text-red-600"
          href="#"
          class="arrow"
        >
          &lt;
        </Link>

        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] text-black ms-2 me-2 mx-auto p-4"
          href="#"
        >
          1
        </Link>
        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] text-black me-2 mx-auto p-4"
          href="#"
        >
          2
        </Link>
        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] text-black me-2 mx-auto p-4"
          href="#"
        >
          3
        </Link>
        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] text-black me-2 mx-auto p-4"
          href="#"
        >
          4
        </Link>
        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] text-black me-2 mx-auto p-4"
          href="#"
        >
          5
        </Link>
        <Link
          className="w-[10px] h-[20px] rounded-lg bg-[#D9D9D9] me-2 mx-auto p-4 text-red-600"
          href="#"
          class="arrow"
        >
          &gt;
        </Link>
      </div>
    </div>
  );
};

export default JobOpportunity;
