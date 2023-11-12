import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";
import Loader from "../../common/loader/Loader";

const categories = [
  "Featured",
  "Machine learning",
  "Data science",
  "Data analysis",
  "Computer vision",
  "Deep learning",
  "NLP",
  "Prompt Engineering",
  "IoT",
  "Artificial Intelligence",
  "Others",
];

const HomeBlogsSection = () => {
  const { language } = useContext(MyContext);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Loader />;
  return (
    <div className="my-20">
      <h2 className="text-[30px] font-bold text-center">
        {language == "bn" ? "ব্লগ সমূহ" : "Read Your Opportunities"}
      </h2>
      <h3 className="text-center">
        We are the first ever Artificial Intelligence based Ed-tech and
        Consultancy Service Platform in Bangladesh
      </h3>
      {/* <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " /> */}
      <div className=" mx-auto px-2 my-10 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex flex-nowrap overflow-x-scroll  lg:flex-nowrap space-x-1 space-y-1 md:space-y-0   md:space-x-3 rounded-lg md:rounded-lg text-black p-3 md:p-1 border whitespace-nowrap">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `rounded-lg py-2.5 text-sm  text-black
        ring-white/60 focus:outline-none font-semibold  ;
        ${
          selected
            ? "bg-black shadow text-white px-5 w-full"
            : "text-black hover:bg-black px-5 w-full hover:text-white"
        }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-2">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              categories.map((category, index) => (
                <Tab.Panel
                  key={index}
                  className="rounded-full bg-white md:p-3 "
                >
                  <div className="pt-3 grid gap-x-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-6">
                    {blogs
                      .filter((blog) => blog.category === category)
                      .slice(0, 8) // Display the first four blogs in this category
                      .map((filteredBlog, idx) => (
                        <BlogCard key={filteredBlog._id} blog={filteredBlog} />
                      ))}
                  </div>
                  <Link
                    to="/blogs"
                    className="btn-black flex justify-center w-fit mx-auto btn-md"
                  >
                    View More
                  </Link>
                </Tab.Panel>
              ))
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default HomeBlogsSection;
