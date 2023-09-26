import { useContext } from "react";
import aikit_1 from "../../../../assets/Kit/aikit-1.png";
import product1 from "../../../../assets/Kit/product-1.png";
import product2 from "../../../../assets/Kit/product-1.png";
import product3 from "../../../../assets/Kit/product-1.png";
import product4 from "../../../../assets/Kit/product-1.png";
import { SlBriefcase } from "react-icons/sl";
import { MyContext } from "../../../../Contaxt/Context";

const AiKitDetails = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="px-4 mb-[50px] mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl  lg:px-20 2xl:px-8">
      <div className="lg:flex gap-x-8 items-center mb-4 mt-28">
        <div>
          <img src={aikit_1} alt="" className="w-full" />
        </div>
        <div>
          <div>
            <h1 className="mb-4 text-2xl font-bold mt-[30px]">
              Artificial Insemination Kit
            </h1>
            <p className="">Product Specification</p>
          </div>
          <table className="lg:w-[676px] border border-[#ED1B24]">
            <tbody>
              <tr className="text-gray-700 ">
                <td className="px-4 py-3 DashBorder border-r border-[#ED1B24]">
                  Categories
                </td>
                <td className="px-4 py-3 DashBorder">Categories</td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 DashBorder border-r border-[#ED1B24]">
                  Categories
                </td>
                <td className="px-4 py-3 DashBorder">Size/Dimension</td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 DashBorder border-r border-[#ED1B24]">
                  Quantity Per Pack
                </td>
                <td className="px-4 py-3 DashBorder">Brand</td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 DashBorder border-r border-[#ED1B24]">
                  Is It Disposable
                </td>
                <td className="px-4 py-3 DashBorder">Parts body</td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-4 py-3 DashBorder border-r border-[#ED1B24]">
                  Categories
                </td>
                <td className="px-4 py-3 DashBorder">Categories</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between mt-3">
            <div>
              <h2 className="text-[#ED1B24CC] text-2xl font-bold">
                Price: $100
              </h2>
            </div>
            <div>
              <button className="outline hover:bg-[#ED1B24] hover:text-white outline-[#ED1B24] rounded-full py-1 px-4 mb-4">
                {language === "bn" ? "কার্টে যুক্ত করুন" : "Add to cart"}
              </button>
              <button className="my-btn rounded-full py-2 px-8 bg-[#ED1B24] text-white lg:ms-4">
                {language === "bn" ? "কিনুন" : "Buy now"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold">
          {language === "bn" ? "প্রোডাক্টের বিবরণ" : "Product Description"}
        </h1>
        <p>
          {language === "bn"
            ? "আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা। আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা। আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা"
            : "lorem Ipsum is simply dummy text of the printing and typesettinindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only   five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold">
          {language === "bn" ? "প্রোডাক্টের ছবি" : "Product Image"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center lg:gap-5 mt-4">
          <img src={product1} alt="" className="w-full md:w-auto" />
          <img src={product2} alt="" className="w-full md:w-auto" />
          <img src={product3} alt="" className="w-full md:w-auto" />
          <img src={product4} alt="" className="w-full md:w-auto" />
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-2xl font-bold mt-10 mb-3">
            {language === "bn" ? "আরো বিবরণ" : "Additional Information"}
          </h1>
        </div>
        <table className="lg:w-full border border-[#ED1B24]">
          <tbody>
            <tr className="text-gray-700">
              <td className=" py-3 DashBorder border-r border-[#ED1B24]">
                Delivery Time
              </td>
              <td className="px-16 py-3 DashBorder">5 day</td>
            </tr>
            <tr className="text-gray-700">
              <td className=" py-3 DashBorder border-r border-[#ED1B24]">
                Production Capacity
              </td>
              <td className="px-16 py-3 DashBorder">5 day</td>
            </tr>
            <tr className="text-gray-700">
              <td className=" py-3 DashBorder border-r border-[#ED1B24]">
                Packaging Details
              </td>
              <td className="px-16 py-3 DashBorder">5 day</td>
            </tr>
            <tr className="text-gray-700">
              <td className=" py-3 DashBorder border-r border-[#ED1B24]">
                Return product
              </td>
              <td className="px-16 py-3 DashBorder">At least 7 days use</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-16">
        <h1 className="text-2xl font-bold">
          {language === "bn"
            ? "একই ক্যাটেগোরির আরো কিছু প্রোডাক্ট"
            : "Browse related categories"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 space-y-4 md:space-y-0  text-center py-8 mt-8">
          <div className=" hover:bg-white shadow  hover:text-[#ED1B24]/90  flex justify-center hover:shadow-md py-8 px-16 duration-200 ">
            <div>
              <SlBriefcase className="text-[120px]" />
              <h1 className="mt-6">Gamers Kit</h1>
            </div>
          </div>
          <div className=" hover:bg-white shadow  hover:text-[#ED1B24]/90  flex justify-center hover:shadow-md py-8 px-16 duration-200 ">
            <div>
              <SlBriefcase className="text-[120px]" />
              <h1 className="mt-6">Gamers Kit</h1>
            </div>
          </div>

          <div className="hover:bg-white  shadow hover:text-[#ED1B24]/90  flex justify-center hover:shadow-md py-8 px-16 duration-200 ">
            <div>
              <SlBriefcase className="text-[120px]" />
              <h1 className="mt-6">Gamers Kit</h1>
            </div>
          </div>
          <div className=" hover:bg-white shadow  hover:text-[#ED1B24]/90  flex justify-center hover:shadow-md py-8 px-16 duration-200 ">
            <div>
              <SlBriefcase className="text-[120px]" />
              <h1 className="mt-6">Gamers Kit</h1>
            </div>
          </div>
          <div className=" hover:bg-white shadow  hover:text-[#ED1B24]/90  flex justify-center hover:shadow-md py-8 px-16 duration-200 ">
            <div>
              <SlBriefcase className="text-[120px]" />
              <h1 className="mt-6">Gamers Kit</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiKitDetails;
