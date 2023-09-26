import courseImg from "../../../assets/wishlist/courseimg.jpg";
import aboutBlog from "../../../assets/wishlist/ai.jpg";
import msgIcon from "../../../assets/wishlist/icons/msg-icon.svg";
import eyeIcon from "../../../assets/wishlist/icons/eye-icon.svg";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";

const Wishlist = () => {
  const { language } = useContext(MyContext)
  const aboutCourses = [
    {
      id: "1",
      img: courseImg,
      headline: "Machine Learning Courses",
      info: "11 Courses",
    },
    {
      id: "2",
      img: courseImg,
      headline: "Machine Learning Courses",
      info: "11 Courses",
    },
  ];
  const aboutBlogs = [
    {
      id: "1",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "2",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "3",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "4",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "5",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "6",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
  ];
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="my-5">
        <h3 className='text-xl font-bold mb-2'>
          {language === 'bn' ? 'কোর্স সমূহ' : 'Courses'}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12">
          {aboutCourses.map(({ id, img, headline, info }) => (
            <div
              key={id}
              className="border-gray-50 shadow-lg hover:shadow-lg bg-[#FFFFFF] rounded-[10px]  md:w-[280px] md:h-[300px]"
            >
              <center>
                <img className="mb-[18px] w-full shadow-md" src={img} alt="courseImg" />
              </center>
              <div className="">
                <h3 className="text-[20px] font-bold mb-[5px] text-center">{headline}</h3>
                <p className="font-semibold text-center mb-[10px]">{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-12">
        <h3 className='text-xl font-bold mb-2'>
          {language === 'bn' ? 'ব্লগ' : 'Blog'}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12">
          {aboutBlogs.map(({ id, img, headline, info }) => (
            <div
              key={id}
              className="px-[10px] py-[8px] md:px-[15px] md:py-[15px] shadow-lg hover:shadow-lg rounded-[10px] bg-[#FFFFFF]  md:w-[282px] md:h-[390px]"
            >
              <center>
                <img className="mb-[18px] w-full" src={img} alt="courseImg" />
              </center>
              <div className="">
                <h3 className="text-sm md:text-[18px] font-bold md:mb-[10px] text-left">{headline}</h3>
                <p className="md:font-semibold text-left md:text-center mb-[10px] text-[12px]">
                  {info.slice(0, 100) + "..."} <a href="#">See More</a>
                </p>
              </div>
              <div className="md:flex justify-between items-center md:mt-10">
                <button className="my-btn bg-[#ED1B23] text-white w-[139px] md:w-[91px] h-[36px] rounded-[10px] mb-3">Read More</button>
                <div className="flex justify-between items-center px-3">
                  <a href="#" className="flex items-center">
                    <img className="mr-2" src={msgIcon} alt="" /> 50
                  </a>
                  <a href="#" className="flex items-center md:ml-5">
                    <img className="mr-2" src={eyeIcon} alt="" /> 50
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
