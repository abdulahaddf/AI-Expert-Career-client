import { useEffect } from 'react';

const Registation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='md:mt-110px] mt-[70px] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-center items-center'>
            <form className="bg-white p-10 md:w-[600px] w-[360px]">
                <h1 className="text-black font-bold text-[27px] ">Register now</h1>
                <br /><br />
                <input className='border-b-2 border-[gray] w-full ' type="email" placeholder='enter your email' /> <br />
                <input className='border-b-2 border-[gray] w-full mt-9' type="text" placeholder='enter your name' /> <br />
                <input className='border-b-2 border-[gray] w-full mt-9' type="tell" placeholder='enter your phone number' /> <br />
                <input className='border-b-2 border-[gray] w-full mt-9' type="password" placeholder='enter your password' /> <br />
                <input type="submit" className='bg-[#ED1B24] text-white w-full mt-10 py-2 rounded-lg' />
            </form>
        </div>
    );
};

export default Registation;