import Navigation from '../components/Navigation.jsx'
import Hero from '../components/Hero.jsx'
import Problem from '../components/Problem.jsx'
import Solution from '../components/Solution.jsx'
import Features from '../components/Features.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Benefits from '../components/Benefits.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

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
