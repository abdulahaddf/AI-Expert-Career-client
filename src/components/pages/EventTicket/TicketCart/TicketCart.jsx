import { BiDownload } from 'react-icons/bi';
import { MdAccessAlarms } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import qr from '../../../../../public/img/event/icon/qrCode.png';
import logoSm from '../../../../../public/img/event/icon/a logo.png'
import logoLg from '../../../../../public/img/event/icon/logo-lg.png'
import whiteLogo from '../../../../../public/img/event/icon/whiteLogo.png'
import { FaFacebookF, FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';
import { useContext, useEffect } from 'react';
import { MyContext } from '../../../../Contaxt/Context';
const TicketCart = () => {
    const {eventData} = useContext(MyContext)
    console.log(eventData)
        useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
        return (
        <div id='idStart'>
                <div className="md:grid hidden md:grid-cols-3 md:mt-[-150px] mt-[-200px]">
                <div className="col-span-2 relative bg-[white] p-8 md:rounded-l-3xl md:h-auto h-[370px] ">
                    <img src={logoLg} className='absolute top-0 left-0 bottom-0 right-0 m-auto' alt="" />
                    <h1 className="text-3xl text-[#FF003D] font-bold">{eventData.title}</h1><br />
                    <div className="flex justify-between items-end">
                            <div className="">
                                <span className="flex item-center gap-2  mt-2 font-bold text-[#525252]">
                                    <MdAccessAlarms className='text-[18px] text-[#FE0C0C]' /> Date and time
                                </span>
                                <p className="text-[#3753E8] font-bold text-[20px] mt-1">{eventData.date}</p>
                            </div>

                            <p className="text-[#3753E8] font-bold text-[20px] mt-1">Sunday, 20feb 2023</p>
                    </div>
                    <div className="mt-8">
                        <span className="flex item-center gap-2  mt-2 font-bold text-[#525252]">
                            <CiLocationOn className='text-[18px] text-[#FE0C0C]' /> Address
                        </span>
                        <p className="text-[#3753E8] font-bold text-xl mt-1">{eventData.address}</p>
                    </div>

                    <div className="absolute bottom-[30px] left-8">
                        <h3 className='font-semibold text-[#656565] text-[15px]'>
                            <span className=''>Holder name :</span>  {eventData?.holderInfo?.name}
                        </h3>
                        <h3 className='font-semibold text-[#656565] text-[15px]'>
                            <span className=''>Ticket Id :</span> {eventData.ticketId}
                        </h3>
                    </div>
                    <div className="absolute bottom-[30px] right-8">
                        <h3 className='font-bold text-[#656565] text-[15px]'>
                            Share with friend
                        </h3>
                        <ul className="flex items-center gap-3">
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <FaFacebookF className='text-sm'/>
                            </li>
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <AiOutlineTwitter className='text-sm'/>
                            </li>
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <FaRegEnvelope className='text-sm'/>
                            </li>
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <FiCopy className='text-sm'/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[white]  p-8 md:rounded-r-3xl  border-l-2 border-dashed relative border-[black] ">
                    <img src={logoSm} className='absolute top-0 left-0 bottom-0 right-0 m-auto
                    ' alt="" />
                    <div className="bg-[#E80E0E] w-[50px] h-[50px] rounded-full flex items-center justify-center absolute left-[-24px] top-0 bottom-0 my-auto">
                        <img src={whiteLogo} className='w-[33%]' alt="" />
                    </div>
                    <img src={eventData?.holderInfo?.img} className="w-[80px] h-[80px] rounded-[22px] m-auto" alt="" />
                    <br />
                    <h2 className="md:text-2xl font-bold text-[20px] text-center text-[#000000]">{eventData.holderInfo.name}</h2>
                    <p className="text-center text-[gray] text-[13px]">patmitchelle@example.com</p>
                    <ul>
                        <li className="text-center font-bold text-[#2A385E] mt-2">
                            Address : A0127z00
                        </li>
                        <li className="text-center font-bold text-[#2A385E] mt-2">
                            Ticket Id : {eventData.ticketId}
                        </li>
                        <li className="text-center font-bold text-[#2A385E] mt-2">
                            january 17-19, 2023
                        </li>
                    </ul>

                    <img src={qr} className='m-auto w-[114px] h-[114px]' alt="" />
                        <div className="w-40 h-12 text-center pb-[20px] mt-10 mx-auto group relative inline-bloc shadow-lg shadow-gray-600 rounded overflow-hidden border border-[#ED1B24] px-2 py-2 bg-red-600 focus:outline-none focus:ring">
                    
                            <span className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"></span>

                            <span className="relative text-lg font-bold text-white transition-colors  group-hover:text-red-600 flex items-center justify-center">
                                <BiDownload className='font-bold text-lg mr-4' /> Download
                            </span>

                        </div>
                </div>           
            </div>

            <div className="block md:hidden  md:mt-[-150px] mt-[-90px]">
                        <div className="col-span-2 relative bg-[white] rounded-2xl p-8 md:rounded-l-3xl md:h-auto h-[400px] ">
                    <img src={logoLg} className='absolute top-0 left-0 bottom-0 right-0 m-auto' alt="" />
                    <h1 className="md:text-3xl text-xl text-[#FF003D] font-bold">EVENT NAME HEADING</h1><br />
                    <div className="flex justify-between items-end">
                            <div className="">
                                <span className="flex item-center gap-2  mt-2 font-bold text-[#525252]">
                                    <MdAccessAlarms className='text-[18px] text-[#FE0C0C]' /> Date and time
                                </span>
                                <p className="text-[#3753E8] font-bold md:text-[20px] mt-1">Sunday, 20feb 2023</p>
                            </div>

                            <p className="text-[#3753E8] font-bold md:text-[20px] mt-1">Sunday, 20feb 2023</p>
                    </div>
                    <div className="mt-8">
                        <span className="flex item-center gap-2  mt-2 font-bold text-[#525252]">
                            <CiLocationOn className='text-[18px] text-[#FE0C0C]' /> Address
                        </span>
                        <p className="text-[#3753E8] font-bold md:text-xl mt-1">Mirpur, Dhaka</p>
                    </div>

                    <div className="absolute bottom-[30px] left-8">
                        <h3 className='font-semibold text-[#656565] md:text-[15px] text-sm md:w-auto w-[130px]'>
                            <span className=''>Holder name :</span>  {eventData.holder}
                        </h3>
                        <h3 className='font-semibold text-[#656565] md:text-[15px] text-sm'>
                            <span className=''>Ticket Id :</span> {eventData.ticketId}
                        </h3>
                    </div>
                    <div className="absolute bottom-[30px] right-8">
                        <h3 className='font-bold text-[#656565] md:text-[15px] text-[12px]'>
                            Share with friend
                        </h3>
                        <ul className="flex items-center gap-3">
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <FaFacebookF className='text-sm'/>
                            </li>
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <AiOutlineTwitter className='text-sm'/>
                            </li>
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <FaRegEnvelope className='text-sm'/>
                            </li>
                            <li className='bg-[#D9D9D9] w-[25px] h-[25px] flex items-center justify-center rounded-full'>
                                <FiCopy className='text-sm'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TicketCart;