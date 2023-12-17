import { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MyContext } from "../../../Context/Context";


const CallBtn = () => {
  const { language } = useContext(MyContext);
  const phoneNumber = '+8801995536898';

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div>
      <button
        onClick={handleCall}
        className="btn btn-ghost btn-outline normal-case border-primary text-primary hover:border-primary  hover:shadow-lg hover:bg-primary hover:text-white btn-md md:px-8  sm:text-lg md:hidden w-full"
      >
      <BsFillTelephoneFill/> {language == "bn" ? "ফ্রি কল করুন" : " Call for Free Consultancy"} 
      </button>
      <Link
        target="_blank"
        to="https://wa.me/+8801995536898"
        className="btn btn-ghost btn-outline normal-case border-primary text-primary hover:border-primary  hover:shadow-lg hover:bg-primary hover:text-white btn-md md:px-8 text-lg hidden md:flex"
      >
      <BsFillTelephoneFill/>  {language == "bn" ? "ফ্রি কল করুন" : " Call for Free Consultancy"}
      </Link>
    </div>
  );
};

export default CallBtn;
