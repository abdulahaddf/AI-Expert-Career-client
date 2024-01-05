import { useEffect, useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";
const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
const ShowReviews =() =>
{
    const [feedback, setFeedbacks] = useState();
    
    useEffect(() => {
        fetchData("https://ai-server-sooty.vercel.app/feedback",setFeedbacks);
    });


    const handleDelete = (feedback) => {
    Swal.fire({
        title: "Are you sure?",
        text: "Your selected user-feedback will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0891B2",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
        fetch(`https://ai-server-sooty.vercel.app/singlefeedback/${feedback}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Selected User-feedback has been deleted.", "success");
            }
            });
        }
    });
    };
    
    return (
        <div>
            <h1 className="my-5 text-3xl text-center">Reviews & Feedbacks</h1>
            <div>
                <table className="table w-full overflow-x-auto text-center shadow-xl table-zebra">
                    {/* head */}
                    <thead className="text-xl text-center text-white bg-primary">
                        <tr>
                            <th>SL No.</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Designation</th>
                            <th className="text-center">Feedback</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Actions</th>             
                        </tr>
                    </thead>
                    <tbody>
                        {feedback?.map((s, index) => (
                            <tr key={s._id}>
                            <th>{index + 1}</th>
                            <td>{s.name}</td>
                            <td>{s.designation}</td>
                            <td>{s.feedback}</td>
                            <td>{moment(s.createAt).format("DD/MM/YYYY")}</td>
                            
                            <td><button className="btn-add" onClick={() => handleDelete(s._id)} >Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

};

export default ShowReviews;