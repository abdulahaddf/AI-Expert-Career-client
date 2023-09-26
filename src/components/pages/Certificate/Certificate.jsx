import banner from '../../../../public/img/banner.png';
import icon from '../../../../public/img/Medal.png';
import resize from '../../../../public/img/sizeIcon.png';
import download from '../../../../public/img/Download.png';
import { useEffect } from 'react';

const Certificate = () => {
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mb-[50px]'>
            <header>
                <img className='w-screen' src={banner} alt="" />
            </header>
            <ul>
                <li className='flex items-center justify-between p-3 bg-[#F1DCE9] mt-6'>
                    <div className="flex items-center gap-3">
                        <div className="bg-[black] w-[60px] h-[60px] flex items-center justify-center"> <img src={icon} alt="" /></div>
                        <h1 className="text-[red] font-bold md:text-[20px] text-md">Ui Design-2020</h1>
                    </div>
                    <div className="flex items-center gap-8 px-5">
                        <button className="">
                            <img src={download} alt="" />
                        </button>

                        <button className="">
                            <img src={resize} alt="" />
                        </button>
                    </div>
                </li>

                <li className='flex items-center justify-between p-3 bg-[#F1DCE9] mt-6'>
                    <div className="flex items-center gap-3">
                        <div className="bg-[black] w-[60px] h-[60px] flex items-center justify-center"> <img src={icon} alt="" /></div>
                        <h1 className="text-[red] font-bold md:text-[20px] text-md">Ui Design-2020</h1>
                    </div>
                    <div className="flex items-center gap-8 px-5">
                        <button className="">
                            <img src={download} alt="" />
                        </button>

                        <button className="">
                            <img src={resize} alt="" />
                        </button>
                    </div>
                </li>

                <li className='flex items-center justify-between p-3 bg-[#F1DCE9] mt-6'>
                    <div className="flex items-center gap-3">
                        <div className="bg-[black] w-[60px] h-[60px] flex items-center justify-center"> <img src={icon} alt="" /></div>
                        <h1 className="text-[red] font-bold md:text-[20px] text-md">Ui Design-2020</h1>
                    </div>
                    <div className="flex items-center gap-8 px-5">
                        <button className="">
                            <img src={download} alt="" />
                        </button>

                        <button className="">
                            <img src={resize} alt="" />
                        </button>
                    </div>
                </li>

                <li className='flex items-center justify-between p-3 bg-[#F1DCE9] mt-6'>
                    <div className="flex items-center gap-3">
                        <div className="bg-[black] w-[60px] h-[60px] flex items-center justify-center"> <img src={icon} alt="" /></div>
                        <h1 className="text-[red] font-bold md:text-[20px] text-md">Ui Design-2020</h1>
                    </div>
                    <div className="flex items-center gap-8 px-5">
                        <button className="">
                            <img src={download} alt="" />
                        </button>

                        <button className="">
                            <img src={resize} alt="" />
                        </button>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Certificate;