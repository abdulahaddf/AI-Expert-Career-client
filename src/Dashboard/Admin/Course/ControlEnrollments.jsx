import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import Loader from "../../../components/common/loader/Loader";


const ControlEnrollments = () => {
    const [enrolled, setEnrolled] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState("");
console.log(enrolled)
    useEffect(() => {
      fetch("http://localhost:5000/enrolled")
        .then((response) => response.json())
        .then((data) => setEnrolled(data));
        setIsLoading(false);
    }, []);

const handleApprove = (id) => {
    setStatus("approved")
    console.log("approved")
    const data = {
        status: "approved",
      };
      // console.log(data);
      fetch(`http://localhost:5000/enrollStatus/${id}`, {
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
          }
          else toast.error("Something went wrong")
        })
}



if(isLoading) return <Loader/>
    return (
        <div>
            <h1 className="text-3xl text-center my-5">Control All Course Enrollments</h1>
            <div className="">
        <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
          {/* head */}
          <thead className="bg-secondary text-white text-xl text-center">
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
          <tbody >
            {enrolled?.map((c, index) => (
              <tr key={c._id}>
                <th>{index + 1}</th>
                <td>{c.courseTitle}</td>
                <td className="text-center">{c.name}</td>
                <td className="text-center">{c.email}</td>
                <td className="text-center">{c.amount ? c.amount : "Free" }</td>
                <td className="text-center">{c.tId ? c.tId : "Free"}</td>
                <td className="text-center">{c.sender ? c.sender : "Free"}</td>
                <td className="text-center">{status || c.status}</td>
                <td className="text-center">
                    <button
                    disabled={status || c.status === 'approved'}
                    onClick={()=>handleApprove(c._id)}
                    className="btn btn-success btn-xs normal-case text-white mx-1">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ControlEnrollments;