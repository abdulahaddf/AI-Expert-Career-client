import { BsFillTelephoneFill } from "react-icons/bs";


const CallBtn = () => {
  const phoneNumber = '+8801995536898';

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div>
      <button
        onClick={handleCall}
        className="btn btn-ghost btn-outline normal-case border-primary text-primary hover:border-primary  hover:shadow-lg hover:bg-primary hover:text-white btn-md md:px-8 text-lg"
      >
      <BsFillTelephoneFill/>  Call for Free Consultancy
      </button>
    </div>
  );
};

export default CallBtn;
