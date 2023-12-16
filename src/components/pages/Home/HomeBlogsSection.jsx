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
        {language == "bn"
          ? "আপনার পছন্দের ব্লগ পড়ুন"
          : "Read Your Opportunities"}
      </h2>
      <h3 className="text-center">
        {language == "bn"
          ? "এ আই এর নতুন উদ্ভাবন, ইন্ডাস্ট্রি ইনসাইটস এবং কতটা এগিয়ে যাচ্ছি আমরা জানতে পড়ুন আমাদের ব্লগ সমূহ।"
          : "Stay informed and inspired as our expertly crafted blogs unravel the dynamic world of AI."}
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
              categories?.map((category, index) => (
                <Tab.Panel
                  key={index}
                  className="rounded-full bg-white md:p-3 "
                >
                  <div className="pt-3 grid gap-x-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-6">
                    {blogs
                      .filter((blog) => blog.category === category)
                      .slice(0, 8)
                      .map((filteredBlog) => (
                        <BlogCard key={filteredBlog._id} blog={filteredBlog} />
                      ))}
                    {blogs.filter((blog) => blog.category === category)
                      .length === 0 && (
                      <div
                        className="flex items-center justify-center col-span-full text-center"
                        style={{ gridColumn: "1 / -1" }}
                      >
                        <p className="text-lg ">Blogs are Coming Soon</p>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/blogs"
                    className="btn-black flex justify-center w-fit mx-auto btn-md"
                  >
                   {language == "bn" ? "আরো দেখুন" : "View More"}
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
