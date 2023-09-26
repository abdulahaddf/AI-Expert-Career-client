import polygon1 from './Assests/polygon-28.png';
import polygon3 from '../../../assets/Courses/Ellipse 94.png';
import polygon4 from '../../../assets/Courses/Rectangle 621.png';
import polygon2 from './Assests/polygon-31.png';
import slideImg from '../../../assets/CourseSlider.png';
import CourseSlider from './CourseSlider';
import { useContext } from 'react';
import { MyContext } from '../../../Contaxt/Context';

const CoursesForm = () => {

  const { language } = useContext(MyContext)

  const data = [
    {
      image: slideImg,
    },
    {
      image: slideImg,
    },
    {
      image: slideImg,
    },
  ];

  return (
    <div className='w-5/6  mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
      <div className="lg:flex justify-between gap-20 item-center">

        <div className="w-full lg:w-1/2 relative">

          <h1 className=" text-[35px] font-bold">{language == 'bn' ? 'জয়েন করুন ফ্রি সেমিনারে' : 'Join Free Seminar'}</h1>
          <img src={polygon3} alt="" className='absolute md:right-1/2 right-0 -mr-8 -top-2' />
          <img src={polygon4} alt="" className='absolute -left-12 top-1/2' />
          <p className='font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

          <div className="flex justify-center mt-6">
            <CourseSlider
              data={data}
              time={3000}
              width="313px"
              height="313px"
              radius="10px"
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"

            />
          </div>

        </div>



        <form
          action=""
          className="space-y-5  lg:w-2/3 bg-[#ED1B24]/10 p-[50px]"
        >

          <div>
            <input
              placeholder={language == 'bn' ? 'আপনার নাম*' : 'Your Name'}
              type="text"
              className="block rounded-[3px] py-[10px] px-5 outline-none w-full"
            />
          </div>

          <div>
            <input
              placeholder={language == 'bn' ? 'আপনার ইমেইল*' : 'Your Email'}
              type="email"
              className="block rounded-[3px]  py-[10px] px-5 outline-none w-full"
            />
          </div>

          <div>
            <input
              placeholder={language == 'bn' ? 'ফোন নাম্বার*' : 'Your Phone'}
              type="text"
              className="block rounded-[3px]  py-[10px] px-5 outline-none w-full"
            />
          </div>

          <div className="flex gap-x-3">
            <div className="w-1/2">
              <input
                type="date"
                className="block rounded-[3px]  py-[10px] px-5 outline-none w-full"
              />
            </div>
            <div className="w-1/2">
              <input
                type="time"
                className="block rounded-[3px]  py-[10px] px-5 outline-none w-full"
              />
            </div>
          </div>

          <div>
            <textarea
              name=""
              id=""
              cols="50"
              rows="4"
              placeholder={language == 'bn' ? 'কোনো মন্তব্য থাকলে করুন' : 'Your Comment'}
              className=" block w-full py-3 px-5 outline-none rounded-[5px]"
            ></textarea>
          </div>

          <img
            className="absolute right-0 lg:right-[110px] top-0 lg:top-16"
            src={polygon1}
            alt=""
          />

          <img className="absolute right-10 bottom-0" src={polygon2} alt="" />

          <div className="flex justify-end">
            <button className="py-[14px] w-full text-[19px font-semibold] bg-[#F52413] text-white rounded-[7px] ">
              Submit
            </button>
          </div>

        </form>



      </div>
    </div>
  );
};

export default CoursesForm;
