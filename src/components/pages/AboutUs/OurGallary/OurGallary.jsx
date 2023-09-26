import { useContext } from 'react';
import slideImg from '../../../../assets/aboutus/Rectangle 72.png';
import Carousel from './Carousel';
import { MyContext } from '../../../../Contaxt/Context';
const OurGallary = () => {

  const {language} = useContext(MyContext)

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
    <div className="mt-[70px]">
      <h1 className="text-center text-[35px] font-bold">{language == 'bn' ? 'সফল সেমিনার ও ওয়ার্কশপ' : 'Successful seminars & workshops'}</h1>
      <div className=" flex justify-center mt-12">
        <Carousel
          data={data}
          time={3000}
          width="850px"
          height="500px"
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
        // style={{
        //     textAlign: "center",
        //     maxWidth: "850px",
        //     maxHeight: "500px",
        //     margin: "40px auto",
        // }}
        />
      </div>
    </div>
  );
};

export default OurGallary;
