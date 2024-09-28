import React, { useState, useEffect } from 'react';
import bantwo from "../assets/b2.webp";
import banone from "../assets/b1.webp";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '../components/ui/button';

const CarouselDown = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [banone, bantwo];

  // Automatically switch slides every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <img
          src={slide}
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Left Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 z-20"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </Button>

      {/* Right Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 z-20"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default CarouselDown;
