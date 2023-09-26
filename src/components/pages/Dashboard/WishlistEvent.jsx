import basiWisht from '../../../assets/Dashboard/basiWish.png'
import wishlist from '../../../assets/Dashboard/wishlist.png'
import { BsXCircle } from "react-icons/bs";
import NewEvent from './NewEvent';
import { useContext } from 'react';
import { MyContext } from '../../../Contaxt/Context';
const WishlistEvent = () => {
    const { language } = useContext(MyContext)
    const noramlWish = [
        {
            Image: basiWisht,
            title: 'The Glamourous Life',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatem tempore. Harum consectetur nemo exercitationem ducimus voluptatem porro alias accusamus.'
        },
        {
            Image: basiWisht,
            title: 'The Glamourous Life',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatem tempore. Harum consectetur nemo exercitationem ducimus voluptatem porro alias accusamus.'
        },
    ]

    const wishList = [
        {
            image: wishlist,
            courseName: 'Canva design',
            instructor: 'Nahid Hasan',
            price: '200'
        },
        {
            image: wishlist,
            courseName: 'Learn ChatGPT 4.0 ',
            instructor: 'Nahid Hasan',
            price: '200'
        },
        {
            image: wishlist,
            courseName: 'Learn ChatGPT 4.0 ',
            instructor: 'Nahid Hasan',
            price: '200'
        },
        {
            image: wishlist,
            courseName: 'Canva design',
            instructor: 'Nahid Hasan',
            price: '200'
        },
        {
            image: wishlist,
            courseName: 'Learn ChatGPT 4.0 ',
            instructor: 'Nahid Hasan',
            price: '200'
        },
    ]
    return (
        <div >
            <h2 className='mt-4 text-xl font-bold'>
            {language === 'bn' ?  'উইশলিস্ট' : 'Wishlist'}
                </h2>
            <div className="bg-[#000000]/[0.05] px-[13px] py-2.5 max-h-[710px] overflow-y-auto mt-5 shadow-[0px_0px_10px_#0000004A]">
                {noramlWish.map((wish, i) => <>
                    <div key={i} className='flex relative'>
                        <img src={wish.Image} alt="" className='mr-3' />
                        <div>
                            <button className='text-xs right-0 top-2 absolute text-[#ED1B24]'><BsXCircle /></button>
                            <h3 className='font-medium mt-5'>{wish.title}</h3>
                            <p className='text-xs mt-2.5 text-black/70'>{wish.details.slice(0, 60)}<span className='text-[#ED1B24] text-xs font-bold'>...See More</span></p>
                        </div>
                    </div>
                    <hr className='border-[0.25px] border-[#ED1B24] mx-[12px] my-[15px]' />
                </>
                )}

                <div>
                    {wishList.map(({ image, courseName, instructor, price }, i) => <>
                        <div key={i} className='flex relative'>
                            <img src={image} alt="" className='mr-3 md:w-3/4 md:h-3/4 xl:w-full xl:h-full' />
                            <div className='w-full mr-[8px]'>
                                <button className='text-xs right-4 top-2 absolute text-[#ED1B24]'><BsXCircle /></button>
                                <h3 className='font-medium mt-4'>{courseName}</h3>
                                <p className='text-xs text-black/70 mt-2.5'>{instructor}</p>
                                <div className=' w-full'>
                                    <p>${price}</p>
                                    <button className='py-1 px-2 bg-[#ED1B24] rounded-full text-white md:font-medium text-xs md:text-sm my-btn'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <hr className='border-[0.25px] border-[#ED1B24] mx-[12px] my-[15px]' />
                    </>
                    )}
                </div>

            </div>

            <NewEvent />
        </div>
    );
};

export default WishlistEvent;