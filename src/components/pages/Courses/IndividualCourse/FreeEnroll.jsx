import { Link, useLocation } from "react-router-dom";
import UseUser from "../../../../hooks/useUser";
import { useState } from "react";
import Loader from "../../../common/loader/Loader";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import free from "../../../../assets/aiload/free.json";

const FreeEnroll = () => {
    const [userinfo]= UseUser();
    const location = useLocation();
    const {_id, title} = location.state;
    const [isChecked, setIsChecked] = useState(false);



    const handleSubmit = async () => {
       
    
      
    
        try {
        
          // Prepare Enroll Data
          const courseData = {
            userId : userinfo._id,
            name : userinfo.displayName,
            email : userinfo.email,
            courseId : _id,
            courseTitle : title,
            status : "approved",
          };
    
          // Send Course Data to API
          const apiResponse = await fetch("http://localhost:5000/enroll", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(courseData),
          });
    
          if (!apiResponse.ok) {
            throw new Error("Course insertion failed");
          }
    
          const responseData = await apiResponse.json();
    
          if (responseData.insertedId) {
            toast.success("You've Successfully Enrolled the Course")
           
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Something went wrong, try again")
        }
      };




  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  if(!userinfo) return <Loader/>
    return (
        <div className="flex justify-evenly h-[70vh] items-center">
            <div className="section h-fit w-2/5 text-xl p-14">
                <h1 className="font-bold my-4">Your Information:</h1>
                    
                <div className="space-y-2 ">
                    <p>
                   <span className="font-semibold">Name:</span> {userinfo.displayName}

                    </p>
                    <hr />
                    <p>
                    <span className="font-semibold">Email :</span> {userinfo.email}
                    </p>
                    <hr />
                    <p>
                    <span className="font-semibold">Phone:</span> {userinfo.phone ? userinfo.phone : "null"}
                    </p>

                <p>If you want to update your Information <Link to="/dashboard/my-profile" className="text-blue-600">Click Here</Link></p>
                </div>
            </div>
           <div className="flex section">
           <div className=" p-12 text-xl space-y-3">
                <h1 className="font-bold my-4">Course Details</h1>
                <p className="font-semibold">{title}</p>
                <p className="">Free Course</p>
                <div>
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox checkbox-sm checkbox-error "
        />
        Accept All Terms and Conditions
      </label>
      <br />
     
    </div>
                <Link onClick={handleSubmit} disabled={!isChecked} state={title} to="/complete-enroll" className="btn-add">Complete Enrollment</Link>
            </div>
            <div className="w-42 flex items-center ">
            <Lottie
          className="select-none pointer-events-none no-select unselectable w-full"
          animationData={free}
          loop={true}
        />
            </div>
           </div>
        </div>
    );
};

export default FreeEnroll;