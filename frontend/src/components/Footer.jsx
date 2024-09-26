import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            All Blueee is a royal home decor brand inspired by Jaipur’s rich cultural heritage. We specialize in handcrafted blue pottery, blending traditional artistry with modern design. Founded by IIT Roorkee students, we aim to bring elegance and timeless craftsmanship into your home while supporting local artisans and eco-friendly practices.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About Us</a></li>
                <li><a href='/collection'>Collection</a></li>
                <li><a href='/policy'>Privacy Policy</a></li>
                <li><a href='/Terms&Conditions'>Terms & Connditions</a></li>
                <li><a href='/refund'>Refund & Cancellation</a></li>
                <li><a href='/Shipping'>Shipping Policy</a></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+916367485143</li>
                <li>+918278692437</li>
                <li>allblueee2024@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ allblueee.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
