import Lottie from "lottie-react";
import loading from "../../../assets/aiload/ailoading.json";

const Loader = () => {
  return (
    <div className="w-4/5 md:w-1/4 h-[90vh] mx-auto text-center flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <Lottie
          className="select-none pointer-events-none no-select unselectable w-full"
          animationData={loading}
          loop={true}
        />
        {/* <h1 className='flex text-xl'>loading <span className="loading loading-ring loading-md"></span></h1> */}
      </div>
    </div>
  );
};

export default Loader;
