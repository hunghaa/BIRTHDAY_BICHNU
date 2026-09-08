import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LetterSection from './components/LetterSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import LightboxModal from './components/LightboxModal'
import { galleryPhotos } from './data/galleryData'

export default function App() {
  const [activeSection, setActiveSection] = useState('celebration')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const celebrationEl = document.getElementById('celebration')
      const letterEl = document.getElementById('heartfelt-note')
      const galleryEl = document.getElementById('gallery')

      const scrollPos = window.scrollY + 150

      if (galleryEl && scrollPos >= galleryEl.offsetTop) {
        setActiveSection('gallery')
      } else if (letterEl && scrollPos >= letterEl.offsetTop) {
        setActiveSection('heartfelt-note')
      } else {
        setActiveSection('celebration')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lightbox Next/Prev Handlers
  const handleNextPhoto = () => {
    if (!selectedPhoto) return
    const currentIndex = galleryPhotos.findIndex((p) => p.id === selectedPhoto.id)
    const nextIndex = (currentIndex + 1) % galleryPhotos.length
    setSelectedPhoto(galleryPhotos[nextIndex])
  }

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return
    const currentIndex = galleryPhotos.findIndex((p) => p.id === selectedPhoto.id)
    const prevIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length
    setSelectedPhoto(galleryPhotos[prevIndex])
  }

  return (
    <div className="relative min-h-screen bg-[#fff8f7] text-[#231918] selection:bg-[#ffd8e7] selection:text-[#3d0026] overflow-x-hidden font-nunito">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ffb1c7]/30 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#ffd8e7]/40 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-[#ffd8ed]/30 blur-3xl"></div>
      </div>

      {/* Navigation Header (Tự thích ứng cả Mobile và Desktop) */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full pt-16 md:pt-20">
        <HeroSection />
        <LetterSection />
        <GallerySection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal khi bấm vào ảnh */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />
      )}
    </div>
  )
}
