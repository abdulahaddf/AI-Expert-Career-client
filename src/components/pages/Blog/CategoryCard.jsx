import React from 'react';

const CategoryCard = ({
  category,
  index,
  selectedCheckboxes,
  handleCheckboxChange,
}) => {
  return (
    <div className="text-[20px] font-bold">
      <input
        className='mr-2'
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
