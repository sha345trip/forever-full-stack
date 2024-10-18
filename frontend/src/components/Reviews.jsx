import React from 'react'
import Title from './Title'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
import r4 from '../assets/r4.png'

const Reviews = () => {
  return (
    <div className="my-13">
      <div className="text-center text-3xl py-3 mt-20">
        <Title text1={'CUSTOMER'} text2={"REVIEWS"} />
      </div>

      {/* Responsive container */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        
        {/* Review column */}
        <div className="flex flex-col items-center">
          <div className="w-full flex mb-2">
            <img 
              src={r1} 
              alt="Review 1" 
              className="transition-transform duration-300 w-40 h-80" 
            />
          </div>
          <div className="w-full flex mb-2">
            <img 
              src={r2} 
              alt="Review 2" 
              className="transition-transform duration-300 w-40 h-80" 
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex mb-2">
            <img 
              src={r3} 
              alt="Review 3" 
              className="transition-transform duration-300 w-80 h-100" 
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex mb-2">
            <img 
              src={r4} 
              alt="Review 4" 
              className="transition-transform duration-300 w-40 h-80" 
            />
          </div>
          <div className="w-full flex mb-2">
            <img 
              src={r1} 
              alt="Review 1" 
              className="transition-transform duration-300 w-40 h-80" 
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex mb-2">
            <img 
              src={r2} 
              alt="Review 2" 
              className="transition-transform duration-300 w-80 h-100" 
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex mb-2">
            <img 
              src={r3} 
              alt="Review 3" 
              className="transition-transform duration-300 w-40 h-80" 
            />
          </div>
          <div className="w-full flex mb-2">
            <img 
              src={r4} 
              alt="Review 4" 
              className="transition-transform duration-300 w-40 h-80" 
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reviews
