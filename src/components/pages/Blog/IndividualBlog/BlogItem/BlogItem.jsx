/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MyContext } from "../../../../../Context/Context";
import { Link } from "react-router-dom";

const BlogItem = ({ randomBlogs }) => {
  const { language } = useContext(MyContext);

  return (
    <div className="">
      <h2 className="text-3xl font-bold">
        {language == "bn" ? "বিষয়সমূহ -" : "Our more blogs"}
      </h2>
      <ul className="mt-3">
        {randomBlogs?.map((blog, index) => (
          <div
            key={index}
            className="flex  items-start justify-between bg-[#5c3a6de7] mt-2 px-4 text-white py-2"
          >
            <Link to={`/blog/${blog.blogName}`}>
              {blog.blogName.length > 80 ? (
                <>{blog.blogName.slice(0, 80)} ...</>
              ) : (
                blog.blogName
              )}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BlogItem;
