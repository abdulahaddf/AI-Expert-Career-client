import img1 from "../Assests/Rectangle.png";
import img2 from "../Assests/Rectangle1.png";
import img3 from "../Assests/Rectangle2.png";
import img4 from "../Assests/Rectangle3.png";
import img5 from "../Assests/Rectangle4.png";
import img6 from "../Assests/Rectangle5.png";
import img7 from "../Assests/Rectangle6.png";
import img8 from "../Assests/Rectangle7.png";
import img9 from "../Assests/Rectangle8.png";
import img10 from "../Assests/Rectangle9.png";
import img11 from "../Assests/Rectangle10.png";
import img12 from "../Assests/Rectangle11.png";
import viwes from "../Assests/views.png";
import comment from "../Assests/comment.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const IndividualBlogCard = () => {
  const blogs = [
    {
      id: 1,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img1,
    },
    {
      id: 2,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img2,
    },
    {
      id: 3,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img3,
    },
    {
      id: 4,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img4,
    },
    {
      id: 5,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img5,
    },
    {
      id: 6,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img6,
    },
    {
      id: 7,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img7,
    },
    {
      id: 8,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img8,
    },
    {
      id: 9,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img9,
    },
    {
      id: 10,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img10,
    },
    {
      id: 11,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus ut labore quod dolorum ab expedita dolor fugiat sed voluptas?",
      comments: "50",
      views: "50",
      image: img11,
    },
    {
      id: 12,
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem inventore dolorum hic cum ratione, at unde iusto numquam ea dolor.",
      comments: "50",
      views: "50",
      image: img12,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 lg:gap-[40px] justify-center">
        {blogs?.slice(0, 4).map((blog) => (
          <div
            key={blog.id}
            className="bg-white  w-full rounded-[10px]"
          >
            <div className="flex flex-col p-3 gap-5 justify-center items-center">
              <img
                className=" w-full  "
                src={blog.image}
                alt=""
              />
              <div className="p-4">
                <h2 className="font-bold text-[16px]">{blog.title}</h2>
                <p className="w-full">
                  {blog.description.slice(0, 70)} <span className="text-[gray]">...</span>
                </p>

                <div className="flex justify-between items-center gap-[40px]">
                  <div>
                    <Link to={`/individual-blog/${blog.id}`} >
                      <button className="w-[91px] h-[44px] bg-[#ED1B23] text-white text-[16px] font-[600] rounded-[10px]">
                        Read
                      </button>
                    </Link>

                  </div>
                  <div className="flex justify-between gap-[30px]">
                    <div className="flex gap-1 cursor-pointer">
                      <img className="w-[22px] h-[15px]" src={viwes} alt="" />
                      <p className="font-bold text-[14px]">{blog.views}</p>
                    </div>

                    <div className="flex gap-1 cursor-pointer">
                      <img className="w-[16px] h-[16px]" src={comment} alt="" />
                      <p className="font-bold text-[14px]">{blog.comments}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualBlogCard;
