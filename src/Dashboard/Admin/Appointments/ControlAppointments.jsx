import { useEffect, useState } from "react";


const ControlAppointments = () => {
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
    return (
        <div>
            <h1 className="text-3xl text-center my-5">Control Appointments</h1>
        </div>
    );
};

export default ControlAppointments;