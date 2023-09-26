import { BiCopy, BiMicrophone, BiTime } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import user from '../../../../../public/img/event/user.jpg';
import { useState } from "react";
import copy from 'copy-to-clipboard';

const EventConferenceCart = ({ item }) => {
   const [openBox, setOpenBox] = useState(false);
  const { title, time, description } = item;
  
    const handleCopy = () => {
    const data = item;
    copy(JSON.stringify(data));
  };

  // ReactDOM.render(<EventConferenceCart />, document.getElementById('root'));

  return (
    <div className="cart grid gap-2 grid-cols-12 mt-4">
      <div className="img col-span-12  lg:col-span-1 lg:ml-0 mb-2 lg:mb-0">
        <img className="shape-img w-[100px] m-auto h-[100px]" src={user} alt="user" />
      </div>
      <div className="content col-span-12  lg:col-span-11 bg-[#E9E9E9] p-4 rounded-md">
        <header className="border-b border-[black] flex justify-between">
          <div className="">
            <div className="text-[red] font-semibold flex items-center ">
              <BiTime />  <span className="ml-1">{time}</span>
            </div>
            <h1 className="text-[#293343] font-bold text-xl">{title}</h1>
          </div>
          <button onClick={()=> setOpenBox(!openBox)} className="flex items-center relative justify-center text-[red] border border-[red] rounded-full w-[30px] h-[30px]">
            <AiOutlineShareAlt className="text-xl" />
            <button onClick={handleCopy} className={`${openBox ? '' : 'hidden'} bg-[#303039] duration-200 hover:bg-[#000000] flex items-center gap-1 text-[white] p-2 rounded absolute bottom-[-45px] right-0 `}><BiCopy className="text-xl"/> Copy</button>
          </button>
        </header>
        <main className="mt-2">
          <p className="text">
            {description}
          </p>
          <span className="flex text-[#E01848] mt-3 gap-1 font-bold items-center">
            <BiMicrophone />  Lorem ipsum
          </span>
        </main>
      </div>
    </div>
  );
};

export default EventConferenceCart;