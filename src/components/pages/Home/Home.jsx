import { useEffect } from "react";
import HeroAria from "./HeroAria";
import HomeAbout from "./HomeAbout";
import HomeBlogs from "./HomeBlog";
import HomeCourses from "./HomeCourses";
import HomeEvent from "./HomeEvent";
import HomeHeading from "./HomeHeading";
import HomePartnership from "./HomePartnership";
import HomeSearch from "./HomeSearch";
import HomeTestimonial from "./HomeTestimonial";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-red-400"></div>
      <HeroAria />
      <div className="lg:mt-[580px] mt-[870px] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <HomeSearch />
        <HomeAbout />
        <HomeCourses />
        <HomeHeading />
        <HomeBlogs />
        <HomeTestimonial />
        <HomeEvent />
        <HomePartnership />
      </div>
    </>
  );
};

export default Home;
