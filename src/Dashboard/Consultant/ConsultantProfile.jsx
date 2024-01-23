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
    <div className="mb-10 w-[90dvw] 2xl:w-[95dvw]">
      <div className="grid-cols-4 md:grid ">
        <div className="flex justify-center">
          <div className=" bg-[#ed1b2600] p-6">
            <figure className="flex justify-center">
              <img
                src={userinfo?.photoURL}
                className="w-[160px] h-[160px] mt-10 rounded-full"
                alt=""
              />
            </figure>

            <div className="flex flex-col justify-center mt-5 space-y-5">
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
                className="text-black modal-box "
              >
                <button
                  className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
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

                <h3 className="text-lg font-bold">Change Your Picture</h3>
                <div className="mb-2">
                  <input
                    checked={true}
                    type="file"
                    id="url"
                    {...register("url")}
                    className="block w-full mt-2 bg-white border rounded-md text-primary focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 input file-input file-input-bordered file-input-error"
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
          <div className="grid-cols-3 gap-8 mt-2 md:grid">
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
                {language === "bn" ? "পদবী" : "Designation"}
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
              <label className="text-lg font-bold ">
                {language === "bn" ? "ক্যারিয়ার" : "Career Summary"}
              </label>
              <p className="text-md">
                {userinfo?.summary ? (
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html:
                        userinfo?.summary.length > 250
                          ? userinfo?.summary.substring(0, 250) + " ..."
                          : userinfo?.summary,
                    }}
                  ></div>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "কোম্পানি" : "Company Name"}
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
                {language === "bn" ? "সাম্প্রতিক কাজ" : "Recent Works"}
              </label>
              <p className="text-md">
                {userinfo?.recentWorks ? (
                  <>
                    {userinfo?.recentWorks.map((r) => (
                      <p key={r}>{r?.work ? r?.work : "null"}</p>
                    ))}
                  </>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "পুরস্কার এবং কৃতিত্ব" : "Awards & Achievements"}
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
                {language === "bn" ? "অভিজ্ঞতা" : "Experience"}
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
                {language === "bn" ? "শিক্ষাগত যোগ্যতা" : "Educational qualification"}
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
                {language === "bn" ? "উপস্থিতি" : "Availability"}
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
                {language === "bn" ? "কাজ করছেন" : "Working With"}
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

            <div className="w-2/5 mt-8">
              <label className="text-lg font-bold">
                {language === "bn" ? "ফেসবুক" : "Facebook Link"}
              </label>
              <p className="pr-4 ">
                {userinfo?.facebook ? (
                  <>{userinfo?.facebook}</>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8 ">
              <label className="text-lg font-bold">
                {language === "bn" ? "লিংকডিন" : "Linkedin Link"}
              </label>
              <p className="text-md">
                {userinfo?.linkedin ? (
                  <>{userinfo?.linkedin}</>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8 ">
              <label className="text-lg font-bold">
                {language === "bn" ? "টুইটার" : "Twitter Link"}
              </label>
              <p className="text-md ">
                {userinfo?.twitter ? (
                  <>{userinfo?.twitter}</>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
            <div className="mt-8 ">
              <label className="text-lg font-bold">
                {language === "bn" ? "গিটহাব" : "Github Link"}
              </label>
              <p className="text-md ">
                {userinfo?.github ? (
                  <>{userinfo?.github}</>
                ) : (
                  <p className="font-normal">null</p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;
