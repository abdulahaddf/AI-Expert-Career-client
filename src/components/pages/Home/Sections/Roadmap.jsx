import { Link } from "react-router-dom";
import roadmapImage from "../../../../assets/banner/roadmap.png";

const Roadmap = () => {
  return (
    <div className="relative">
      <img className="md:w-11/12 mx-auto " src={roadmapImage} alt="" />
      <div className="absolute top-0 md:top-5 md:w-2/5 w-4/6 mx-auto md:space-y-4 md:ml-10">
        <h1 className="md:text-3xl font-semibold">
          Need a Career Roadmap, Right?
        </h1>
        <p className="text-xs md:text-lg my-1 md:my-0">
          We are the first ever Artificial Intelligence based Ed-tech and
          Consultancy Service Platform in Bangladesh.
        </p>
        <Link className="btn-black btn-xs md:btn-view">View All Roadmap</Link>
      </div>
    </div>
  );
};

export default Roadmap;
