import { useContext, useState } from 'react';
import itemImg from '../../../assets/shopingCart/Rectangle 152.png'

import { BiX } from "react-icons/bi";
import { MyContext } from '../../../Contaxt/Context';
const ItemList = () => {

    const {language} = useContext(MyContext)

    const [items, setItems] = useState([
        {
            img: itemImg,
            id: 1,
            name: 'Lorem heading',
            details: 'Sub-heading',
            price: '219.00'
        },
        {
            img: itemImg,
            id: 2,
            name: 'Lorem heading',
            details: 'Sub-heading',
            price: '219.00'
        },
        {
            img: itemImg,
            id: 3,
            name: 'Lorem heading',
            details: 'Sub-heading',
            price: '219.00'
        },
        {
            img: itemImg,
            id: 4,
            name: 'Lorem heading',
            details: 'Sub-heading',
            price: '219.00'
        },
        {
            img: itemImg,
            id: 5,
            name: 'Lorem heading',
            details: 'Sub-heading',
            price: '219.00'
        },
    ])
    const handleitem = id => {
        const newitem = items.filter(item => item.id !== id)
        setItems(newitem)
    }
    return (
        <div className="md:ml-4">
            <div className='flex justify-between text-xl font-semibold border-b border-black pb-3'>
                <h4 className=' text-center md:text-left'>{language == 'bn' ? 'সংগ্রহের তালিকা' : 'Item List'}</h4>
                <h4>{language == 'bn' ? 'মূল্য' : 'Price'}</h4>
            </div>
            <div className='mt-5'>
                {items.map((item) =>
                    <div key={item.id}>
                        <div className='flex space-x-4'>
                            <div className='relative'>
                                <img src={item.img} alt="" />
                                <div onClick={() => handleitem(item.id)} className='h-3 w-3 bg-black absolute flex justify-center items-center -top-1 -right-1 rounded-full'>
                                    <BiX className=' text-white font-black' />
                                </div>

                            </div>
                            <div className='flex justify-between w-full'>
                                <div className='space-y-2 mt-2'>
                                    <p>{item.name}</p>
                                    <p>{item.details}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='text-sm text-[#FF0944]'>Tk {item.price}</p>
                                </div>
                            </div>
                        </div>
                        <hr className='my-[15px]' />
                    </div>
                )}
                <button onClick={() => setItems([])} className='font-semibold py-3 px-7 bg-[#FF0944] rounded text-white mt-9'>
                    {language == 'bn' ? 'কার্ড মুছুন' : 'Clear Cart'}
                </button>
            </div>

        </div>
    );
};

export default ItemList;