import { useContext } from "react";
import image1 from "./Assests/image1.png";
import image2 from "./Assests/image2.png";
import image3 from "./Assests/image3.png";
import image4 from "./Assests/image4.png";
import image5 from "./Assests/image5.png";
import image6 from "./Assests/image6.png";
import image7 from "./Assests/image7.png";
import image8 from "./Assests/image8.png";
import { MyContext } from "../../../Contaxt/Context";
import { Link } from "react-router-dom";

const FreeCourses = () => {

    const {language} = useContext(MyContext)

    const freeCourse = [
        {
        id: 1,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image1,
        isFree: true,
        },
        {
        id: 2,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image2,
        isFree: true,
        },
        {
        id: 3,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image3,
        isFree: true,
        },
        {
        id: 4,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image4,
        isFree: true,
        },
        {
        id: 5,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image5,
        isFree: true,
        },
        {
        id: 6,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image6,
        isFree: true,
        },
        {
        id: 7,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image7,
        isFree: true,
        },
        {
        id: 8,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image8,
        isFree: true,
        },
        {
        id: 1,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image1,
        isFree: true,
        },
        {
        id: 2,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image2,
        isFree: true,
        },
        {
        id: 3,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image3,
        isFree: true,
        },
        {
        id: 4,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image4,
        isFree: true,
        },
        {
        id: 5,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image5,
        isFree: true,
        },
        {
        id: 6,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image6,
        isFree: true,
        },
        {
        id: 7,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image7,
        isFree: true,
        },
        {
        id: 8,
        courseName: "Machine Learning Courses",
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        image: image8,
        isFree: true,
        },
    ];

    return (
        <div className="bg-[#ED1B241A]/10 w-screen">
            <div className="py-40">
                <h1 className="text-[30px] font-bold text-center md:text-left md:pl-28">Free Course</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[40px] justify-center pt-[30px] pb-[50px] px-28">

                    {freeCourse?.map((course) => (
                        <div
                        key={course.id}
                        className="w-[300px] md:w-[280px]  p-[16px] bg-white flex flex-col rounded-[7px]">

                        <img className="w-full h-[150px] md:w-[279px] lg:h-[220px] md:h-[168px] pt-0" src={course?.image} alt="" />
                        <h2 className="pt-[15px] text-[18px] font-bold ">{course.courseName}</h2>
                        <p className="text-[14px] text-[#818181] font-bold">{course.details}</p>

                        {course.isFree ?
                        <div className="flex justify-center">
                        <Link to={`/dashboard/my-courses`} className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'শুরু করুন' : 'Start'}</Link>
                        </div>
                        :
                        <div className="flex w-full justify-between items-center mt-6">
                        <Link to={`/individualCourse/${course.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'বিস্তারিত দেখুন' : 'Buy'}</Link>
                        <p className="font-semibold">${course.price}</p>
                        </div>
                        }

                    </div>

                    ))}

                </div>
            </div>
        </div>
    );
};

export default FreeCourses;