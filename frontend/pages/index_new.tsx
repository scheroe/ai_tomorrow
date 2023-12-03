import React, { useState } from 'react';
import NavigationButton from '../components/NavigationButton';
import SubpageOverlay from '../components/SubpageOverlay';
import '../styles/styles.css'; // This should import your ButtonStyles.css

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
      {/* Assuming 'button-base' is the class name for your styled buttons */}
      <div className="absolute top-10 left-10">
        <NavigationButton label="CONFERENCE" onClick={() => handleButtonClick('conference')} />
      </div>

      {/* ...other buttons */}
      <div className="absolute top-10 right-10">
        <NavigationButton label="CALL FOR PAPER" onClick={() => handleButtonClick('call-for-paper')} className="button-base" />
      </div>

      {/* ...repeat for each button */}
      <div className="absolute bottom-10 left-10">
        <NavigationButton label="VENUE" onClick={() => handleButtonClick('venue')} className="button-base" />
      </div>

      <div className="absolute bottom-10 right-10">
        <NavigationButton label="BLOG" onClick={() => handleButtonClick('blog')} className="button-base" />
      </div>

      <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
        <NavigationButton label="LAST YEAR" onClick={() => handleButtonClick('last-year')} className="button-base" />
      </div>

      {/* Subpage Overlay */}
      {activePage && <SubpageOverlay page={activePage} onClose={closeOverlay} />}
    </div>
  );
};

export default Page;
