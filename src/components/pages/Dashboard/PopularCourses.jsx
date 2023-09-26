import { useContext } from 'react';
import courseImg from '../../../assets/Courses1.svg'
import { MyContext } from '../../../Contaxt/Context';
const PopularCourses = () => {
    const { language } = useContext(MyContext)
    const aboutCard = [
        {
            id: "1",
            img: courseImg,
            price: "$50",
            headline: "AI Content writing tools",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        },
        {
            id: "2",
            img: courseImg,
            price: "$50",
            headline: "AI Content writing tools",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
        }
    ];
    return (
        <div className="mt-[30px]">
            <h3 className="text-xl font-bold">
            {language === 'bn' ?  'পপুলার ক্লাস সমূহ' : 'Popular Courses'}
            
                </h3>
            <div className="grid grid-cols-2 md:grid-cols-2  gap-5 mt-[17px]">
                {aboutCard.map(({ id, img, headline, info, price }) => (
                    <div
                        key={id}
                        className="px-[17px] py-[15px] border-[0.5px] border-gray-50 shadow-lg hover:shadow-lg bg-[#FFFFFF] rounded-[10px]"
                    >
                        <center>
                            <img
                                className="mb-[18px] w-full shadow-md rounded-[10px]"
                                src={img}
                                alt=""
                            />
                        </center>
                        <div className="">
                            <h3 className="text-[20px] font-bold mb-1 md:mb-[20px]">{headline}</h3>
                            <p className="mb-1 md:mb-[40px] text-sm md:text-lg">{info.slice(0,50) + "See More..."}</p>
                            <div className="flex justify-between items-center ">
                                <button className="my-btn px-[32px] py-[8px] bg-[#ED1B24] rounded-md text-white shadow-lg">
                                    Buy
                                </button>
                                <h3 className="text-[16px] font-bold">{price}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;