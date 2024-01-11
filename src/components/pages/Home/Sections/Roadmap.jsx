import { Link } from "react-router-dom";
import roadmapImage from "../../../../assets/banner/roadmap.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";

const Roadmap = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="relative md:mb-10 pt-[90px]  py-10 md:py-0">
      <img className="mx-auto md:w-11/12 " src={roadmapImage} alt="roadmap image" width="100%" height="1"/>
      <div className="absolute top-0 w-4/5 mx-auto md:top-5 md:w-5/12 md:space-y-4 md:ml-10">
        <h1 className="text-lg font-semibold md:text-3xl">
          
          {language == "bn" ? "সঠিক ক্যারিয়ার রোডম্যাপ খুজছেন?" : "Need a Career Roadmap, Right?"}
        </h1>
        <p className="my-1 text-md md:text-lg md:my-0">
          {language == "bn" ? "আপনার এ আই ক্যারিয়ার জার্নিকে আরো এগিয়ে নিতে আজই যোগাযোগ করুন আমাদের এ আই কন্সাল্টেন্টদের সাথে।" : "Accelerate your AI career journey with our comprehensive consultancy services"}
        </p>
        <Link to='/ai-consultant' className="btn-black btn-sm md:btn-md md:btn-view flex items-center w-2/3
         md:w-1/2 md:text-[18px]"> {language == "bn" ? "ক্যারিয়ার শুরু করুন" : "Start Your Career"}<FiArrowUpRight/></Link>
      </div>
    </div>
  );
};

export default Roadmap;
