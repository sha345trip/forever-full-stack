import React, { useState, useEffect } from 'react';
import ban from "../assets/1.webp";

const SalesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const bann = ban;

  useEffect(() => {
    const isBannerShown = sessionStorage.getItem('bannerShown');
    if (!isBannerShown) {
      setShowBanner(true);
      sessionStorage.setItem('bannerShown', 'true');
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="relative w-[90%] max-w-3xl h-auto max-h-[80vh]">
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-white hover:text-gray-300 z-10"
          onClick={closeBanner}
        >
          &times;
        </button>
        <img
          src={bann}
          alt="Sales Banner"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default SalesBanner;
