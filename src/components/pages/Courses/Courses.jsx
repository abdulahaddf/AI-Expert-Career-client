import { useEffect } from 'react';
import AllCourses from './AllCourses';
import CoursesForm from './CoursesForm';
import CoursesHeader from './CoursesHeader';
import CoursesIcon from './totalCoursesIcon.png';
const Courses = () => {
  const courseCategory = [
    {
      id: 1,
      categoryName: 'Machine Learning',
      totalCourses: '11 Courses',
      image: CoursesIcon,
    },
    {
      id: 2,
      categoryName: 'Deep Learning',
      totalCourses: '11 Courses',
      image: CoursesIcon,
    },
    {
      id: 3,
      categoryName: 'Graphics Design',
      totalCourses: '11 Courses',
      image: CoursesIcon,
    },
    {
      id: 4,
      categoryName: 'Web Development',
      totalCourses: '11 Courses',
      image: CoursesIcon,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:mt-[30px] ">
      <div className="pb-[105px] mt-[110px] ml-3">
        {/* courses page header */}
        <CoursesHeader></CoursesHeader>
      </div>
      <div className="py-2  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {/* course Category (Our total course) */}
        {/* <h2 className="text-[35px] font-bold">Our Total Courses</h2> */}

        <div className='flex justify-center w-11/12 mx-auto'>
          <div className="lg:pt-[63px] pt-[30px] grid grid-cols-2 gap-x-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-[158px]">
            {courseCategory?.map((category) => (
              <div key={category.id} className='w-full'>
                <div className="w-full p-8 space-x-4 md:w-[280px] lg:h-[300px] bg-[#ED1B23B2] flex items-center flex-col justify-center gap-[34px] rounded-[10px]">
                  <img
                    className="w-[69px] h-[92px]"
                    src={category.image}
                    alt=""
                  />
                  <h2>{category.categoryName}</h2>
                  <p>{category.totalCourses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Courses (Our Courses) */}
        <div>
          <AllCourses></AllCourses>
        </div>
      </div>
      <CoursesForm />
    </div>

  );
};

export default Courses;
