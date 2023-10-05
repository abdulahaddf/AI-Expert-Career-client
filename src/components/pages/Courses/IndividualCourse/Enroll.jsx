import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import UseUser from "../../../../hooks/useUser";
import { toast } from "react-toastify";
import Loader from "../../../common/loader/Loader";
import PromoCode from "./PromoCode";
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";


const Enroll = () => {
    const location = useLocation();
    const {language} = useContext(MyContext)
    const { course, payable,  discountAmount, courseFee, discount } = location.state;
    const {_id,title} = course;
    const [userinfo]= UseUser();
   
    const [isChecked, setIsChecked] = useState(false);
    const [tId, setTid] = useState("")
    const [number, setNumber] = useState("")
console.log(tId, number)
// console.log(courseFee)


 
    const handleSubmit = async () => {
       
    
      
    
        try {
        
          // Prepare Enroll Data
          const courseData = {
            userId : userinfo._id,
            name : userinfo.displayName,
            email : userinfo.email,
            courseId : _id,
            courseTitle : title,
            tId : tId,
            sender: number,
            amount : payable || discountAmount,
            status : "pending",
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
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      if(!userinfo) return <Loader/>
    return (
        <div className="flex justify-evenly h-[100vh] ">
            <div className="section h-fit w-2/5 text-xl p-14">
                <h1 className="font-bold my-4">User Information:</h1>
                    
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
            <div className="section w-2/5 p-12 text-xl space-y-3">
                <h1 className="font-bold my-4">Course Details</h1>
                <p className="font-semibold">{title}</p>
               



                <div>
      <section className="text-slate-900 font-semibold my-5 p-1   space-y-4 ">
        <p className=" flex justify-between border-b-2">
          <span className="text-xl"> {language == "bn"
            ? "কোর্সের মূল্য:"
            : "Course Fee:"}</span>{" "}
          <span className="line-through text-gray-500 mx-2 text-md">
            ৳ {courseFee}
          </span>{" "}
          <span className="text-xl">৳{discountAmount}</span>
          {/* <span className="text-red-600 ml-4"> Save: {discount}%</span> */}
        </p>
        <div className="flex items-center gap-3 justify-center">
          {" "}
          
          
        </div>
       
        {/* TODO _________ change the final amount by fetching the dis count */}
        <p className=" text-xl flex justify-between border-b-2">
          {language == "bn"
            ? "প্রদেয় মোট:"
            : "Payable Total:"}
          <span className="font-normal">
            ৳ {payable ? payable : discountAmount}{" "}
          </span>{" "}
        </p>
        <div className="text-center">
         <p className="text-sm font-normal">
            You Need to pay <span className="text-primary text-lg">{payable ? payable : discountAmount}</span> TK to <span className="text-primary text-lg">0190-2221726 </span>
            through Bkash, Nagad or Rocket then give the Transection ID and the number from which you send the money in the following input field. Then submit for the Admin Approval 
         </p>

        

        </div>
        <label className="flex items-center gap-3 text-sm">
        <input
          type="text"
          onChange={handleTIdChange}
          placeholder="Enter Your Transection ID"
          className="input input-bordered input-sm w-full max-w-xs "
        />
        Transection ID
      </label>
        <label className="flex items-center gap-3 text-sm">
        <input
          type="number"
          onChange={handleNumberChange}
          placeholder="Enter Sender Number"
          className="input input-bordered input-sm w-full max-w-xs "
        />
        Sender Number
      </label>
      </section>
    </div>













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
        </div>
    );
};

export default Enroll;




        // <div className="w-full h-[100vh]">

        //     <h1 className="text-3xl text-center my-10">Enroll your Course :  {title}</h1>
        //     <h3 className="text-3xl text-center my-10">You Need to pay :  {payable ? payable :  discountAmount}</h3>

        // </div>