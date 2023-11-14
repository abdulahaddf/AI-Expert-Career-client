import { useEffect, useState } from "react";
import Seminar from "./Seminar";
import Subscribed from "./Subscribed";
import BookedCourse from "./BookedCourse";
const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const NewsletterMail = () => {
  const [mails, setMails] = useState([]);
  const [seminar, setSeminar] = useState([]);
  const [bookedCourse, setBookedCourse] = useState([]);
  useEffect(() => {
    fetchData("https://ai-server-sooty.vercel.app/newsletters", setMails);
    fetchData("https://ai-server-sooty.vercel.app/seminars", setSeminar);
    fetchData("https://ai-server-sooty.vercel.app/bookedCourse", setBookedCourse);
  }, []);

  //   const handleDelete = (promo) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "Your Promo Code will be deleted!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#000000",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`https://ai-server-sooty.vercel.app/promo/${promo._id}`, {
  //           method: "DELETE",
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.deletedCount > 0) {
  //               Swal.fire("Deleted!", "Your promo has been deleted.", "success");
  //             }
  //           });
  //     `  }
  //     });
  //   };
  return (
    <div>
     <Seminar seminar={seminar}/>

    <BookedCourse bookedCourse={bookedCourse}/>

      {/* Subscribed mails */}
     <Subscribed mails={mails} />


      <section className="flex justify-evenly my-10">

      <div className="section w-fit mx-auto">
        <h1 className="text-xl text-center  mb-5 font-semibold">All Newsletter Mails</h1>
        <ol className="space-y-3">
          {mails?.map((mail) => (
            <li key={mail._id}>
              {mail.email}
            </li>
          ))}
        </ol>
      </div>
      <div className="section w-fit mx-auto">
        <h1 className="text-xl text-center mb-5 font-semibold ">All Booked Course Mails</h1>
        <ol className="space-y-3 ">
          {bookedCourse?.map((mail) => (
            <li key={mail._id}>
               {mail.email}
            </li>
          ))}
        </ol>
      </div>
      <div className="section w-fit mx-auto">
        <h1 className="text-xl text-center mb-5 font-semibold">All Seminar Mails</h1>
        <ol className="space-y-3">
          {seminar?.map((mail) => (
            <li key={mail._id}>
               {mail.email}
            </li>
          ))}
        </ol>
      </div>
          </section>
    </div>
  );
};

export default NewsletterMail;
