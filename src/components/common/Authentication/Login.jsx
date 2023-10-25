import { useContext } from "react";
import loginBG from "../../../assets/LoginBg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MyContext } from "../../../Context/Context";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AiFillCheckCircle } from "react-icons/ai";

const Login = () => {
  const { signIn, signInGoogle, signInFB, setLoading } =
    useContext(AuthContext);
  const { language } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleForm = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");

        toast.info("Successfully Signed In", {
          icon: <AiFillCheckCircle className="text-xl text-primary" />,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          toast.error("Invalid email or password");
        } else {
          toast(errorMessage.slice(10, 61));
        }
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
        fetch("https://ai-server-sooty.vercel.app/users", {
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
        fetch("https://ai-server-sooty.vercel.app/users", {
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
      <div className="mt-[90px] mb-[40px] ">
        <div className="py-6 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
          <div className="grid lg:grid-cols-12 ">
            <div className="px-[40px] lg:px-[70px] py-[40px] lg:py-[100px] bg-white lg:col-span-7 z-10">
              <div className="relative">
                <h2 className="text-[27px] font-bold mb-[45px]">
                  {language === "bn" ? "লগইন একাউন্ট" : "Login Account"}
                </h2>
                <img
                  className="absolute right-0 top-[50%] transform -translate-y-[50%] -z-10"
                  src={loginBG}
                  alt=""
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
                    type={showPassword ? "text" : "password"}
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
                    })}
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="absolute right-3 top-1/2 mt-5 transform -translate-y-1/2 text-gray-400 cursor-pointer text-2xl"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-3 top-1/2 mt-5  transform -translate-y-1/2 text-gray-400 cursor-pointer text-2xl"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                  <div className="flex justify-between">
                    <div>
                      {errors.password && (
                        <span className="error">Password is required</span>
                      )}
                    </div>
                    <Link
                      to="/forget"
                      className="text-xs text-red hover:underline"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="group relative shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] w-full py-[14px] bg-[#ED1B24] outline-none"
                  >
                    <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>
                    <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                      {language === "bn" ? "লগইন" : "Login"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="px-10 py-14 bg-[#FFD8D8] lg:col-span-5 relative">
              <div className="lg:absolute top-[50%] left-[50%] lg:transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                <h2 className="text-[27px] font-bold mb-6 text-center  w-[70vw] lg:w-[30vw]">
                  {language === "bn"
                    ? "ক্যারিয়ার কনসালটেন্ট, রোডম্যাপ,ফ্রি এ আই কোর্স সহ, প্রজেক্ট বেইজডলার্নিংয়ের সাথে এখনিই যুক্ত হোন!"
                    : "Create account"}
                </h2>
                {/* sign up button  */}
                <center>
                  <Link
                    className="group relative  shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-[60px] py-[14px] bg-[#ED1B24] focus:outline-none "
                    to="/signup"
                  >
                    <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

                    <span className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600">
                      {language === "bn" ? "সাইন আপ" : "Sign Up"}
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

export default Login;
