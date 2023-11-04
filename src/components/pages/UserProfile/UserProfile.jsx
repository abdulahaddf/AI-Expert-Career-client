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
    const { name, phone, address } = data;
    const profile = {
      displayName: name || userinfo?.displayName,
      address: address || userinfo?.address,
      phone: phone || userinfo?.phone,
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
      <div className="md:grid grid-cols-4 bg-[rgba(236,218,219,0.2)]">
        <div className="flex justify-center">
          <div className=" bg-[#ed1b2600] p-6">
            <figure className="flex justify-center">
              <img
                src={userinfo?.photoURL}
                className="w-[160px] h-[160px] mt-10 rounded-full"
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
            </div>

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

        <div className="col-span-3 p-3">
          <div className="md:grid grid-cols-2 mt-2 gap-8">
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="name">
                {language === "bn" ? "নাম" : "Name"}
              </label>
              <p className="text-lg font-bold">{userinfo?.displayName}</p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="email">
                {language === "bn" ? "ইমেইল " : "Email"}
              </label>
              <p className="text-lg font-bold">{userinfo?.email}</p>
            </div>
            <div className="mt-8">
              <label className="text-[#707070] " htmlFor="phone">
                {language === "bn" ? "মোবাইল" : "Phone"}
              </label>
              <p className="text-lg font-bold">
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
              <p className="text-lg font-bold">
                {userinfo?.address ? (
                  userinfo?.address
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              {/* <button
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
                Update Information
              </button> */}

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
                  <h3 className="font-bold text-lg">{userinfo.displayName}</h3>

                  <h3 className="text-3xl font-semibold text-center  uppercase">
                    Update Profile{" "}
                  </h3>
                  <div>
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
