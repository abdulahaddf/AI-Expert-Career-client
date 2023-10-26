import email from "./Assests/email.svg";
import newsletter from "./Assests/newsLetter.svg";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const NewsLetter = () => {
  const { language } = useContext(MyContext);
  const form = useRef();
  const sendEmail = (e) => {
   
    e.preventDefault();

    emailjs.sendForm('service_lnry645', 'template_861sgkd', form.current, '0rD29cz3B18UoueZt')
      .then((result) => {
          console.log(result.text);
          if(result.text === 'OK'){
            Swal.fire({
              position: 'top-right',
              icon: 'success',
              title: "You've subscribed",
              showConfirmButton: false,
              timer: 1500
            })
          }
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row  md:items-center lg:space-x-4">
        <div className="w-3/4 mx-auto">
          <h2 className="md:text-3xl lg:text-[35px] font-bold pb-3">
            {language == "bn"
              ? "এ আই এর সকল আপডেট নিউজ পেতে এখনই সাবস্ক্রাইব করুন"
              : "Subscribe to our NEWSLETTER to get all the updates on AI"}
          </h2>
         
          <div className="pt-14">
            <div className="border flex bg-white w-full pl-2">
              <img src={email} alt="" />
              <input
                type="email"
                placeholder={language == "bn" ? "ই-মেইল" : "Email"}
                className="border-none outline-none w-full p-3"
              />
              <button className="bg-[#FF0944] text-white w-[171px] rounded-[5px]">
                {language == "bn" ? "সাবস্ক্রাইব" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-1/2 lg:w-3/4 mx-auto">
          <img src={newsletter} alt="" className="w-[497px] h-[379px]" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
