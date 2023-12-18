import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseUser from "../../../../hooks/useUser";
import { toast } from "react-toastify";
import Loader from "../../../common/loader/Loader";
import PromoCode from "./PromoCode";
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";

const Enroll = () => {
  const location = useLocation();
  const { language } = useContext(MyContext);
  const { course, payable, discountAmount, courseFee, discount } =
    location.state;
  const { _id, title } = course;
  const [userinfo] = UseUser();
  // console.log(userinfo);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [tId, setTid] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  // console.log(tId, number);
  // console.log(error.length)
console.log(course)
  const handleSubmit = async () => {
    try {
      // Prepare Enroll Data
      const courseData = {
        userId: userinfo._id,
        name: userinfo.displayName,
        email: userinfo.email,
        courseId: _id,
        courseTitle: title,
        course: course,
        progress: 0,
        certificate: false,
        tId: tId,
        sender: number,
        amount: payable || discountAmount,
        courseModel : course?.courseModel,
        status: "pending",
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

  const handleTIdChange = (event) => {
    const id = event.target.value;
    setTid(id);
  };




  const isValidPhoneNumber = (input) => /^01\d{9}$/.test(input);

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;

    if (isValidPhoneNumber(newNumber) || newNumber === '') {
      setNumber(newNumber);
      setError("");
    } else {
      // Handle invalid input (e.g., show a message or prevent updating state)
      setError('Please enter a valid number');
    }
  };







  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // if (!userinfo) return <Loader />;
  useEffect(() => {
    if (userinfo.message) {
      toast.error("You need to log in first");
     
      navigate('/login', { state: { from: location } });
    }
  }, [location]);
  return (
    
   
    <div className="md:flex justify-evenly md:h-[100vh] my-10 px-3 md:px-0">
      <div className="section h-fit md:w-2/5 text-xl p-14">
        <h1 className="font-bold my-4 text-3xl">User Information:</h1>

        <div className="space-y-2 ">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {userinfo.displayName ? userinfo.displayName : "null"}
          </p>
          <hr />
          <p>
            <span className="font-semibold">Email :</span>{" "}
            {userinfo.email ? userinfo.email : "null"}
          </p>
          <hr />
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {userinfo.phone ? userinfo.phone : "null"}
          </p>

          <p>
            If you want to update your Information{" "}
            <Link to="/dashboard/my-profile" className="text-blue-600">
              Click Here
            </Link>
          </p>
        </div>
      </div>

      <div className="section md:w-2/5 h-fit p-5 text-xl space-y-3 my-5 mb-10">
        <h1 className="font-bold my-4 text-3xl">Payment Process</h1>
        <p className="font-semibold">Course Name: {title}</p>

        <div>
          <section className="text-slate-900 font-semibold my-5 p-1  space-y-4 ">
            <div className="hidden md:block space-y-4">
              <p className=" flex justify-between border-b-2">
                <span className="text-xl">
                  {" "}
                  {language == "bn" ? "কোর্সের মূল্য:" : "Course Fee:"}
                </span>{" "}
                {discount ? (
                  <span className="line-through text-gray-500 mx-2 text-md">
                    ৳ {courseFee}
                  </span>
                ) : (
                  ""
                )}
                <span className="text-xl">৳{discountAmount}</span>
                {/* <span className="text-red-600 ml-4"> Save: {discount}%</span> */}
              </p>
              <div className="flex items-center gap-3 justify-center"> </div>

              <p className=" text-xl flex justify-between border-b-2">
                {language == "bn" ? "সর্বমোট:" : "Payable Total:"}
                <span className="font-normal">
                  ৳ {payable ? payable.toFixed(0) : discountAmount.toFixed(0)}{" "}
                </span>{" "}
              </p>
            </div>

            <div className="md:hidden">
              <PromoCode
                discountAmount={discountAmount}
                courseFee={courseFee}
                discount={discount}
                course={course}
              />
            </div>

            {language == "bn" ? (
              <>
                <p className="text-sm font-normal">
                  আপনি নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করে আপনার পেমেন্ট সম্পূর্ণ
                  করতে হবে:
                </p>
                <ol className="list-decimal pl-5">
                  <li className="text-sm font-normal">
                    নিম্নোক্ত নম্বরে{" "}
                    <span className="text-primary text-lg">
                      {payable ? payable : discountAmount}
                    </span>{" "}
                    টাকা সরবরাহ করুন:
                    <span className="text-primary text-lg"> 01995536898</span>
                  </li>
                  <li className="text-sm font-normal">
                    লেনদেন সম্পূর্ণ করতে Bkash, Nagad, বা Rocket ব্যবহার করুন।
                  </li>
                  <li className="text-sm font-normal">
                    নীচের ইনপুট ফিল্ডে আপনার লেনদেনের ট্রান্সঅ্যাকশন আইডি এবং যে
                    মোবাইল নম্বরটি ব্যবহার করেছেন, সেই নম্বরটি প্রদান করুন।
                  </li>
                  <li className="text-sm font-normal">
                    "সাবমিট" বোতামে ক্লিক করুন এবং অ্যাডমিনের অনুমোদনের জন্য
                    অপেক্ষা করুন।
                  </li>
                </ol>
              </>
            ) : (
              <div className="">
                <p className="text-sm font-normal">
                  To complete your payment, please follow these steps:
                </p>
                <ol className="list-decimal pl-5 space-y-2 my-2">
                  <li className="text-sm font-normal">
                    Transfer{" "}
                    <span className="text-primary text-lg">
                      {payable ? payable.toFixed(0) : discountAmount.toFixed(0)}
                    </span>{" "}
                    TK to the following number:
                    <span className="text-primary text-lg"> 01995536898</span>
                  </li>
                  <li className="text-sm font-normal">
                    Use Bkash, Nagad, or Rocket for the transaction.
                  </li>
                  <li className="text-sm font-normal">
                    Enter your Transaction ID and the phone number you used for
                    the transaction in the input fields below.
                  </li>
                  <li className="text-sm font-normal">
                    Click the "Submit" button to request Admin approval.
                  </li>
                </ol>
              </div>
            )}

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
                type="tel"
                onChange={handleNumberChange}
                placeholder="01xxxxxxxxx"
                className="input input-bordered input-sm w-full max-w-xs "
              />
            Sender Number
            </label>
          </section>
          <p className="text-sm text-primary">{error ? error : ""}</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkbox checkbox-xs md:checkbox-sm checkbox-error "
          />
          <Link
            to="/terms&conditions"
            className="flex items-center gap-3 text-sm"
          >
            {language == "bn" ? (
              "সমস্ত শর্তাবলীর সাথে রাজী হোন"
            ) : (
              <p>
                Accept All{" "}
                <span className="underline font-semibold">
                  Terms and Conditions
                </span>
              </p>
            )}
          </Link>
          <br />
        </div>
        <Link
          onClick={handleSubmit}
          disabled={error.length > 0 || !isChecked || tId.length < 6 || number.length < 11}
          state={title}
          to="/complete-enroll"
          className="btn-add"
        >
          Submit
        </Link>
      </div>
    </div>
            
  );
};

export default Enroll;
