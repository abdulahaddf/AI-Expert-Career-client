import { useState } from "react";
import { Link, NavLink, Navigate, useLocation, useNavigate,} from "react-router-dom";
import Logo from "/img/logo.png";
import "./Navbar.css";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import { AuthContext } from "../../Context/AuthProvider";
import { RiArrowDownSLine } from "react-icons/ri";
import UseUser from "../../hooks/useUser";
import SearchBox from "./SearchBox/SearchBox";
import SearchMobile from "./SearchBox/SearchMobile";
import { useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NotificationContext } from "../../Context/NotificationProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { unopenedCount } = useContext(NotificationContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setLanguage, language } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(isOpen);
const navigate = useNavigate();
  const [userinfo] = UseUser();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
// console.log(location)
  const isAdmin = userinfo?.role === "admin";
  // console.log(isAdmin);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const menuItem = (
    <>
      <li>
        <NavLink
          to="/home"
          onClick={() => setIsOpen(false)}
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          onClick={() => setIsOpen(false)}
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          Blog
        </NavLink>
      </li>

      {/* <li>
        <NavLink
          to="/roadmap"
          onClick={() => setIsOpen(false)}
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          AI Roadmap
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/courses"
          onClick={() => setIsOpen(false)}
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          Course
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ai-consultant"
          onClick={() => setIsOpen(false)}
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[30px] after:h-[2px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-2px] text-[#ED1B24] px-3 py-0.5 hover:text-[#ED1B24] duration-150  rounded-full"
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          AI Consultancy
        </NavLink>
      </li>

      <li>
        <ul className="box absolute bg-[#f8d1d1] w-[200px] rounded-lg"></ul>
      </li>
    </>
  );

  // console.log(location.pathname)
  const handleLogOut = () => {
    if (location.pathname.startsWith('/dashboard')) {
      navigate('/');
      logOut();
    } else {
      logOut();
    }
  };

  
// const handleLogOutAdmin = () => {
//   console.log("clicked");
//   if (window.location.pathname.includes('/dashboard')) {
//     navigate('/home', {replace: true});
//     console.log("from dashboard");
//     // logOut();
//   } else {
//     console.log('from else');
//     logOut();
//   }
// };
 


  useEffect(() => {
    setIsOpen(true);
  }, [isMenuOpen]);
  return (
    <>
      <div className="shadow bg-white w-full z-[100] sticky top-0">
        <div className="py-1 px-4 relative   mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between  font-bold ">
            <div className="  flex items-center ">
              <div>
                <Link to="/" className="flex justify-center items-center gap-2">
                  <img
                    className="select-none pointer-events-none no-select w-24 md:w-32 md:p-2"
                    src={Logo}
                    alt=""
                  />
                </Link>
              </div>

              <SearchBox userinfo={userinfo} />
            </div>

            <ul className="items-center hidden font-[700] xl:flex pl-5 ">
              <div className={"flex items-center"}>{menuItem}</div>
            </ul>
            <div className="flex  justify-between items-center gap-5 pl-28 md:pl-0">
              {user &&
              !isAdmin &&
              userinfo?.role !== "super admin" &&
              userinfo?.role !== "consultant" ? (
                <Link to="/dashboard/notifications" className="relative pl-2">
                  <IoMdNotificationsOutline className="text-2xl" />
                  {unopenedCount > 0 && (
                    <div className="bg-primary rounded-full p-0.5 px-[6px] text-[10px] text-white absolute -top-1.5 -right-2">
                      {unopenedCount}
                    </div>
                  )}
                </Link>
              ) : (
                !user && (
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="bg-white normal-case border-black border-[1px] rounded-lg h-[42px] hover:shadow-lg hover:bg-black hover:text-white py-2 md:px-4 hidden md:flex items-center justify-center"
                    to="/login"
                    state={{ from: location }}
                  >
                    {language === "bn" ? "লগ ইন" : "Sign In"}
                  </Link>
                )
              )}

              <button className="rounded-lg hidden  mt-2 lg:mt-0  border-2 border-[#ED1B24] md:flex justify-between items-center bg-[#fefefe] overflow-hidden h-[42px]">
                <p
                  onClick={() => setLanguage("bn")}
                  className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black ${
                    language == "bn"
                      ? "bg-[#ED1B24] text-white"
                      : "bg-[#ffffff] text-black"
                  }`}
                >
                  বাংলা
                </p>
                <p
                  onClick={() => setLanguage("en")}
                  className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black ${
                    language == "en"
                      ? "bg-[#ED1B24] text-white"
                      : "bg-[#fbf9f9] text-black"
                  }`}
                >
                  Eng
                </p>
              </button>

              {user ? (
                <div className="">
                  <div
                    className=" dropdown dropdown-hover "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <label
                      tabIndex={0}
                      className="cursor-pointer flex rounded-lg p-1  justify-center items-center overflow-hidden relative"
                    >
                      {" "}
                      <div className="flex items-center hover:text-primary ">
                        <img
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover "
                          src={
                            userinfo?.photoURL ||
                            "https://i.ibb.co/sg6hmZ7/user.png"
                          }
                          alt="user"
                        />

                        <span className="text-xl ">
                          <RiArrowDownSLine
                            className={`${
                              isHovered ? "transform rotate-180 " : ""
                            } transition-transform duration-300 inline-block `}
                          ></RiArrowDownSLine>
                        </span>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-menu bg-white z-20  shadow-md  absolute right-0 w-32
                  rounded-box   text-left mt-2"
                    >
                      <li className="">
                        {user ? (
                          isAdmin || userinfo?.role === "super admin" ? (
                            <li className="flex flex-col space-y-2  p-1  ">
                              <Link
                                to="/dashboard/my-profile"
                                className="navOptions"
                              >
                                Dashboard
                              </Link>
                              <Link
                                to="/dashboard/add-blog"
                                className="navOptions ml-0"
                              >
                                Add Blog
                              </Link>

                              <Link
                                to="/dashboard/manage-users"
                                className=" navOptions"
                              >
                                User Control
                              </Link>
                              <Link
                                to="/dashboard/control-enrollments"
                                className=" navOptions"
                              >
                               Enrollments
                              </Link>

                              {/* <Link className="navOptions" onClick={handleLogOutAdmin}>
                                Logout
                              </Link> */}
                            </li>
                          ) : userinfo?.role === "consultant" ? (
                            <li className="flex flex-col justify-center items-center h-fit space-y-4 mt-10  p-1 ">
                              <Link
                                to="/dashboard/consultant-profile"
                                className="navOptions"
                              >
                                My Profile
                              </Link>
                              <li className="navOptions " onClick={()=>handleLogOut()}>
                                Logout
                              </li>
                            </li>
                          ) : (
                            <li className="flex flex-col justify-center items-center h-fit space-y-2  p-1 ">
                              <Link
                                to="/dashboard/my-profile"
                                className="navOptions"
                              >
                                My Profile
                              </Link>
                              <Link
                                to="/dashboard/my-courses"
                                className="navOptions"
                              >
                                My Courses
                              </Link>
                              <Link
                                to="/dashboard/my-appointments"
                                className="navOptions"
                              >
                                Appointments
                              </Link>

                              <li className="navOptions" onClick={()=>handleLogOut()}>
                                Logout
                              </li>
                            </li>
                          )
                        ) : (
                          ""
                        )}
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="xl:hidden ">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  onClick={() => setIsOpen(true)}
                  className="w-5 text-gray-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && isOpen && (
                <div className="absolute  top-0 left-0 w-full z-50">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <NavLink
                          to="/"
                          onClick={() => setIsOpen(false)}
                          className="flex justify-center items-center gap-2"
                        >
                          <img className="bg-white w-20" src={Logo} alt="" />
                        </NavLink>
                      </div>
                      <div className="my-2 absolute"></div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <SearchMobile
                      userinfo={userinfo}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                    />
                    <nav>
                      <ul className="space-y-4">
                        {menuItem}

                        <div className="flex items-center justify-evenly">
                          {user ? (
                            ""
                          ) : (
                            <div className="">
                              <Link
                                onClick={() => setIsOpen(false)}
                                className="bg-white  normal-case border-black border-[1px] rounded-lg h-[36px]  hover:shadow-lg hover:bg-black hover:text-white py-2 px-4  items-center justify-center "
                                to="/login"
                                state={{ from: location }}
                              >
                                {language === "bn" ? "লগ ইন" : "Sign In"}
                              </Link>
                            </div>
                          )}

                          <div>
                            <li>
                              <button className="rounded-lg h-[36px] border-2 border-[#ED1B24] flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                                <p
                                  onClick={() => setLanguage("bn")}
                                  className={`px-3 py-[8px]  hover:bg-gray-300 hover:text-black ${
                                    language == "bn"
                                      ? "bg-[#ED1B24] text-white"
                                      : "bg-[#ffffff] text-black"
                                  }`}
                                >
                                  বাংলা
                                </p>
                                <p
                                  onClick={() => setLanguage("en")}
                                  className={`px-3 py-[8px] hover:bg-gray-300 hover:text-black  ${
                                    language == "en"
                                      ? "bg-[#ED1B24] text-white"
                                      : "bg-[#fbf9f9] text-black"
                                  }`}
                                >
                                  Eng
                                </p>
                              </button>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll nav starts from here */}
    </>
  );
};

export default Navbar;
