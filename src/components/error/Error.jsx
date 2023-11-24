import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/animation/error.json";

const Error = () => {
  return (
   <div>
    <section className="relative flex  items-center justify-center h-screen md:p-16 pr-5  bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center md:px-5 mx-auto md:my-8">
        <Lottie
          className="select-none pointer-events-none no-select md:w-1/3"
          animationData={animationData}
          loop={true}
        />
         <p className="text-3xl md:text-5xl ">Something Went Wrong</p>
        <Link
          to="/"
          className=" px-8 py-3 font-semibold rounded-full bg-black text-white md:text-md my-4 "
        >
          Back to homepage
        </Link>
      </div>
    </section>
   </div>
  );
};

export default Error;
