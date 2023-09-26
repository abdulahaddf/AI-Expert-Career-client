import phone from '../../../assets/aboutus/phone.png'
import email from '../../../assets/aboutus/Email.png'
import whatsapp from '../../../assets/aboutus/whatsapp.png'
import circle from '../../../assets/aboutus/circle.png'
import Polygon from '../../../assets/aboutus/Polygon 29.png'
import Polygon2 from '../../../assets/aboutus/Polygon 28.png'
import square from '../../../assets/aboutus/Rectangle 621.png'
import facebook from '../../../assets/aboutus/_Facebook.png'
import linkedin from '../../../assets/aboutus/_Linkedin.png'
import victor from '../../../assets/aboutus/Vector (1).png'
import { useContext } from 'react'
import { MyContext } from '../../../Contaxt/Context'
const ContuctUs = () => {

    const {language} = useContext(MyContext)

    return (
        <div className=' md:grid grid-cols-2  mt-[70px]'>
            <div className=' flex justify-center items-center'>
                <div className='lg:px-[82px] px-[30px]'>
                    <div className='flex w-full justify-between'>
                        <h3 className='text-xl font-semibold text-[#ED1B24]'>{language == 'bn' ? 'যোগাযোগ করুন' : 'Contuct us'}</h3>
                        <img src={circle} alt="" />
                    </div>
                    <h1 className='text-[35px] font-bold text-black/90 mt-[12px]'> {language == 'bn' ? 'যেকোনো জিজ্ঞাসা বা প্রয়োজনে আমাদের জানান,' : 'Get In Touch With Us'}</h1>
                    <p className='font-medium text-black/80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                    <div className='flex my-2 w-4/6 justify-between '>
                        <img src={square} alt="" className='h-[30px] w-[30px] -ml-12' />
                        <img src={Polygon} alt="" className='h-[20px] w-[20px]' />
                    </div>
                    <div className='flex space-y-7 flex-col'>
                        <div className='flex items-center'>
                            <img src={phone} alt="" className='mr-4' />
                            <div>
                                <p>+880144 44 44 55</p>
                                <p>+880144 44 44 55</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-[50px] h-[50px] mr-4 bg-[#ED1B24] rounded-full flex justify-center items-center'>
                                <img src={email} alt="" className='' />
                            </div>
                            <div>
                                <p>aicareerexpert.com</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src={whatsapp} alt="" className='mr-4' />
                            <div>
                                <p>+880144 44 44 55</p>
                                <p>+880144 44 44 55</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='  mt-[50px] lg:mt-0 relative'>
                <form action="" className='space-y-5  lg:w-2/3 bg-[#ED1B24]/10 md:ml-[80px] py-[50px] md:px-12 px-3'>
                    <div>
                        <input placeholder='Your Name' type="text" className='block  bg-[white] rounded-lg py-[10px] px-5 outline-none w-full' />
                    </div>
                    <div>
                        <input placeholder='Your Email' type="email" className='block  bg-[white] rounded-lg py-[10px] px-5 outline-none w-full' />
                    </div>
                    <div>
                        <input placeholder='Your Phone' type="text" className='block  bg-[white] rounded-lg py-[10px] px-5 outline-none w-full' />
                    </div>
                    <div>
                        <textarea name="" id="" cols="50" rows="4" placeholder='Your Message' className=' block w-full py-3 px-5 outline-none rounded-[5px] bg-[white] rounded-lg'></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <button className='py-[14px] w-full text-[19px font-semibold] bg-[#F52413] text-white rounded-[7px] '>
                            Submit
                        </button>
                    </div>
                    <img src={Polygon2} alt="" className='absolute bottom-0 lg:right-20 -right-16' />
                    <div className='flex space-x-5 pt-6 w-full justify-center items-center'>
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={victor} alt="" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default ContuctUs;