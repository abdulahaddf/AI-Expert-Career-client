import { useEffect } from "react";
import dataScienceSvg from "./data.svg";

const DataScience = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-28">
      <p
        style={{ fontFamily: "Josefin Sans" }}
        className="text-3xl font-bold text-red-600 border-b-2 border-red-600 py-5"
      >
        Data Science Roadmap{" "}
      </p>

      <div className="lg:flex justify-center">
        <div className=" mt-6 relative">
          <img src={dataScienceSvg} alt="" className="select-none pointer-events-none no-select unselectable" />



          <a className="absolute font-semibold  top-[210px] left-[380px]" href="">Statistical Skills</a>
          <a className="absolute font-semibold text-red-500 top-[260px] left-[370px]" href="">Probability Theory</a>
          <a className="absolute font-semibold text-red-500 top-[298px] left-[355px]" href="">Continioue Distribution</a>
          <a className="absolute font-semibold text-red-500 top-[340px] left-[365px]" href="">Discreate Distribution</a>
          <a className="absolute font-semibold text-red-500 top-[380px] left-[370px]" href="">Summary Statistics</a>
          <a className="absolute font-semibold text-red-500 top-[420px] left-[375px]" href="">Important Laws</a>
          <a className="absolute font-semibold text-red-500 top-[460px] left-[395px]" href="">Estimation</a>
          <a className="absolute font-semibold text-red-500 top-[500px] left-[370px]" href="">Hypothesis Testing</a>
          <a className="absolute font-semibold text-red-500 top-[540px] left-[365px]" href="">Confiden Interval</a>
          <a className="absolute font-semibold text-red-500 top-[580px] left-[360px]" href="">Monte Carlo Method</a>


          <a className="absolute font-semibold text-red-500 top-[15px] left-[22px]" href="">Randomness, Random variable</a>
          <a className="absolute font-semibold text-red-500 top-[55px] left-[45px]" href="">Probability Distribution</a>
          <a className="absolute font-semibold text-red-500 top-[95px] left-[45px]" href="">Conditional Probability</a>
          <a className="absolute font-semibold text-red-500 top-[135px] left-[35px]" href="">(Statistical) Independence</a>
          <a className="absolute font-semibold text-red-500 top-[175px] left-[120px]" href="">Id</a>
          <a className="absolute font-semibold text-red-500 top-[217px] left-[70px]" href="">CDF, PDF, PMF</a>



          <a className="absolute font-semibold text-red-500 top-[15px] left-[680px]" href="">Normal / Gussian</a>
          <a className="absolute font-semibold text-red-500 top-[55px] left-[660px]" href="">Uniform (Continous)</a>
          <a className="absolute font-semibold text-red-500 top-[95px] left-[720px]" href="">Beta</a>
          <a className="absolute font-semibold text-red-500 top-[135px] left-[700px]" href="">Dirichlet</a>
          <a className="absolute font-semibold text-red-500 top-[175px] left-[690px]" href="">Exponential</a>
          <a className="absolute font-semibold text-red-500 top-[217px] left-[680px]" href="">x2 (chi-squared)</a>



          <a className="absolute font-semibold text-red-500 top-[305px] left-[100px]" href="">Uniform</a>
          <a className="absolute font-semibold text-red-500 top-[345px] left-[90px]" href="">Binominal</a>
          <a className="absolute font-semibold text-red-500 top-[385px] left-[80px]" href="">Multinominal</a>
          <a className="absolute font-semibold text-red-500 top-[425px] left-[70px]" href="">Hypergenometric</a>
          <a className="absolute font-semibold text-red-500 top-[465px] left-[100px]" href="">Poisson</a>
          <a className="absolute font-semibold text-red-500 top-[505px] left-[90px]" href="">Geometric</a>



          <a className="absolute font-semibold text-red-500 top-[305px] left-[660px]" href="">Expectation & mean</a>
          <a className="absolute font-semibold text-red-500 top-[348px] text-[14px] left-[620px]" href="">Varianceand standard deviation (sd)</a>
          <a className="absolute font-semibold text-red-500 top-[385px] left-[635px]" href="">Convariance and correlation</a>
          <a className="absolute font-semibold text-red-500 top-[425px] left-[680px]" href="">Median, quartile</a>
          <a className="absolute font-semibold text-red-500 top-[465px] left-[670px]" href="">interquartile range</a>
          <a className="absolute font-semibold text-red-500 top-[505px] left-[675px]" href="">perntile / quartile</a>
          <a className="absolute font-semibold text-red-500 top-[545px] left-[720px]" href="">Mode</a>



          <a className="absolute font-semibold text-red-500 top-[595px] left-[175px]" href="">LLN</a>
          <a className="absolute font-semibold text-red-500 top-[635px] left-[175px]" href="">CLT</a>


          <a className="absolute font-semibold text-red-500 top-[635px] left-[660px]" href="">MLE</a>
          <a className="absolute font-semibold text-red-500 top-[675px] left-[660px]" href="">KDE</a>



          <a className="absolute font-semibold  top-[765px] left-[390px]" href="">Visualization</a>
          <a className="absolute font-semibold text-red-500 top-[810px] left-[375px]" href="">Chart Suggestions</a>
          <a className="absolute font-semibold text-red-500 top-[850px] left-[410px]" href="">Python</a>
          <a className="absolute font-semibold text-red-500 top-[890px] left-[420px]" href="">Web</a>
          <a className="absolute font-semibold text-red-500 top-[930px] left-[395px]" href="">Dashboard</a>
          <a className="absolute font-semibold text-red-500 top-[970px] left-[400px]" href="">Power Bl</a>
          <a className="absolute font-semibold text-red-500 top-[1010px] left-[405px]" href="">Tableau</a>


          <a className="absolute font-semibold text-red-500 top-[725px] left-[100px]" href="">P-value</a>
          <a className="absolute font-semibold text-red-500 top-[765px] left-[95px]" href="">chi2 test</a>
          <a className="absolute font-semibold text-red-500 top-[805px] left-[110px]" href="">f-test</a>
          <a className="absolute font-semibold text-red-500 top-[845px] left-[110px]" href="">t-test</a>


          <a className="absolute font-semibold text-red-500 top-[935px] left-[160px]" href="">Vega lite</a>
          <a className="absolute font-semibold text-red-500 top-[975px] left-[175px]" href="">D3.js</a>



          <a className="absolute font-semibold text-red-500 top-[843px] left-[720px]" href="">Matplotlib</a>
          <a className="absolute font-semibold text-red-500 top-[883px] left-[675px]" href="">plotnine (like ggplot in R)</a>
          <a className="absolute font-semibold text-red-500 top-[925px] left-[740px]" href="">Bokeh</a>
          <a className="absolute font-semibold text-red-500 top-[965px] left-[730px]" href="">Seaborn</a>
          <a className="absolute font-semibold text-red-500 top-[1003px] left-[690px]" href="">ipyvolume (3D Data)</a>


          <h1 className="absolute font-semibold top-[1170px] left-[330px] text-2xl">Machine Learning</h1>




        </div>
      </div>
    </div>
  );
};

export default DataScience;
