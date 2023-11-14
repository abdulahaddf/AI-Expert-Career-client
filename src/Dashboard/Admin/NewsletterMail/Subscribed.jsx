/* eslint-disable react/prop-types */


const Subscribed = ({mails}) => {
    return (
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
    );
};

export default Subscribed;