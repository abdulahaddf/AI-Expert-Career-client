import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import Loader from "../../../components/common/loader/Loader";

const ManageBlog = () => {
  const [blogs, setblogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  useEffect(() => {
    fetch(" https://ai-server-sooty.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => setblogs(data));
    setIsLoading(false);
  }, [blogs]);
  console.log(blogs);
  const handleDelete = (blog) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your selected Blog will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ai-server-sooty.vercel.app/singleblogs/${blog._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Blog has been deleted.", "success");
            }
          });
      }
    });
  };



  // Pagination
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted and filtered data for pagination
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-3xl text-center my-5">Manage All Blogs</h1>

      <div className="">
        <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
          {/* head */}
          <thead className="bg-secondary text-white text-xl text-center">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th className="text-center">Picture</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBlogs.map((blogs, index) => (
              <tr key={blogs._id}>
                <th>{index + 1}</th>
                <td>{blogs.blogName}</td>
                <td>
                  <img
                    className="w-32 rounded-md mx-auto"
                    src={blogs.imageURL}
                    alt=""
                  />
                </td>

                <td className="text-center">
                  <Link
                    to={`/dashboard/edit-blog/${blogs._id}`}
                    className="btn-add m-2 "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blogs)}
                    className="btn-add"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  );
};

export default ManageBlog;
