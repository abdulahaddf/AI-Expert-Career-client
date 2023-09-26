import { useContext, useEffect, useState } from "react";
import CartTotal from "./CartTotal";
import ItemList from "./ItemList";
import ProgressBar from "./ProgressBar";
import { MyContext } from "../../../Contaxt/Context";

const ShopingCart = () => {
    const [isConfirm, setIsConfirm] = useState(false)
    const {language} = useContext(MyContext)
    useEffect(() => {
        setIsConfirm(true)
    }, [])
    return (
        <div className="bg-white mt-[70px] lg:mt-[100px]">
            <div className="py-2  px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
                <ProgressBar isConfirm={isConfirm} />
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-[#101750] text-center md:text-left">{language == 'bn' ? 'শপিং কার্ড' : 'Shopping Cart'}</h1>
                    <p className="text-xl font-medium text-[#101750] text-center md:text-left">5 item in cart</p>
                    <div className="grid grid-cols-12 lg:gap-x-[58px] mt-14 mb-36">
                        <div className="col-span-12 lg:col-span-8">
                            <ItemList />
                        </div>
                        <div className="col-span-12 lg:col-span-4 flex justify-center mt-12 lg:mt-0">
                            <CartTotal setIsConfirm={setIsConfirm} isConfirm={isConfirm} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShopingCart;