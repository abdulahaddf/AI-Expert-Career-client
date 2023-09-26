import { useContext } from "react";
import { MyContext } from "../../../Contaxt/Context";

const Activities = () => {

  const { language } = useContext(MyContext)

  const activitiesItem = [
    {
      titleEN: 'Success Student',
      rangeEN: '50k+',
      titleBN: 'সফল শিক্ষার্থী',
      rangeBN: '৫০+',
      color: 'rgba(186, 186, 186, 0.2)',
    },
    {
      titleEN: 'Teacher & Consultants',
      rangeEN: '50k+',
      titleBN: 'টিচারস এবং কন্সাল্টেন্ট',
      rangeBN: '৫০+',
      color: 'rgba(191, 223, 253, 0.2)',
    },
    {
      titleEN: 'Classes',
      rangeEN: '50k+',
      titleBN: 'ক্লাস',
      rangeBN: '৫০০+',
      color: 'rgba(168, 234, 195, 0.2)',
    },
    {
      titleEN: 'Tools',
      rangeEN: '50k+',
      titleBN: 'টুলস',
      rangeBN: '৫০+',
      color: 'rgba(90, 95, 227, 0.2)',
    },
  ];
  return (
    <div>
      <h1 className="text-center text-[35px] font-bold">{language == 'bn' ? 'আমাদের সুবিধা গুলো' : 'Our Facilities'}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[17px] mt-[70px]">
        {activitiesItem.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col h-[180px] rounded-[10px] justify-center items-center ActivitiesItem`}
            style={{ backgroundColor: `${item.color}` }}
          >
            <h2 className="text-[30px] text-center text-[#FF0944]/80 font-bold">
              {language == 'bn' ? item.rangeBN : item.rangeEN}
            </h2>
            <h2 className="text-[30px] text-center text-[#FF0944]/80 font-bold">
              {language == 'bn' ? item.titleBN : item.titleEN}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
