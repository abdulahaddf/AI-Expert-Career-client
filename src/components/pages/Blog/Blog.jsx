import { useContext, useState } from "react";
import CategoryCard from "./CategoryCard";
import BlogCard from "./BlogCard";
import { useEffect } from "react";
import { MyContext } from "../../../Context/Context";
import Loader from "../../common/loader/Loader";
import FeaturedBlogs from "./FeaturedBlogs";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import useTitle from "../../../hooks/useTitle";
import ReactGA from "react-ga4";

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

const Blog = () => {
  const { language } = useContext(MyContext);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newData, setNewData] = useState(blogs);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [sortingOption, setSortingOption] = useState("");

  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  const featuredBlogs = blogs.filter((b) => b.category === "Featured");
  // console.log(featuredBlogs);

  useEffect(() => {
    // Handle filtering and sorting whenever selectedCheckboxes, blogs, or sortingOption change
    let filteredProducts = [...blogs];

    if (selectedCheckboxes.length > 0) {
      filteredProducts = filteredProducts.filter((blog) =>
        selectedCheckboxes.includes(blog.category)
      );
    }

    const getSortedData = (data, sortingOption) => {
      switch (sortingOption) {
        case "Trends":
          return data.sort((a, b) => b.view - a.view);
        case "Most Liked":
          return data.sort((a, b) => b.likes.length - a.likes.length);
        default:
          return data;
      }
    };

    
    const sortedAndFilteredData = getSortedData(
      filteredProducts,
      sortingOption
    );
    setNewData(sortedAndFilteredData);
    setCurrentPage(1); // Reset to the first page when changing filters
  }, [selectedCheckboxes, blogs, sortingOption]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((value) => value !== checkboxValue)
      );
    }
  };



  
  const getFilter = (event) => {
    const filters = event.target.value;
    setSortingOption(filters);
  };

  // Pagination
  const totalPages = Math.ceil(newData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted and filtered data for pagination
  const paginatedBlogs = newData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };




  useTitle("Blogs");
  ReactGA.send({ hitType: "pageview", page: "/blogs", title: "Blogs Page" });
  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  if (isLoading) return <Loader />;
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:mt-5">
      {/* Slider */}
      <div>
        <FeaturedBlogs featuredBlogs={featuredBlogs} />
      </div>

      {/* Blogs */}
      <div className=" py-5">


        <div className="lg:grid lg:grid-cols-5 gap-[15px]">
          {/* Hide this section on small devices */}
          <div className="">
            <div className="flex flex-col justify-between items-center h-full">
              <h2 className="font-bold text-2xl pb-2 md:pb-5">
                {language == "bn" ? "ক্যাটাগরি পছন্দ করুন" : "Filter category"}
              </h2>
              <div className="flex flex-col-reverse md:flex-col justify-between h-full ">
                <div className="space-y-1 grid grid-cols-2 border p-2 rounded-lg md:grid-cols-1 gap-x-3 ">
                  {categories?.map((category, index) => (
                    <CategoryCard
                      key={index}
                      category={category}
                      selectedCheckboxes={selectedCheckboxes}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                  ))}
                </div>
               <div className="hidden md:block">
               <div className="section bg-black md:h-96 flex flex-col justify-center">
                  <h2 className="text-xl font-semibold text-white">
                    Are you Want to Know The Proper Roadmap of Al Journey?
                  </h2>
                  <Link className="btn btn-sm btn-ghost btn-outline normal-case hover:shadow-lg hover:bg-white hover:text-black hover:border-0; my-2 text-white" to="/ai-consultant">Let&apos;s Go</Link>
                </div>
               </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
          <div className="flex justify-center items-center md:justify-end my-5 md:mb-5">
            {/* <div className="lg:hidden"><button className="border-black border-[1px] rounded-lg hover:bg-black hover:text-white px-2 py-[6.5px] font-semibold flex items-center gap-2"><GoFilter/> Filter</button></div> */}



            {/* <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
 
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-fit bg-base-200 text-base-content z-40 ">
    
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div> */}









          <div className=" flex justify-center md:justify-evenly  items-center">
            {/* <div className="lg:hidden text-2xl">
              <BiDotsHorizontalRounded />
            </div> */}
            <select
              onChange={getFilter}
              className="w-40 py-2 px-2  bg-white  text-xl  font-bold border"
            >
              <option defaultChecked>All</option>
              <option value="Trends">Trends</option>
              <option value="Most Liked">Most Liked</option>
            </select>
          </div>
        </div>
            <div className="">
              {paginatedBlogs.length > 0 && paginatedBlogs ? (
                <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 justify-evenly">
                  {paginatedBlogs?.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              ) : (
                <p className="text-2xl text-center w-4/5">No Blogs Found</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center pt-[40px]">
          {/* pagination */}
          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 rounded-md mx-2 ${
                currentPage === 1
                  ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-slate-200 hover:bg-gray-300 text-gray-700"
                } px-3 py-1 mx-1 rounded-md cursor-pointer`}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 rounded-md mx-2 ${
                currentPage === totalPages
                  ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          
        </div>
      </div>
      <div className="md:my-10">
      <NewsLetter/>
      </div>
    </div>
  );
};

export default Blog;
