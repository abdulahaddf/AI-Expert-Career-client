import { BsFillTelephoneFill } from "react-icons/bs";


const CallBtn = () => {
  const phoneNumber = '+8801902221723';

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div>
      <button
        onClick={handleCall}
        className="btn-add flex items-center gap-2"
      >
      <BsFillTelephoneFill/>  Call for Free Consultancy
      </button>
    </div>
  );
};

export default CallBtn;
