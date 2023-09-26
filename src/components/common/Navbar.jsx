import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/ai expert career logo 4.svg';
import LogoSm from '../../../public/img/Logosm.png';
import Cart from '../../assets/CartFigma.svg';
import './Navbar.css';
import { useContext } from 'react';
import { MyContext } from '../../Contaxt/Context';

import dashboard from '../../assets/profile_icons/Layout.png';
import myProfile from '../../assets/profile_icons/User.png';
import myCourses from '../../assets/profile_icons/Laptop.png';
import myWishlist from '../../assets/profile_icons/Heart.png';
import purchases from '../../assets/profile_icons/File.png';
import certificate from '../../assets/profile_icons/BadgeCheckOutline.png';
import logout from '../../assets/profile_icons/Vector.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { addToCart, user, setLanguage, language } = useContext(MyContext);
  // const [openAbout, setOpenAbout] = useState(false);

  const menuItem = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isActive
              ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150'
              : isPending
                ? 'pending'
                : 'px-3 hover:text-[#ED1B24] duration-150'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isActive
              ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150 '
              : isPending
                ? 'pending'
                : 'px-3 hover:text-[#ED1B24] duration-150'
          }
        >
          About
        </NavLink>
      </li>

      <li className="swc">
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isActive
              ? 'relative after:absolute  after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] px-3 py-2 hover:text-[#ED1B24] duration-150'
              : isPending
                ? 'pending'
                : 'px-3 hover:text-[#ED1B24] duration-150'
          }
        >
          <div className="dropdown inline-block relative">
            <button className=" hover:text-[#ED1B24] lg:px-4 py-2 font-bold  inline-flex items-center">
              <span className="">Resource</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="dropdown-menu absolute w-[200px] z-50  bg-white text-white pt-1">
              <li className="">
                <Link
                  className="hover:bg-[#ED1B24] duration-150 text-black hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/kit"
                >
                  AI Too & Kit
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:bg-[#ED1B24] duration-150 text-black hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/case-study"
                >
                  Case Study
                </Link>
              </li>
            </ul>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isActive
              ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 hover:text-[#ED1B24] duration-150 '
              : isPending
                ? 'pending'
                : 'px-3 hover:text-[#ED1B24] duration-150'
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <ul className="box absolute bg-[#f8d1d1] w-[200px] rounded-lg">
          <li className="mt-2">
            <Link className="duration-100 hover:text-[red]" to="/roadmap">
              AI Roadmap
            </Link>
          </li>
          <li className="mt-2">
            <Link className="duration-100 hover:text-[red]" to="/course">
              Course
            </Link>
          </li>
          <li className="mt-2">
            <Link className="duration-100 hover:text-[red]" to="/ai-consultant">
              Ai Consultancy
            </Link>
          </li>
          <li className="mt-2">
            <Link className="duration-100 hover:text-[red]" to="/">
              Job Opportunity
            </Link>
          </li>
        </ul>
      </li>
      <li className="">
        <NavLink
          to="/career"
          className={({ isActive, isPending }) =>
            isActive
              ? 'relative after:absolute  after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px]  px-3 py-2 '
              : isPending
                ? 'pending'
                : 'px-3'
          }
        >
          <div className="dropdown inline-block relative">
            <button className=" hover:text-[#ED1B24] lg:px-4 py-2 font-bold  inline-flex items-center">
              <span className="mr-1">Career</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg>
            </button>
            <ul className="dropdown-menu-2  absolute z-40 w-[200px] bg-white text-gray-700 pt-1">
              <li className="">
                <Link
                  className="rounded-t hover:bg-[#ED1B24] duration-150 hover:text-white text-black py-2 px-4 block whitespace-no-wrap"
                  to="/roadmap"
                >
                  AI Roadmap
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:bg-[#ED1B24] duration-150 text-black hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/courses"
                >
                  Course
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:bg-[#ED1B24] duration-150 text-black hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/ai-consultant"
                >
                  AI Consultancy
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:bg-[#ED1B24] duration-150 text-black hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/JobOpportunity"
                >
                  Job Opportunity
                </Link>
              </li>
            </ul>
          </div>
        </NavLink>
      </li>

      <li className="mr-3">
        <NavLink
          to="/event"
          className={({ isActive, isPending }) =>
            isActive
              ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
              : isPending
                ? 'pending'
                : 'px-3'
          }
        >
          <div className="dropdown inline-block relative">
            <button className=" hover:text-[#ED1B24] lg:px-4 py-2 font-bold  inline-flex items-center">
              <span className="">Event</span>
            </button>
          </div>
        </NavLink>
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
  window.addEventListener('scroll', scrollEffect);

  return (<>

    <div className="shadow bg-white w-full z-[100]">
      <div className="py-2 px-4 relative   mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-20 lg:px-28 2xl:px-8">
        <div className="relative flex items-center justify-between font-bold">
          {(
            <Link to="/" className="flex justify-center items-center gap-2">
              <img
                className="select-none pointer-events-none no-select unselectable"
                src={Logo}
                alt=""
              />
            </Link>
          )}

          <div className="lg:flex md:hidden justify-between items-center gap-5">
            <ul className="items-center hidden font-[700] lg:flex">
              <div className={'flex items-center'}>
                {menuItem}
              </div>

              <li>
                <NavLink to="/cart" className="py-2 relative">
                  <img className="" src={Cart} alt="" />
                  <div className="h-4 w-4 bg-[#FE0651] rounded-full flex justify-center items-center -top-[8px] absolute -right-[6px]">
                    <p className="text-black mt-[2px]  ">{addToCart.length}</p>
                  </div>
                </NavLink>
              </li>
            </ul>
            {user ? (
              <Link className="hidden sm:block" to="/courses">
                <button className="px-[32px] my-btn py-[9px] bg-[#ED1B24] rounded-md text-black shadow-lg">
                  Enroll
                </button>
              </Link>
            ) : (
              <Link
                className="group relative inline-bloc hidden md:flex shadow-inner shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 focus:outline-none focus:ring"
                to="/signup"
              >
                <span
                  className="absolute inset-y-0 left-0 w-[2px] bg-[#ED1B24] transition-all group-hover:w-full"
                ></span>

                <span
                  className="relative text-sm font-medium text-[#ED1B24] transition-colors group-hover:text-white"
                >
                  Join us
                </span>
              </Link>
            )}

            {user && (
              <span>
                <button
                  to="/about-us"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
                      : isPending
                        ? 'pending'
                        : 'px-3'
                  }
                >
                  <div className="dropdown inline-block relative">
                    <button className=" hover:text-[#ED1B24] lg:px-4 py-2 font-bold gap-3  inline-flex items-center">
                      <img
                        className="w-[60px] h-[60px] rounded-full"
                        src="https://randomuser.me/api/portraits/men/44.jpg"
                        alt=""
                      />
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                      </svg>
                    </button>
                    <ul className="dropdown-menu w-[200px] absolute z-40 hidden bg-[#F1D8E5] text-gray-700 pt-1">
                      <li className="">
                        <Link
                          className="rounded-t  text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard"
                        >
                          <div className="flex items-center gap-2">
                            <img src={dashboard} alt="" />
                            <span>Dashboard</span>
                          </div>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/my-profile"
                        >
                          <div className="flex items-center gap-2">
                            <img src={myProfile} alt="" />
                            <span>My Profile</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/my-courses"
                        >
                          <div className="flex items-center gap-2">
                            <img src={myCourses} alt="" />
                            <span>My courses</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/wishlist"
                        >
                          <div className="flex items-center gap-2">
                            <img src={myWishlist} alt="" />
                            <span>My Wishlist</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/purchase-history"
                        >
                          <div className="flex items-center gap-2">
                            <img src={purchases} alt="" />
                            <span>Purchase History</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/certification"
                        >
                          <div className="flex items-center gap-2">
                            <img src={certificate} alt="" />
                            <span>Certification</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/"
                        >
                          <div className="flex items-center gap-2">
                            <img src={logout} alt="" />
                            <span>Logout</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </button>
                <div className="box absolute bg-[#f8d1d1] w-[200px] rounded-lg">
                  <Link className="duration-100 hover:text-[red]" to="/">
                    Contact Us
                  </Link>
                </div>
              </span>
            )}

            {user ? (
              ''
            ) : (

              <button className="rounded-full hidden  mt-2 lg:mt-0  border-2 border-[#ED1B24] md:flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                <p onClick={() => setLanguage("bn")} className={`px-5 py-[8px] rounded-l-full hover:bg-gray-300 hover:text-black ${language == "bn" ? 'bg-[#ED1B24] text-white' : 'bg-[#ffffff] text-black'}`}>
                  বাংলা
                </p>
                <p onClick={() => setLanguage("en")} className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black rounded-r-full ${language == "en" ? 'bg-[#ED1B24] text-white' : 'bg-[#fbf9f9] text-black'}`}>Eng</p>
              </button>

            )}
          </div>
          {!scrollNav && <div className="lg:hidden ">
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
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                      <li>
                        <NavLink
                          to="/cart"
                          className={({ isActive, isPending }) =>
                            isActive
                              ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
                              : isPending
                                ? 'pending'
                                : 'px-3'
                          }
                        >
                          Cart
                        </NavLink>
                      </li>
                      {user ? (
                        <li>
                          <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                              isActive
                                ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
                                : isPending
                                  ? 'pending'
                                  : 'px-3'
                            }
                          >
                            Login
                          </NavLink>
                        </li>
                      ) : (
                        <div className="px-[14px]">User</div>
                      )}
                      <li className="text-center">

                        <Link
                          className="group relative inline-bloc shadow-inner shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 focus:outline-none focus:ring"
                          to="/signup"
                        >
                          <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-[#ED1B24] transition-all group-hover:w-full"
                          ></span>

                          <span
                            className="relative text-sm font-medium text-[#ED1B24] transition-colors group-hover:text-black"
                          >
                            Join us
                          </span>
                        </Link>
                      </li>
                      <center>
                        <li>
                          <button className="rounded-full mt-2 lg:mt-0  border-2 border-[#ED1B24] flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                            <p onClick={() => setLanguage("bn")} className={`px-5 py-[8px] rounded-l-full hover:bg-gray-300 hover:text-black ${language == "bn" ? 'bg-[#ED1B24] text-white' : 'bg-[#ffffff] text-black'}`}>
                              বাংলা
                            </p>
                            <p onClick={() => setLanguage("en")} className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black rounded-r-full ${language == "en" ? 'bg-[#ED1B24] text-white' : 'bg-[#fbf9f9] text-black'}`}>Eng</p>
                          </button>
                        </li>
                      </center>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>}
        </div>
      </div>
    </div>

    <div className={`shadow bg-white fixed top-0 w-full z-[100] ${scrollNav ? 'transition-transform ease-linear duration-200 translate-y-0' : 'transition-transform ease-linear -translate-y-full'} `}>
      <div className="py-2 px-4 relative   mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-20 lg:px-28 2xl:px-8">
        <div className="relative flex items-center justify-between font-bold">
          {(
            <ul className="md:flex block items-center">
              <li className="lg:flex hidden items-center">{menuItem}</li>
              <Link to={'/home'} className="lg:hidden md:block block w-[90px]">
                <img
                  className="select-none pointer-events-none no-select unselectable"
                  src={Logo}
                  alt=""
                />
              </Link>
            </ul>
          )}

          <div className="lg:flex md:hidden justify-between items-center gap-5">
            <ul className="items-center hidden font-[700] lg:flex">
              <div
                className={
                  `flex items-center absolute bg-[#FA111B] bottom-[-40px] left-0 right-0 mx-auto w-[70px]  h-[70px] rounded-full justify-center opacity-0 transition-opacity ease-linear ${scrollNav && 'opacity-100'} `
                }
              >
                <Link to="">
                  <img
                    className="select-none w-[20px] pointer-events-none no-select unselectable"
                    src={LogoSm}
                    alt=""
                  />
                </Link>
              </div>
              <li>
                <NavLink to="/cart" className="py-2 relative">
                  <img className="" src={Cart} alt="" />
                  <div className="h-4 w-4 bg-[#FE0651] rounded-full flex justify-center items-center -top-[8px] absolute -right-[6px]">
                    <p className="text-black mt-[2px]  ">{addToCart.length}</p>
                  </div>
                </NavLink>
              </li>
            </ul>
            {user ? (
              <Link className="hidden sm:block" to="/courses">
                <button className="px-[32px] my-btn py-[9px] bg-[#ED1B24] rounded-md text-black shadow-lg">
                  Enroll
                </button>
              </Link>
            ) : (
              <Link
                className="group relative inline-bloc hidden md:flex shadow-inner shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 focus:outline-none focus:ring"
                to="/signup"
              >
                <span
                  className="absolute inset-y-0 left-0 w-[2px] bg-[#ED1B24] transition-all group-hover:w-full"
                ></span>

                <span
                  className="relative text-sm font-medium text-[#ED1B24] transition-colors group-hover:text-black"
                >
                  Join us
                </span>
              </Link>
            )}
            {/* convert Bangla and English */}
            {user && (
              <span>
                <button
                  to="/about-us"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
                      : isPending
                        ? 'pending'
                        : 'px-3'
                  }
                >
                  <div className="dropdown inline-block relative">
                    <button className=" hover:text-[#ED1B24] lg:px-4 py-2 font-bold gap-3  inline-flex items-center">
                      <img
                        className="w-[60px] h-[60px] rounded-full"
                        src="https://randomuser.me/api/portraits/men/44.jpg"
                        alt=""
                      />
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                      </svg>
                    </button>
                    <ul className="dropdown-menu w-[200px] absolute z-40 hidden bg-[#F1D8E5] text-gray-700 pt-1">
                      <li className="">
                        <Link
                          className="rounded-t  text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard"
                        >
                          <div className="flex items-center gap-2">
                            <img src={dashboard} alt="" />
                            <span>Dashboard</span>
                          </div>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/my-profile"
                        >
                          <div className="flex items-center gap-2">
                            <img src={myProfile} alt="" />
                            <span>My Profile</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/my-courses"
                        >
                          <div className="flex items-center gap-2">
                            <img src={myCourses} alt="" />
                            <span>My courses</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/wishlist"
                        >
                          <div className="flex items-center gap-2">
                            <img src={myWishlist} alt="" />
                            <span>My Wishlist</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/purchase-history"
                        >
                          <div className="flex items-center gap-2">
                            <img src={purchases} alt="" />
                            <span>Purchase History</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/dashboard/certification"
                        >
                          <div className="flex items-center gap-2">
                            <img src={certificate} alt="" />
                            <span>Certification</span>
                          </div>
                        </Link>
                        <Link
                          className=" text-black py-2 px-4 block whitespace-no-wrap"
                          to="/"
                        >
                          <div className="flex items-center gap-2">
                            <img src={logout} alt="" />
                            <span>Logout</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </button>
                <div className="box absolute bg-[#f8d1d1] w-[200px] rounded-lg">
                  <Link className="duration-100 hover:text-[red]" to="/">
                    Contact Us
                  </Link>
                </div>
              </span>
            )}

            {user ? (
              ''
            ) : (

              <button className="rounded-full hidden  mt-2 lg:mt-0  border-2 border-[#ED1B24] md:flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                <p onClick={() => setLanguage("bn")} className={`px-5 py-[8px] rounded-l-full hover:bg-gray-300 hover:text-black ${language == "bn" ? 'bg-[#ED1B24] text-white' : 'bg-[#ffffff] text-black'}`}>
                  বাংলা
                </p>
                <p onClick={() => setLanguage("en")} className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black rounded-r-full ${language == "en" ? 'bg-[#ED1B24] text-white' : 'bg-[#fbf9f9] text-black'}`}>Eng</p>
              </button>

            )}
          </div>
          {scrollNav && <div className="lg:hidden ">
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
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                      <li>
                        <NavLink
                          to="/cart"
                          className={({ isActive, isPending }) =>
                            isActive
                              ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
                              : isPending
                                ? 'pending'
                                : 'px-3'
                          }
                        >
                          Cart
                        </NavLink>
                      </li>
                      {user ? (
                        <li>
                          <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                              isActive
                                ? 'relative after:absolute after:bg-[#ED1B24] after:text-black after:w-[20px] after:h-[5px] after:rounded after:right-0 after:mx-auto after:left-0 after:bottom-[-8px] text-[#ED1B24] px-3 py-2 '
                                : isPending
                                  ? 'pending'
                                  : 'px-3'
                            }
                          >
                            Login
                          </NavLink>
                        </li>
                      ) : (
                        <div className="px-[14px]">User</div>
                      )}
                      <li className="text-center">

                        <Link
                          className="group relative inline-bloc shadow-inner shadow-[#] rounded overflow-hidden border border-[#ED1B24] px-8 py-2 focus:outline-none focus:ring"
                          to="/signup"
                        >
                          <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-[#ED1B24] transition-all group-hover:w-full"
                          ></span>

                          <span
                            className="relative text-sm font-medium text-[#ED1B24] transition-colors group-hover:text-black"
                          >
                            Join us
                          </span>
                        </Link>
                      </li>
                      <center>
                        <li>
                          <button className="rounded-full mt-2 lg:mt-0  border-2 border-[#ED1B24] flex justify-between items-center bg-[#fefefe] overflow-hidden ">
                            <p onClick={() => setLanguage("bn")} className={`px-5 py-[8px] rounded-l-full hover:bg-gray-300 hover:text-black ${language == "bn" ? 'bg-[#ED1B24] text-white' : 'bg-[#ffffff] text-black'}`}>
                              বাংলা
                            </p>
                            <p onClick={() => setLanguage("en")} className={`px-5 py-[8px] hover:bg-gray-300 hover:text-black rounded-r-full ${language == "en" ? 'bg-[#ED1B24] text-white' : 'bg-[#fbf9f9] text-black'}`}>Eng</p>
                          </button>
                        </li>
                      </center>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>}
        </div>
      </div>
    </div>
  </>

  );
};

export default Navbar;
