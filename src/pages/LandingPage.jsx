import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/Faq'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
        <Hero/>
        <Problem/>
        <Solution/>
        <Features/>
        <HowItWorks/>
        <Benefits/>
        <Pricing/>
        <Testimonials/>
        <FAQ/>
        <FinalCTA/>
        <Footer/>
      
    </div>
  )
}

export default LandingPage
