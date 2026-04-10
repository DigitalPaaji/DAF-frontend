import React from 'react';

const BottleCompo = ({ bottleImg, lableImg, accentClass }) => {
  return (
    <div className="relative w-40 h-56 banner">

      {/* Background Label Container */}
      <div className={`absolute bottom-10 overflow-hidden  w-full ${accentClass}`}>
        <img 
          src={`/Banner/${lableImg}`} 
          alt="Product Label" 
          // Kept your base left offset, but animation is now handled via transform
          className="max-w-[70rem] max-h-[7rem] relative -left-[145%] labelimg pointer-events-none" 
        />
      </div>

      {/* Bottle Foreground */}
      <img
        src={`/Banner/${bottleImg}`}
        alt="Bottle"
        className="relative w-40 -z-10 drop-shadow-2xl" /* Added drop shadow for depth */
      />

    </div>
  );
};

export default BottleCompo;