
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";


const TimeLineComponent = () => {
  return (
    <div className="main">
      <div className="container w-11/12">
        <ul>
          <li>
            <div className="">
              <div>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  1. Database basic
                  <ol className="pl-5 my-1">
                    <p className="flex items-baseline gap-2 text-[#535353] text-[18px]">
                      <div className="w-3 h-3 rounded-full bg-[#ED1B24]"></div>
                      Create, Join, Delete, Update
                    </p>
                    <p className="flex items-baseline gap-2 text-[#535353] text-[18px]">
                      <div className="w-3 h-3 rounded-full bg-[#ED1B24]"></div>
                      SQL, Join, Delete, Update
                    </p>
                  </ol>
                </h3>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  2. Reporting & Analysis
                </h3>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  3. Tabular Data
                </h3>
              </div>
              <span className="circle"></span>
              <div className="hidden lg:block absolute -right-32 top-0">
                <h1 className="font-bold text-[26px] underline">Basic</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="">
              <div>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  1. Python basic
                  <ol className="pl-5 my-1">
                    <p className="flex items-baseline gap-2 text-[#535353] text-[18px]">
                      <div className="w-3 h-3 rounded-full bg-[#ED1B24]"></div>
                      Expression
                    </p>
                    <p className="flex items-baseline gap-2 text-[#535353] text-[18px]">
                      <div className="w-3 h-3 rounded-full bg-[#ED1B24]"></div>
                      Variables
                    </p>
                  </ol>
                </h3>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  2. Imports Lybarys
                </h3>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  3. Virtual Environment
                </h3>
              </div>
              <span className="circle"></span>
              <div className="hidden lg:block  absolute -left-[330px] top-0">
                <h1 className="font-bold text-[26px] underline">
                  Python Programming
                </h1>
              </div>
            </div>
          </li>
          <li>
            <div className="">
              <div>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  1. Database basic
                  <ol className="pl-5 my-1">
                    <p className="flex items-baseline gap-2 text-[#535353] text-[18px]">
                      <div className="w-3 h-3 rounded-full bg-[#ED1B24]"></div>
                      Create, Join, Delete, Update
                    </p>
                    <p className="flex items-baseline gap-2 text-[#535353] text-[18px]">
                      <div className="w-3 h-3 rounded-full bg-[#ED1B24]"></div>
                      SQL, Join, Delete, Update
                    </p>
                  </ol>
                </h3>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  2. Reporting & Analysis
                </h3>
                <h3 className="heading text-[#394065] text-[22px] font-bold">
                  3. Tabular Data
                </h3>
              </div>
              <span className="circle"></span>
              <div className="hidden lg:block absolute -right-32 top-0">
                <h1 className="font-bold text-[26px] underline">Basic</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <center>
        <Link to="/roadmap">
          <button className="px-[32px] py-[8px] bg-[#000] rounded-md text-white text-[19px] font-bold shadow-lg mt-[30px]">
            See more
          </button></Link>
      </center>
    </div>
  );
};

export default TimeLineComponent;
