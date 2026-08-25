import React from 'react';

const BottleCompo = ({ bottleImg, lableImg, accentClass }) => {
  return (
    <div className="relative w-40  banner">

      {/* Background Label Container */}
      <div className={`absolute overflow-hidden top-[32%]   w-full ${accentClass}`}>
        <img 
          src={`/Banner/${lableImg}`} 
          alt="Product Label" 
          
          className="max-w-[70rem]  h-[11rem] relative -left-[100%] labelimg  pointer-events-none" 
        />
      </div>

    
      <img
        src={`/Banner/${bottleImg}`}
        alt="Bottle"
        className="relative w-44 h-[20rem]  -z-10 drop-shadow-2xl bannerImage " /* Added drop shadow for depth */
      />

    </div>
  );
};

export default BottleCompo;