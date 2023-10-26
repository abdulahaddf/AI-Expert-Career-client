import { useEffect, useState } from "react";


const NewsletterMail = () => {
    const [mails, setMails] = useState([]);
      useEffect(() => {
    fetch("http://localhost:5000/newsletters")
      .then((response) => response.json())
      .then((data) => setMails(data));
  }, [mails]);

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
//       }
//     });
//   };
    return (
        <div>
            <h1 className="text-3xl my-2 text-center">All Subscribed mails</h1>
<div className="section w-1/3 text-center mx-auto">
    <p>
        {
            mails?.map((mail) => <p key={mail._id}>{mail.email} </p>)
        }
    </p>

</div>
        </div>
    );
};

export default NewsletterMail;