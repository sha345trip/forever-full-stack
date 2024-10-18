import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full bg-blue-800 overflow-hidden whitespace-nowrap mb-4 py-1">
      <div className="inline-block animate-marquee text-white">
        <span className="px-4">
          Welcome to All Blueee! Explore our exclusive royal blue pottery, scented candles, and more!
        </span>
        {/* Duplicating the text to ensure continuous scrolling */}
        <span className="px-4">
          Free Shipping on orders above 399/-
        </span>
        <span className="px-4">
          FESTIVE SALE is live now !! Get 30% off on all products.
        </span>
        <span className="px-4">
          Let's give your home a Bluetiful makeover!
        </span>
      </div>
    </div>
  );
};

export default Marquee;
