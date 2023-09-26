import { useContext, useEffect } from 'react';
import courseImg from '../../../assets/Dashboard/mycourses.png';
import CourseCart from './CourseCart';
import { MyContext } from '../../../Contaxt/Context';
const MyCourse = () => {
  const { language } = useContext(MyContext)
  const myCourses = [
    {
      progress: 0,
      image: courseImg,
    },
    {
      progress: 30,
      image: courseImg,
    },
    {
      progress: 44,
      image: courseImg,
    },
    {
      progress: 20,
      image: courseImg,
    },
    {
      progress: 55,
      image: courseImg,
    },
    {
      progress: 100,
      image: courseImg,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lg:h-screen mb-12">
       <h3 className='text-xl font-bold'> {language === 'bn' ? 'আমার কোর্স সমূূহ' : "My courses"} </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[30px] gap-5 2xl:gap-x-0">
        {myCourses.map((item, i) => (
          <CourseCart key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
