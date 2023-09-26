import { useEffect } from "react";

const GrapichDesignForm = () => {
     // scrollTo
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);
     return (
          <div className="h-screen bg-[#F3F2FF]">
               <h1 className="text-center font-bold text-[35px] mt-[100px]">Graphic Design</h1> <br />
               <div className="bg-[white] rounded border w-[592px] m-auto  px-6 py-8">

                    <form>
                         <div className="">
                              <label htmlFor="name" className="text-[20px]">Name*</label><br />
                              <input type="text" className="border-b border-[gray] w-full outline-none mt-2" placeholder="Enter your name " />
                         </div>
                         <div className="mt-8">
                              <label htmlFor="email" className="text-[20px]">Email*</label><br />
                              <input type="email" className="border-b border-[gray] w-full outline-none mt-2" placeholder="Enter your email " />
                         </div>
                         <div className="mt-8">
                              <label htmlFor="phone" className="text-[20px]">Phone*</label><br />
                              <input type="tell" className="border-b border-[gray] w-full outline-none mt-2" placeholder="Enter your phone number " />
                         </div>

                         <div className="flex justify-center mt-20">
                              <button className="mt-8 bg-[#ED1B24] text-white px-8 py-2 rounded-lg">Submit</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default GrapichDesignForm;