import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../Context/Context";

const categories = [
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
      <div className="11/12 mx-auto px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-5 rounded-xl bg-blue-900/20 text-black p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) => (
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black
                  ring-white/60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-2
                  ${selected ? 'bg-white shadow text-black' : 'text-black hover:bg-white/[0.12] hover:text-white'}`
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
                  className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                >
                  <div className="pt-3 grid grid-cols-2 gap-x-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-10">

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
