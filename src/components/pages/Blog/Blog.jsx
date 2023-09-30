import blogBanner from "./Assests/blogbanner.png";
import icon from "./Assests/RectangleIon.png";
import { useContext, useState } from "react";
import CategoryCard from "./CategoryCard";
import BlogCard from "./BlogCard";
import { useEffect } from "react";
import { MyContext } from "../../../Context/Context";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Loader from "../../common/loader/Loader";

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
  const itemsPerPage = 6;
  const [sortingOption, setSortingOption] = useState(""); // State for sorting option

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []); 

  useEffect(() => {
    // Handle filtering and sorting whenever selectedCheckboxes, blogs, or sortingOption change
    const filteredProducts =
      selectedCheckboxes.length === 0
        ? blogs
        : blogs.filter((blog) => selectedCheckboxes.includes(blog.category));

    const getSortedData = (data, sortingOption) => {
      switch (sortingOption) {
        case "Trends":
          return data.sort((a, b) => b.likes.length - a.likes.length);
        case "Most Reviews":
          return data.sort((a, b) => b.comments.length - a.comments.length);
        default:
          return data;
      }
    };

    const sortedAndFilteredData = getSortedData(filteredProducts, sortingOption);
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
    window.scrollTo({ top: 10, behavior: "smooth" });
  };



   
  
 










  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
if(isLoading) return <Loader/>
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-[120px]">
      <div
        className="shadow-lg"
        style={{
          backgroundImage: `url(${blogBanner})`,
          backgroundSize: "cover",
          height: "302px",
          width: "full",
        }}
      >
        <div className="width-screen flex flex-col items-center justify-center py-10">
          <h2 className="text-[30px] font-bold">
            {language == "bn" ? "ব্লগ" : "Blog"}
          </h2>
          <img className="w-[31px] pb-[30px]" src={icon} alt="" />
          <p className="lg:w-[689px] text-center text-[#484848]">
            {language == "bn"
              ? "আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা"
              : "Welcome to our AI-related blog, where we delve into the limitless possibilities of Artificial Intelligence and its impact on various fields."}
          </p>
        </div>
      </div>

      <div className=" py-[122px]">
        <div className="flex justify-end">
          <div className=" mb-[33px] flex justify-between items-center space-x-6">
            <div className="lg:hidden text-2xl">
              <BiDotsHorizontalRounded />
            </div>
            <select
              onChange={getFilter}
              className="w-48 py-4 border-none bg-white text-center text-[#ED1B23] text-xl font-bold"
            >
              <option defaultChecked>All</option>
              <option value="Trends">Trends</option>
              <option value="Most Reviews">Most Reviews</option>
         
            </select>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 gap-[15px]">
          {/* Hide this section on small devices */}
          <div className="hidden md:block">
            <div className="flex flex-col justify-between items-center">
              <h2 className="font-bold text-[20px] pb-[40px]">
                {language == "bn" ? "ক্যাটাগরি পছন্দ করুন" : "Filter category"}
              </h2>
              <div>
                {categories?.map((category, index) => (
                  <CategoryCard
                    key={index}
                    category={category}
                    selectedCheckboxes={selectedCheckboxes}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="">
             {
              paginatedBlogs.length > 0 && paginatedBlogs ?  <div className="grid  md:grid-cols-2 md:gap-x-20 lg:grid-cols-3 gap-[40px] justify-center">
              {paginatedBlogs?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div> : <p className="text-2xl text-center w-4/5">No Blogs Found</p>
             }
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
                : "bg-[#ea5050] text-white hover:bg-primary"
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
                  ? "bg-[#ea5050] text-white"
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
                : "bg-[#ea5050] text-white hover:bg-primary"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>











         
        </div>
      </div>
    </div>
  );
};

export default Blog;
