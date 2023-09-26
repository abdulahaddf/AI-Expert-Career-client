/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MyContext } from "../../../Contaxt/Context";
const CartTotal = ({ setIsConfirm, isConfirm }) => {
    const [valid, setValid] = useState(true)
    const { language } = useContext(MyContext)
    return (
        <div>
            <h3 className="text-xl font-bold text-center -mt-[10px]">Cart Totals</h3>
            <div className="w-[371px] bg-[#F4F4FC] p-8 mt-10">
                <div>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">Subtotals:</p>
                        <p className="text-[#FF0944]">Tk 219.00</p>
                    </div>
                    <hr className="border border-[#E8E6F1] mt-3" />
                    <div className="flex justify-between mt-8">
                        <p className="text-lg font-semibold">Totals:</p>
                        <p className="text-[#FF0944]">Tk 325.00</p>
                    </div>
                    <hr className="border border-[#E8E6F1] mt-3" />
                </div>
                <div className="flex items-center mt-7 ">
                    <div onClick={() => setValid(!valid)} className={`cursor-pointer h-3 w-3 mr-2 ${valid ? 'bg-[#19D16F]' : 'border'} rounded-full flex justify-center items-center`}>
                        {valid && <BsCheck className="text-[8px] text-white" />}
                    </div>
                    <p onClick={() => setValid(!valid)} className="text-xs cursor-pointer read-only">Shipping & taxes calculated at checkout</p>
                </div>
                <div className="mt-8">
                    <Link to={'/payment'}>
                        <button onClick={() => setIsConfirm(!isConfirm)} className="py-[13px] w-full rounded bg-[#FF0944] text-white text-sm font-bold">{language == 'bn' ? 'পেমেন্ট নিশ্চিত করুন' : 'Confirm the order'}</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CartTotal;