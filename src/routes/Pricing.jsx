import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImagine from '../components/HeroImagine'
import PricingCard from '../components/PricingCard'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImagine heading ='PRICING' text='Choose your trip'/>
        <PricingCard/>
        <Footer/>

    </div>
  )
}

export default Pricing