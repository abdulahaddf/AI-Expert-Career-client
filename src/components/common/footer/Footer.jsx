import { Link } from "react-router-dom";
import Logo from "/img/logowhite.png";

import footerBG from "./ai expert career icon white.svg";
import { useContext, useState } from "react";
import { MyContext } from "../../../Context/Context";
import Swal from "sweetalert2";
import { BsMailbox, BsTelegram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const { language } = useContext(MyContext);
  const [mail, setMail] = useState("");
  const [error, setError] = useState(null);
// console.log(mail);
// console.log(error)
  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    console.log(e)
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
        // setMail("")
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
    <div className="bg-[#000000] ">
      <div className="pt-20 pb-10 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-white text-center sm:text-start ">
          <div className="col-span-2 2xl:p-4 pr-">
            <Link to="/" className="">
              <img
                className="select-none pointer-events-none no-select unselectable mx-auto md:mx-px w-36 md:w-64"
                src={Logo}
                alt=""
              />
            </Link>
            <h4 className="text-white font-bold text-[18px] my-[36px]">
              Ai Expert Career, aims to promote the adoptation and awareness of
              Artificial Intelligence (AI) in Bangladesh We believe that AI has
              the potential to revolutionize various indusstries in Bangladesh.
            </h4>
            <div className="flex justify-center lg:justify-start items-center gap-4 ">
              <Link
                to="https://www.facebook.com/aiexpertcareer"
                target="_blank"
                className="rounded-full  border border-dashed p-0.5"
              >
                <img
                  className="w-12"
                  src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/ai_expert_career/"
                className="rounded-full border border-dashed p-0.5"
              >
                <img
                  className="w-12"
                  src={"https://www.svgrepo.com/show/452231/instagram.svg"}
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/aiexpertcareer/"
                className="rounded-full border border-dashed p-0.5"
              >
                <img
                  className="w-12"
                  src="https://www.svgrepo.com/show/452051/linkedin.svg"
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                to="https://wa.me/+8801995536898"
                className="rounded-full border border-dashed p-0.5"
              >
                <img
                  className="w-12"
                  src="https://www.svgrepo.com/show/354560/whatsapp.svg"
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                to="https://www.youtube.com/@aiexpertcareer"
                className="rounded-full border border-dashed p-0.5"
              >
                <img
                  className="w-12"
                  src="https://www.svgrepo.com/show/452138/youtube.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="space-y-[30px]">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn" ? "কুইক লিংক" : "Quick link"}
              </h2>
              <div className="flex flex-col gap-2 text-[18px]">
                <p>
                  <Link to="/terms&conditions"
                  >
                    {language !== "bn"
                      ? "Terms & Conditions"
                      : "শর্তাবলী"}
                  </Link>
                </p>
                <p>
                  <Link
                    to="/courses"
                  >
                    {language == "bn" ? "কোর্স সমূূহ" : "Courses"}
                  </Link>
                </p>
                <p>
                  <Link
                    to="/ai-consultant"
                  >
                    {language == "bn"
                      ? "কনসালট্যান্ট"
                      : " Consultants"}
                  </Link>
                </p>
                <p>
                  <Link
                    to="/blog"
                  >
                    {language == "bn"
                      ? "ব্লগ ও রিসোর্সেস"
                      : "Blogs And Resources"}
                  </Link>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language == "bn" ? "আমাদের সম্পর্কে " : " About Us"}
                  </a>
                </p>
              
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language == "bn"
                      ? "একাডেমিক এসোসিয়েট হতে চান?"
                      : "Contract with as a Acadamic Assistant"}
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn" ? "আরো কিছু" : "Extras"}
              </h2>
              <div className="flex flex-col gap-2 text-[18px]">
                <p>
                  <a
                    href="https://forum.solana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language == "bn"
                      ? "সাপোর্ট ও জরুরি সেবা"
                      : "Help & Support"}
                  </a>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language == "bn" ? "ডিস্ক্লেইমার" : "Disclaimers"}
                  </a>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language == "bn"
                      ? "টার্মস এন্ড কন্ডিশন"
                      : "Terms and Conditions"}
                  </a>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language == "bn" ? "প্রাইভেসি পলিসি" : "Privacy policy"}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-[60px]">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                Contact information
              </h2>
              <div className="flex flex-col gap-2 text-[18px]">
                <p>
                  <a
                    href="https://forum.solana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email: aiexpertcareer.info@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Address: 6A, 152/2K, panthapath
                  </a>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dhaka - 1205, Bangladesh
                  </a>
                </p>
                <p>
                  <a
                    href="https://discord.com/invite/kBbATFA7PW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cell: +8801724866855, +8801995536898
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn"
                  ? "এ আই সম্পর্কিত আপডেট থাকতে সাবস্ক্রাইব করুন"
                  : "  Subscribe to our newsletter Enter your email Subscribe"}
              </h2>
   




<div className="">
            <div className=" flex items-center bg-white rounded-lg pl-2 border w-fit">
              {/* <img src={email} alt="" /> */}
                  <AiOutlineMail className="text-primary w-10 md:w-16"/>
              <div>
                <form>
                  <input
                    type="email"
                    placeholder={language === "bn" ? "ই-মেইল" : "Email"}
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    className="outline-none  w-full p-3 border-none text-black"
                  />
                  {/* <button type="submit">Subscribe</button> */}
                </form>
              </div>

              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition rounded-r-md duration-200 shadow-md md:w-auto bg-[#ED1B24] focus:shadow-outline focus:outline-none"
              > <BsTelegram className="pr-1"/>
                {language == "bn" ? "সাবস্ক্রাইব" : "Subscribe"}
              </button>
            </div>
            <div>{error && <p className="error-message">{error}</p>}</div>
          </div>


            </div>
          </div>
        </div>
        <div>
          <p className="mt-20 lg:text-[18px] font-bold text-white">
            {language == "bn"
              ? "সর্বস্বত্ত সংরক্ষিত - Ai Expert Career - 2023"
              : "All Right researved by Ai Expert Career - 2023"}
          </p>
          <Link to="https://abdulahad-df.netlify.app" target="_blank" className="text-white z-50">Developed by <span className="font-bold underline hover:text-primary">AHAD</span></Link>
        </div>
        <img
          className="absolute bottom-14 md:bottom-0 right-0 w-72 z-0 "
          src={footerBG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
