import React from 'react';

const CaseStudyCategory = ({
  category,
  index,
  selectedCheckboxes,
  handleCheckboxChange,
}) => {
  return (
    <div className="text-[20px] flex gap-2 items-center font-bold">
      <input
        value={category}
        id={`flexCheckDefault-${index}`}
        checked={selectedCheckboxes.includes(category)}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
        {category}
      </label>
    </div>
  );
};

export default CaseStudyCategory;
