import { Link, useLocation } from "react-router-dom";
import UseUser from "../../../../hooks/useUser";
import { useContext, useState } from "react";
import Loader from "../../../common/loader/Loader";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import free from "../../../../assets/aiload/free.json";
import { MyContext } from "../../../../Context/Context";

const FreeEnroll = () => {
  const { language } = useContext(MyContext);
  const [userinfo] = UseUser();
  const location = useLocation();
  const { _id, title, course } = location.state;
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async () => {
    try {
      // Prepare course enroll Data
      const courseData = {
        userId: userinfo._id,
        name: userinfo.displayName,
        email: userinfo.email,
        course: course,
        courseId: _id,
        courseTitle: title,
        progress: 0,
        certificate: false,
        status: "approved",
      };

      // Send Course Data to API
      const apiResponse = await fetch(
        "https://ai-server-sooty.vercel.app/enroll",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(courseData),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Course insertion failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        toast.success("You've Successfully Enrolled the Course");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong, try again");
    }
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  if (!userinfo) return <Loader />;
  return (

    <div className="section mx-auto my-5 md:my-10 md:w-2/5 w-11/12 text-xl md:p-14">
    <h1 className="font-bold text-2xl my-4">Your Information:</h1>
  
    <div className="space-y-4">
      <p className="font-semibold">
        Name: <span className="text-primary">{userinfo.displayName}</span>
      </p>
      <hr className="border-t border-gray-300" />
      <p className="font-semibold">
        Email: <span className="text-primary">{userinfo.email}</span>
      </p>
      <hr className="border-t border-gray-300" />
      <p className="font-semibold">
        Phone:{" "}
        {userinfo.phone ? (
          <span className="text-primary">{userinfo.phone}</span>
        ) : (
          <span className="text-gray-400">null</span>
        )}
      </p>
      <p>
        If you want to update your Information{" "}
        <Link to="/dashboard/my-profile" className="text-blue-600">
          Click Here
        </Link>
      </p>
    </div>
    {/* </div> */}
    <div className=" py-5 text-xl space-y-3">
      <h1 className="font-bold text-2xl my-4">Course Details</h1>
      <p className="font-semibold">{title}</p>
      <p>Free Course</p>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className=" mr-2 checkbox checkbox-md items-center"
        />
          <Link
            to="/terms&conditions"
            className="flex items-center gap-3 text-sm"
          >
            {language == "bn"
              ? "সমস্ত শর্তাবলীর সাথে রাজী হোন"
              : <p>Accept All <span className="underline font-semibold">Terms and Conditions</span></p>}
          </Link>
      </div>
<div className="pt-5">
<Link
        onClick={handleSubmit}
        disabled={!isChecked}
        state={title}
        to="/complete-enroll"
        className={`btn-add ${!isChecked && "opacity-50 cursor-not-allowed"}`}
      >
        Complete Enrollment
      </Link>
</div>
    </div>
  </div>
  
  );
};

export default FreeEnroll;
