import { useState } from 'react';
import Navbar from '../common/Navbar';

import { Outlet } from 'react-router-dom';
import LeftNav from '../RoadMap/LeftNav';
import BannerImag from '../RoadMap/BannerImag';
import Footer from '../common/footer/Footer';

const RoadMapLayout = () => {
  const [selectedItem, setSelectedItem] = useState('AiExpert');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavbarItemClick = (item) => {
    setSelectedItem(item);
  };
  const gradientColor =
    'linear-gradient(176.98deg, #FFF3F8 -4.94%, #E1F9F0 42.2%, rgba(244, 213, 255, 0.96) 110.23%)';

  const [scrollNav, setScrollNav] = useState(false);
  const scrollEffect = () => {
    if (window.scrollY >= 99) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener('scroll', scrollEffect);

  return (
    <div
      style={{ background: gradientColor }}
      className="min-h-screen relative"
    >
      <Navbar />
      <BannerImag />
      {
        <div className="lg:grid grid-cols-[400px_4fr] max-w-full relative ">
          <div className="">
            <div
              className="hidden lg:block sticky top-20"
              style={{
                width: '100%',
                overflowY: 'auto',
                height: '100vh',
              }}
            >
              <LeftNav
                onItemClick={handleNavbarItemClick}
                selectedItem={selectedItem}
              />
            </div>
          </div>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-[90%] z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div></div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    className="text-xs"
                    style={{
                      width: '100%',
                      overflowY: 'auto',
                    }}
                  >
                    <LeftNav
                      onItemClick={handleNavbarItemClick}
                      selectedItem={selectedItem}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-10">
            <Outlet />
          </div>
        </div>
      }

      <Footer />
    </div>
  );
};

export default RoadMapLayout;