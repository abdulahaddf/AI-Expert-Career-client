import { useContext, useState } from "react";

import Navbar from "../../common/Navbar";
import {
  BsChevronRight,
  BsChevronLeft,
  BsGrid,
  BsPerson,
  BsLaptop,
  BsImage,
  BsLaptopFill,
} from "react-icons/bs";
import { AiFillMail, AiOutlineHeart, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { TbFileReport } from "react-icons/tb";
import logoutLogo from "../../../assets/Dashboard/Vector.png";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import { MyContext } from "../../../Context/Context";
import { AuthContext } from "../../../Context/AuthProvider";
import { FaBloggerB, FaPercentage, FaUserEdit, FaUsersCog } from "react-icons/fa";
import { MdAllInbox, MdManageSearch, MdReviews, MdVideoCameraFront } from "react-icons/md";
import { CiDiscount1, CiMail } from "react-icons/ci";
import useAdmin from "../../../hooks/useAdmin";
import UseUser from "../../../hooks/useUser";
import { FiLogOut } from "react-icons/fi";
import useTitle from "../../../hooks/useTitle";
const DashboardLayout = () => {
  const { language } = useContext(MyContext);
  const {user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userinfo] = UseUser();
  const isAdmin = userinfo?.role === "admin";
  console.log(isAdmin)
  // const gradientColor =
  //   "linear-gradient(176.98deg, #FFF3F8 -4.94%, #E1F9F0 42.2%, rgba(244, 213, 255, 0.96) 110.23%)";
 


  useTitle("Dashboard");
  return (
    <div className="">
      <Navbar />
      <div className="" >      {/* style={{ background: gradientColor }} */} 
        {
          <button
            onClick={() => setIsOpen(true)}
            className={`absolute ${
              isOpen ? "hidden" : ""
            } z-50 top-1/2 left-1 bg-[#ED1B24] h-6 w-6 lg:hidden sticky text-white flex  justify-center items-center rounded-full`}
          >
            <BsChevronRight />
          </button>
        }

        <div
          // eslint-disable-next-line react/no-unknown-property
          x-data="{ isOpen: false }"
          className="mb-10 md:pt-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8 "
        >
          <div className="flex  space-x-0 lg:space-x-[18px] ">
            <div
              className={`${
                isOpen
                  ? " translate-x-0 opacity-95 "
                  : "opacity-0 -translate-x-full "
              }  h-fit lg:bg-[#ED1B24]/20 bg-white fixed top-0 lg:w-72 md:w-72 inset-x-0 z-20 w-72 md:px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative  lg:opacity-100 lg:translate-x-0 lg:flex  `}
            >
              <button
                onClick={() => setIsOpen(false)}
                className={`absolute ${
                  isOpen ? "" : "hidden"
                } top-1/2 -right-2 bg-[#ED1B24] h-6 w-6 lg:hidden  text-white flex  justify-center items-center rounded-full`}
              >
                <BsChevronLeft />
              </button>
              <div>
               {
                isAdmin || userinfo?.role === "super admin" ? 
                // Admin Dashboard link starts from here
                <ul className="w-full h-full md:px-4 flex  flex-col">
               

              
                <NavLink
                  to={"/dashboard/my-profile"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex   rounded-[10px]"
                      : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                  }
                >
                  <BsPerson
                    className={`${({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-red-600"}mb-[4px] mr-2 `}
                  />
                  {language === "bn" ? "আমার প্রোফাইল" : "My Profile"}
                </NavLink>
                <NavLink
                  to={"/dashboard/manage-users"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex   rounded-[10px]"
                      : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                  }
                >
                  <FaUsersCog
                    className={`${({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-red-600"}mb-[4px] mr-2 `}
                  />
                  {language === "bn" ? "পরিচালনা করুন" : "Manage Users"}
                </NavLink>

                <NavLink
                  to={"/dashboard/add-blog"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                      : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                  }
                >
                  <FaBloggerB
                    className={`${({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-red-600"}mb-[4px] mr-2 `}
                  />
                  {language === "bn" ? "ব্লগ যোগ করুন" : "Add Blog"}
                </NavLink>
                <NavLink
                  to={"/dashboard/manage-blog"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                      : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                  }
                >
                  <MdManageSearch
                    className={`${({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-red-600"}mb-[4px] mr-2 `}
                  />
                  {language === "bn" ? "ব্লগ পরিচালনা করুন" : "Manage Blog"}
                </NavLink>
                <NavLink
                  to={"/dashboard/add-course"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                      : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                  }
                >
                  <AiOutlineVideoCameraAdd
                    className={`${({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-red-600"}mb-[4px] mr-2 `}
                  />
                  {language === "bn" ? "কোর্স যোগ করুন" : "Publish Course"}
                </NavLink>
                <NavLink
                    to={"/dashboard/manage-courses"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <BsLaptopFill
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Manage courses"}
                  </NavLink>
                <NavLink
                    to={"/dashboard/control-enrollments"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <MdVideoCameraFront
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Control Enrollments"}
                  </NavLink>
                <NavLink
                    to={"/dashboard/control-appointments"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <FaUserEdit
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Control Appointments"}
                  </NavLink>
                <NavLink
                    to={"/dashboard/course-banner"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <BsImage
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Course banner"}
                  </NavLink>


                <NavLink
                    to={"/dashboard/promo"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <FaPercentage
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white "
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Add Promo Codes"}
                  </NavLink>
                <NavLink
                    to={"/dashboard/add-reviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <MdReviews
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Add Reviews"}
                  </NavLink>
                <NavLink
                    to={"/dashboard/newsletter"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <AiFillMail
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "কোর্স পরিচালনা করুন" : "Newsletter mails"}
                  </NavLink>

              

                
              </ul> : userinfo?.role === "consultant" ? 
              // Consultant Dashboard link starts from here
              <ul className="w-full py-[30px] md:px-4 flex  flex-col bg-[#ED1B24]/20">  
              <NavLink
                    to={"/dashboard/consultant-profile"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <BsPerson
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "আমার প্রোফাইল" : "My Profile"}
                  </NavLink></ul> :      
              // User Routes starts from Here
              <ul className="w-full mt-7 py-10 md:py-24 md:px-4 flex h-[100vh]  flex-col bg-[#ED1B24]/20 ">
              

                  <NavLink
                    to={"/dashboard/my-profile"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <BsPerson
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "আমার প্রোফাইল" : "My Profile"}
                  </NavLink>

                  <NavLink
                    to={"/dashboard/my-courses"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <BsLaptop
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "আমার কোর্স সমূূহ" : "My courses"}
                  </NavLink>
                  <NavLink
                    to={"/dashboard/my-appointments"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24]  py-[10px] items-center w-[234px] pl-4 my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <BsLaptop
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "আমার কোর্স সমূূহ" : "My Appointments"}
                  </NavLink>

                  {/* <NavLink
                    to={"/dashboard/wishlist"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <AiOutlineHeart
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "আমার উইশলিস্ট" : "My Wislist"}
                  </NavLink>

                  <NavLink
                    to={"/dashboard/purchase-history"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex   rounded-[10px]"
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <TbFileReport
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "লেনদেন হিস্টোরি" : "Purchase History"}
                  </NavLink>

                  <NavLink
                    to={"/dashboard/certification"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-[#ED1B24] py-[10px] items-center w-[234px] pl-4  my-1 text-lg font-bold flex  rounded-[10px] "
                        : "my-1 text-lg font-bold flex   rounded-[10px] text-gray-700 transition-colors duration-300 transform  hover:text-maroon py-[10px] items-center w-[234px] pl-4 hover:bg-[#ED1B24]/20"
                    }
                  >
                    <VscVerified
                      className={`${({ isActive }) =>
                        isActive
                          ? "text-white"
                          : "text-red-600"}mb-[4px] mr-2 `}
                    />
                    {language === "bn" ? "সার্টিফিকেশন" : "Certification"}
                  </NavLink> */}

<div className=" flex justify-center  items-center cursor-pointer gap-2 " onClick={logOut}>
                 <FiLogOut/>
                  <button className="font-bold " >
                    {language === "bn" ? "লগ আউট" : "Logout"}
                  </button>
                </div>
                  
                </ul>
               }
                



              </div>




            </div>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
