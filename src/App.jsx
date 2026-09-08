import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CakeSection from './components/CakeSection'
import LetterSection from './components/LetterSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import SecretEntrance from './components/SecretEntrance'
import { musicBox } from './utils/musicBox'

export default function App() {
  const [activeSection, setActiveSection] = useState('celebration')

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const celebrationEl = document.getElementById('celebration')
      const cakeEl = document.getElementById('interactive-cake')
      const letterEl = document.getElementById('heartfelt-note')
      const galleryEl = document.getElementById('gallery')

      const scrollPos = window.scrollY + 150

      if (galleryEl && scrollPos >= galleryEl.offsetTop) {
        setActiveSection('gallery')
      } else if (letterEl && scrollPos >= letterEl.offsetTop) {
        setActiveSection('heartfelt-note')
      } else if (cakeEl && scrollPos >= cakeEl.offsetTop) {
        setActiveSection('interactive-cake')
      } else {
        setActiveSection('celebration')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenSurprise = () => {
    // Automatically play sweet birthday music box melody upon unwrapping
    musicBox.start()
  }

  return (
    <div className="relative min-h-screen bg-[#fff8f7] text-[#231918] selection:bg-[#ffd8e7] selection:text-[#3d0026] overflow-x-hidden font-nunito">
      {/* Birthday Surprise Gate with Particle & Confetti Fireworks System */}
      <SecretEntrance onOpen={handleOpenSurprise} />

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ffb1c7]/30 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#ffd8e7]/40 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-[#ffd8ed]/30 blur-3xl"></div>
      </div>

      {/* Navigation Header (Adaptive for Mobile and Desktop) */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full pt-16 md:pt-20">
        <HeroSection />
        <CakeSection />
        <LetterSection />
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
