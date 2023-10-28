import facebook from "../Assests/facebook.svg";
import linkdeIn from "../Assests/linkdeIn.svg";
import share from "../Assests/share.svg";
import Comment from "./Comment";
import IndividualBlogCard from "./IndividualBlogCard";
import NewsLetter from "../NewsLetter";
import BlogItem from "./BlogItem/BlogItem";
import { BiDislike, BiLike } from "react-icons/bi";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";
import { Link, useLocation, useParams } from "react-router-dom";
import moment from "moment";
import UseUser from "../../../../hooks/useUser";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loader from "../../../common/loader/Loader";
import BlogCard from "../BlogCard";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const IndividualBlog = () => {
  const { language } = useContext(MyContext);
  const { user } = useContext(AuthContext);
  const [userinfo] = UseUser();
  const [like, setLike] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const [cmnt, setComment] = useState("");
  const { id } = useParams();
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [randomCardBlog, setRandomCardBlog] = useState([]);
  const [reload, setReload] = useState(false);
  const currentURL = window.location.href;
  const location = useLocation();
  console.log(currentURL);
  // console.log(id);
  console.log(blog);
  const allComments = blog?.comments?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const [showAllComments, setShowAllComments] = useState(false);

  const displayedComments = showAllComments
    ? allComments
    : allComments?.slice(0, 5);
  //fetching data for individual blog
  useEffect(() => {
    fetch(`https://ai-server-sooty.vercel.app/singleblogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [id, like, reload]);

  const handleShowMore = () => {
    setShowAllComments(!showAllComments);
  };
  //fetching data for all blogs
  useEffect(() => {
    fetch(" https://ai-server-sooty.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  // handling the comment
  const handleComment = () => {
    // Create the comment object with comment and userinfo
    const commentData = { comment: cmnt, userinfo, date: new Date() };

    // Send a PATCH request to update the comment in your MongoDB database
    fetch(`https://ai-server-sooty.vercel.app/update-comment/${blog._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData)
        if (responseData) {
          toast.success("Comment added successfully", {
            toastId: blog._id.toString(),
          });
          setReload(true);
          // Clear the comment input field
          setComment("");
        } else {
          // Handle the case where the comment wasn't added successfully
          Swal.fire({
            title: "Error!",
            text: "Failed to add comment",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        // Handle any network or other errors that may occur during the request
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  //handling like system
  const handleLike = () => {
    //user cant like the blog untill the user is logged in
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }
    // Create the likes object with likes and userinfo
    const data = {
      status: "liked",
      email: user?.email,
      blogId: id,
      date: new Date(),
    };

    // Send a PATCH request to update the likes in your MongoDB database
    fetch(`https://ai-server-sooty.vercel.app/like/${blog._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.error) {
          toast.error("You've given a react already");
          return;
        }
        if (responseData) {
          toast.success("The Blog is liked", {
            toastId: blog._id.toString(),
          });
          setLike(!like);
        } else {
          // Handle the case where the likes wasn't added successfully
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        // Handle any network or other errors that may occur during the request
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  //handling dislike system
  const handleDisLike = () => {
    //user cant like the blog untill the user is logged in
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }
    // Create the likes object with likes and userinfo
    const data = {
      status: "disliked",
      email: user?.email,
      blogId: id,
      date: new Date(),
    };

    // Send a PATCH request to update the likes in your MongoDB database
    fetch(`https://ai-server-sooty.vercel.app/dislike/${blog._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.error) {
          toast.error("You've given a react already");
          return;
        }
        if (responseData) {
          toast.success("The Blog is disliked", {
            toastId: blog._id.toString(),
          });
          setLike(!like);
        } else {
          // Handle the case where the likes wasn't added successfully
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        // Handle any network or other errors that may occur during the request
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // Making sure the user will be able to like or dislike only one time
  const filterLiked = blog?.likes?.find((like) => like?.email === user?.email);
  const filterDisLiked = blog?.dislikes?.find(
    (dislike) => dislike?.email === user?.email
  );
  const handleAlreadyReacted = () => {
    toast.error("You've given a react already");
  };

  // // Filter the random blogs for recommendation
  //   const filtered = blogs?.filter((bl) => bl?.category === blog?.category && bl?._id !== blog?._id)

  //   // console.log(filtered)
  //   // Shuffle the filtered array randomly
  //   for (let i = filtered.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  //   }

  //   // Select the blogs from the shuffled array for recommendation
  //   const randomBlogs = filtered.slice(0, 5);
  //   const randomCardBlog = filtered.slice(0, 4);

  useEffect(() => {
    // Fetch and shuffle the blogs for recommendation
    const fetchRandomBlogs = async () => {
      // const response = await fetch("https://ai-server-sooty.vercel.app/blogs");
      // const data = await response.json();

      // Filter the random blogs for recommendation
      const filtered = blogs?.filter(
        (bl) => bl?.category === blog?.category && bl?._id !== blog?._id
      );

      // Shuffle the filtered array randomly
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }

      // Select the blogs from the shuffled array for recommendation
      const randomBlogs = filtered.slice(0, 5);
      const randomCardBlog = filtered.slice(0, 4);

      setRandomBlogs(randomBlogs);
      setRandomCardBlog(randomCardBlog);
    };

    fetchRandomBlogs();
  }, [blog]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!blog) return <Loader />;
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
      <div className="w-11/12 md:w-4/5 mx-auto">
        {/* lg:grid grid-cols-4 pt-[123px] gap-x-[15px] */}
        {/* <div className="lg:border-r-2 border-[#00000057] p-1">
          <BlogItem randomBlogs={randomBlogs} />
        </div> */}

        <div className="col-span-4 lg:mt-0 mt-8 ">
            <h2 className="font-bold text-3xl">{blog.blogName}</h2>
          <div className="flex gap-4 text-black/50">
            <p>{moment(blog.createdAt).format("MMMM Do YYYY, h:mm a")}</p>
            <p>
              <span className="text-[#ED1B24] font-bold">{blog.category}</span>{" "}
              ||
              <span className="text-black"> {blog.subcategory}</span>
            </p>
            <p className="">{blog.min ? <p>{blog.min} min read</p> : "2 min read"}  </p>
          </div>
          <div className="p-2 ">
            <figure className="flex justify-center">
              <img
                src={blog?.imageURL}
                alt="banner"
                className="rounded pb-12 w-[600px] "
              />
            </figure>
            {language == "bn" ? (
              blog?.descriptionBN ? (
                <p
                  className="my-20  "
                  dangerouslySetInnerHTML={{ __html: blog?.descriptionBN }}
                ></p>
              ) : (
                <p
                  className="my-20  "
                  dangerouslySetInnerHTML={{ __html: blog?.description }}
                ></p>
              )
            ) : (
              <p
                className="my-20  "
                dangerouslySetInnerHTML={{ __html: blog?.description }}
              ></p>
            )}
          </div>


          <div>
            <p><span className="text-xl font-semibold">Tags: </span>{blog?.selectedTags?.map((a,i) => <span key={i} className="border px-3 py-[2px] rounded-full mr-5">{a}</span>)}</p>
          </div>


          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex items-center gap-x-[25px] bg-[#FF0944] w-[175px] h-[45px] py-4 justify-center rounded-[40px]">
              <div className="flex items-center gap-4">
                <span className="text-white">{blog?.likes?.length} </span>
                {/* filtering from backend if the user liked the blog or not */}

                {filterDisLiked ? (
                  <BiLike
                    onClick={() => handleAlreadyReacted()}
                    className="text-2xl text-center text-white"
                  />
                ) : filterLiked ? (
                  <AiFillLike
                    onClick={() => handleAlreadyReacted()}
                    className="text-2xl text-center text-white"
                  />
                ) : (
                  <BiLike
                    onClick={() => handleLike()}
                    className="text-2xl text-center text-white"
                  />
                )}
              </div>

              {/* filtering from backend if the user disliked the blog or not */}
              <div className="flex gap-4">
                {filterLiked ? (
                  <BiDislike
                    onClick={() => handleAlreadyReacted()}
                    className="text-2xl text-center text-white"
                  />
                ) : filterDisLiked ? (
                  <AiFillDislike
                    onClick={() => handleAlreadyReacted()}
                    className="text-2xl text-center text-white"
                  />
                ) : (
                  <BiDislike
                    onClick={() => handleDisLike()}
                    className="text-2xl text-center text-white"
                  />
                )}

                <span className="text-white">{blog?.dislikes?.length} </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FacebookShareButton url={currentURL}>
                <div className=" text-3xl text-primary cursor-pointer">
                  <BsFacebook />
                </div>
              </FacebookShareButton>
              <LinkedinShareButton url={currentURL}>
                <div className=" text-3xl text-primary  cursor-pointer">
                  <BsLinkedin />
                </div>
              </LinkedinShareButton>
              <TwitterShareButton url={currentURL}>
                <div className="text-3xl text-primary cursor-pointer">
                  <BsTwitter />
                </div>
              </TwitterShareButton>
            </div>
          </div>
         
          {/* Comment section */}
          {user ? (
            <div className="pt-[32px] ">
              <div className="flex justify-center items-center gap-x-[10px] ">
                <img
                  src={userinfo?.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <input
                  type="text"
                  value={cmnt}
                  placeholder={
                    language == "bn" ? "কমেন্ট করুন" : "Add a comment"
                  }
                  className=" w-full border text-lg font-bold p-2"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="flex flex-row-reverse gap-7 pt-2">
                <button
                  onClick={() => handleComment()}
                  className="btn-black"
                >
                  {language == "bn" ? "ঙ্কমেন্ট" : "Comment"}
                </button>
              </div>
            </div>
          ) : (
           <div className="flex justify-center">
             <Link state={location} to="/login" className="my-10 text-center text-3xl cursor-pointer text-primary">
              Login to Comment Here
            </Link>
           </div>
          )}

          <div className="my-5">
            {displayedComments?.map((cmt, index) => (
              <Comment cmt={cmt} key={index}></Comment>
            ))}
            {!showAllComments && allComments?.length > 5 && (
              <button
                onClick={handleShowMore}
                className="text-blue-500 btn btn-outline btn-sm  hover:bg-primary hover:border-0"
              >
                Show More
              </button>
            )}
            {showAllComments ? (
              <button
                onClick={handleShowMore}
                className="text-blue-500 btn btn-outline btn-sm  hover:bg-primary hover:border-0"
              >
                Show Less
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>
        <div className=" mt-20">
          <h2 className="md:text-[35px] text-xl font-bold">
            {language == "bn"
              ? "একই সম্পর্কিত আরো কিছু টপিক্স"
              : "You may interest also those topics"}
          </h2>

          <div className="md:pb-[150px] pt-[35px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {randomCardBlog?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>

          <div className="pb-[200px]">
            <NewsLetter></NewsLetter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualBlog;
