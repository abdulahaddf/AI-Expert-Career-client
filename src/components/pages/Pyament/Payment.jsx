import ProgressBar from '../ShopingCart/ProgressBar';
import copy from '../../../assets/Payment/Vector.png'
import { BiLockAlt } from "react-icons/bi";
import { useContext, useState } from 'react';
import bkashLogo from '../../../assets/Payment/bkash-payment.png'
import nogodLogo from '../../../assets/Payment/Rectangle 285.png'
import masterLogo from '../../../assets/Payment/Rectangle 286.png'
import dutchLogo from '../../../assets/Payment/Rectangle 287.png'
import visaLogo from '../../../assets/Payment/Rectangle 288.png'
import { BsCheck } from "react-icons/bs";
import { useEffect } from 'react';
import { MyContext } from '../../../Contaxt/Context';
const Payment = () => {
    const [isBkash, setIsBkash] = useState('')
    const [valid, setValid] = useState(false)
    const {language} = useContext(MyContext)
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='bg-white mt-[70px] lg:mt-[100px]'>
            <div className='pb-32'>
                <ProgressBar />
                <div className='md:flex mt-[70px] justify-center md:gap-x-[30px]  px-3 lg:px-0'>
                    <div className='w-full md:w-[448px]  border-[0.5px] border-black py-[33px] px-11 h-fit'>
                        <div className='flex items-center'>
                            <h2 className='font-bold text-xl md:text-[24px]'>Order ID MMS99000047</h2>
                            <img src={copy} alt="" className='h-[22px]' />
                        </div>
                        <div className='text-sm mt-8 font-bold flex justify-between items-center border-b border-dashed border-[#ED1B23] pb-4'>
                            <h4>Web design & development</h4>
                            <h4>Tk 1950</h4>
                        </div>
                        <div className='text-sm mt-4 font-medium flex justify-between items-center border-b border-dashed border-[#ED1B23] pb-4'>
                            <h4>Web design & development</h4>
                            <h4>Tk 1950</h4>
                        </div>
                        <div className='text-sm mt-4 font-bold flex justify-between items-center'>
                            <h4>Web design & development</h4>
                            <h4>Tk 1950</h4>
                        </div>
                    </div>
                    <div className='w-full md:w-[513px] mt-[30px] md:mt-0 border-[0.5px] border-black py-[33px] px-5'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-bold'>{language == 'bn' ? 'পেমেন্ট নিশ্চিত করুন' : 'Select your payment method'}</h3>
                            <div className='flex items-center bg-[#ED1B23]/10 px-[6px] py-2.5 rounded-[20px]'>
                                <div className='h-[22px] w-[22px] rounded-full bg-[#ED1B23]/30 flex justify-center items-center mr-1.5'>
                                    <BiLockAlt />
                                </div>
                                <p className='text-xs font-bold'>Totally secure payment</p>
                            </div>
                        </div>
                        <div onClick={() => setIsBkash('bkash')} className='border cursor-pointer border-black flex items-center justify-between mt-11'>
                            <div className='flex items-center ml-5 h-[60px]'>
                                <div className={`w-3 h-3 rounded-full mr-4 ${isBkash === 'bkash' ? 'bg-[#ED1B23]/70' : 'border border-black'}`}></div>
                                <h3 className='text-xl font-bold text-black/70'>bkash</h3>
                            </div>
                            <img src={bkashLogo} alt="" className='h-[50px] mr-1' />
                        </div>
                        <div onClick={() => setIsBkash('other')} className='border cursor-pointer border-black flex items-center justify-between mt-11'>
                            <div className='flex items-center ml-5 h-[60px]'>
                                <div className={`w-3 h-3 rounded-full mr-4 ${isBkash === 'other' ? 'bg-[#ED1B23]/70' : 'border border-black'}`}></div>
                                <h3 className='text-xl font-bold text-black/70'>Others</h3>
                            </div>
                            <dir className='flex space-x-[30px] mr-10'>
                                <img src={nogodLogo} alt="" className='' />
                                <img src={masterLogo} alt="" className='' />
                                <img src={dutchLogo} alt="" className='' />
                                <img src={visaLogo} alt="" className='' />
                            </dir>
                        </div>


                        <div className="flex items-center mt-7 ">
                            <div onClick={() => setValid(!valid)} className={`cursor-pointer h-4 w-4 mr-2 ${valid ? 'bg-[#ED1B23]/80' : 'border'} rounded-full flex justify-center items-center`}>
                                {valid && <BsCheck className="text-3 text-white" />}
                            </div>
                            <p onClick={() => setValid(!valid)} className="font-bold cursor-pointer read-only">I agree to all the Term, Privacy Policy and Fees</p>
                        </div>

                        <div className='flex justify-center items-center mt-5'>
                            {!valid && <button className='px-[94px] py-[13px] bg-[#ff094299] rounded text-white text-sm font-bold' disabled>{language == 'bn' ? 'এগিয়ে যান' : 'Continue payment'}</button>}
                            {valid && <button className='px-[94px] py-[13px] bg-[#FF0944] rounded text-white text-sm font-bold'>{language == 'bn' ? 'এগিয়ে যান' : 'Continue payment'}</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;