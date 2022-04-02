import React from 'react'
import HeroImagine from '../components/HeroImagine'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainingSection from '../components/TrainingSection'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImagine heading = "TRAINING" text ="Pre-Flight & In-Flight Training"/>
        <TrainingSection/>
        <Footer/>

    </div>
  )
}

export default Training