import { useContext, useState } from 'react'
import { Tab } from '@headlessui/react'
import tabImg from '../../../assets/aboutus/Rectangle 119.png'
import { MyContext } from '../../../Contaxt/Context'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const AboutUsTabs = () => {

    const { language } = useContext(MyContext)

    let [categories] = useState([
        {
            titleEN: 'Why Us',
            detailsEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            titleBN: 'আমরাই কেন',
            detailsBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা'
        },
        {
            titleEN: 'Our Value',
            detailsEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            titleBN: 'আমাদের ভ্যালু',
            detailsBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা'
        },
        {
            titleEN: 'Our Intention',
            detailsEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            titleBN: 'আমাদের উদ্দেশ্য',
            detailsBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা'
        },
        {
            titleEN: 'Our Mission',
            detailsEN: 'No matter what background you are a student or learner, the right roadmap can take you to the pinnacle of success. Our AI roadmap and consultancy services are developed by these experts in various fields',
            titleBN: 'আমাদের লক্ষ্য',
            detailsBN: 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা'
        }

    ])
    return (

        <div className="w-full  px-2 py-16 sm:px-0">
            <Tab.Group>
                <div className='flex justify-center'>
                    <Tab.List className="grid grid-cols-2 md:grid-cols-4 space-x-1 rounded-xl  p-1 w-full lg:w-4/6">
                        {categories.map((category, i) => (
                            <Tab
                                key={i}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-xl leading-5 hover:border-b-4 hover:border-red-100 text-black font-bold outline-none',
                                        selected
                                            ? 'border-b-4  border-[#FE0651]/70 '
                                            : '  '
                                    )
                                }
                            >
                                {language == 'bn' ? category.titleBN : category.titleEN}
                            </Tab>
                        ))}
                    </Tab.List>
                </div>
                <Tab.Panels className="mt-10">
                    {Object.values(categories).map((item, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <div className='flex justify-center items-center'>
                                <div className='md:w-5/6 w-full px-2 md:px-0 lg:flex'>
                                    <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                                        <h3 className='text-[30px] font-bold  text-[#FE0651]'>{language == 'bn' ? item.titleBN : item.titleEN}</h3>
                                        <p className='mt-3 text-[rgba(0,0,0,0.6)]'>{language == 'bn' ? item.detailsBN : item.detailsEN}</p>
                                    </div>
                                    <div className='w-full lg:w-1/2 h-[242px] flex justify-center items-center'>
                                        <img src={tabImg} alt="" className='' />
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}


export default AboutUsTabs;