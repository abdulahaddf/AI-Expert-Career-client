import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useLocation, useParams } from "react-router-dom";
import { MdVideoLibrary } from "react-icons/md";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import Loader from "../../common/loader/Loader";
import Certificate from "./Certificate";
import moment from "moment";

const CourseVideo = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { userId } = location.state;
  const { language } = useContext(MyContext);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [videoSource, setVideoSource] = useState("");
  const [ass, setAss] = useState("");
  const [quiz, setQuiz] = useState("");
  const [completedContent, setCompletedContent] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [totalContentCount, setTotalContentCount] = useState(0);
  const [selectedContentIndex, setSelectedContentIndex] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  // console.log(course);
  useEffect(() => {
    fetch(`https://ai-server-sooty.vercel.app/singleEnrolledcourse/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourse(data?.course);
        setLoading(false); // Move this inside the successful response block
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Handle errors and set loading to false
      });
  }, [id]);

  const updateStateVariables = (content) => {
    if (content.type === "assignment") {
      setAss(content.url);
      setVideoSource("");
      setQuiz("");
    } else if (content.type === "quiz") {
      setQuiz(content.url);
      setVideoSource("");
      setAss("");
    } else if (content.type === "content") {
      setVideoSource(content.url);
      setQuiz("");
      setAss("");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    if (
      course?.modules &&
      course.modules.length > 0 &&
      course.modules[0].contents &&
      course.modules[0].contents.length > 0
    ) {
      setCurrentModuleIndex(0);
      setCurrentContentIndex(0);
      updateStateVariables(course.modules[0].contents[0]);
    }
  }, [course]);

  const handleContent = (content, moduleIndex, contentIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentContentIndex(contentIndex);
    updateStateVariables(content);
    setSelectedContentIndex(content.title);
  };

  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
      updateStateVariables(
        course.modules[currentModuleIndex].contents[currentContentIndex - 1]
      );
      setSelectedContentIndex(
        course.modules[currentModuleIndex].contents[currentContentIndex - 1]
          .title
      );
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      const prevModuleContents =
        course.modules[currentModuleIndex - 1].contents;
      setCurrentContentIndex(prevModuleContents.length - 1);
      updateStateVariables(prevModuleContents[prevModuleContents.length - 1]);
      setSelectedContentIndex(
        prevModuleContents[prevModuleContents.length - 1].title
      );
    }
  };

  const handleNext = () => {
    const currentModule = course.modules[currentModuleIndex];
    if (currentContentIndex < currentModule.contents.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
      updateStateVariables(currentModule.contents[currentContentIndex + 1]);
      setSelectedContentIndex(
        currentModule.contents[currentContentIndex + 1].title
      );
    } else if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentContentIndex(0);
      updateStateVariables(course.modules[currentModuleIndex + 1].contents[0]);
      setSelectedContentIndex(
        course.modules[currentModuleIndex + 1].contents[0].title
      );
    }
  };

  const currentModule = course.modules?.[currentModuleIndex];
  const currentContent = currentModule?.contents?.[currentContentIndex];
  // console.log(currentContent?.completed);
  // console.log(completedContent[currentContent?.title])

  // console.log(totalContentCount);
  // console.log(completedCount);
  useEffect(() => {
    // Calculate the total content count based on your course data
    let totalCount = 0;
    if (course?.modules) {
      course.modules.forEach((module) => {
        totalCount += module.contents.length;
      });
    }
    setTotalContentCount(totalCount);
  }, [course, completedCount]);

  useEffect(() => {
    // Calculate the total content count based on your course data
    let totalCompletedCount = 0;
    if (course?.modules) {
      course.modules.forEach((module) => {
        module.contents.forEach((content) => {
          if (content.completed !== undefined) {
            totalCompletedCount += content.completed ? 1 : 0;
          }
        });
      });
    }
    setCompletedCount(totalCompletedCount);
  }, [course]);

  // Calculate the progress percentage
  // const progressPercentage = (completedCount / totalContentCount) * 100;
  useEffect(() => {
    if (totalContentCount > 0) {
      const percentage = (completedCount / totalContentCount) * 100;
      setProgressPercentage(percentage);
    }
  }, [course, completedCount, totalContentCount]);
  // console.log(progressPercentage);

  const postCompletionTime = async () => {
    // console.log("Posting completion time:");
    try {
      // Make a POST request to your Express route to update the main course enrollment collection
      const response = await fetch(
        "https://ai-server-sooty.vercel.app/completedtime",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId, 
            courseId: course._id, 
            completionTime: moment().format("MMMM Do YYYY, h:mm a"), 
          }),
        }
      );

      if (response.status === 200) {
        console.log("Course completion status updated successfully");
      } else {
        console.error("Error updating course completion status");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // when the course is completed post the completing time
  if (progressPercentage == 100) {
    postCompletionTime();
  }

  const handleMarkAsComplete = async (moduleTitle, contentTitle) => {
    try {
      const requestBody = {
        userId: userId,
        courseId: course._id,
        moduleName: moduleTitle,
        contentName: contentTitle,
      };

      const response = await fetch(
        "https://ai-server-sooty.vercel.app/markComplete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.status === 200) {
        console.log("Progress Percentage:", progressPercentage);

        // Mark the content as complete in the state
        setCompletedContent((prevCompletedContent) => ({
          ...prevCompletedContent,
          [contentTitle]: true,
        }));
        setCompletedCount((prevCompletedCount) => prevCompletedCount + 1);
        toast.success("Content marked as complete successfully");
      } else {
        toast.error("Error marking content as complete");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-3 gap-x-4 md:mt-5 mb-5 md:mb-20 px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-4">
      {/* Sidebar with modules and contents */}
      <div className="col-span-12 md:col-span-1 mt-5 md:mt-0 order-last md:order-first">
        <div className="section">
          <h3 className="text-2xl font-bold">
            {language === "bn"
              ? "কোর্সের পরিপূর্ণ কারিকুলাম:"
              : "Course Content:"}
          </h3>
          <div className="bg-white p-4 rounded-lg">
            {course?.modules?.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                <details className="group [&_summary::-webkit-details-marker]:hidden rounded-xl p-2 bg-white ">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-100 p-3 text-gray-900">
                    <h2 className="font-bold md:text-lg cursor-pointer">
                      {module.title}
                    </h2>
                    <svg
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 ">
                    {module.contents.map((content, contentIndex) => (
                      <div
                        className={`flex items-center ${
                          selectedContentIndex === content.title
                            ? "bg-gray-300 rounded-2xl" 
                            : ""
                        }`}
                        key={contentIndex}
                      >
                        <p
                          onClick={() =>
                            handleContent(content, moduleIndex, contentIndex)
                          }
                          className="flex items-center w-full gap-3 h-fit text-left my-3 cursor-pointer text-lg font-medium"
                        >
                          <p>
                            <MdVideoLibrary className="w-[30px]" />
                          </p>{" "}
                          <p>{content.title}</p>
                        </p>
                      </div>
                    ))}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content view */}
      <div className="col-span-12 md:col-span-2 border-black/25 p-4 h-fit rounded-lg border-[1px] order-first md:order-last">
        <h3 className="text-[24px]  font-bold">{course.title}</h3>
        <div>
          <p>Progress: {progressPercentage.toFixed(2)}%</p>
        </div>
        <div className="md:flex justify-between items-center space-y-4">
          <div className="w-2/3 bg-[#D9D9D9] h-4 rounded-full mb-1">
            <div
              className="bg-[#ED1B24] h-4 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          {/* Download Certificate */}
          <div className="flex items-center">
            <button disabled={progressPercentage != 100} className="btn-add">
              {" "}
              <Certificate id={id} progressPercentage={progressPercentage} />{" "}
            </button>
          </div>
          {/* <p
          className={`text-primary ${
            progressPercentage === 100 ? "text-[10px] font-bold" : ""
          }`}
        >
          {progressPercentage === 100 ? "Completed" : `${progressPercentage}% Complete`}
        </p> */}
        </div>

        <div className="flex justify-center my-4">
          {currentContent ? (
            <>
              {currentContent.type === "content" ? (
                <ReactPlayer
                  width="780px"
                  height="440px"
                  controls={true}
                  url={videoSource}
                />
              ) : currentContent.type === "assignment" ? (
                <iframe
                  className="md:w-[50vw] h-[520px]"
                  src={ass}
                  title="Assignment"
                ></iframe>
              ) : currentContent.type === "quiz" ? (
                <iframe src={quiz} width="700" height="900" title="Quiz">
                  Loading…
                </iframe>
              ) : (
                "Not Loaded"
              )}
            </>
          ) : (
            <Loader />
          )}
        </div>
        <div className="lg:flex mt-5 w-full justify-between items-center">
          <h3 className="text-xl w-1/2 font-bold">{currentContent?.title}</h3>
          <div>
            <button
              className="btn-black mr-3 "
              onClick={handlePrevious}
              disabled={currentModuleIndex === 0 && currentContentIndex === 0}
            >
              {language === "bn" ? "পূর্ববর্তী" : "Previous"}
            </button>
            <button
              className="btn-black mr-3"
              onClick={handleNext}
              disabled={
                currentModuleIndex === course.modules.length - 1 &&
                currentContentIndex === currentModule.contents.length - 1
              }
            >
              {language === "bn" ? "পরবর্তী" : "Next"}
            </button>
            <button
              className="btn-add "
              disabled={
                completedContent[currentContent?.title] ||
                currentContent?.completed
              }
              onClick={() =>
                handleMarkAsComplete(currentModule.title, currentContent?.title)
              }
            >
              {language === "bn"
                ? "পূর্ণ হিসেবে চিহ্নিত করুন"
                : "Mark as Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;


