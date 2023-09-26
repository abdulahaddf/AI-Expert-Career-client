import { useContext, useEffect } from 'react';
import courseImg from '../../../assets/Dashboard/Courseimage.png'
import Certifications from './Certifications';
import PopularCourses from './PopularCourses';
import WishlistEvent from './WishlistEvent';
import { MyContext } from '../../../Contaxt/Context';

const UserDashboard = () => {
    const { language } = useContext(MyContext)
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const courses = [
        {
            Image: courseImg,
            courseName: 'Machine Learning',
            instrutor: 'Nahid Hassan'
        },
        {
            Image: courseImg,
            courseName: 'Machine Learning',
            instrutor: 'Nahid Hassan'
        },
        {
            Image: courseImg,
            courseName: 'Machine Learning',
            instrutor: 'Nahid Hassan'
        }
    ]
    return (
        <div className='grid grid-cols-12 gap-[30px] mb-12'>
            <div className='col-span-12 md:col-span-8'>
                <h3 className='text-xl font-bold mt-4'>
                {language === 'bn' ?  'কোর্স সমূহ' : 'Courses'}
                    </h3>
                
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-5'>
                    {
                        courses.map(({ Image, courseName, instrutor }, i) => <div key={i} className='px-2 py-2.5 bg-white rounded-md shadow-[0px_0px_12px_#0000004A]'>
                            <img src={Image} alt="" className='w-full ' />
                            <div className='text-center mt-4 '>
                                <h4 className='text-[18px] font-semibold'>{courseName}</h4>
                                <p className=' text-black/70 font-medium'>{instrutor}</p>
                                <button className='mt-5 py-[5px] px-5 bg-[#ED1B24] text-white rounded my-btn'>Start</button>
                            </div>
                        </div>)
                    }
                </div>
                <PopularCourses />
                <Certifications />
            </div>
            <div className='col-span-12 md:col-span-4'>
                <WishlistEvent />
            </div>
        </div>
    );
};

export default UserDashboard;