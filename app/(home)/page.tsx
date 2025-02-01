import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Languages from './components/Languages';
import Certifications from './components/Certifications';


export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden ">
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative'>
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'>

        </div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills/>
        <Languages/>
        <Projects/>
        <Certifications/>
        <Footer/>
      </div>
    </div>
  )
}
