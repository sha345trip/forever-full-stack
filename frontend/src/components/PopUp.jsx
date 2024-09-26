import React, { useState, useEffect } from 'react';

const PopUp = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const isBannerShown = localStorage.getItem('bannerShown');
    if (!isBannerShown) {
      setShowBanner(true);
      localStorage.setItem('bannerShown', 'true');
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-white z-50 py-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-center items-center relative">
        <button
          className="absolute right-4 top-0 text-2xl font-bold text-white hover:text-gray-300"
          onClick={closeBanner}
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Special Sale!</h2>
          <p className="mt-2 text-lg">Get up to 50% off on selected items. Limited time offer!</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
