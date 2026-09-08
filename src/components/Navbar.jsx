import { useState, useEffect } from 'react'
import { musicBox } from '../utils/musicBox'
import { triggerConfetti } from '../utils/confetti'

export default function Navbar({ activeSection }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMusic = () => {
    if (isPlaying) {
      musicBox.stop()
      setIsPlaying(false)
    } else {
      triggerConfetti()
      setIsPlaying(true)
      musicBox.start(() => {
        setIsPlaying(false)
      })
    }
  }

  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1XQlN4nsA2PaMTAKc56GtaENkvuo6lNrb8ahPhz5hSKapeUESzilVQ5G5SHyEyLR9i6gEngAq1M1qN4rBdzyJutvR1Em-jRCE0hKYJDibxGob0qzcl8RYSo2zpIDNltqV-WLi21nUhuh96e_BmlTNibWosa1pPokJhp9x6iR4QhjsMZQBRR1Knp-LWOZ9nOee_K83wk2moGrjyg9RwECKQ4uL_MahTWH9Z3fN80jjRnPrzNRZQdcbuv4tU'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(219,39,119,0.08)] border-b border-pink-100/60'
          : 'bg-[#fff8f7]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(219,39,119,0.04)]'
      }`}
    >
      <div className="h-16 md:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center shadow-sm shrink-0 border border-pink-200 bg-pink-50">
            <img
              alt="Bich Nu Celebration Emblem"
              className="w-full h-full object-contain p-0.5"
              src={logoUrl}
            />
          </div>
          <a className="flex flex-col leading-tight group" href="#celebration">
            <span className="font-syne text-base sm:text-lg text-primary tracking-tight font-bold group-hover:text-primary-container transition-colors">
              Bich Nu's Birthday
            </span>
            <span className="text-[10px] sm:text-xs text-tertiary uppercase tracking-wider font-semibold">
              September 8, 2001
            </span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#fff0ef]/80 backdrop-blur-md border border-pink-100/80">
          <a
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'celebration'
                ? 'bg-white text-primary shadow-sm'
                : 'text-[#594047] hover:text-primary hover:bg-white/60'
            }`}
            href="#celebration"
          >
            Celebration
          </a>
          <a
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'heartfelt-note'
                ? 'bg-white text-primary shadow-sm'
                : 'text-[#594047] hover:text-primary hover:bg-white/60'
            }`}
            href="#heartfelt-note"
          >
            Heartfelt Note
          </a>
          <a
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'gallery'
                ? 'bg-white text-primary shadow-sm'
                : 'text-[#594047] hover:text-primary hover:bg-white/60'
            }`}
            href="#gallery"
          >
            Gallery
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Mobile Quick Nav Pills */}
          <div className="flex md:hidden items-center gap-1">
            <a
              className="px-2.5 py-1 rounded-full bg-[#fff0ef] text-secondary text-xs font-bold hover:text-primary transition-all flex items-center gap-1 border border-pink-100"
              href="#heartfelt-note"
            >
              <span className="material-symbols-outlined text-[13px] text-primary-container">favorite</span>
              <span>Thư</span>
            </a>
            <a
              className="px-2.5 py-1 rounded-full bg-[#fff0ef] text-secondary text-xs font-bold hover:text-primary transition-all flex items-center gap-1 border border-pink-100"
              href="#gallery"
            >
              <span className="material-symbols-outlined text-[13px] text-primary-container">photo_library</span>
              <span>Ảnh</span>
            </a>
          </div>

          {/* Melodies of Joy Audio Box */}
          <button
            onClick={toggleMusic}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all duration-300 active:scale-95 ${
              isPlaying
                ? 'bg-primary text-white shadow-pink-500/25 ring-2 ring-pink-300'
                : 'bg-[#fff0ef] text-secondary hover:bg-pink-100/70 border border-pink-200/60'
            }`}
            title="Nghe giai điệu Happy Birthday"
          >
            <span
              className={`material-symbols-outlined text-[16px] sm:text-[18px] ${
                isPlaying ? 'animate-bounce text-white' : 'text-primary-container'
              }`}
            >
              {isPlaying ? 'volume_up' : 'music_note'}
            </span>
            <span className="hidden sm:inline">
              {isPlaying ? 'Đang phát Melodies ♫' : 'Melodies of Joy ♫'}
            </span>
          </button>

          {/* Confetti Trigger */}
          <button
            onClick={triggerConfetti}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-sm hover:shadow-pink-300/50 hover:scale-105 active:scale-95 transition-all"
            title="Bắn pháo hoa Confetti"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">celebration</span>
          </button>
        </div>
      </div>
    </header>
  )
}
