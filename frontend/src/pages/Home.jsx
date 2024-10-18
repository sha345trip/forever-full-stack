import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Carousel from '../components/Carousel'
import CarouselDown from '../components/CarousalDown'
import SalesBanner from '../components/SalesBanner'
import Marquee from '../components/Marquee'

const Home = () => {
  return (
    <div>
      <SalesBanner/>
      <Marquee/>
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
