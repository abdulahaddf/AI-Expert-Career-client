import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import UseUsers from "../../../hooks/useUsers";
import Loader from "../../../components/common/loader/Loader";
import { MdDelete } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";


const ManageUser = () => {
    const [users, loading, refetch] = UseUsers();


    //make admin
    const handleMakeAdmin = (user) => {
      fetch(
        `http://localhost:5000/users/admin/${user._id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
  
    //make consultant
    const handleMakeConsultant = (user) => {
        console.log(user)
      fetch(
        `http://localhost:5000/users/consultant/${user._id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} is an consultant Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
    };
    //make user
    const handleMakeUser = (user) => {
      fetch(
        `http://localhost:5000/users/user/${user._id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} is an user Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
    };
    //Delete an user
    const handleDelete = (user) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${user._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  refetch();
                  Swal.fire("Deleted!", "User has been removed.", "success");
                }
              });
          }
        });
      };





    if (loading) return <Loader/>
    return (
        <div>
            <h3 className="text-3xl my-2 text-center">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
        <table className="table table-zebra shadow-xl w-full text-center">
          {/* head */}
          <thead className="bg-secondary text-white">
            <tr>
              <th>#</th>
              <th className="text-center">Photo</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th >Role</th>
              <th className="text-center">Action</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-16 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td >
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "consultant"
                    ? "Consultant"
                    : user.role === "super admin"
                    ? "Super Admin"
                    : "User"}
                </td>
                <td >
                  <button
                    className="btn-custom-sm "
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === "admin" || user.role === "super admin"}
                  >
                    {" "}
                 Admin
                  </button>

                  <button
                    className="btn-custom-sm m-2"
                    onClick={() => handleMakeConsultant(user)}
                    disabled={user.role === "consultant" || user.role === "super admin"}
                  >
                   consultant
                  </button>
                  <button
                    className="btn-custom-sm"
                    onClick={() => handleMakeUser(user)}
                    disabled={user.role === "user" || user.role === "super admin"}
                  >
                   User
                  </button>
                 
                </td>
                <td className="text-xl text-primary text-center"> 
                <button
                    className="btn-custom-sm"
                    onClick={() => handleDelete(user)}
                    disabled={user.role === "admin" || user.role === "super admin"}
                  >
                   <AiFillDelete />
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageUser;