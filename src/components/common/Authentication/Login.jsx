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
import Lottie from "lottie-react";
import google from "../../../assets/social/google.png"
import facebook from "../../../assets/social/facebook.png"
import animationData from "../../../assets/animation/login.json";
const Login = () => {
  const { signIn, signInGoogle, signInFB, setLoading } =
    useContext(AuthContext);
  const { language } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  const gradientColor =
  "linear-gradient(176.98deg, #FFF3F8 -4.94%, #E1F9F0 42.2%, rgba(244, 213, 255, 0.96) 110.23%)";
 





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
  console.log(location);

  const handleForm = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { state: location.state.from.state });

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
            navigate(from, { state: location.state.from.state, });
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
            navigate(from, { state: location.state.from.state });
          });
      })

      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className=" " style={{ background: gradientColor }}>
        <div className="py-6 px-4 w-11/12 mx-auto  md:px-24 lg:px-20 ">
          <div className="md:flex justify-evenly ">
            <div className="p-5 md:pt-20 md:w-1/2 z-10 glass">
              <div className="relative">
                <h2 className="text-[27px] font-bold text-center md:mb-[45px]">
                  {language === "bn" ? "লগইন একাউন্ট" : "Login"}
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
               {/* join with google button  */}
             <div className="mt-10  mx-auto text-center bg-white rounded-lg">
                <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-red rounded-md"
            >
              <img className="h-8 w-8" src={google} alt="" />
              <span className="ml-2">Sign in with Google</span>
            </button>
                </div>
                {/* join with facebook button  */}
                <div className="mt-5  mx-auto text-center bg-white rounded-lg">
                <button
              onClick={handlefbSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-red rounded-md"
            >
              <img className="h-9 w-9 ml-5" src={facebook} alt="" />
              <span className="ml-2">Sign in with Facebook</span>
            </button>
                </div>
            <p
            className= "mt-8 text-md font-normal text-center text-gray-700"
       
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-lg text-primary  hover:underline hover:text-primary"
            >
              Sign Up Here
            </Link>
          </p>
            </div>
           
            <div className="">
            <Lottie
          className="select-none pointer-events-none no-select unselectable md:w-full"
          animationData={animationData}
          loop={true}
        />
        </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
