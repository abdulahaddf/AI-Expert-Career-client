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
import { GoMoveToTop } from "react-icons/go";
import { FaArrowCircleUp } from "react-icons/fa";

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
  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HeroAria />
      <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        {/* <HomeSearch /> */}
        <HomeAbout />
        <HomeCourseSection />
        <Roadmap />
        <HomeConsultantSection />
        {/* <HomeHeading /> */}
        <HomeBlogsSection />
        <HomeTestimonial />
        {/* <HomeEvent /> */}
        <HomePartnership />
      </div>

      <div
        className={`transform ${
          scrollNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-1000 fixed right-1 bottom-2 z-50  rounded-full`}
      >
        <div
          className={` md:tooltip tooltip-left  duration-200 ${
            scrollNav ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          data-tip="Scroll to top"
        >
          {scrollNav && (
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <FaArrowCircleUp className=" font-semibold rounded-full shadow-xl text-2xl md:text-2xl md:w-8 md:h-8 text-black" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
