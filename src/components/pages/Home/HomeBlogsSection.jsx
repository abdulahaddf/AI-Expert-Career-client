import { Tab } from "@headlessui/react";
import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../Blog/BlogCard";


const HomeBlogsSection = () => {
    const [blogs, setBlogs] = useState([]);
console.log(blogs)


    useEffect(() => {
      fetch("https://ai-server-sooty.vercel.app/blogs")
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data);
          // setIsLoading(false);
        });
    }, []);
    return (
        <div>
             <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {blogs.map((b) => (
            <Tab
              key={b}
              className={({ selected }) =>
                (
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {b.category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {blogs.map((blog, idx) => (
            <Tab.Panel
              key={idx}
              className={(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
           <BlogCard key={blog._id} blog={blog} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
        </div>
    );
};

export default HomeBlogsSection;