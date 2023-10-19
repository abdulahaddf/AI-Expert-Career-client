import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";


const ControlAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState("");
    const [request, setRequest] = useState("");
    const [confirmation, setConfirmation] = useState("");
console.log(appointments)
    useEffect(() => {
      fetch("http://localhost:5000/appointments")
        .then((response) => response.json())
        .then((data) => setAppointments(data));
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
    return (
        <div>
            <h1 className="text-3xl text-center my-5">Control Appointments</h1>
            <div className="">
        <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
          {/* head */}
          <thead className="bg-secondary text-white text-xl text-center">
            <tr>
              <th>#</th>
              <th className="text-center">Consultant </th>
              <th className="text-center">User</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Approval</th>
              <th className="text-center">ConFirmation</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody >
            {appointments?.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.cName}</td>
                <td className= {`${a.urgent ? "text-primary text-center" : "text-center" }`}>{a.name}</td>
                <td className="text-center">{a.appointDate}</td>
                <td className="text-center">{a.appointTime}</td>
                <td className="text-center">{request || a.request} <button
                    disabled={status || a.status === 'approved'}
                    onClick={()=>handleApprove(a._id)}
                    className="btn btn-success btn-xs normal-case text-white mx-1">Accept</button></td>
                <td className="text-center">{confirmation || a.confirmation} <button
                    disabled={status || a.status === 'approved'}
                    onClick={()=>handleApprove(a._id)}
                    className="btn btn-success btn-xs normal-case text-white mx-1">Confirm</button></td>
               
                <td className="text-center">
                    <button onClick={()=>document.getElementById(`${a._id}`).showModal()}
                    
                    className="btn btn-success btn-xs normal-case text-white mx-1">Details</button>
                </td>
                {/* Details */}
                <dialog id={`${a._id}`} className="modal">
                <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                 </form>
                <div className="text-left space-y-4">
                {a.urgent ? <p className="text-primary text-2xl text-center my-3">Urgent</p> : null}
                <h1>User Name: {a.name}</h1>
                <p>Mail: {a.email}</p>
                <p>Appointment Date: {a.appointDate}</p>
                <p>Appointment Time: {a.appointTime}</p>
                <p>Problem Type: {a.problemType}</p>
                <p>Case Summary: {a.caseSummary}</p>
                <p>Attached File: {a.fileLink}</p>
                </div>

                </div>
                </dialog>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
        </div>
    );
};

export default ControlAppointments;