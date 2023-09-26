import { useContext } from "react";
import { BsCheck } from "react-icons/bs";
import { MyContext } from "../../../Contaxt/Context";
const ProgressBar = ({ isConfirm }) => {

    const {language} = useContext(MyContext)

    return (
        <div className="flex justify-center ">
            <div className="flex flex-col items-center  -mr-[40px]  z-10">
                <div className="w-[22px] h-[22px] rounded-full bg-[#ED1B24] text-white flex justify-center items-center">
                    {isConfirm ? <span>1</span> : <BsCheck />
                    }
                </div>
                <p className={`text-sm font-bold ${isConfirm ? 'text-[#ED1B23]' : 'text-[#ED1B23]/50'} mt-2`}>{language == 'bn' ? 'কনফার্ম অর্ডার' : 'Confirm order'}</p>
            </div>
            <div className="w-[266px] h-[1px] mt-3 bg-[#ED1B24]"></div>
            <div className="flex flex-col items-center -ml-[30px] z-10">
                <div className="w-[22px] h-[22px] rounded-full bg-[#ED1B24] text-white flex justify-center items-center">
                    <span >2</span>
                </div>
                <p className="text-sm font-bold text-[#ED1B23] mt-2">{language == 'bn' ? 'পেমেন্ট' : 'Payment'}</p>
            </div>
        </div>
    );
};

export default ProgressBar;