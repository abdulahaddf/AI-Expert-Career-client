import { useContext } from 'react';
import instrImg from '../../../assets/aboutus/Ellipse 52.png'
import instrImg2 from '../../../assets/aboutus/Ellipse 56.png'
import instrImg3 from '../../../assets/aboutus/Ellipse 57.png'
import { MyContext } from '../../../Contaxt/Context';
const Instructors = () => {

    const { language } = useContext(MyContext)

    const instructorsDetails = [
        {
            Name: 'Jane Cooper',
            photo: instrImg,
            JobTitle: 'Graphic Designer',
            aboutEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            aboutBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে',
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg2,
            JobTitle: 'Graphic Designer',
            aboutEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            aboutBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে',
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg3,
            JobTitle: 'Graphic Designer',
            aboutEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            aboutBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে',
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg,
            JobTitle: 'Graphic Designer',
            aboutEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            aboutBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে',
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg2,
            JobTitle: 'Graphic Designer',
            aboutEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            aboutBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে',
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg3,
            JobTitle: 'Graphic Designer',
            aboutEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            aboutBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে',
        },
    ]
    return (
        <div className="mt-[70px] p-4">
            <h1 className="text-center text-[35px] font-bold">{language == 'bn' ? 'এ আই এক্সপার্টস ও ইন্সট্রাক্টরস' : 'AI Experts & Instructors'}</h1>
            <p className="text-center md:w-[500px] m-auto">{language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields'}</p>
            <div className=' grid  grid-cols-2 lg:grid-cols-3 gap-4 '>
                {instructorsDetails.map((instruct, i) => <div key={i} className='text-center'>
                    <img src={instruct.photo} alt="" className='mx-auto' />
                    <h2 className='text-[30px] font-bold'>{instruct.Name}</h2>
                    <p className='mt-4'>{instruct.JobTitle}</p>
                    <div className='h-1 w-7 rounded-[3px] bg-[#FE0651]/70 mx-auto mt-2.5'></div>
                    <p className='text-justify mt-7 text-[8px] md:text-xl  font-medium'>{language == 'bn' ? instruct.aboutBN : instruct.aboutEN}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Instructors;