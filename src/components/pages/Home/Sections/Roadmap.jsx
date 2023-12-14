import { Link } from "react-router-dom";
import roadmapImage from "../../../../assets/banner/roadmap.png";
import { FiArrowUpRight } from "react-icons/fi";
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";

const Roadmap = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="relative md:mb-10 pt-20 py-10 md:py-0">
      <img className="md:w-11/12 mx-auto " src={roadmapImage} alt="" />
      <div className="absolute top-0 md:top-5 md:w-5/12 w-4/5 mx-auto md:space-y-4 md:ml-10">
        <h1 className="text-lg md:text-3xl font-semibold">
          
          {language == "bn" ? "সঠিক ক্যারিয়ার রোডম্যাপ খুজছেন?" : "Need a Career Roadmap, Right?"}
        </h1>
        <p className="text-md md:text-lg my-1 md:my-0">
          {language == "bn" ? "আপনার এ আই ক্যারিয়ার জার্নিকে আরো এগিয়ে নিতে আজই যোগাযোগ করুন আমাদের এ আই কন্সাল্টেন্টদের সাথে।" : "Accelerate your AI career journey with our comprehensive consultancy services"}
        </p>
        <Link to='/ai-consultant' className="btn-black btn-sm md:btn-md md:btn-view flex items-center
         w-3/4"> {language == "bn" ? "ক্যারিয়ার শুরু করুন" : "Start Your Career"}<FiArrowUpRight/></Link>
      </div>
    </div>
  );
};

export default Roadmap;
