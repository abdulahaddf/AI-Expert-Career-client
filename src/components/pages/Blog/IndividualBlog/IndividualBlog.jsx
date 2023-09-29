import demo from "../demo.png";
import comment from "../Assests/comment.svg";
import facebook from "../Assests/facebook.svg";
import linkdeIn from "../Assests/linkdeIn.svg";
import share from "../Assests/share.svg";
import avatar from "../Assests/avatar.png";
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
import { useParams } from "react-router-dom";
import moment from "moment";
import UseUser from "../../../../hooks/useUser";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthProvider";

const IndividualBlog = () => {
  const { language } = useContext(MyContext);
  const { user } = useContext(AuthContext);
  const [userinfo] = UseUser();
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [cmnt, setComment] = useState("");
  // const [allComments, setAllComments] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState([]);
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
    fetch(`http://localhost:5000/singleblogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [id, cmnt]);

  const handleShowMore = () => {
    setShowAllComments(!showAllComments);
  };
//fetching data for all blogs
  useEffect(() => {
    fetch(" http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleComment = () => {
    // Create the comment object with comment and userinfo
    const commentData = { comment: cmnt, userinfo, date: new Date() };

    // Send a PATCH request to update the comment in your MongoDB database
    fetch(`http://localhost:5000/update-comment/${blog._id}`, {
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

  scrollTo;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
      <div className="lg:grid grid-cols-4 pt-[123px] gap-x-[15px]">
        <div className="lg:border-r-2 border-[#00000057] p-1">
          <BlogItem blogs={blogs} />
        </div>

        <div className="col-span-3 lg:mt-0 mt-8 ">
          <div>
            <h2 className="font-bold text-3xl">{blog.blogName}</h2>
            <p>{moment(blog.createdAt).format("MMMM Do YYYY")}</p>
            <p>
              <span className="text-[#ED1B24] font-bold">{blog.category}</span>{" "}
              ||
              <span> {blog.subcategory}</span>
            </p>
            <p className="text-blue-400">{blog.selectedTags} </p>
          </div>
          <div className="p-2 ">
            <figure className="flex justify-center">
              <img
                src={blog?.imageURL}
                alt=""
                className="rounded pb-12 max-w-[700px]"
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
          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex items-center gap-x-[25px] bg-[#FF0944] w-[175px] h-[45px] py-4 justify-center rounded-[40px]">
             <div className="flex items-center gap-4">
              <span className="text-white">55 </span>
                <BiLike
                  onClick={() => setLike(!like)}
                  className="text-2xl text-center text-white"
                  /> 
                  </div>
           <div className="flex gap-4">
           <BiDislike
                  onClick={() => setDisLike(!disLike)}
                  className="text-2xl text-center text-white"
                /><span className="text-white">5 </span>
           </div>
               
    
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="bg-[#FF0944] h-[24px] w-[24px] rounded-[50px] p-1 cursor-pointer">
                <img src={facebook} alt="" />
              </div>

              <div className="bg-[#FF0944] h-[24px] w-[24px] rounded-[50px] p-1 cursor-pointer">
                <img src={linkdeIn} alt="" className=" " />
              </div>
              <img src={share} alt="" className="cursor-pointer" />
            </div>
          </div>

          {
            user ?  <div className="pt-[32px] ">
            <div className="flex justify-center items-center gap-x-[10px] ">
              <img
                src={userinfo?.photoURL}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <input
                type="text"
                value={cmnt}
                placeholder={language == "bn" ? "কমেন্ট করুন" : "Add a comment"}
                className="border-none w-full bg-[#eefaf993] text-lg font-bold p-2"
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="flex flex-row-reverse gap-7 pt-2">
              <button
                onClick={() => handleComment()}
                className="bg-[#FF0944] w-[130px] text-white rounded font-bold"
              >
                {language == "bn" ? "ঙ্কমেন্ট" : "Comment"}
              </button>
            </div>
          </div> : <p className="my-10 text-center text-xl cursor-pointer text-primary">Login to Comment Here</p>
          }
         
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

          <div className="md:pb-[150px] pt-[35px]">
            <IndividualBlogCard></IndividualBlogCard>
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
