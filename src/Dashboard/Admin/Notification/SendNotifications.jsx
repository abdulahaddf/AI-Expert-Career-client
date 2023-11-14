import JoditEditor from "jodit-react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SendNotifications = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const editor = useRef(null);
console.log(data)

  const handleSendNotification = async () => {
    // Validate if both title and description are provided
    if (title && description) {
        const noti = {
            title, description
        }
      try {
        // Send Notification Data to API
        const apiResponse = await fetch(
          "https://ai-server-sooty.vercel.app/notification", 
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(noti),
          }
        );

        if (!apiResponse.ok) {
          throw new Error("Notification insertion failed");
        }

        const responseData = await apiResponse.json();

        if (responseData.insertedId) {
          toast.success("Successfully Send the notification");
          setTitle('');
          setDescription('');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert('Please provide both title and description.');
    }
  };


  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/notifications")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);
  const handleDelete = (promo) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your Promo Code will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ai-server-sooty.vercel.app/notifi/${promo._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your promo has been deleted.", "success");
            }
          });
      }
    });
  };




  return (
    <div>
      <h1 className="text-2xl text-center bg-primary text-white rounded-lg p-2">Send Notifications</h1>
      <form className="my-5">
        <div>
          <label className="text-xl my-5">Title:</label>
          <input type="text" className="input input-bordered w-full" value={title} onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className="my-10">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-xl text-gray-700"
          >
            Description 
          </label>

          <JoditEditor
            id="description"
            ref={editor}
            value={description}
            tabIndex={1} 
            onChange={(newDescription) => setDescription(newDescription)}
          />
        </div>
        <button className="btn-black" type="button" onClick={handleSendNotification}>
          Send Notification
        </button>
      </form>
      <div className="max-w-[414px] md:max-w-[768px] lg:max-w-full overflow-x-auto mx-auto">
        <table className="table table-zebra shadow-xl w-full text-center rounded-md">
          {/* head */}
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Notification Title</th>
             
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((n, index) => (
              <tr key={n._id}>
                <th>{index + 1}</th>
                <td>{n.title}</td>
                <td>
                  <button
                    onClick={() => handleDelete(n)}
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

export default SendNotifications;
