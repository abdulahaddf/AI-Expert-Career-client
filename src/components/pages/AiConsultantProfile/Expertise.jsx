import { useContext, useState } from 'react';
import hand from '../../../assets/AiConsultant/image 3.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown } from "react-icons/fi";
import DateIcon from '../../../assets/AiConsultant/🦆 icon _calendar_.png'
import { MyContext } from '../../../Contaxt/Context';
const Expertise = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [appointDate, setAppointDate] = useState(new Date());
    const { language } = useContext(MyContext)
    const [hideButton, setHideButton] = useState(false)
    return (
        <div>
            <h3 className="uppercase text-xl mt-4">Expertise</h3>
            <div className='mt-3 space-y-4'>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>Machine Learning</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>Deep Learning</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>AI Architect</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>AI Project Lead</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>AI Technical Lead</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>AI Technical Lead</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <img src={hand} alt="" />
                    <p className='text-xl'>AI Technical Lead</p>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <button onClick={() => setHideButton(true)} className=' py-2 px-5 bg-[#ED1B24] rounded-[5px] text-white font-semibold'>{language == 'bn' ? 'ফ্রি এপয়েন্টমেন্ট বুক করুন' : 'Book a Free Appointment'}</button>
            </div>

            {hideButton &&
                
                <div className='mt-24 bg-[#FFFFFF]/30 p-9'>
                    <form action="" className='space-y-5'>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Name*</label>
                            <input type="text" placeholder='Enter your name' className='py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Email</label>
                            <input type="text" placeholder='Enter your email address' className='py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Phone number</label>
                            <input type="text" placeholder='Enter your phone number' className='py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' />
                        </div>
                        <div >
                            <label htmlFor="" className='text-xl font-semibold'>Date of birth</label>
                            <div className='relative '>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='py-2 cursor-pointer px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' />
                                <img src={DateIcon} alt="" className='absolute top-[28px] h-[19px] w-[17px] right-4 pointer-events-none cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Appointment date</label>
                            <div className='relative'>
                                <DatePicker selected={appointDate} onChange={(date) => setAppointDate(date)} className='py-2 cursor-pointer px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' />
                                <img src={DateIcon} alt="" className='absolute top-[28px] h-[19px] w-[17px] right-4 cursor-pointer pointer-events-none' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Appointment time</label>
                            <input type="text" placeholder='Enter your appointment time' className='py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Department</label>
                            <div className='relative'>
                                <select name="" id="" className='py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' >
                                    <option value="" disabled hidden selected className='text-[#A9A6A6]'>Machine Learning</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                </select>
                                <FiChevronDown className="absolute top-[14px] right-3 text-xl pointer-events-none text-[#EB3223]" />
                            </div>
                        </div>
                        <div >
                            <label htmlFor="" className='text-xl font-semibold'>Place</label>
                            <div className='relative'>
                                <select name="" id="" className='py-3 appearance-none px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80' >
                                    <option value="Machine Learning">IDB Bhaban</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                </select>
                                <FiChevronDown className="absolute top-[14px] right-3 text-xl pointer-events-none text-[#EB3223]" />
                            </div>
                        </div>
                        <div >
                            <label htmlFor="" className='text-xl font-semibold'>Upload File</label>
                            <div className='relative'>
                                <input type="file" id='file' className='py-2 px-4 hidden w-full mt-4 outline-none border appearance-none border-[#ED1B24]/80' />
                                <label htmlFor="file" className="py-3 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80 bg-white text-[#A9A6A6]">upload your file</label>
                                <span className='py-3 w-1/2 right-0 text-center bg-[#000000]/30 absolute top-[1px] pointer-events-none'>file upload</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl font-semibold'>Case summary</label>
                            <textarea name="" placeholder='Enter case summary' cols="30" rows="4" className='py-2 px-4 block w-full mt-4 outline-none border border-[#ED1B24]/80'></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button className='py-[12px] px-[78px] text-xl font-bold bg-[#F6002C] text-white rounded-2xl mt-5'>{language == 'bn' ? 'জমা দিন' : 'Submit'}</button>
                        </div>
                    </form>
                </div>

            }
        </div>
    );
};

export default Expertise;