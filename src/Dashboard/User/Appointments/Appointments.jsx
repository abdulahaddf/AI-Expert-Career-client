import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { useState } from "react";
import UseUser from "../../../hooks/useUser";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../../../components/common/loader/Loader";
import moment from "moment";
import { toast } from "react-toastify";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Appointments = () => {
  const { language } = useContext(MyContext);
  const [appointments, setAppointments] = useState([]);
  const [userinfo] = UseUser();
  const [isChecked, setIsChecked] = useState(false);
  const [tId, setTid] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://ai-server-sooty.vercel.app/appoints?email=${userinfo?.email}`
      )
      .then((data) => setAppointments(data.data));
  }, [userinfo]);

  console.log(appointments);

  const handleTIdChange = (event) => {
    const id = event.target.value;
    setTid(id);
  };
  const handleNumberChange = (event) => {
    const num = event.target.value;
    setNumber(num);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (id) => {
    console.log(tId, number);
    // console.log("approved")
    const data = {
      tId,
      senderNumber: number,
    };
    // console.log(data);
    fetch(`https://ai-server-sooty.vercel.app/payment/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          document.getElementById(id).close();
          toast.info("Successfully Submitted the Payment Info", {
            icon: <AiFillCheckCircle className="text-xl text-green-500" />,
          });
        } else toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!appointments) return <Loader />;
  return (
    <div>
      <h1 className="font-bold text-center text-2xl">My Appointments</h1>
      <>
        {appointments.length > 0 ? (
          <div className="my-10 grid md:grid-cols-2 gap-5 w-4/5 mx-auto">
            {" "}
            {appointments.map((a, i) => (
              <div
                key={i}
                className="section md:w-96 space-y-4 text-[17px] p-5"
              >
                <h1>
                  <span className="font-semibold mr-2">Consultant Name:</span>{" "}
                  {a.cName}
                </h1>
                <p>
                  <span className="font-semibold mr-2">Appointment Date:</span>
                  {moment(a.appointDate).format("MMMM Do YYYY")}
                </p>
                <p>
                  <span className="font-semibold mr-2">Requested At:</span>
                  {moment(a.createAt).format("MMMM Do YYYY, h:mm a")}{" "}
                </p>
                <p>
                  <span className="font-semibold mr-2">Request Status:</span>
                  {a.request}{" "}
                </p>
                <p>
                  <span className="font-semibold mr-2">
                    Confirmation Status:
                  </span>
                  {a.confirmation}{" "}
                </p>
                <button
                  disabled={a.request === "pending"}
                  className="btn-add tooltip tooltip-bottom"
                  data-tip="You can submit your payment info after the approval by admin"
                  onClick={() => document.getElementById(a._id).showModal()}
                >
                  Payment Info
                </button>
                <dialog id={a._id} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h1 className="text-2xl text-center ">
                      Submit Your Payment Information
                    </h1>
                    <p>
                      <span className="font-semibold mr-2">Requested At:</span>
                      {moment(a.createAt).format("MMMM Do YYYY, h:mm a")}{" "}
                    </p>
                    <div className="space-y-3 my-10">
                      <label className="flex items-center gap-3 text-sm">
                        <input
                          required
                          type="text"
                          onChange={handleTIdChange}
                          placeholder="Enter Your Transection ID"
                          className="input input-bordered input-sm w-full max-w-xs "
                        />
                        Transection ID
                      </label>
                      <label className="flex items-center gap-3 text-sm">
                        <input
                          required
                          type="number"
                          onChange={handleNumberChange}
                          placeholder="Enter Sender Number"
                          className="input input-bordered input-sm w-full max-w-xs "
                        />
                        Sender Number
                      </label>
                      <div className="flex items-center gap-2">
                        
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="checkbox checkbox-sm checkbox-error "
                          />
                          <Link
                          to="/terms&conditions"
                          className="flex items-center gap-3 text-sm"
                        >
                          {language == "bn"
                            ? "সমস্ত শর্তাবলীর সাথে রাজী হোন"
                            : "Accept All Terms and Conditions"}
                        </Link>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSubmit(a._id)}
                      disabled={!isChecked}
                      to="/complete-enroll"
                      className="btn-add"
                    >
                      Submit
                    </button>
                  </div>
                </dialog>
              </div>
            ))}
          </div>
        ) : (
          <p className="my-10 text-3xl font-semibold text-center">
            {" "}
            You Don't have any appointments yet
          </p>
        )}
      </>
    </div>
  );
};

export default Appointments;
