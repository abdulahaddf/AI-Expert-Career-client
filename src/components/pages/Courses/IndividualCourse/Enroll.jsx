import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Enroll = () => {
    const location = useLocation();
    const { course, payable,  discountAmount } = location.state || {};
    const {title} = course;



    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="w-full h-[100vh]">
            <h1 className="text-3xl text-center my-10">Enroll your Course :  {title}</h1>
            <h3 className="text-3xl text-center my-10">You Need to pay :  {payable ? payable :  discountAmount}</h3>

        </div>
    );
};

export default Enroll;