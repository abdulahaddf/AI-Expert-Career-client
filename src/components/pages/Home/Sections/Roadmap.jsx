import { Link } from "react-router-dom";
import roadmapImage from "../../../../assets/banner/roadmap.png";

const Roadmap = () => {
  return (
    <div className="relative">
      <img className="w-11/12 mx-auto " src={roadmapImage} alt="" />
      <div className="absolute top-5 w-2/5 mx-auto space-y-4 ml-10">
        <h1 className="text-3xl font-semibold">
          Need a Career Roadmap, Right?
        </h1>
        <p>
          We are the first ever Artificial Intelligence based Ed-tech and
          Consultancy Service Platform in Bangladesh.
        </p>
        <Link className="btn-view">View All Roadmap</Link>
      </div>
    </div>
  );
};

export default Roadmap;
