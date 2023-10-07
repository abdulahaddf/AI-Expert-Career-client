import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import mediaIcon from "../../../assets/Dashboard/mediaLogo.png";
import mediaIcon2 from "../../../assets/Dashboard/mediaLogo-2.png";
import "video-react/dist/video-react.css"; // import css
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
  // BigPlayButton
} from "video-react";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../../Context/Context";
import { useLocation } from "react-router-dom";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import ReactPlayer from "react-player";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const CourseVideo = () => {
  const { language } = useContext(MyContext);
  const [content, setContent] = useState({})
  const [videoSource, setVideoSource] = useState("");
  const [coursetitle, setCourseTitle] = useState("");
  const [assTitle, setAssTitle] = useState("");
  const [ass, setAss] = useState("");
  const [quiztitle, setQuizTitle] = useState("");
  const [quiz, setQuiz] = useState("");
 const location = useLocation();
 const course = location.state;

const modules = course.modules;
// console.log(modules);
// console.log(content);
// console.log(coursetitle)
console.log(videoSource)
console.log(ass)
// console.log(quiz)



const docs = [
  { uri: "https://docs.google.com/document/d/e/2PACX-1vSWFhGxSDJTxJjQl6ezZ_jcFScMGW7-KrfQSga89N4_XvSHIdGsW0TvxfMJ39YUVM-ywz_lk_osDyjw/pub?embedded=true",
  fileType: 'doc' },
  
];



const handleContent = (c) => {
  setContent(c);
 
  if(c.type === "assignment"){
    setAssTitle(c.title);
    setAss(c.url);
    setVideoSource("")
    setQuiz("")
    
  }
  if(c.type === "quiz"){
    setQuizTitle(c.title);
    setQuiz(c.url);
    setVideoSource("")
    
    setAss("")
  }
  if(c.type === "content"){
    setCourseTitle(c.title);
    setVideoSource(c.url);
    
    setQuiz("")
    setAss("")
  }
  else( console.log("Error"))

};







  const playerRef = useRef(null);

  // const handleList = (video, title) => {
  //   setCourseTitle(title);
  //   setVideoSource(video);
  // };

  // useEffect(() => {
  //   if (playerRef.current) {
  //     const videoElement = playerRef.current.video.video;
  //     videoElement.src = videoSource;
  //     videoElement.load();
  //   }
  // }, [videoSource]);

  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

  return (
    <div className="grid grid-cols-3 gap-x-4 mt-24 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="col-span-12 md:col-span-1 mt-5 md:mt-0">
       
      {/* <div className="w-full ">
          <div className=" w-full  bg-black/20 p-3 h-[523px]" id="listDiv">
            {moduleVideos.map((item) => (
              <Disclosure key={item.id} className="mb-2">
                {({ open }) => (
                  <div>
                    <Disclosure.Button
                      className={`flex w-full justify-between  ${
                        open ? "bg-white" : ""
                      } px-4 py-2 text-left text-[16px] font-bold `}
                    >
                      <span>{item.title}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-0 transform" : "rotate-180 transform"
                        } h-5 w-5 text-[#EB3223] `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2.5 text-sm  bg-white space-y-1  ">
                      {item.content.map((con, i) => (
                        <div
                          onClick={() => handleList(con.video, con.title)}
                          key={con.id}
                          className={`${
                            coursetitle === con.title
                              ? "bg-[#ED1B24]/80 flex h-10 items-center cursor-pointer px-2.5 py-3"
                              : "bg-black/10 flex h-10 items-center cursor-pointer px-2.5 py-3 "
                          }`}
                        >
                          {coursetitle === con.title ? (
                            <img
                              src={mediaIcon2}
                              alt=""
                              className="h-4 w-4 mr-2"
                            />
                          ) : (
                            <img
                              src={mediaIcon}
                              alt=""
                              className="h-4 w-4 mr-2"
                            />
                          )}
                          <p className="text-sm font-semibold">
                            {i + 1}. {con.title}
                          </p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>  */}


  <div className="">
          <h3 className="text-2xl font-bold my-3">
            {" "}
            {language == "bn"
              ? "কোর্সের পরিপূর্ণ কারিকুলাম:"
              : "Course Content:"}
          </h3>

          <div className="bg-white p-4 rounded-lg">
            {modules?.map((module, i) => (
              <div key={i}>
                <details className="group [&_summary::-webkit-details-marker]:hidden rounded-xl p-2 bg-white ">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-100 p-3 text-gray-900">
                    <h2 className="font-bold cursor-pointer">{module.title}</h2>
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
                  <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                    {module.contents.map((c, i) => (
                      <div
                        className="flex items-center justify-between"
                        key={i}
                      >
                        <p onClick={() => handleContent(c)} className="flex items-center gap-3 my-3 cursor-pointer text-lg font-semibold">
                          <MdOutlineVideoLibrary /> {c.title}
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




        {/* Video Player */}

      <div className="col-span-12 md:col-span-2">
        <h3 className="text-[24px] font-bold">
          {course.title}
        </h3>
        {/* <Player ref={playerRef}  autoPlay>
          <source src={videoSource} />
          <BigPlayButton position="center" />
          <ControlBar>
            <ReplayControl seconds={10} order={1} />
            <ForwardControl seconds={30} order={2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[10, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player> */}

        {
          videoSource ? <ReactPlayer className="w-[50vw] h-[60vh]" url={videoSource} /> : ass ?  <iframe className="w-[50vw] h-[60vh]" src={ass}></iframe> : quiz ? <iframe src={quiz} width="640" height="1343" >Loading…</iframe> : "kiso nai"
        }



        <div className="lg:flex mt-3 w-full justify-between items-center">
          <h3 className="text-xl font-bold">
           {coursetitle}
          </h3>
          <div>
            <button className="py-[8px]  rounded-[7px] px-5 border border-[#ED1B24] hover:bg-[#ED1B24] hover:text-white">
              {language === "bn" ? "পূর্ববর্তী" : "Previous"}
            </button>
            <button className="py-[10px] ml-5 rounded-[7px] px-6 text-white border border-[#ED1B24] bg-[#ED1B24] my-btn">
              {language === "bn" ? "পরবর্তী" : "Next"}
            </button>
          </div>
        </div>
        <div>
        
        </div>
      {/* <DocViewer prefetchMethod="GET" pluginRenderers={DocViewerRenderers} documents={docs} /> */}
      
      </div>
    </div>
  );
};

export default CourseVideo;
