import React, { useState, useEffect } from 'react';
import banone from "../assets/b1.webp";
import bantwo from "../assets/b2.webp";
import banthree from "../assets/b3.webp";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Carousel =() =>{
    const[currentSlide, setCurrentSlide] = useState(0)
    const slides = [banone, bantwo, banthree];

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);
        return () => clearInterval(timer);
      }, []);
return (
<div className="relative w-full h-[600px] overflow-hidden">
{slides.map((slide, index) => (
      <img
        src={slide}
        key={index}
        className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'}absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
      />
    ))
  }
<button
//   variant="outline"
  size="icon"
  onClick={() =>
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + slides.length) %
        slides.length
    )
  }
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
>
  <ChevronLeftIcon className="w-4 h-4" />
</button>
<button
//   variant="outline"
  size="icon"
  onClick={() =>
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % slides.length
    )
  }
  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
>
  <ChevronRightIcon className="w-4 h-4" />
</button>
</div>
)
}
export default Carousel