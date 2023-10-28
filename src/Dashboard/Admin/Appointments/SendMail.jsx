/* eslint-disable react/prop-types */
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";


const SendMail = () => {
    // const editor = useRef(null);
    const location = useLocation();
    // const {a,setSubject,sendEmail,setMessage} = location.state;
    console.log(location);
    // if (!a || !setSubject || !sendEmail || !setMessage) {
    //     // Handle the case where the data is not available
    //     return <div>Data not available</div>;
    //   }
    return (
        <div>
            <p>dsfge</p>
            {/* <div>
                      <div className=" p-2  text-left">
                        <h2 className="text-2xl font-semibold my-5 text-center">
                          Sending Mail
                        </h2>
                        <div className="mb-4">
                          <p className="font-semibold pb-1">User Mail</p>
                          <input
                            type="email"
                            placeholder="Recipient Email 1"
                            value={a.email}
                            className="w-full p-2 border rounded "
                          />
                        </div>
                        <div className="mb-4">
                          <p className="font-semibold pb-1">Consultant Mail</p>
                          <input
                            type="email"
                            placeholder="Recipient Email 2"
                            value={a.cMail}
                            className="w-full p-2 border rounded "
                          />
                        </div>
                        <div className="mb-4">
                          <p className="font-semibold pb-1">Subject</p>
                          <input
                            type="text"
                            placeholder="Subject"
                            // value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 border rounded "
                          />
                        </div>
                        <div className="mb-4">
                          <p className="font-semibold pb-1">Mail body</p>
                         

                          <JoditEditor
                            id="message"
                            ref={editor}
                            tabIndex={1}
                            onChange={(s) => setMessage(s)}
                          />
                        </div>
                        <div className="text-center">
                          <button
                            onClick={() => sendEmail(a)}
                            className="btn-black"
                          >
                            Send Email
                          </button>
                        </div>
                        </div>
                        </div> */}
        </div>
    );
};

export default SendMail;