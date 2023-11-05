import { Link } from "react-router-dom";
import roadmapImage from "../../../../assets/banner/roadmap.png";

const Roadmap = () => {
  return (
    <div className="relative md:mb-10 pt-20 py-10 md:py-0">
      <img className="md:w-11/12 mx-auto " src={roadmapImage} alt="" />
      <div className="absolute top-0 md:top-5 md:w-5/12 w-4/5 mx-auto md:space-y-4 md:ml-10">
        <h1 className="text-lg md:text-3xl font-semibold">
          Need a Career Roadmap, Right?
        </h1>
        <p className="text-md md:text-lg my-1 md:my-0">
          We are the first ever Artificial Intelligence based Ed-tech and
          Consultancy Service Platform in Bangladesh.
        </p>
        <Link to='/ai-consultant' className="btn-black btn-sm md:btn-md md:btn-view">View All Roadmap</Link>
      </div>
    </div>
  );
};

export default Roadmap;
