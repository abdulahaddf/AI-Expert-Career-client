import { useContext, useState } from "react";
import { BiEdit, BiReset } from "react-icons/bi";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RiInformationLine } from "react-icons/ri";
import { toast } from "react-toastify";
import UseUser from "../../hooks/useUser";
import { MyContext } from "../../Context/Context";
import Loader from "../../components/common/loader/Loader";

const ConsultantProfile = () => {
  const [userinfo, isLoading, refetch] = UseUser();
  console.log(userinfo);
  const { language } = useContext(MyContext);
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");

  const { register, handleSubmit, reset } = useForm();
  // const { displayName, email, photoURL, phone, address, city } = userinfo;

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
                `http://localhost:5000/userpictureupdate/?email=${userinfo?.email}`,
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
              <Link to="/dashboard/edit-consultant-profile" className="btn-add">
                <RiInformationLine />
                Update Information
              </Link>

              <div>
                <Link className=" btn-add" to="/forget">
                  <BiReset /> Reset Your Password
                </Link>
              </div>
            </div>

            {/* Update profile picture */}
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
          <div className="md:grid grid-cols-3 mt-2 gap-8">
            <div className="mt-8">
              <label className="text-lg font-bold " htmlFor="name">
                {language === "bn" ? "নাম" : "Name"}
              </label>
              <p className="text-md">{userinfo?.displayName}</p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold " htmlFor="email">
                {language === "bn" ? "ইমেইল " : "Email"}
              </label>
              <p className="text-md">{userinfo?.email}</p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold " htmlFor="phone">
                {language === "bn" ? "মোবাইল" : "Phone"}
              </label>
              <p className="text-md">
                {userinfo?.phone ? (
                  userinfo?.phone
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold ">
                {language === "bn" ? "ঠিকানা" : "Designation"}
              </label>
              <p className="text-md">
                {userinfo?.designation ? (
                  userinfo?.designation
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Description"}
              </label>
              <p className="text-md">
                {userinfo?.description ? (
                  userinfo?.description
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "About"}
              </label>
              <p className="text-md">
                {userinfo?.about ? (
                  userinfo?.about
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Recent Works"}
              </label>
              <p className="text-md">
                {userinfo?.recentWorks ? (
                  <>
                    {userinfo?.recentWorks.map((r) => (
                      <p key={r}>{r}</p>
                    ))}
                  </>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Recent Successes"}
              </label>
              <p className="text-md">
                {userinfo?.successes ? (
                  userinfo?.successes
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Experience"}
              </label>
              <p className="text-md">
                {userinfo?.experience ? (
                  <>
                    {userinfo?.experience.map((r) => (
                      <p key={r}>{r}</p>
                    ))}
                  </>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Educational qualification"}
              </label>
              <p className="text-md">
                {userinfo?.qualification ? (
                  <>
                    {userinfo?.qualification.map((r) => (
                      <p key={r}>{r}</p>
                    ))}
                  </>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Availability"}
              </label>
              <p className="text-md">
                {userinfo?.selectedDays ? (
                  <>
                    {userinfo?.selectedDays.map((r) => (
                      <p key={r}>{r}</p>
                    ))}
                  </>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ঠিকানা" : "Working With"}
              </label>
              <p className="text-md">
                {userinfo?.workingWith ? (
                  <>
                    {userinfo?.workingWith.map((r) => (
                      <p key={r}>{r}</p>
                    ))}
                  </>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>

            <div className="mt-8 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;
