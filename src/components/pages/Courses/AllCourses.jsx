import { Link } from "react-router-dom";
import image1 from "./Assests/image1.png";
import image2 from "./Assests/image2.png";
import image3 from "./Assests/image3.png";
import image4 from "./Assests/image4.png";
import image5 from "./Assests/image5.png";
import image6 from "./Assests/image6.png";
import image7 from "./Assests/image7.png";
import image8 from "./Assests/image8.png";
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";

const AllCourses = () => {

  const { language } = useContext(MyContext)

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
  ];
  const machineLearningCourse = [
    {
      id: 1,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image1,
      isFree: false,
      price: 50
    },
    {
      id: 2,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image2,
      isFree: false,
      price: 55
    },
    {
      id: 3,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image3,
      isFree: false,
      price: 60
    },
    {
      id: 4,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image4,
      isFree: false,
      price: 40
    },
  ];
  const designCourse = [
    {
      id: 1,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image5,
      isFree: false,
      price: 70
    },
    {
      id: 2,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image6,
      isFree: false,
      price: 80
    },
    {
      id: 3,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image7,
      isFree: false,
      price: 75
    },
    {
      id: 4,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image8,
      isFree: false,
      price: 90
    },
  ];
  return (
    <div className="">

      <h2 className="text-[30px] font-bold text-center pb-[15px]">{language == 'bn' ? 'প্রজেক্ট বেইজড কোর্সগুলো' : 'Project Based Courses'}</h2>
      <hr className="w-12 h-4 bg-[#FF265A]/90 rounded-full mx-auto mb-20" />


      <div className="mb-12 ">
        {/* machine learning courses card ** data from array of object  */}
        <h2 className="text-[30px] font-bold text-center lg:text-left lg:pl-28">{language == 'bn' ? 'ফ্রি কোর্সসমূহ' : 'Free course'}</h2>

        <div className="lg:pl-28 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center">

            {freeCourse?.map((machineLearning) => (

              <div
                key={machineLearning.id}
                className="w-full md:w-[280px]  p-[16px] bg-white flex flex-col rounded-[7px]">

                <img className="w-full md:w-[279px] lg:h-[220px] md:h-[168px] pt-0" src={machineLearning?.image} alt="" />
                <h2 className="pt-[15px] text-[18px] font-bold ">{machineLearning.courseName}</h2>
                <p className="text-[14px] text-[#818181] font-bold">{machineLearning.details}</p>

                {machineLearning.isFree ?
                  <div className="flex justify-center">
                    <Link to={`/dashboard/my-courses`} className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'শুরু করুন' : 'Start'}</Link>
                  </div>
                  :
                  <div className="flex w-full justify-between items-center mt-6">
                    <Link to={`/individualCourse/${machineLearning.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'বিস্তারিত দেখুন' : 'Buy'}</Link>
                    <p className="font-semibold">${machineLearning.price}</p>
                  </div>
                }

              </div>

            ))}

          </div>
        </div>

        <div className="w-40 flex justify-center h-12 text-center pb-[20px] mt-10 mx-auto group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

          <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

          <Link to="/free_courses" className="relative text-xl font-bold text-white transition-colors  group-hover:text-red-600">
            {language == 'bn' ? 'আরো দেখুন' : 'See More'}
          </Link>

        </div>


      </div>

      <div className="mb-12">
        {/* Development courses card ** data from array of object  */}
        <h2 className="text-[30px] font-bold text-center lg:text-left lg:pl-28">{language == 'bn' ? 'মেশিন লার্নিং কোর্স' : 'Machine Learning Courses'}</h2>

        <div className="grid lg:pl-28 lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center">

          {machineLearningCourse?.map((machineLearning) => (

            <div
              key={machineLearning.id}
              className="w-full md:w-[280px] p-[16px] bg-white flex flex-col rounded-[7px]">

              <img className="w-full md:w-[279px] lg:h-[220px] md:h-[168px] pt-0" src={machineLearning?.image} alt="" />
              <h2 className="pt-[15px] text-[18px] font-bold ">{machineLearning.courseName}</h2>
              <p className="text-[14px] text-[#818181] font-bold">{machineLearning.details}</p>

              {machineLearning.isFree ?
                <Link to={`/individualCourse/${machineLearning.id}`} className="flex justify-center">
                  <button className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'শুরু করুন' : 'Start'}</button>
                </Link>
                :
                <div className="flex w-full justify-between items-center mt-6">
                  <Link to={`/individualCourse/${machineLearning.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'বিস্তারিত দেখুন' : 'Buy'}</Link>
                  <p className="font-semibold">${machineLearning.price}</p>
                </div>
              }
            </div>

          ))}

        </div>

        <div className="w-40 h-12 text-center pb-[20px] mt-10 mx-auto group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

          <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

          <span className="relative text-xl font-bold text-white transition-colors  group-hover:text-red-600">
            {language == 'bn' ? 'আরো দেখুন' : 'See More'}
          </span>

        </div>

      </div>

      <div className="mb-12">
        {/* Design courses card ** data from array of object  */}
        <h2 className="text-[30px] font-bold text-center lg:text-left lg:pl-28">{language == 'bn' ? 'এ আই ডেভেলপমেন্ট কোর্স' : 'AI Development Courses'}</h2>

        <div className="lg:pl-28 grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center">

          {designCourse?.map((design) => (

            <div
              key={design.id}
              className="w-full md:w-[280px] p-[16px] bg-white flex flex-col rounded-[7px]">

              <img className="w-full md:w-[279px] lg:h-[220px] md:h-[168px] pt-0" src={design?.image} alt="" />
              <h2 className="pt-[15px] text-[18px] font-bold ">{design.courseName}</h2>
              <p className="text-[14px] text-[#818181] font-bold">{design.details}</p>

              {design.isFree ?
                <div className="flex justify-center">
                  <button className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'শুরু করুন' : 'Start'}</button>
                </div> :
                <div className="flex w-full justify-between items-center mt-6">
                  <Link to={`/individualCourse/${design.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">{language == 'bn' ? 'বিস্তারিত দেখুন' : 'Buy'}</Link>
                  <p className="font-semibold">${design.price}</p>
                </div>
              }

            </div>

          ))}

        </div>

        <div className="w-40 h-12 text-center pb-[20px] mt-10 mx-auto group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">

          <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

          <span className="relative text-xl font-bold text-white transition-colors  group-hover:text-red-600">
            {language == 'bn' ? 'আরো দেখুন' : 'See More'}
          </span>

        </div>

      </div>

    </div>
  );
};

export default AllCourses;
