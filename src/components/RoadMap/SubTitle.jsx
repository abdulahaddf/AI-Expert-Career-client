import React from 'react';

const SubTitle = ({ subtitles }) => {
  return (
    <div
      style={{ fontFamily: 'Josefin Sans' }}
      className="border-l-2 border-red-500 pl-2 text-lg space-y-2 mx-6"
    >
      {subtitles.map((subtitle) => (
        <p key={subtitle}>{subtitle}</p>
      ))}
    </div>
  );
};

export default SubTitle;
