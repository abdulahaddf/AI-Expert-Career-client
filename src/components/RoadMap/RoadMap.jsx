// import React from 'react';
// import LeftNav from './LeftNav';
// import RightSide from './RightSide';
// import { useState } from 'react';
// import technologyImg from '../../assets/technology.png';

// const RoadMap = () => {
//   const [selectedItem, setSelectedItem] = useState('AiExpert');

//   const handleNavbarItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <>
//       <div>
//         <img src={technologyImg} className="w-full mb-3" alt="" />
//       </div>
//       <div className="grid grid-cols-[2fr_4fr] max-w-full ">
//         <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
//           <LeftNav
//             onItemClick={handleNavbarItemClick}
//             selectedItem={selectedItem}
//           />
//         </div>

//         <div>
//           <RightSide selectedItem={selectedItem} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default RoadMap;
