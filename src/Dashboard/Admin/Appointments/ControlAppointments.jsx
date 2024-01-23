import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import Loader from "../../../components/common/loader/Loader";
const ControlAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disabledAcceptButtons, setDisabledAcceptButtons] = useState([]);
  const [disabledConfirmButtons, setDisabledConfirmButtons] = useState([]);
  const [toEmail1, setToEmail1] = useState("");
  const [toEmail2, setToEmail2] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const editor = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  console.log(message);

  // console.log(appointments)
  console.log(toEmail1, toEmail2, subject, message);
  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data));
    setIsLoading(false);
  }, []);

  const disableAcceptButton = (id) => {
    setDisabledAcceptButtons((prevDisabled) => [...prevDisabled, id]);
  };

  const handleRequest = (id) => {
    // console.log("approved")
    const data = {
      request: "approved",
    };
    // console.log(data);
    fetch(`https://ai-server-sooty.vercel.app/appointRequest/${id}`, {
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

  // const sendEmail = async (a) => {
  //   setToEmail1(a.email);
  //   setToEmail2(a.cMail);

  //   try {
  //     const response = await fetch(
  //       "https://ai-server-sooty.vercel.app/send-email",
  //       {
  //         method: "POST", // Use POST to send the email data
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           toEmail1,
  //           toEmail2,
  //           subject,
  //           message,
  //         }),
  //       }
  //     );
  //     // console.log(response);
  //     if (response.ok) {
  //       document.getElementById(a.createAt).close();
  //       toast.success("Email sent successfully!");
  //     } else {
  //       toast.error("Failed to send the email.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     alert("An error occurred while sending the email.");
  //   }
  // };





  const sendEmail = async (a) => {
    setToEmail1(a.email);
    setToEmail2(a.cMail);
  
    try {
      // Define the API request for sending the email
      const emailRequest = fetch("https://ai-server-sooty.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toEmail1,
          toEmail2,
          subject,
          message,
        })
      });
  
      // Define the API request for approving the appointment
      const approveRequest = fetch(`https://ai-server-sooty.vercel.app/appointConfirmation/${a._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmation: "approved" }),
      });
  
      // Use Promise.all() to send both requests simultaneously
      const [emailResponse, approveResponse] = await Promise.all([emailRequest, approveRequest]);
  
      if (emailResponse.ok && approveResponse.ok) {
        // Handle success for both requests
        document.getElementById(a.createAt).close();
        toast.success("Emails sent and request approved successfully!");
      } else {
        // Handle error for one or both requests
        toast.error("Failed to send email or approve the request.");
      }
    } catch (error) {
      console.error("Error sending email or approving the request:", error);
      alert("An error occurred while sending the email or approving the request.");
    }
  };
  



  // Pagination
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted and filtered data for pagination
  const paginatedAppointments = appointments.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };







  const editorStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "200px",
    padding: "10px",
    // zIndex: 10000,
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  if (!appointments) return <Loader />;
  return (
    <div>
      <h1 className="my-5 text-3xl text-center">Control Appointments</h1>
      <div className="">
        <table className="table w-full overflow-x-auto text-center shadow-xl table-zebra">
          {/* head */}
          <thead className="text-xl text-center text-white bg-primary">
            <tr>
              <th>#</th>
              <th className="text-center">Consultant </th>
              <th className="text-center">User</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Approval</th>
              <th className="text-center">Confirmation</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {paginatedAppointments?.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.cName}</td>
                <td
                  className={`${
                    a.urgent ? "text-primary text-center" : "text-center"
                  }`}
                >
                  {a.name}
                </td>
                <td className="text-center">
                  {moment(a.appointDate).format("MMMM Do YYYY")}
                </td>
                <td className="text-center">{a.appointTime}</td>

                <td className="text-center">
                  {/* {a.request === 'approved' ? a.request : a.request}{" "} */}
                  <button
                    disabled={
                      disabledAcceptButtons.includes(a._id) ||
                      a.request === "approved"
                    }
                    onClick={() => {
                      handleRequest(a._id);
                      disableAcceptButton(a._id);
                    }}
                    className="mx-1 text-white normal-case btn btn-success btn-xs"
                  >
                    Accept
                  </button>
                </td>

                <td className="text-center">
                  {/* {a.confirmation === 'approved' ? a.confirmation : confirmation}{" "} */}
                  <button
                    // disabled={disabledConfirmButtons.includes(a._id) || a.confirmation === 'approved'}
                    onClick={() => {
                      // handleApprove(a._id);
                      // disableConfirmButton(a._id);
                      document.getElementById(`${a.createAt}`).showModal();
                    }}
                    className="btn-black "
                  >
                    Send Mail
                  </button>
                </td>

                <td className="text-center">
                  <button
                    onClick={() =>
                      document.getElementById(`${a._id}`).showModal()
                    }
                    className="btn-black"
                  >
                    Details
                  </button>
                </td>
                {/* Details */}
                <dialog id={`${a._id}`} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="space-y-4 text-left">
                      <h1 className="mb-10 text-2xl font-semibold text-center">
                        User Details{" "}
                        {a.urgent ? (
                          <span className="text-lg text-primary">(Urgent)</span>
                        ) : null}
                      </h1>
                      <h1>
                        {" "}
                        <span className="font-semibold">User Name:</span>{" "}
                        {a.name}
                      </h1>
                      <p>
                        <span className="font-semibold">Mail:</span> {a.email}
                      </p>
                      <p>
                        <span className="font-semibold">phone:</span> {a.phone}
                      </p>
                      <p>
                        <span className="font-semibold">Appointment Date:</span>{" "}
                        {a.appointDate}
                      </p>
                      <p>
                        <span className="font-semibold">Appointment Time:</span>{" "}
                        {a.appointTime}
                      </p>
                      <p>
                        <span className="font-semibold">Problem Type:</span>{" "}
                        {a.problemType}
                      </p>
                      {a.caseSummary ? (
                        <p>
                          <span className="font-semibold">Case Summary:</span>{" "}
                          {a.caseSummary}
                        </p>
                      ) : (
                        ""
                      )}
                      {a.fileLink ? (
                        <Link to={a.fileLink} target="_blank">
                          <span className="font-semibold">Attached File:</span>{" "}
                          {a.fileLink}
                        </Link>
                      ) : (
                        ""
                      )}
                      {a.tId ? (
                        <p>
                          <span className="font-semibold">Transaction ID:</span>{" "}
                          {a.tId}
                        </p>
                      ) : (
                        ""
                      )}
                      {a.senderNumber ? (
                        <p>
                          <span className="font-semibold">Sender Number:</span>{" "}
                          {a.senderNumber}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </dialog>

                {/* sending mail */}
                <dialog id={`${a.createAt}`} className="modal ">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                        ✕
                      </button>
                    </form>

                    <div className="">
                      <div className="p-2 text-left ">
                        <h2 className="my-5 text-2xl font-semibold text-center">
                          Sending Mail
                        </h2>
                        <div className="mb-4">
                          <p className="pb-1 font-semibold">User Mail</p>
                          <input
                            type="email"
                            placeholder="Recipient Email 1"
                            value={a.email}
                            className="w-full p-2 border rounded "
                          />
                        </div>
                        <div className="mb-4">
                          <p className="pb-1 font-semibold">Consultant Mail</p>
                          <input
                            type="email"
                            placeholder="Recipient Email 2"
                            value={a.cMail}
                            className="w-full p-2 border rounded "
                          />
                        </div>
                        <div className="mb-4">
                          <p className="pb-1 font-semibold">Subject</p>
                          <input
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 border rounded "
                          />
                        </div>
                        <div className="mb-4 ">
                          <p className="pb-1 font-semibold">Mail body</p>

                          <JoditEditor
                            id="message"
                            ref={editor}
                            value={message}
                            // tabIndex={-1}
                            onChange={(s) => setMessage(s)}
                            style={editorStyle}
                          />
                        </div>
                        <div className="text-center">
                          <button
                            onClick={() => sendEmail(a)} // Pass the 'a' object and the 'id' to the function
                            className="btn-black"
                          >
                            Send Email & Approve
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
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

export default ControlAppointments;
