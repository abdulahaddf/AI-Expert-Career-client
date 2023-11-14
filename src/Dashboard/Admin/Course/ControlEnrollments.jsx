import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import Loader from "../../../components/common/loader/Loader";

const ControlEnrollments = () => {
  const [enrolled, setEnrolled] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disabledAcceptButtons, setDisabledAcceptButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  console.log(enrolled);
  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/enrolled")
      .then((response) => response.json())
      .then((data) => setEnrolled(data));
    setIsLoading(false);
  }, []);


  const disableAcceptButton = (id) => {
    setDisabledAcceptButtons((prevDisabled) => [...prevDisabled, id]);
  };




  const handleApprove = (id) => {
   
    console.log("approved");
    const data = {
      status: "approved",
    };
    // console.log(data);
    fetch(`https://ai-server-sooty.vercel.app/enrollStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.info("Request Approved", {
            icon: <AiFillCheckCircle className="text-xl text-green-500" />,
          });
        } else toast.error("Something went wrong");
      });
  };


  // Pagination
  const totalPages = Math.ceil(enrolled.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted and filtered data for pagination
  const paginatedEnroll = enrolled.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-3xl text-center my-5">
        Control All Course Enrollments
      </h1>
      <div className="">
        <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
          {/* head */}
          <thead className="bg-primary text-white text-xl text-center">
            <tr>
              <th>#</th>
              <th className="text-center">Course</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Amount</th>
              <th className="text-center">TID</th>
              <th className="text-center">Sender</th>
              <th className="text-center">Status</th>
              <th className="text-center">Approval</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEnroll?.map((c, index) => (
              <tr key={c._id}>
                <th>{index + 1}</th>
                <td>{c.courseTitle}</td>
                <td className="text-center">{c.name}</td>
                <td className="text-center">{c.email}</td>
                <td className="text-center">{c.amount ? c.amount : "Free"}</td>
                <td className="text-center">{c.tId ? c.tId : "Free"}</td>
                <td className="text-center">{c.sender ? c.sender : "Free"}</td>
                <td className="text-center">{disabledAcceptButtons.includes(c._id) ? "approved" : c.status}</td>
                <td className="text-center">
                  <button
                    disabled={disabledAcceptButtons.includes(c._id) || c.status === "approved"}
                    onClick={() =>{
                      handleApprove(c._id);
                      disableAcceptButton(c._id);
                    } }
                    className="btn btn-success btn-xs normal-case text-white mx-1"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {/* pagination */}
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
    </div>
  );
};

export default ControlEnrollments;
