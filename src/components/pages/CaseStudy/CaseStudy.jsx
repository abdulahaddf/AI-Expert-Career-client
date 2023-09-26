import blogBanner from './Assests/blogbanner.png';
import icon from './Assests/RectangleIon.png';
import left from './Assests/left.svg';
import right from './Assests/right.svg';
import { useContext, useEffect, useState } from 'react';
import img1 from './Assests/Rectangle.png';
import img2 from './Assests/Rectangle1.png';
import img3 from './Assests/Rectangle2.png';
import img4 from './Assests/Rectangle3.png';
import img5 from './Assests/Rectangle4.png';
import img6 from './Assests/Rectangle5.png';
import img7 from './Assests/Rectangle6.png';
import img8 from './Assests/Rectangle7.png';
import img9 from './Assests/Rectangle8.png';
import img10 from './Assests/Rectangle9.png';
import img11 from './Assests/Rectangle10.png';
import img12 from './Assests/Rectangle11.png';
import CaseStudyCategory from './CaseStudyCategory';
import CaseStudyCard from './CaseStudyCard';
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MyContext } from '../../../Contaxt/Context';

const categories = [
  'Machine Learning',
  'deep learning',
  'Blockchain technology',
  'Digital Marketing',
  'Graphic design',
  'Cryptocurrency',
  'Modern ai',
];

const productsData = [
  {
    id: 1,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    type_data: 'Trends',
    views: '50',
    image: img1,
  },
  {
    id: 2,
    title: 'deep learning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    type_data: 'Most Reviews',
    views: '50',
    image: img2,
  },
  {
    id: 3,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    type_data: 'Other',
    views: '50',
    image: img3,
  },
  {
    id: 4,
    title: 'Blockchain technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img4,
  },
  {
    id: 5,
    title: 'Blockchain technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img5,
  },
  {
    id: 6,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img6,
  },
  {
    id: 7,
    title: 'Blockchain technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img7,
  },
  {
    id: 8,
    title: 'Blockchain technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img8,
  },
  {
    id: 9,
    title: 'Blockchain technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img9,
  },
  {
    id: 10,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img10,
  },
  {
    id: 11,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?',
    comments: '50',
    views: '50',
    image: img11,
  },
  {
    id: 12,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem inventore dolorum hic cum ratione, at unde iusto numquam ea dolor.',
    comments: '50',
    views: '50',
    image: img12,
  },
];

const CaseStudy = () => {

  const { language } = useContext(MyContext)
  const [newData, setNewData] = useState(productsData);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const pagination = [1, 2, 3, 4, 5];

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((value) => value !== checkboxValue)
      );
    }
  };

  const filteredProducts =
    selectedCheckboxes.length === 0
      ? newData
      : newData.filter((product) => selectedCheckboxes.includes(product.title));

  const getFilter = (event) => {
    const filters = event.target.value;
    if (filters === 'Trends') {
      const filterData = productsData.filter(
        (product) => product.type_data === filters
      );
      setNewData(filterData);
    } else if (filters === 'Most Reviews') {
      const filterData = productsData.filter(
        (product) => product.type_data === filters
      );
      setNewData(filterData);
    } else if (filters === 'Other') {
      const filterData = productsData.filter(
        (product) => product.type_data === filters
      );
      setNewData(filterData);
    } else {
      setNewData(productsData);
    }
  };

  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-[120px]">
      <div
        className=""
        style={{
          backgroundImage: `url(${blogBanner})`,
          backgroundSize: 'cover',
          height: '302px',
          width: 'full',
          boxShadow: '0px 3px 15px -1px #3c383834'
        }}
      >
        <div className="width-screen flex flex-col items-center justify-center py-[90px]">
          <h2 className="text-[30px] font-bold">{language == 'bn' ? 'এ আই উইজ কেইস বা কেইস স্টাডিস' : 'AI Use Case or Case Study'}</h2>
          <img className="w-[31px] pb-[30px]" src={icon} alt="" />
          <p className="lg:w-[689px] text-center text-[#484848]">
            {language == 'bn' ? 'আপনি যেকোনো বেকগ্রাউন্ডের স্টুডেন্ট বা লার্নার হোন না কেনো, সঠিক রোডম্যাপ পারে আপনাকে আপনাকে পৌছে দিতে পারে সফলতার শীর্ষে। আমাদের এ আই রোডম্যাপ এবং কনসাল্টেন্সি সার্ভিস বিভিন্ন এ এই এক্সপার্টদের দ্বারা তৈরি করা' : 'Welcome to our AI-related blog, where we delve into the limitless possibilities of Artificial Intelligence and its impact on various fields.'}
          </p>
        </div>
      </div>

      <div className=" py-[122px]">
        <div className="flex justify-end">
          <div className=" mb-[33px] md:block hidden">
            <div className='lg:hidden text-2xl'>
              <BiDotsHorizontalRounded />
            </div>
            <select
              onChange={getFilter}
              className="w-24 py-4 border-none bg-white text-center text-[#ED1B23] text-xl font-bold"
            >
              <option defaultChecked>All</option>
              <option value="Trends">Trends</option>
              <option value="Most Reviews">Most Reviews</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 gap-[15px]">
          <div className='hidden lg:block'>
            <div className="flex flex-col justify-between items-center">
              <h2 className="font-bold text-[20px] pb-[40px]">
                {language == 'bn' ? 'ক্যাটাগরি পছন্দ করুন' : 'Filter category'}
              </h2>
              <div className="md:block hidden">
                {categories?.map((category, index) => (
                  <CaseStudyCategory
                    key={index}
                    category={category}
                    selectedCheckboxes={selectedCheckboxes}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </div>
              <div className="block md:hidden mb-10">
                <h2 className="font-bold text-[18px] pb-[20px] block md:hidden">
                  Filter category
                </h2>
                <div className="lg:flex w-full">
                  <div>
                    {categories?.map((category, index) => (
                      <div key={index} className="text-[20px] font-bold">
                        <input
                          value={category}
                          id={`flexCheckDefault-${index}`}
                          checked={selectedCheckboxes.includes(category)}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                        />{' '}
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckDefault-${index}`}
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex justify-end mb-[33px] mt-4 md:mt-0 ">
                      <select
                        onChange={getFilter}
                        id="countries"
                        className="bg-gray-50 border w-full md:w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option defaultChecked>All</option>
                        <option value="Trends">Trends</option>
                        <option value="Most Reviews">Most Reviews</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="">
              <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-4 justify-center">
                {filteredProducts?.map((study) => (
                  <CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center pt-[40px]">
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold flex justify-center items-center">
            <img src={left} alt="" />
          </div>
          {pagination?.map((pageNumber, i) => (
            <button
              key={i}
              className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold"
            >
              {pageNumber}
            </button>
          ))}
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-[10px] font-bold flex justify-center items-center">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
