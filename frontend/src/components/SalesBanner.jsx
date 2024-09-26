import React, { useState, useEffect } from 'react';
import ban from "../assets/1.webp"

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
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={closeBanner}
        >
          &times;
        </button>
        {/* <h2 className="text-2xl font-bold mb-4">Special Sale!</h2>
        <p className="text-lg">Get up to 50% off on selected items. Limited time offer!</p> */}
        <img
          src={bann}
          alt="Sales Banner"
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SalesBanner;
