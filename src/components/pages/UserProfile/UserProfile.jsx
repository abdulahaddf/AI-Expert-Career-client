import { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useEffect } from "react";
import { MyContext } from "../../../Contaxt/Context";
const UserProfile = () => {
  const [edit, setEdit] = useState(false);
  const { language } = useContext(MyContext)
  const updateHandler = () => {
    setEdit(!edit);
  };
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-10">
      <div className="md:grid grid-cols-4 bg-[rgba(236,218,219,0.2)]">
        <div className="flex justify-center">
          <div className=" bg-[#ed1b2600] p-6">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              className="w-[160px] h-[160px] mt-[60px] rounded-full"
              alt=""
            />

            {edit ? (
              <button className="text-[#ffffff] bg-[#ED1B24] text-lg justify-center m-auto mt-10 px-8 py-2 rounded font-semibold flex items-center gap-2">
                <AiOutlineCloudUpload className="text-2xl" /> Upload
              </button>
            ) : (
              <button
                onClick={() => setEdit(!edit)}
                className="text-[#ED1B24] text-lg justify-center m-auto mt-10 font-bold flex items-center gap-2"
              >
                <BiEdit className="text-xl" /> Edit
              </button>
            )}
          </div>
        </div>
        <div className="col-span-3 p-3">
          <div className="md:grid grid-cols-2 mt-2 gap-8">
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="name">
              {language === 'bn' ? 'নাম' : "Name"}
                
              </label>
              {edit ? (
                <>
                  <br />{" "}
                  <input
                    defaultValue="Shahin"
                    type="text"
                    name="name"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">Shahin</h1>
              )}
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="email">
              {language === 'bn' ? 'ইমেইল ' : "Email"}
              </label>
              {edit ? (
                <>
                  <br />{" "}
                  <input
                    defaultValue="Shahin@s.com"
                    type="text"
                    name="email"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">Shahin@s.com</h1>
              )}
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="phone">
              {language === 'bn' ? 'মোবাইল' : "Phone"}
              </label>
              {edit ? (
                <>
                  <br />
                  <input
                    defaultValue="012845121544"
                    type="tell"
                    name="phone"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">01584541298</h1>
              )}
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="address">
              {language === 'bn' ? 'ঠিকানা' : "Address"}</label>
              {edit ? (
                <>
                  <br />
                  <input
                    defaultValue="Mirpur/Dhaka"
                    type="text"
                    name="address"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">

                  Mirpur/Dhaka</h1>
              )}
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="city">
              {language === 'bn' ? 'শহর' : "City"} 
              </label>
              {edit ? (
                <>
                  <br />{" "}
                  <input
                    defaultValue="Dhaka"
                    type="text"
                    name="city"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">Dhaka</h1>
              )}
            </div>
            <div className="mt-8">
            <label className="text-[#707070]" htmlFor="password">
           {edit ? language === 'bn'   ? 'বর্তমান পাসওয়ার্ড' : 'Current Password'  : language === 'bn' ? 'পাসওয়ার্ড' :' Password'}</label>

              {edit ? (
                <>
                  <br />{" "}
                  <input
                    defaultValue="01287652"
                    type="text"
                    name="password"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">01547855</h1>
              )}
            </div>
          </div>
          {edit ? (
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="new_password">
              {language === 'bn' ? 'নতুন পাসওয়ার্ড' : "New password"} 
               
              </label>
              {edit ? (
                <>
                  <br />{" "}
                  <input
                    defaultValue="123..."
                    type="text"
                    name="new_password"
                    className="w-full py-2 outline-none border-b border-[red] bg-[#ff000000] text-xl text-black font-semibold"
                  />
                </>
              ) : (
                <h1 className="text-lg font-bold ">0124555</h1>
              )}
            </div>
          ) : (
            ""
          )}

          {edit ? (
            <div className="mt-16">
              <button
                onClick={updateHandler}
                type="submit"
                className="bg-[#ED1B41] px-6 py-2 text-white rounded float-right"
              >
                {" "}
                Update{" "}
              </button>
            </div>
          ) : (
            ""
          )}
          <h1 className="text-xl font-semibold mt-12">
          {language === 'bn' ? 'বিলিং ঠিকানা' : "Billing Address"} </h1>
          <form className="bg-[#ed1b260e] mt-8">
            <div className=" md:grid grid-cols-2 gap-8 py-9 px-12">
              <input
                name="first_name"
                type="text"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
               
                placeholder={language === 'bn' ? 'প্রথম নাম*' : 'First name*'}
              />

              <input
                type="text"
                name="last_name"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
                placeholder={language === 'bn' ? 'শেষ নাম*' : 'Last name*'}
              />

              <input
                type="text"
                name="last_name"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
                placeholder={language === 'bn' ? 'ঠিকানা ১*' : 'Address line 1*'}
              
              />

              <input
                type="text"
                name="last_name"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
              
                placeholder={language === 'bn'? 'ঠিকানা ২*' : 'Address line 2*'}
               
              />

              <input
                type="text"
                name="phone"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
               
                placeholder={language === 'bn'? 'মোবাইল*' : 'Phone*'}
              />

              <input
                type="text"
                name="city"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
                placeholder={language === 'bn'? 'শহর*' : 'City*'}
              />

              <input
                type="text"
                name="country"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
                placeholder={language === 'bn'? 'দেশ*' : 'Country*'}
              />

              <input
                type="text"
                name="zip_code"
                className="outline-none py-2 placeholder:text-[black] placeholder:font-bold border-b border-[red] bg-[#ffffff02]"
                placeholder={language === 'bn'? 'জিপ কোড*' : "zip code*"}
              />
            </div>
            <div className="flex items-center gap-4 float-right mt-4">
              <button className="bg-[#000000] text-white px-8 py-2 rounded my-btn">
              {language === 'bn' ? 'বাতিল' : "Cancel"}
              </button>
              <button className="bg-[#ED1B24] text-white px-8 py-2 rounded my-btn">
              {language === 'bn' ? 'এগিয়ে যান' : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
