import { useContext, useState } from "react";
import { BiEdit, BiReset } from "react-icons/bi";
import { useEffect } from "react";
import { MyContext } from "../../../Context/Context";
import UseUser from "../../../hooks/useUser";
import Loader from "../../common/loader/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RiInformationLine } from "react-icons/ri";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [userinfo, isLoading, refetch] = UseUser();
  const { language } = useContext(MyContext);
  const [openModalIndex, setOpenModalIndex] = useState("");
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");

  const { register, handleSubmit, reset } = useForm();
  // const { displayName, email, photoURL, phone, address, city } = userinfo;

  const updateProfile = (data) => {
    const { name, phone, address,occupation,
      position,
      field,
      job,
      description,
      social } = data;

    const profile = {
      displayName: name || userinfo?.displayName,
      address: address || userinfo?.address,
      phone: phone || userinfo?.phone,
      occupation: occupation || userinfo?.occupation,
      position: position || userinfo?.position,
      field: field || userinfo?.field,
      job: job || userinfo?.job,
      description: description || userinfo?.description,
      social: social || userinfo?.social,
    };
    axios
      .patch(
        `https://ai-server-sooty.vercel.app/userinfoupdate/?email=${userinfo?.email}`,
        profile
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          if (openModalIndex) {
            openModalIndex.close();
          }
          reset(); // Reset the form
          toast.success("Profile updated successfully");
          refetch();
        } else if (res.data.modifiedCount === 0 || res.data.matchedCount > 1) {
          if (openModalIndex) {
            openModalIndex.close();
          }
          toast.error("Profile is not updated");
        }
      })
      .catch((err) => console.log(err));
  };

  const updatePicture = (data) => {
    if (data !== "null") {
      const { url } = data;
      console.log(data);
      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_Image_Upload_token
      }`;

      const coverForm = new FormData();
      coverForm.append("image", url[0]);

      fetch(imageUploadUrl, {
        method: "POST",
        body: coverForm,
      })
        .then((res) => res.json())
        .then((imageResponse) => {
          if (imageResponse.success) {
            const imageURL = imageResponse.data.display_url;
            const profile = {
              photoURL: imageURL,
            };
            axios
              .patch(
                `https://ai-server-sooty.vercel.app/userpictureupdate/?email=${userinfo?.email}`,
                profile
              )
              .then((res) => {
                if (res.data.modifiedCount > 0) {
                  reset();

                  toast.success("Your Picture updated successfully");
                  if (openPicModalIndex) {
                    openPicModalIndex.close();
                  }
                } else if (
                  res.data.modifiedCount == 0 ||
                  res.data.matchedCount > 1
                ) {
                  toast.error("Picture is not updated");
                  if (openPicModalIndex) {
                    openPicModalIndex.close();
                  }
                }
              })
              .catch((err) => console.log(err));
          }
        });
    }
  };

  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (isLoading) return <Loader />;
  return (
    <div className="mb-10">
      <div className="md:flex bg-[rgba(236,218,219,0.2)]">
        <div className="flex justify-center lg:w-1/3">
          <div className=" bg-[#ed1b2600] p-6 ">
            <figure className="flex justify-center">
              <img
                src={userinfo?.photoURL || "https://i.ibb.co/sg6hmZ7/user.png"}
                className="w-[160px] h-[160px] mt-10 rounded-full object-cover"
                alt=""
              />
            </figure>

            <div className="space-y-5 mt-5 flex flex-col justify-center">
              <button
                onClick={() => {
                  const modalId = `${userinfo.displayName}`;
                  const modal = document.getElementById(modalId);
                  setPicOpenModalIndex(modal);
                  if (modal) {
                    // setTId(userinfo._id);
                    modal.showModal();
                  }
                }}
                className="btn-add"
              >
                <BiEdit className="text-xl" /> Update Photo
              </button>
              <button
                onClick={() => {
                  const modalId = `${userinfo._id}`;
                  const modal = document.getElementById(modalId);
                  setOpenModalIndex(modal);
                  if (modal) {
                    // setTId(userinfo._id);
                    modal.showModal();
                  }
                }}
                className="btn-add"
              >
                <RiInformationLine />
                Update Information
              </button>

              <div>
                <Link state={userinfo?.email} className=" btn-add" to="/forget">
                  <BiReset /> Reset Your Password
                </Link>
              </div>
              <div>
                <Link className=" btn-add" to="/add-phone-number">
                  <BiReset /> Add Your Phone Number
                </Link>
              </div>
            </div>
{/* update profile pic modal */}
            <dialog id={`${userinfo.displayName}`} className="modal">
              <form
                onSubmit={handleSubmit(updatePicture)}
                method="dialog"
                className="modal-box   text-black "
              >
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => {
                    const modalId = `${userinfo.displayName}`;
                    const modal = document.getElementById(modalId);
                    if (modal) {
                      modal.close();
                    }
                  }}
                >
                  ✕
                </button>

                <h3 className="font-bold text-lg">Change Your Picture</h3>
                <div className="mb-2">
                  <input
                    checked={true}
                    type="file"
                    id="url"
                    {...register("url")}
                    className="block   mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-error"
                  />
                </div>
                <div className="mt-6">
                  <button type="submit" className="btn-add">
                    Update
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="lg:w-2/3 p-3 px-6">
          <div className="md:grid grid-cols-2 mt-2 gap-8">
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="name">
                {language === "bn" ? "নাম" : "Name"}
              </label>
              <p className="text-lg ">{userinfo?.displayName}</p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="email">
                {language === "bn" ? "ইমেইল " : "Email"}
              </label>
              <p className="text-lg ">{userinfo?.email}</p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="phone">
                {language === "bn" ? "মোবাইল" : "Phone"}
              </label>
              <p className="text-lg ">
                {userinfo?.phone ? (
                  userinfo?.phone
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="address">
                {language === "bn" ? "ঠিকানা" : "Address"}
              </label>
              <p className="text-lg ">
                {userinfo?.address ? (
                  userinfo?.address
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>


            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="occupation">
                {language === "bn" ? "পেশা" : "Occupation"}
              </label>
              <p className="text-lg ">
                {userinfo?.occupation ? (
                  userinfo?.occupation
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="position">
                {language === "bn" ? "পজিশন" : "Position"}
              </label>
              <p className="text-lg ">
                {userinfo?.position ? (
                  userinfo?.position
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="field">
                {language === "bn" ? "আপনি কোন ক্যারিয়ার ফিল্ডে আগ্রহী" : "Interested Career Field"}
              </label>
              <p className="text-lg ">
                {userinfo?.field ? (
                  userinfo?.field
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="description">
                {language === "bn" ? "আপনি কোন টাইপের জব অনুসন্ধান করছেন" : "Which type of job you searching"}
              </label>
              <p className="text-lg ">
                {userinfo?.job ? (
                  userinfo?.job
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="description">
                {language === "bn" ? "আপনার সম্পর্কে বিস্তারিত" : "Your Description"}
              </label>
              <p className="text-lg ">
                {userinfo?.description ? (
                  userinfo?.description
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="social">
                {language === "bn" ? "আপনার সোশাল মিডিয়া লিংক" : "Social Links"}
              </label>
              <p className="text-lg whitespace-nowrap">
                {userinfo?.social ? (
                  userinfo?.social
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>







            <div className="mt-8">
        
{/* Update information modal */}
              <dialog id={`${userinfo._id}`} className="modal">
                <form
                  onSubmit={handleSubmit(updateProfile)}
                  method="dialog"
                  className="modal-box   text-black "
                >
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => {
                      const modalId = `${userinfo._id}`;
                      const modal = document.getElementById(modalId);
                      if (modal) {
                        modal.close();
                      }
                    }}
                  >
                    ✕
                  </button>

                  {/* {console.log(userinfo)} */}
                  {/* <h3 className="font-bold text-lg">{userinfo.displayName}</h3> */}

                  <h3 className="text-3xl font-semibold text-center  uppercase mb-5">
                    Update Profile{" "}
                  </h3>
                  <div className="grid md:grid-cols-2 space-x-5">
                    <div className="mb-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        defaultValue={userinfo.displayName}
                        {...register("name")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mb-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue={userinfo?.email}
                        {...register("email", { disabled: true })}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        defaultValue={userinfo?.address}
                        {...register("address")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        defaultValue={userinfo?.phone}
                        {...register("phone")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        defaultValue={userinfo?.phone}
                        {...register("phone")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Occupation
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        defaultValue={userinfo?.occupation}
                        {...register("occupation")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="position"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        defaultValue={userinfo?.position}
                        {...register("position")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="field"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Interested Career Field
                      </label>
                      <input
                        type="text"
                        id="field"
                        defaultValue={userinfo?.field}
                        {...register("field")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="job"
                        className="block text-sm font-semibold text-gray-800"
                      >
                       Which type of job you searching
                      </label>
                      <input
                        type="text"
                        id="job"
                        defaultValue={userinfo?.job}
                        {...register("job")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-gray-800"
                      >
                       Your Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        defaultValue={userinfo?.description}
                        {...register("description")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="social"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Social Media Links
                      </label>
                      <input
                        type="text"
                        id="social"
                        defaultValue={userinfo?.social}
                        {...register("social")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>




                  </div>

                  <button type="submit" className="btn-add">
                    Submit
                  </button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
