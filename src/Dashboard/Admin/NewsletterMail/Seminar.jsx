/* eslint-disable react/prop-types */


const Seminar = ({seminar}) => {
    return (
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
    );
};

export default Seminar;