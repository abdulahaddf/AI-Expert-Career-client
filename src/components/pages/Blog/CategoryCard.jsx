/* eslint-disable react/prop-types */


const CategoryCard = ({
  category,
  index,
  selectedCheckboxes,
  handleCheckboxChange,
}) => {
  const handleCategoryClick = (e) => {
    if (e.target.type !== 'checkbox') {
      e.preventDefault();
      handleCheckboxChange({
        target: {
          value: category,
          checked: !selectedCheckboxes.includes(category),
        },
      });
    }
  };

  return (
    <div
      className="text-[16px] md:text-[20px] md:font-bold flex items-center "
      onClick={handleCategoryClick}
    >
      <input
        className="mr-2 checkbox checkbox-xs md:checkbox-md items-center"
        value={category}
        id={`flexCheckDefault-${index}`}
        checked={selectedCheckboxes.includes(category)}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label className="form-check-label " htmlFor={`flexCheckDefault-${index}`}>
        {category}
      </label>
    </div>
  );
};

export default CategoryCard;
