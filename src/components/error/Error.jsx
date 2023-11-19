import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/animation/error.json";

const Error = () => {
  return (
    <section className="relative flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Lottie
          className="select-none pointer-events-none no-select md:w-1/2"
          animationData={animationData}
          loop={true}
        />
        <p>Something Went Wrong</p>
        <Link
          to="/"
          className=" px-8 py-3 font-semibold rounded-full bg-black text-white md:text-xl my-4 "
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
