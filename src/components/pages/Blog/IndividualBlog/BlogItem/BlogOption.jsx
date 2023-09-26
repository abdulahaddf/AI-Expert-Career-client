import { useState } from 'react';

const BlogOption = ({data}) => {
  
     const [open, setOpen] = useState(false);
    return (
            <li onClick={()=> setOpen(!open)} className={`${open ? 'h-auto' : 'h-[49px]'} overflow-hidden cursor-pointer`} >
            <div className="flex  items-start justify-between bg-[#5c3a6de7] mt-2 px-4 text-white py-2">
                <h2 className="text-white">
                   {data.title.slice(0, 30)}...
                </h2>
                <button>v</button>
            </div>
            <ul className="bg-[#a9a6aae7] p-2">
               { 
                  data.options?.map((opt, index)=> <li key={index} className="bg-[#cce4f1dc] p-2 mt-2 rounded-md">{opt.name}</li>)
               }
            </ul>
          </li>
    );
};

export default BlogOption;