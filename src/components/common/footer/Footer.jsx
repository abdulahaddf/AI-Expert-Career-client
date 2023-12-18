import { Link } from "react-router-dom";
import Logo from "/img/logowhite.png";

import footerBG from "./alogo.svg";
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
    console.log(e);
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
        setMail("");
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
  const phoneNumber = "+8801995536898";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };
  {/* <img
          className="absolute bottom-14 md:bottom-0 right-0 w-72 z-0 "
          src={footerBG}
          alt=""
        /> */}
  return (
    <div style={{
      '--image-url': `url(${footerBG})`,
      backgroundPosition: 'bottom 10px right -80px',
      backgroundRepeat: 'no-repeat',
      
    }} className="bg-[#000000] bg-[image:var(--image-url)] bg-[length:500px_500px] w-full  mx-auto">
      <div className="pt-10 pb-10 px-4 mx-auto  md:px-24 lg:px-20 ">
      <div
  
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 text-white text-center sm:text-start "
>
          <div className="col-span-2 2xl:p-4 ">
            <Link to="/" className="">
              <img
                className="select-none pointer-events-none no-select unselectable mx-auto md:mx-px w-36 md:w-48"
                src={Logo}
                alt=""
              />
            </Link>
            <h4 className="text-white/50 text-[18px] my-[36px]">
              <span className="text-white">Our vision</span> is to see Al as a
              driving force behind Bangladeshs economic prosperity,
              Bangladeshi Al experts on the global stage and make opportunities
              for all.
            </h4>
            <h4 className="text-white/50 text-[18px] my-[36px]">
              <span className="text-white">Our mission</span> is to democratize
              Al knowledge, making it accessible for every aspiring learners.
              fostering a culture of continuous learning to the next generation
              of Al leaders in Bangladesh.
            </h4>
            <div className="flex justify-center lg:justify-start items-center gap-4 ">
              <Link
                to="https://www.facebook.com/aiexpertcareer"
                target="_blank"
                className="rounded-full  w-10 p-0.5"
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
                className="rounded-full w-10 p-0.5"
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
                className="rounded-full w-10 p-0.5"
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
                className="rounded-full w-8 p-0.5"
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
                className="rounded-full w-10 p-0.5"
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
              <div className="flex flex-col gap-2 text-[14px]">
                <p>
                  <Link className="hover:text-primary" to="/ai-consultant">
                    {language == "bn"
                      ? "আপনার AI যাত্রা শুরু করুন"
                      : "Start your AI Journey"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-primary" to="/courses">
                    {language == "bn" ? "কোর্স সমূূহ" : "View All Courses"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-primary" to="/ai-consultant">
                    {language == "bn" ? "ফ্রি কনসালটেন্সি" : "Free Consultancy"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-primary"
                    target="_blank"
                    to="http://kritrimotta.aiexpertcareer.com"
                  >
                    {language == "bn"
                      ? "বাংলা AI ম্যাগাজিন"
                      : "Bangla AI Magazine"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-primary" to="/blogs">
                    {language == "bn" ? "ব্লগ ও আর্টিকেল" : "Blogs & Articles"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-primary" to="/ai-consultant">
                    {language == "bn"
                      ? "ক্যারিয়ার রোডম্যাপ প্রয়োজন?"
                      : "Need Career Roadmap?"}
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn" ? "আরো কিছু লিঙ্ক" : "Extra Links"}
              </h2>
              <div className="flex flex-col gap-2 text-[14px]">
                <p>
                  <Link className="hover:text-primary" to="/terms&conditions">
                    {language == "bn" ? "শর্তাবলী" : "Terms & Conditions"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-primary" to="/privacy-policy">
                    {language == "bn" ? "প্রাইভেসি পলিসি" : "Privacy policy"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-primary" to="/refund-policy">
                    {language == "bn" ? "রিফান্ড পলিসি" : "Refund Policy"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-primary"
                    target="_blank"
                    to="https://forms.gle/w6WDmG8UXRfX2T8d7"
                  >
                    {language == "bn"
                      ? "একাডেমিক অ্যাসোসিয়েট হিসেবে যোগ দিন"
                      : "Join as a Academic Associate"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-primary"
                    target="_blank"
                    to="https://forms.gle/AhnfGZcdjJMcMAkH9"
                  >
                    {language == "bn"
                      ? "এআই ম্যাগাজিন টিমে যোগ দিন"
                      : "Join AI Magazine Team"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-primary"
                    target="_blank"
                    to="https://forms.gle/xGHczAK8qySeyLKG7"
                  >
                    {language == "bn"
                      ? "একজন পরামর্শদাতা হিসাবে যোগদান করুন"
                      : "Join as an Consultant"}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-[60px]">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                Contact information
              </h2>
              <div className="flex flex-col gap-2 text-[14px]">
                <a href="mailto: info@aiexpertcareer.com">
                  Email:{" "}
                  <span className="hover:text-primary">
                    info@aiexpertcareer.com
                  </span>
                </a>

                <p className="cursor-pointer" onClick={handleCall}>
                  Cell:{" "}
                  <span className="hover:text-primary">+8801724866855</span>,
                  <span className="hover:text-primary">+8801995536898</span>
                </p>
                <p>
                  Address:{" "}
                  <span className="hover:text-primary">
                    11, Barabag, Mirpur-2, Dhaka 1216.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn"
                  ? "এ আই সম্পর্কিত আপডেট থাকতে সাবস্ক্রাইব করুন"
                  : "Subscribe to our newsletter "}
              </h2>

              <div className="">
                <div className=" flex items-center bg-white rounded-lg border w-fit">
                 
                  <AiOutlineMail className="text-primary w-10 md:w-16" />
                  <div>
                    <form>
                      <input
                        type="email"
                        placeholder={language === "bn" ? "ই-মেইল" : "Email"}
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className="outline-none  w-full border-none text-black"
                      />
                      {/* <button type="submit">Subscribe</button> */}
                    </form>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="z-20 inline-flex items-center justify-center rounded-lg h-12 text-lg w-32  bg-[#ED1B24] "
                  >
                    {language == "bn" ? "সাবস্ক্রাইব" : "Subscribe"}
                  </button>
                </div>
                <div>{error && <p className="error-message">{error}</p>}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-20 lg:text-[18px] text-white">
            Copyright &copy; 2023 AI Expert Career
          </p>
          <Link
            to="https://abdulahad-df.netlify.app"
            target="_blank"
            className="text-white z-50"
          >
            Developed by{" "}
            <span className="font-bold underline hover:text-primary">AHAD</span>
          </Link>
        </div>
        {/* <img
          className="absolute bottom-14 md:bottom-0 right-0 w-72 z-0 "
          src={footerBG}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Footer;
