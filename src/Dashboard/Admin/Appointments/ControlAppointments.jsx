import moment from "moment";
import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";


const ControlAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [disabledAcceptButtons, setDisabledAcceptButtons] = useState([]);
    const [disabledConfirmButtons, setDisabledConfirmButtons] = useState([]);
console.log(appointments)
    useEffect(() => {
      fetch("http://localhost:5000/appointments")
        .then((response) => response.json())
        .then((data) => setAppointments(data));
        setIsLoading(false);
    }, []);

    const disableAcceptButton = (id) => {
        setDisabledAcceptButtons((prevDisabled) => [...prevDisabled, id]);
    };

    // Function to disable the "Confirm" button for a specific appointment
    const disableConfirmButton = (id) => {
        setDisabledConfirmButtons((prevDisabled) => [...prevDisabled, id]);
    };

    const handleRequest = (id) => {
        
        // console.log("approved")
        const data = {
            request: "approved",
          };
          // console.log(data);
          fetch(`http://localhost:5000/appointRequest/${id}`, {
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
    const handleApprove = (id) => {
       
       
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
                <td className="text-center">{moment(a.appointDate).format("MMMM Do YYYY")}</td>
                <td className="text-center">{a.appointTime}</td>


                <td className="text-center">
                            {/* {a.request === 'approved' ? a.request : a.request}{" "} */}
                            <button
                                disabled={disabledAcceptButtons.includes(a._id) || a.request === 'approved'}
                                onClick={() => {
                                    handleRequest(a._id);
                                    disableAcceptButton(a._id); 
                                }}
                                className="btn btn-success btn-xs normal-case text-white mx-1">
                                Accept
                            </button>
                        </td>

                        <td className="text-center">
                            {/* {a.confirmation === 'approved' ? a.confirmation : confirmation}{" "} */}
                            <button
                                disabled={disabledConfirmButtons.includes(a._id) || a.confirmation === 'approved'}
                                onClick={() => {
                                    handleApprove(a._id);
                                    disableConfirmButton(a._id);
                                }}
                                className="btn btn-success btn-xs normal-case text-white mx-1">
                                Confirm
                            </button>
                     </td>
               


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
                    <h1 className="text-2xl text-center mb-10 font-semibold">User Details {a.urgent ? <span className="text-primary text-lg">(Urgent)</span> : null}</h1>
                <h1>  <span className="font-semibold">User Name:</span>  {a.name}</h1>
                <p><span className="font-semibold">Mail:</span>  {a.email}</p>
                <p><span className="font-semibold">Appointment Date:</span>  {a.appointDate}</p>
                <p><span className="font-semibold">Appointment Time:</span>  {a.appointTime}</p>
                <p><span className="font-semibold">Problem Type:</span> {a.problemType}</p>
                {a.caseSummary ?  <p><span className="font-semibold">Case Summary:</span>  {a.caseSummary}</p> : ""}
                {a.fileLink ? <p><span className="font-semibold">Attached File:</span> {a.fileLink}</p> : ""}
                {a.tId ? <p><span className="font-semibold">Transection ID:</span> {a.tId}</p> : ""}
                {a.senderNumber ? <p><span className="font-semibold">Sender Number:</span> {a.senderNumber}</p> : ""}
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