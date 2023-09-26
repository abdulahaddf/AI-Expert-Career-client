import img1 from "../Assests/Rectangle 92.svg";
import img2 from "../Assests/Rectangle 93.svg";
import img3 from "../Assests/Rectangle 94.svg";
import img4 from "../Assests/Rectangle 95.svg";
const IndividualCaseStudyCard = () => {
  const cards = [
    {
      id: 1,
      title: "Exploring the world",
      description: "Many of the examples include animated effects",
      publishedTime: "March, 2023",
      image: img1,
    },
    {
      id: 2,
      title: "Hello world message",
      description: "Many of the examples include animated effects",
      publishedTime: "March, 2023",
      image: img2,
    },
    {
      id: 1,
      title: "Crypto Space",
      description: "Many of the examples include animated effects",
      publishedTime: "March, 2023",
      image: img3,
    },
    {
      id: 1,
      title: "Fire First vs Water First",
      description: "Many of the examples include animated effects",
      publishedTime: "March, 2023",
      image: img4,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
      {cards.map((card, i) => (
        <div key={i}>
          <div className="flex gap-x-4 items-center">
            <div>
              <img src={card.image} alt="" className="cursor-pointer" />
            </div>
            <div>
              <h2 className="font-bold pb-3 cursor-pointer">{card.title}</h2>
              <p className="font-bold pb-1">
                {card.description.length > 100
                  ? card.description.slice(0, 70) + " See More..."
                  : card.description}
              </p>
              <span>{card.publishedTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndividualCaseStudyCard;
