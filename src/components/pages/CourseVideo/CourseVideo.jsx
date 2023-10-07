import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useLocation } from "react-router-dom";
import { MdOutlineVideoLibrary } from "react-icons/md";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";

const CourseVideo = () => {
  const location = useLocation();
  const {course, userId} = location.state;
  const { language } = useContext(MyContext);

  const modules = course.modules;
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [videoSource, setVideoSource] = useState("");
  const [ass, setAss] = useState("");
  const [quiz, setQuiz] = useState("");

  // Function to update state variables based on the current content
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

  // Set initial values for currentModuleIndex and currentContentIndex
  useEffect(() => {
    if (modules.length > 0 && modules[0].contents.length > 0) {
      setCurrentModuleIndex(0);
      setCurrentContentIndex(0);
      updateStateVariables(modules[0].contents[0]); // Update state based on initial content
    }
  }, [modules]);

  const handleContent = (content, moduleIndex, contentIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentContentIndex(contentIndex);

    // Update state variables based on the selected content
    updateStateVariables(content);
  };

  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
      // Update state variables based on the new currentContent
      updateStateVariables(modules[currentModuleIndex].contents[currentContentIndex - 1]);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      const prevModuleContents = modules[currentModuleIndex - 1].contents;
      setCurrentContentIndex(prevModuleContents.length - 1);
      // Update state variables based on the new currentContent
      updateStateVariables(prevModuleContents[prevModuleContents.length - 1]);
    }
  };

  const handleNext = () => {
    const currentModule = modules[currentModuleIndex];
    if (currentContentIndex < currentModule.contents.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
      // Update state variables based on the new currentContent
      updateStateVariables(currentModule.contents[currentContentIndex + 1]);
    } else if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentContentIndex(0);
      // Update state variables based on the new currentContent
      updateStateVariables(modules[currentModuleIndex + 1].contents[0]);
    }
  };

  const currentModule = modules[currentModuleIndex];
  const currentContent = currentModule.contents[currentContentIndex];

console.log(currentContent);






  const handleMarkAsComplete = async (moduleTitle, contentTitle) => {
    // console.log(moduleTitle, contentTitle)
    try {
      const requestBody = {
        userId: userId, 
        courseId: course._id, 
        moduleName: moduleTitle, 
        contentName: contentTitle, 
      };
  
      const response = await fetch('http://localhost:5000/markComplete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.status === 200) {
        toast.success("Content marked as complete successfully")
        // Content marked as complete successfully
        // setIsContentCompleted(true);
      } else {
        // Handle error
        toast.error('Error marking content as complete');
      }
    } catch (error) {
      console.error(error);
    }
  };













  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4 mt-5 mb-20 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-4">
      {/* Sidebar with modules and contents */}
      <div className="col-span-12 md:col-span-1 mt-5 md:mt-0">
        <div className="section">
          <h3 className="text-2xl font-bold my-3">
            {language === "bn" ? "কোর্সের পরিপূর্ণ কারিকুলাম:" : "Course Content:"}
          </h3>
          <div className="bg-white p-4 rounded-lg">
            {modules?.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                <details className="group [&_summary::-webkit-details-marker]:hidden rounded-xl p-2 bg-white ">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-100 p-3 text-gray-900">
                    <h2 className="font-bold text-lg cursor-pointer">{module.title}</h2>
                    <svg
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                    {module.contents.map((content, contentIndex) => (
                      <div className="flex items-center justify-between" key={contentIndex}>
                        <p
                          onClick={() => handleContent(content, moduleIndex, contentIndex)}
                          className="flex items-center gap-3 my-3 cursor-pointer text-lg font-semibold"
                        >
                          <MdOutlineVideoLibrary /> {content.title}
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
      <div className="col-span-12 md:col-span-2 border-black/25 p-4 h-fit rounded-lg border-[1px]">
        <h3 className="text-[24px] font-bold">{course.title}</h3>
        <div className="flex justify-center my-4">
          {currentContent.type === "content" ? (
            <ReactPlayer width="780px" height="440px" controls={true} url={videoSource} />
          ) : currentContent.type === "assignment" ? (
            <iframe className="w-[50vw] h-[520px]" src={ass}></iframe>
          ) : currentContent.type === "quiz" ? (
            <iframe src={quiz} width="700" height="900">
              Loading…
            </iframe>
          ) : (
            "Not Loaded"
          )}
        </div>
        <div className="lg:flex mt-5 w-full justify-between items-center">
          <h3 className="text-xl font-bold">{currentContent.title}</h3>
          <div>
            <button
              className="btn-add mr-3"
              onClick={handlePrevious}
              disabled={currentModuleIndex === 0 && currentContentIndex === 0}
            >
              {language === "bn" ? "পূর্ববর্তী" : "Previous"}
            </button>
            <button
              className="btn-add mr-3"
              onClick={handleNext}
              disabled={
                currentModuleIndex === modules.length - 1 &&
                currentContentIndex === currentModule.contents.length - 1
              }
            >
              {language === "bn" ? "পরবর্তী" : "Next"}
            </button>
            <button
              className="btn-add"
              disabled={currentContent.completed}
              onClick={() => handleMarkAsComplete(currentModule.title, currentContent.title)} 
              >
              {language === "bn" ? "পূর্ণ হিসেবে চিহ্নিত করুন" : "Mark as Complete"}
              </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseVideo;
