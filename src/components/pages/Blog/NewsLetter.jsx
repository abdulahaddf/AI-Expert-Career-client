import email from "./Assests/email.svg";
import newsletter from "./Assests/newsLetter.svg";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";

const NewsLetter = () => {
  const { language } = useContext(MyContext);

  const [mail, setMail] = useState("");
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(mail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null); // Clear any previous errors

    try {
      const response = await fetch(
        "https://ai-server-sooty.vercel.app/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      if (data.insertedId) {
        setMail("")
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You've Subscribed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setError("An error occurred while subscribing. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row  md:items-center lg:space-x-4">
        <div className="md:w-3/4 mx-auto">
          <h2 className="md:text-3xl lg:text-[35px] font-bold pb-3">
            {language == "bn"
              ? "এ আই এর সকল আপডেট নিউজ পেতে এখনই সাবস্ক্রাইব করুন"
              : "Subscribe to our NEWSLETTER"}
          </h2>

          <div className="pt-5">
          <div className=" flex items-center justify-between bg-white rounded-xl   w-full  border-2 border-primary">
                  {/* <img src={email} alt="" /> */}
                  <div className="rounded-lg">
                    <form className="flex items-center ">
                  <AiOutlineMail className="text-primary w-10 md:w-16" />
                      <input
                        type="email"
                        placeholder={language === "bn" ? "ই-মেইল" : "Enter your email"}
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className="outline-none   border-none text-black"
                      />
                      {/* <button type="submit">Subscribe</button> */}
                    </form>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center rounded-lg h-12 text-lg w-32  bg-[#ED1B24] text-white"
                  >
                   
                    {language == "bn" ? "সাবস্ক্রাইব" : "Subscribe"}
                  </button>
                </div>
            <div>{error && <p className="error-message">{error}</p>}</div>
          </div>
        </div>
        <div className="flex justify-end w-1/2 lg:w-3/4 mx-auto">
          <img src={newsletter} alt="" className="my-2 w-[497px]  md:h-[379px]" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
