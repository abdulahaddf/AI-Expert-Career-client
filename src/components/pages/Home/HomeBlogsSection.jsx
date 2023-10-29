import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";

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

  return (
    <div>
      <h2 className="text-[30px] font-bold text-center">
          {language == "bn"
            ? "ব্লগ"
            : "Blogs"}
        </h2>
        <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " />
      <div className="11/12 mx-auto px-2 my-10 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex flex-wrap lg:flex-nowrap space-x-2 space-y-1 md:space-x-5 rounded-lg md:rounded-full bg-blue-900/20 text-black p-3 md:p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) => (
                  `lg:w-full rounded-full py-2.5 text-sm font-medium md:leading-5 text-black
                  ring-white/60  focus:outline-none  border border-white
                  ${selected ? 'bg-white shadow text-black px-3' : 'text-black px-3 hover:bg-white hover:text-primary'}`
                )}
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
                  className="rounded-full bg-white p-3 "
                >
                  <div className="pt-3 grid gap-x-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-6">

                  {blogs
                    .filter((blog) => blog.category === category)
                    .slice(0, 4) // Display the first four blogs in this category
                    .map((filteredBlog, idx) => (
                      <BlogCard key={filteredBlog._id} blog={filteredBlog} />
                      ))}
                      </div>
                  <Link to="/blog" className="btn-black flex justify-center w-fit mx-auto btn-md">View More</Link>
                      
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
