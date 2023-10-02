import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import Loader from "../../../components/common/loader/Loader";

const ManageBlog = () => {
    const [blogs, setblogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      fetch(" http://localhost:5000/blogs")
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
          fetch(`http://localhost:5000/singleblogs/${blog._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your Blog has been deleted.",
                  "success"
                );
              }
            });
        }
      });
    };


    if(isLoading) return <Loader/>
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
          <tbody >
            {blogs.map((blogs, index) => (
              <tr key={blogs._id}>
                <th>{index + 1}</th>
                <td>{blogs.blogName}</td>
                <td >
                  <img
                    className="w-32 rounded-md mx-auto"
                    src={blogs.imageURL}
                    alt=""
                  />
                </td>

                <td className="text-center">
                  <Link to={`/dashboard/edit-blog/${blogs._id}`}
                   
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
    </div>
    );
};

export default ManageBlog;