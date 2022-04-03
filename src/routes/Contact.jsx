import React from 'react'
import Navbar from '../components/Navbar'
import HeroImagine from '../components/HeroImagine'
import Footer from '../components/Footer'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImagine heading ='CONTACT' text ='Contact Infinity Travel'/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact