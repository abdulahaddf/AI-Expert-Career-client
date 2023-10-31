import { useEffect, useState } from "react";
import HeroAria from "./HeroAria";
import HomeAbout from "./HomeAbout";
// import HomeBlogs from "./HomeBlogs";
import HomeCourses from "./HomeCourses";
import HomeEvent from "./HomeEvent";
import HomeHeading from "./HomeHeading";
import HomePartnership from "./HomePartnership";
import HomeSearch from "./HomeSearch";
import HomeTestimonial from "./HomeTestimonial";
import HomeBlogs from "./HomeBlog";
import HomeBlogsSection from "./HomeBlogsSection";
import HomeCourseSection from "./HomeCourseSection";
import Roadmap from "./Sections/Roadmap";
import HomeConsultantSection from "./Sections/HomeConsultantsection";
import { Link } from "react-router-dom";
import { AiFillUpCircle } from "react-icons/ai";

const Home = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const scrollEffect = () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  
  return (
    <>
     
      <HeroAria />
      <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        {/* <HomeSearch /> */}
        <HomeAbout />
        <HomeCourseSection />
        <Roadmap/>
        <HomeConsultantSection/>
        {/* <HomeHeading /> */}
      <HomeBlogsSection/>
        <HomeTestimonial />
        {/* <HomeEvent /> */}
        <HomePartnership />
      </div>
      <div
  className={`transform ${scrollNav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000 fixed right-1 bottom-1`}
>
  <div
    className={`text-4xl md:text-5xl z-40 tooltip tooltip-left shadow-lg rounded-full ${scrollNav ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
    data-tip="scroll to top"
  >
    {scrollNav && (
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <AiFillUpCircle />
      </Link>
    )}
  </div>
</div>

  
 
    </>
  );
};

export default Home;
