import badgeImg from '../../../assets/Dashboard/Rectangle.png'
import download from '../../../assets/Dashboard/Download.png'
import ExitTo from '../../../assets/Dashboard/Exit Top Right.png'
import { MyContext } from '../../../Contaxt/Context';
import { useContext } from 'react';
const Certifications = () => {
    const { language } = useContext(MyContext)
    const certificats = [
        {
            badge: badgeImg,
            courseName: 'Ui Design-2020'
        },
        {
            badge: badgeImg,
            courseName: 'Graphic design'
        },
    ]
    return (
        <div className="mt-[30px] mb-12">
            <h2 className='text-xl font-bold'>
            {language === 'bn' ?  'সার্টিফিকেশন' : 'Certifications'}
                </h2>
            <div className="mt-5 space-y-2.5">
                {certificats.map(({ badge, courseName }, i) => <div key={i} className='bg-[#ED1B24]/10 p-2 flex items-center shadow-[0px_2px_6px_#0000004A]'>
                    <div className='w-[63px] h-[63px] mr-6 bg-black flex justify-center items-center'>
                        <img src={badge} alt="" className=' ' />
                    </div>
                    <div className='flex justify-between w-full mr-5'>
                        <p className='text-xl font-bold text-[#ED1B24]'>{courseName}</p>
                        <div className='flex'>
                            <img src={download} alt="" className='w-5 h-5' />
                            <img src={ExitTo} alt="" className='w-5 h-5 ml-5' />
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Certifications;