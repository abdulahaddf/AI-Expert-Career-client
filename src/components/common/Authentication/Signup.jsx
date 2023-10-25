import loginBG from "../../../assets/LoginBg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, signInGoogle, signInFB, profileUpdate, setLoading, logOut } =
    useContext(AuthContext);
  const { language } = useContext(MyContext);
  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleForm = (data) => {
    const { email, name, password } = data;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(result)
        logOut();
        reset();
        navigate(from, { replace: true });
        sendVerificationEmail(loggedUser);
        profileUpdate({ displayName: name }).then(() => {
          const saveUser = {
            displayName: data.name,
            email: data.email,
            phone: data.phone,
            role: "user",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // if (data.insertedId) {
              //   reset();
              //   Swal.fire({
              //     position: "top-end",
              //     icon: "success",
              //     title: "Registered successfully. Please verify and login",
              //     showConfirmButton: false,
              //     timer: 2000,
              //   });
              //   // navigate(from, { replace: true });
              // }
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Please check your mail and verify to proceed',
          showConfirmButton: true,
          // timer: 1500
        });
      });
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          displayName: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
          role: "user",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            console.log(result.user);
            toast("Successfully Signed In", {
              icon: <AiFillCheckCircle className="text-xl text-primary" />,
            });
            navigate(from, { replace: true });
          });
      })

      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };
  // Handle FB signin
  const handlefbSignIn = () => {
    signInFB()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          displayName: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
          role: "user",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            console.log(result.user);
            toast.info("Successfully Signed In", {
              icon: <AiFillCheckCircle className="text-xl text-primary" />,
            });
            navigate(from, { replace: true });
          });
      })

      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="mt-[80px] mb-[40px] ">
        <div className="py-6 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
          <div className="grid lg:grid-cols-12 ">
            <div className="px-[40px] lg:px-[70px] py-[40px] lg:py-[100px] bg-white lg:col-span-7 z-10">
              <div className="relative">
                <h2 className="text-[27px] font-bold mb-[45px]">
                  {language === "bn"
                    ? "নতুন একাউন্ট ফর্ম"
                    : "Create an Account"}
                </h2>
                <img
                  className="absolute right-0 top-[50%] transform  -translate-y-[50%]  -z-10"
                  src={loginBG}
                  alt="loginBG"
                />
                <form
                  action=""
                  className=""
                  onSubmit={handleSubmit(handleForm)}
                >
                  <input
                    type="email"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="email"
                    placeholder={
                      language === "bn" ? "আপনার ইমেইল" : "Enter your email"
                    }
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <input
                    type="text"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="name"
                    placeholder={
                      language === "bn" ? "আপনার নাম" : "Enter your name"
                    }
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  <input
                    type="number"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="phone"
                    placeholder={
                      language === "bn"
                        ? "আপনার মোবাইল নম্বর"
                        : "Enter your phone number"
                    }
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  <input
                    type="password"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[40px] px-2 py-3"
                    name="password"
                    placeholder={
                      language === "bn" ? "পাসওয়ার্ড" : "Enter your password"
                    }
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                        message:
                          "Password must contain an uppercase letter, a lowercase letter, a number, and a special character",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="error">{errors.password.message}</span>
                  )}
                  <button
                    type="submit"
                    className="group relative   shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] w-full py-[14px] bg-[#ED1B24] "
                  >
                    <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

                    <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                      {language === "bn" ? "সাবমিট" : "Sign Up "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="px-10 py-14 bg-[#FFD8D8] lg:col-span-5 relative">
              <div className="lg:absolute top-[50%] left-[50%] lg:transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                <h2 className="text-[27px] font-bold mb-6 text-center">
                  {language === "bn"
                    ? "একাউন্ট আছে ?"
                    : " Already create an account"}
                </h2>
                <center>
                  <Link
                    className="group relative   shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-[60px] py-[14px] bg-[#ED1B24]"
                    to="/login"
                  >
                    <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

                    <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                      {language === "bn" ? "সাইন ইন" : " Sign In"}
                    </span>
                  </Link>
                </center>
                {/* join with google button  */}
                <div className="mt-10  w-[16rem] mx-auto text-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="px-[20px] py-[10px] bg-white rounded-md text-black shadow-lg flex items-center"
                  >
                    <img
                      className="mr-2 w-[20px] h-[20px]"
                      src="/src/assets/register/Google Logo.png"
                      alt="google_logo"
                    />
                    Continue with Google
                  </button>
                </div>
                {/* join with facebook button  */}
                <div className="mt-5 w-[16rem] mx-auto text-center">
                  <button
                    onClick={handlefbSignIn}
                    className="px-[20px] py-[10px] bg-[#1877F2] rounded-md text-white shadow-lg flex items-center"
                  >
                    <img
                      className="mr-2 w-[20px] h-[20px]"
                      src="/src/assets/register/facebook_logo.png"
                      alt="facebook_logo"
                    />
                    Continue with Facebook
                  </button>
                </div>
                {/* join with linkedin button  */}
                <div className="mt-5 w-[16rem] mx-auto text-center">
                  <Link
                    to=""
                    className="px-[20px] py-[10px] bg-white rounded-md text-black shadow-lg flex items-center"
                  >
                    <img
                      className="mr-2 w-[20px] h-[20px]"
                      src="/src/assets/register/linkedinLogo.png"
                      alt="linkedin_logo"
                    />
                    Continue with Linkedin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
