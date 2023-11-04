/* eslint-disable react/prop-types */
import React from 'react';

const CategoryCard = ({
  category,
  index,
  selectedCheckboxes,
  handleCheckboxChange,
}) => {
  return (
    <div className="text-[16px] md:text-[20px] md:font-bold flex items-center ">
      <input
        className='mr-2 checkbox checkbox-xs md:checkbox-md items-center'
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
