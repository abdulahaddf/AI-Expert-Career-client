import { useEffect, useState } from "react";

const NewsletterMail = () => {
  const [mails, setMails] = useState([]);
  const [seminar, setSeminar] = useState([]);
  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/newsletters")
      .then((response) => response.json())
      .then((data) => setMails(data));
  }, [mails]);
  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/seminars")
      .then((response) => response.json())
      .then((data) => setSeminar(data));
  }, [seminar]);

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
      <div className="mt-5 mb-16">
        <h1 className="text-3xl my-2 text-center">
          Requested For Joining Seminar
        </h1>
        <div className="max-w-[414px] md:max-w-[768px] lg:max-w-full overflow-x-auto mx-auto">
          <table className="table table-zebra shadow-xl w-full text-center rounded-md">
            {/* head */}
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {seminar?.map((s, index) => (
                <tr key={s._id}>
                  <th>{index + 1}</th>
                  <td>{s.name}</td>
                  <td>{s.phone}</td>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Seminar mails */}
      <div>
        <h1 className="text-3xl my-2 text-center">All Subscribed mails</h1>
      

        <div className="max-w-[414px] md:max-w-[768px] lg:max-w-full overflow-x-auto mx-auto">
          <table className="table table-zebra shadow-xl w-full text-center rounded-md">
            {/* head */}
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Emails</th>
              </tr>
            </thead>
            <tbody>
              {mails?.map((s, index) => (
                <tr key={s._id}>
                  <th>{index + 1}</th>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
