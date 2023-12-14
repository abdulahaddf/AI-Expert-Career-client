import Comment from "./Comment";
import NewsLetter from "../NewsLetter";
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
import { Helmet } from "react-helmet";

const IndividualBlog = () => {
  const { language } = useContext(MyContext);
  const { user } = useContext(AuthContext);
  const [userinfo] = UseUser();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const [userReaction, setUserReaction] = useState(null);
  const [cmnt, setComment] = useState("");
  const { name } = useParams();
  // const [randomBlogs, setRandomBlogs] = useState([]);
  const [randomCardBlog, setRandomCardBlog] = useState([]);
  const [reload, setReload] = useState(false);
  const currentURL = window.location.href;
  const location = useLocation();
  // console.log(currentURL);
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
  

    
    // console.log(name)
    const searchName = name.replace(/-/g, ' ').trim();
    // console.log(searchName)
    useEffect(() => {
    fetch(`https://ai-server-sooty.vercel.app/blog/${searchName}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [name, userReaction, reload]);






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


console.log(userReaction)

  const handleLikeClick = async () => {
    if (!user || !user.email) {
      toast.error('You need to login first');
      return;
    }
    if (userReaction === 'liked') {
      setUserReaction('liked'); 
      toast.success('You have already liked this');
      return;
    } else {
      setUserReaction('liked'); 
       handleDislikeOrLike('liked');
    }
  };

  const handleDislikeClick = async () => {
    if (!user || !user.email) {
      toast.error('You need to login first');
      return;
    }
    if (userReaction === 'disliked') {
      setUserReaction('disliked'); 
      toast.error('You have already disliked this');
      return;

    } else {
      setUserReaction('disliked'); 
      handleDislikeOrLike('disliked');
    }
  };

  const handleDislikeOrLike = async (status) => {
    console.log(status);
    if (!user || !user.email) {
      toast.error('You need to login first');
      return;
    }
  
    try {
      const response = await fetch(`https://ai-server-sooty.vercel.app/like/${blog._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, status }),
      });
  
      if (response.ok) {
        setUserReaction(status);
        toast.success(`${status} successfully`);
      } else {
        // Handle errors
        console.error('Error updating like/dislike');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network or other error:', error);
    }
  };
  

  const likeCount = blog.likes
  ? blog.likes
      .map((like) => like.status)
      .reduce((count, status) => (status === 'liked' ? count + 1 : count), 0)
  : 0;

const dislikeCount = blog.likes
  ? blog.likes
      .map((like) => like.status)
      .reduce((count, status) => (status === 'disliked' ? count + 1 : count), 0)
  : 0;

// console.log(likeCount)



useEffect(() => {
  if (user && blog.likes) {
    const userLike = blog.likes.find((like) => like.email === user.email);
    if (userLike) {
      setUserReaction(userLike.status); // Set user's reaction based on their like/dislike status
    }
  }
}, [blog, user]);




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
      // const randomBlogs = filtered.slice(0, 5);
      const randomCardBlog = filtered.slice(0, 4);

      // setRandomBlogs(randomBlogs);
      setRandomCardBlog(randomCardBlog);
    };

    fetchRandomBlogs();
  }, [blog]);







  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (!blog.imageURL) return <Loader />;
  return (
    <section className="md:px-4 md:py-5 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl  lg:px-8 overflow-hidden">
        <Helmet>
        <title>{blog.blogName}</title>
        <meta name="description" content={blog.blogName} />
        <meta name="keywords" content={blog.selectedTags} />
        <meta property="og:type" content="website"/>
        <meta name="og:title" content={blog.blogName} />
        <meta name="og:description" content={blog.category} />
        <meta name="og:image" content={blog.imageURL} />
      </Helmet>
      
      <div className="w-11/12 md:w-4/5 mx-auto">
        {/* lg:grid grid-cols-4 pt-[123px] gap-x-[15px] */}
        {/* <div className="lg:border-r-2 border-[#00000057] p-1">
          <BlogItem randomBlogs={randomBlogs} />
        </div> */}

        <div className="col-span-4 lg:mt-0 mt-8 ">
            <h2 className="font-bold text-3xl md:text-5xl li-ador-noirrit-semibold">{blog.blogName}</h2>
          <div className="flex flex-col md:flex-row md:gap-8 text-black/50">
            <p>{moment(blog.createAt).format("MMMM Do YYYY, h:mm a")}</p>
            
            <p>
              <span className="text-[#ED1B24] font-bold">{blog.category}</span>{" "}
              ||
              <span className="text-black"> {blog.subcategory}</span>
            </p>
            <p className="">{blog.min ? <p>{blog.min} min read</p> : "2 min read"}  </p>
          </div>
          <div className="p-2 ">
            <figure className="flex justify-center pt-5">
              <img
                src={blog?.imageURL}
                alt="banner"
                className="rounded pb-12 w-[900px] "
              />
            </figure>
         <div className="">
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
          </div>


          <div>
            <p className="flex gap-3 flex-wrap cursor-pointer mt-5"><span className="text-xl font-semibold ">Tags: </span>{blog?.selectedTags?.map((a,i) => <span key={i} className="border px-3 py-[2px] rounded-full">{a}</span>)}</p>
          </div>


          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex items-center gap-x-[25px] bg-[#FF0944] w-[175px] h-[35px] py-4 justify-center rounded-[40px]">
             <div className="flex gap-5">
      <div className="flex items-center gap-1">
        <span className="text-white">{likeCount ? likeCount : 0}</span>
        <button onClick={handleLikeClick} className="text-2xl text-center text-white">
          {userReaction === 'liked' ? <><AiFillLike/></> : <BiLike className="hover:scale-110 duration-300"/>}
        </button>
      </div>

      <div className="flex items-center gap-1">
        <button onClick={handleDislikeClick} className="text-2xl text-center text-white">
          {userReaction === 'disliked' ? <AiFillDislike/> : <BiDislike className="hover:scale-110 duration-300"/>}
        </button>
        <span className="text-white">{dislikeCount ? dislikeCount : 0}</span>
      </div>
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
          {
            user ? <div className="pt-[32px] ">
            <div className="flex justify-center items-center gap-x-[10px] ">
              <img
                src={userinfo?.photoURL || "https://i.ibb.co/sg6hmZ7/user.png"}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <input
                type="text"
                value={cmnt}
                placeholder={
                  language == "bn" ? "কমেন্ট করুন" : "Add a comment"
                }
                className=" w-full border text-lg  p-2"
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
          </div> : 
            <div className="flex justify-center">
              <Link state={{from : location}} to="/login" className="my-10 text-center text-3xl cursor-pointer text-primary">
               Login to Comment Here
             </Link>
            </div>
          }
            
         
          

          <div className="my-5">
            {displayedComments?.map((cmt, index) => (
              <Comment cmt={cmt} key={index}></Comment>
            ))}
            {!showAllComments && allComments?.length > 5 && (
              <button
                onClick={handleShowMore}
                className="btn-black"
              >
                Show More
              </button>
            )}
            {showAllComments ? (
              <button
                onClick={handleShowMore}
                className="btn-black"
              >
                Show Less
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className=" mt-20">
          <h2 className="md:text-[35px] text-xl font-bold">
            {language == "bn"
              ? "একই সম্পর্কিত আরো কিছু টপিক্স"
              : "You may interest also those topics"}
          </h2>

          <div className=" pt-[35px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {randomCardBlog?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>

          <div className="py-10 md:pb-20">
            <NewsLetter></NewsLetter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualBlog;
