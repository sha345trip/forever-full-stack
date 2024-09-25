import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>All Blueee is a royal home decor brand inspired by the rich cultural heritage of Jaipur, specializing in handcrafted blue pottery. Founded in 2024 by Suresh and Sujal, two IIT Roorkee students, All Blueee blends tradition with modern aesthetics, offering unique and timeless decor pieces. Each item is crafted by skilled artisans, bringing authentic craftsmanship into your home. From stunning vases to elegant oil diffusers, All Blueee products add a touch of elegance and charm to any space. We believe in sustainable, eco-friendly practices and supporting local artisans, making every piece not just decor but a story of tradition and art.</p>
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. We offer an extensive collection sourced from trusted brands and suppliers.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At All Blueee, our mission is to blend Jaipur’s rich cultural heritage with modern home decor. We aim to revive traditional blue pottery, supporting local artisans and promoting eco-friendly craftsmanship. By offering unique, handcrafted pieces, we help customers bring timeless elegance and sustainable art into their homes.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>Every product is crafted with care by skilled artisans, ensuring the highest level of craftsmanship. Our pieces are durable, authentic, and designed to last, adding timeless beauty to your home.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>We make your shopping experience hassle-free with easy online ordering, secure payment options, and fast delivery. Whether it's a small decor piece or a large order, we've got you covered.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'> Your satisfaction is our priority. Our dedicated team is always ready to assist, from product queries to post-purchase support. We pride ourselves on building a strong relationship with each of our customers.</p>
          </div>
      </div>

      {/* <NewsletterBox/> */}
      
    </div>
  )
}

export default About
