import { useEffect } from "react";
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

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="bg-red-400"></div>
      <HeroAria />
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        {/* <HomeSearch /> */}
        <HomeAbout />
        <HomeCourseSection />
        <Roadmap/>
        <HomeConsultantSection/>
        {/* <HomeHeading /> */}
      <HomeBlogsSection/>
        <HomeTestimonial />
        <HomeEvent />
        <HomePartnership />
      </div>
    </>
  );
};

export default Home;
