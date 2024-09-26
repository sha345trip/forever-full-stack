import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Carousel from '../components/Carousel'
import CarouselDown from '../components/CarousalDown'
import PopUp from '../components/PopUp'

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <PopUp/> */}
      <Carousel/>
      <LatestCollection/>
      <BestSeller/>
      <CarouselDown/>
      <OurPolicy/>
      {/* <NewsletterBox/> */}
    </div>
  )
}

export default Home
