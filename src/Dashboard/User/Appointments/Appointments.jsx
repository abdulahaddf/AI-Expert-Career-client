import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { useState } from "react";
import UseUser from "../../../hooks/useUser";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../../../components/common/loader/Loader";
import moment from "moment";


const Appointments = () => {
    const { language } = useContext(MyContext);
    const [appointments, setAppointments] = useState([]);
    const [userinfo] = UseUser();
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/appoints?email=${userinfo?.email}`)
        .then((data) => setAppointments(data.data));
    }, [userinfo]);
  
    console.log(appointments);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    if (!appointments) return <Loader />;
    return (
        <div >
            <h1 className="font-bold text-center text-2xl">My Appointments</h1>
            <div className="my-10">
                {appointments.map((a,i) => <div key={i} className="section w-96 space-y-4 text-[17px] p-5">
                    <h1><span className="font-semibold mr-2">Consultant Name:</span> {a.cName}</h1>
                    <p><span className="font-semibold mr-2">Appointment Date:</span>{moment(a.appointDate).format("MMMM Do YYYY")}</p>
                    <p><span className="font-semibold mr-2">Requested At:</span>{moment(a.createAt).format(
                              "MMMM Do YYYY, h:mm a")} </p>
                    <p><span className="font-semibold mr-2">Request Status:</span>{a.request} </p>
                    <p><span className="font-semibold mr-2">Confirmation Status:</span>{a.confirmation} </p>
                    <button className="btn-add" onClick={()=>document.getElementById('my_modal_3').showModal()}>Payment Info</button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                      </div>
                    </dialog>
                </div>)}
            </div>
        </div>
    );
};

export default Appointments;