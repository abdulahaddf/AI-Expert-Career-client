import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Context/Context";
import useCourses from "../../../hooks/UseCourses";
import UseUsers from "../../../hooks/useUsers";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const { language } = useContext(MyContext);
  const [userinfo] = UseUsers();
  const [courses] = useCourses();

  const [search, setSearch] = useState("");
  const [CourseData, setCoursesData] = useState([]);
  const [consultantData, setConsultantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
// console.log(isOpen)
  const stripHTMLTags = (html) => {
    if (!html) return "";
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };

  useEffect(() => {
    setIsLoading(true);

    // Create a function to search in courses
    const searchCourses = () => {
      const courseResults = courses?.filter((course) => {
        const lowercaseTitle = (course.title || "").toLowerCase();
        const lowercaseSubtitle = (course.subtitle || "").toLowerCase();
        const lowercaseDescription = stripHTMLTags(
          course.description || ""
        ).toLowerCase();
        const lowercaseSearch = search.toLowerCase();
        return (
          lowercaseTitle.includes(lowercaseSearch) ||
          lowercaseSubtitle.includes(lowercaseSearch) ||
          lowercaseDescription.includes(lowercaseSearch)
        );
      });

      setCoursesData(courseResults || []);
    };

    const searchConsultants = () => {
      if (Array.isArray(userinfo)) {
        const consultantResults = userinfo
          ?.filter((user) => user.role === "consultant")
          .filter((u) => {
            const lowercaseDisplayName = (u.displayName || "").toLowerCase();
            const lowercaseDescription = (u.description || "").toLowerCase();
            const lowercaseSummary = stripHTMLTags(
              u.summary || ""
            ).toLowerCase();
            const lowercaseDesignation = (u.designation || "").toLowerCase();
            const lowercaseSearch = search.toLowerCase();
            return (
              lowercaseDisplayName.includes(lowercaseSearch) ||
              lowercaseDescription.includes(lowercaseSearch) ||
              lowercaseSummary.includes(lowercaseSearch) ||
              lowercaseDesignation.includes(lowercaseSearch)
            );
          });

        setConsultantData(consultantResults || []);
      }
    };

    if (search) {
      // Call both search functions only if there's a search query
      searchCourses();
      searchConsultants();
    } else {
      // Clear the results when the search query is empty
      setCoursesData([]);
      setConsultantData([]);
    }

    setIsLoading(false);
  }, [search, courses, userinfo]);



useEffect(()=>{
  setIsOpen(true);
},[search])
  return (
    <div className="hidden md:block relative top-0 left-10">
      <div className="flex items-center relative">
        <input
          className="px-5 pl-10  bg-white text-sm font-thin rounded-full w-[350px] mx-auto h-[41px] relative border-black/25 border-2"
          placeholder={
            language === "bn"
              ? "পছন্দের কোর্সগুলো খুজুন"
              : "Search your favorite courses"
          }
          type="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineSearch className="absolute left-4 text-black/50" />
      </div>
      {
        isOpen ? <>   {(CourseData.length > 0 || consultantData.length > 0) && (
          <section className="absolute w-[50vw] mx-auto top-[60px] bg-white border p-3 shadow-lg flex justify-between">
            <div className="h-96 w-1/2 p-3 overflow-y-auto border-r-2 border-black/10">
              {CourseData.length > 0 ? (
                <div>
                  {/* <p className="mb-2">{CourseData.length} results found</p> */}
                  <p className="mb-2">
                    {CourseData.length == 1 ? (
                      <>{CourseData.length} course found</>
                    ) : (
                      <>{CourseData.length} courses found</>
                    )}{" "}
                  </p>
                  {CourseData?.map((course) => (
                    <Link to={`/individualCourse/${course._id}`} onClick={() => setIsOpen(false)} className="flex items-start gap-2 my-4" key={course._id}>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={course.insImage}
                        alt={course.title}
                      />
                      <div>
                        <h3 className="">{course.title}</h3>
                        <p className="font-thin">
                          Instructor: {course.instructor}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No Courses Found</p>
              )}
            </div>
            <div className="h-96 w-1/2 p-3 overflow-y-auto">
              {consultantData.length > 0 ? (
                <div className="h-fit p-3 px-5 overflow-y-auto">
                  <p className="mb-2">
                    {consultantData.length == 1 ? (
                      <>{consultantData.length} consultant found</>
                    ) : (
                      <>{consultantData.length} consultants found</>
                    )}{" "}
                  </p>
                  {consultantData?.map((c) => (
                    <Link to={`/ai-consultant-profile/${c._id}`} onClick={() => setIsOpen(false)} className="flex gap-2 my-4" key={c._id}>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={c.photoURL}
                        alt="Instructor"
                      />
                      <div>
                        <h3 className="">{c.displayName}</h3>
                        <p className="font-thin">
                          {c?.designation ? c?.designation : ""}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No Consultant Found</p>
              )}
            </div>
          </section>
        )}</> : ""
      }
   
    </div>
  );
};

export default SearchBox;
