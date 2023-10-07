import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import completed from "../../../../assets/aiload/completed.json";

const CompletePurchaseCourse = () => {
    const location = useLocation();
    const  title = location.state;
    console.log(location)
    
    return (
        <div className="h-[80vh] flex  justify-center items-center">
            <div className="section w-[500px] h-[500px] flex flex-col mx-auto justify-center items-center  text-xl space-y-3">
            <div className="w-32">
            <Lottie
          className="select-none pointer-events-none no-select unselectable w-full"
          animationData={completed}
          loop={true}
        />
            </div>
            <h1>Congratulations!</h1>
            <h3>You've Enrolled the course</h3>
            <p>Course Name : {title}</p>
            <p>Please wait for the admin approval</p>
            <p><Link className="text-blue-600">Click Here</Link>To Explore More Courses</p>
        </div>
        </div>
    );
};

export default CompletePurchaseCourse;