import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/ai expert career logo 4.svg";
import LogoSm from "../../../public/img/Logosm.png";
import Cart from "../../assets/CartFigma.svg";
import "./Navbar.css";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import { AuthContext } from "../../Context/AuthProvider";
import { RiArrowDownSLine } from "react-icons/ri";
import UseUser from "../../hooks/useUser";
import HomeSearch from "../pages/Home/HomeSearch";
import SearchBox from "./SearchBox/SearchBox";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { addToCart, setLanguage, language } = useContext(MyContext);
  const [userinfo] = UseUser();
  const [isHovered, setIsHovered] = useState(false);
  const isAdmin = userinfo?.role === "admin";
  console.log(isAdmin);
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
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150"
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
          to="/blog"
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150 "
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/roadmap"
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150 "
              : isPending
              ? "pending"
              : "px-3 hover:text-[#ED1B24] duration-150"
          }
        >
          AI Roadmap
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150 "
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
          className={({ isActive, isPending }) =>
            isActive
              ? "relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150 "
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

  const [scrollNav, setScrollNav] = useState(false);
  const scrollEffect = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", scrollEffect);

  return (
    <>
      <div className="shadow bg-white w-full z-[100] sticky top-0">
        <div className="py-1 px-4 relative   mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-20 lg:px-28 2xl:px-8">
          <div className="relative flex items-center justify-between  font-bold">
            
  <div className="  flex items-center">
  <div>
  <Link to="/" className="flex justify-center items-center gap-2">
                <img
                  className="select-none pointer-events-none no-select "
                  src={Logo}
                  alt=""
                />
              </Link>
  </div>
            

            <SearchBox userinfo={userinfo}/>
  </div>

            <div className="lg:flex md:hidden justify-between items-center gap-5">
              <ul className="items-center hidden font-[700] lg:flex">
             
                <div className={"flex items-center"}>{menuItem}</div>
              </ul>
              {user ? (
                ""
              ) : (
                <Link
                  className="group relative inline-bloc hidden md:flex shadow-inner shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 focus:outline-none focus:ring"
                  to="/signup"
                >
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-[#ED1B24] transition-all group-hover:w-full"></span>

                  <span className="relative text-sm font-medium text-[#ED1B24] transition-colors group-hover:text-white">
                    Join us
                  </span>
                </Link>
              )}

              <button className="rounded-full hidden  mt-2 lg:mt-0  border-2 border-[#ED1B24] md:flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                <p
                  onClick={() => setLanguage("bn")}
                  className={`px-5 py-[8px] rounded-l-full hover:bg-gray-300 hover:text-black ${
                    language == "bn"
                      ? "bg-[#ED1B24] text-white"
                      : "bg-[#ffffff] text-black"
                  }`}
                >
                  বাংলা
                </p>
                <p
                  onClick={() => setLanguage("en")}
                  className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black rounded-r-full ${
                    language == "en"
                      ? "bg-[#ED1B24] text-white"
                      : "bg-[#fbf9f9] text-black"
                  }`}
                >
                  Eng
                </p>
              </button>

              {user ? (
                <div>
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
                      <div className="flex items-center hover:text-primary">
                        <img
                          className="w-[60px] h-[60px] rounded-full"
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
                                  className="navOptions ml-0"
                                >
                                  My Profile
                                </Link>
                            
                           
                                <Link
                                  to="/dashboard/my-profile"
                                  className="navOptions"
                                >
                                  Dashboard
                                </Link>
                            
                                <Link
                                  to="/dashboard/manage-users"
                                  className=" navOptions"
                                >
                                  User Control
                                </Link>
                             
                              <Link
                                className="navOptions"
                                onClick={logOut}
                              >
                                Logout
                              </Link>
                            </li>
                          ) : userinfo?.role === "consultant" ? (
                            <li className="flex flex-col justify-center items-center h-fit space-y-4 mt-10  p-1 ">
                              <Link
                                to="/dashboard/consultant-profile"
                                className="navOptions"
                              >
                                My Profile
                              </Link>
                              <li
                                className="navOptions "
                                onClick={logOut}
                              >
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

                              <li
                                className="navOptions"
                                onClick={logOut}
                              >
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
            {!scrollNav && (
              <div className="lg:hidden ">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                {isMenuOpen && (
                  <div className="absolute  top-0 left-0 w-full z-50">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <NavLink
                            to="/"
                            className="flex justify-center items-center gap-2"
                          >
                            <img className="bg-white" src={Logo} alt="" />
                          </NavLink>
                        </div>
                        <div className="my-2 absolute">
                          <SearchBox userinfo={userinfo}/>
                          </div>
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
                      <nav>
                         
                        <ul className="space-y-4">
                          
                          {menuItem}
                         
                          {user ? (
                            <div>
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
                                  <div className="flex items-center hover:text-primary">
                                    <img
                                      className="w-[60px] h-[60px] rounded-full"
                                      src={
                                        user?.photoURL ||
                                        "https://i.ibb.co/sg6hmZ7/user.png"
                                      }
                                      alt="user"
                                    />

                                    <span className="text-xl ">
                                      <RiArrowDownSLine
                                        className={`${
                                          isHovered
                                            ? "transform rotate-180 "
                                            : ""
                                        } transition-transform duration-300 inline-block `}
                                      ></RiArrowDownSLine>
                                    </span>
                                  </div>
                                </label>




                                {/* For hamburger menu */}
                                <ul
                                  tabIndex={0}
                                  className="dropdown-menu bg-white  z-20  p-2 shadow-md  absolute w-48
                  rounded-box  md:w-40 lg:w-36 "
                                >
                                   <li className="flex flex-col justify-center items-center h-fit space-y-2   ">
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

                              <li
                                className="navOptions"
                                onClick={logOut}
                              >
                                Logout
                              </li>
                            </li>
                                  <li>
                                    {user ? (
                                      isAdmin ? (
                                        <li>
                                          <Link
                                            to="/dashboard/my-profile"
                                            className="navOptions"
                                          >
                                            Dashboard
                                          </Link>
                                          <li
                                            className="hover:text-primary  hover:no-underline ml-3"
                                            onClick={logOut}
                                          >
                                            Logout
                                          </li>
                                        </li>
                                      ) : ""
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
                          <li className="text-center">
                            <Link
                              className="group relative inline-bloc shadow-inner shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 focus:outline-none focus:ring"
                              to="/signup"
                            >
                              <span className="absolute inset-y-0 left-0 w-[2px] bg-[#ED1B24] transition-all group-hover:w-full"></span>

                              <span className="relative text-sm font-medium text-[#ED1B24] transition-colors group-hover:text-black">
                                Join us
                              </span>
                            </Link>
                          </li>
                          
                          <center>
                            <li>
                              <button className="rounded-full mt-2 lg:mt-0  border-2 border-[#ED1B24] flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                                <p
                                  onClick={() => setLanguage("bn")}
                                  className={`px-5 py-[8px] rounded-l-full hover:bg-gray-300 hover:text-black ${
                                    language == "bn"
                                      ? "bg-[#ED1B24] text-white"
                                      : "bg-[#ffffff] text-black"
                                  }`}
                                >
                                  বাংলা
                                </p>
                                <p
                                  onClick={() => setLanguage("en")}
                                  className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black rounded-r-full ${
                                    language == "en"
                                      ? "bg-[#ED1B24] text-white"
                                      : "bg-[#fbf9f9] text-black"
                                  }`}
                                >
                                  Eng
                                </p>
                              </button>
                            </li>
                          </center>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Scroll nav starts from here */}
    </>
  );
};

export default Navbar;
