// NavigationMenu.tsx
import React from 'react';
import NavigationButton from './NavigationButton';

const NavigationMenu: React.FC = () => {
  // Handlers for each navigation button
  const handleConferenceClick = () => {
    // Handle CONFERENCE click
  };

  const handleVenueClick = () => {
    // Handle VENUE click
  };

  const handleLastYearClick = () => {
    // Handle LAST YEAR click
  };

  const handleBlogClick = () => {
    // Handle BLOG click
  };

  const handleCallForPaperClick = () => {
    // Handle CALL FOR PAPER click
  };

  // Here you would add the specific styles for each button if needed
  const buttonStyles = {
    conference: {/* ... */},
    venue: {/* ... */},
    lastYear: {/* ... */},
    blog: {/* ... */},
    callForPaper: {/* ... */}
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <NavigationButton
        label="CONFERENCE"
        onClick={handleConferenceClick}
        style={buttonStyles.conference}
      />
      <NavigationButton
        label="VENUE"
        onClick={handleVenueClick}
        style={buttonStyles.venue}
      />
      <NavigationButton
        label="LAST YEAR"
        onClick={handleLastYearClick}
        style={buttonStyles.lastYear}
      />
      <NavigationButton
        label="BLOG"
        onClick={handleBlogClick}
        style={buttonStyles.blog}
      />
      <NavigationButton
        label="CALL FOR PAPER"
        onClick={handleCallForPaperClick}
        style={buttonStyles.callForPaper}
      />
    </div>
  );
};

export default NavigationMenu;
