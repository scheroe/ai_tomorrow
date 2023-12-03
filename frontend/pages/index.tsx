import React, { useState } from 'react';
import NavigationButton from '../components/NavigationButton';
import SubpageOverlay from '../components/SubpageOverlay';
import '../app/globals.css';


const Page = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  const handleButtonClick = (pageSlug: string) => {
    setActivePage(pageSlug);
  };

  const closeOverlay = () => {
    setActivePage(null);
  };

  return (
    <div className="app-container relative h-screen">
      {/* Example for the CONFERENCE button */}
      <div className="absolute top-10 left-10 ...">
        <NavigationButton label="CONFERENCE" onClick={() => handleButtonClick('conference')} tailClassName="bg-blue-500 text-white py-2 px-4 cursor-pointer shadow-lg m-2" />
      </div>

      {/* Top-right button (CALL FOR PAPER) */}
      <div className="absolute top-10 right-10 transform rotate-12 sm:top-20 sm:right-20">
        <NavigationButton label="CALL FOR PAPER" onClick={() => handleButtonClick('call-for-paper')} tailClassName="bg-blue-500 text-white py-2 px-4 cursor-pointer shadow-lg m-2" />
      </div>

      {/* Bottom-left button (VENUE) */}
      <div className="absolute bottom-10 left-10 transform rotate-12 sm:bottom-20 sm:left-20">
        <NavigationButton label="VENUE" onClick={() => handleButtonClick('venue')} tailClassName="bg-blue-500 text-white py-2 px-4 cursor-pointer shadow-lg m-2" />
      </div>

      {/* Bottom-right button (BLOG) */}
      <div className="absolute bottom-10 right-10 transform -rotate-12 sm:bottom-20 sm:right-20">
        <NavigationButton label="BLOG" onClick={() => handleButtonClick('blog')} tailClassName="bg-blue-500 text-white py-2 px-4 cursor-pointer shadow-lg m-2" />
      </div>

      {/* Middle-left button (LAST YEAR) */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 -rotate-12 sm:left-20">
        <NavigationButton label="LAST YEAR" onClick={() => handleButtonClick('last-year')} tailClassName="bg-blue-500 text-white py-2 px-4 cursor-pointer shadow-lg m-2" />
      </div>

      {/* Central content or logo placeholder */}
      <div className="flex items-center justify-center h-full">
        {/* Insert central content or logo here */}
      </div>

      {/* Subpage Overlay */}
      {activePage && <SubpageOverlay page={activePage} onClose={closeOverlay} />}
    </div>
  );
};

export default Page;
