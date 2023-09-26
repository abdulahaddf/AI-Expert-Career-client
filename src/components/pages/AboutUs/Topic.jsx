import { useContext } from 'react';
import topicImg from '../../../assets/aboutus/Rectangle 598.png'
import topicImg2 from '../../../assets/aboutus/Rectangle 599.png'
import { MyContext } from '../../../Contaxt/Context';
const Topic = () => {

    const { language } = useContext(MyContext)

    return (
        <div className='mt-[90px] p-4'>
            <div className='flex lg:flex-row flex-col gap-9'>
                <div className='lg:w-4/6 '>
                    <h2 className="font-bold text-[26px] text-[#2D3957]">{language == 'bn' ? 'লার্নারস ও কর্পোরেটদের জন্য কনসাল্টেন্ট সার্ভিস' : 'Consultant Service for Learners and Corporates'}</h2>
                    <p className="text-[#000000]/60 mt-5">
                        {language == 'bn' ?
                            'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা <br>আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা <br>আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা <br>আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা'
                            :
                            ' No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
                    </p>
                </div>
                <div className=' w-full lg:w-[441px]'>
                    <img src={topicImg} alt="" className=' w-full lg:w-[441px] h-[271px]' />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col  gap-9 mt-[74px]'>
                <div className=' w-full lg:w-[441px]'>
                    <img src={topicImg2} alt="" className=' w-full lg:w-[441px] h-[271px]' />
                </div>
                <div className='lg:w-4/6 w-full'>
                    <h2 className="font-bold text-[26px] text-[#2D3957]">{language == 'bn' ? 'শতাধিক বাচ্চাদের মাঝে এ আই সচেতনতা বৃদ্ধি' : 'Increase the awarness of AI among HUNDREDS of CHILDREN'}</h2>
                    <p className="text-[#000000]/60 mt-5">
                        {language == 'bn' ?
                            'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা <br>আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা <br>আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা <br>আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা'
                            :
                            ' No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields'}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Topic;