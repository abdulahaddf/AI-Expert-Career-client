import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCart = ({ item }) => {
    const { image, progress } = item
    const [progressPercentage, setProgressPercentage] = useState(10)
    useEffect(() => {
        setProgressPercentage(progress)
    }, [progress])
    return (
        <div className='flex '>
            <img src={image} alt="" className='mr-4 h-[130px] w-[145px]' />
            <div className='md:space-y-3 space-y-1'>
                <h3 className='font-bold'>Adobe Photoshop Advance Training</h3>
                <p className='text-sm text-black/70 font-bold'>Dan Scott</p>

                <div className="w-full bg-[#D9D9D9] rounded-full h-4 dark:bg-gray-700 relative mb-1">
                    <div className="bg-[#ED1B24] h-4 rounded-full" style={{ width: `${progressPercentage}%` }} ></div>
                    <p className='absolute -top-[4px] right-2'>{progressPercentage < 100 ? <span className='text-[10px] text-white/80 font-bold'>{`${progressPercentage}% Complete`}</span> : <span className='text-[10px] text-white font-bold'>Completed</span>}</p>
                </div>
                <div className='h-6 flex justify-center items-center w-[129px] bg-[#ED1B24] rounded-full text-white font-bold text-sm'>
                    <Link to={`/my-course/${2}`} >
                        <button className=''>Continue course</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CourseCart;