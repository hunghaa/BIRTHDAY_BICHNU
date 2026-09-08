import { useState, useEffect } from 'react'

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1XQlN4nsA2PaMTAKc56GtaENkvuo6lNrb8ahPhz5hSKapeUESzilVQ5G5SHyEyLR9i6gEngAq1M1qN4rBdzyJutvR1Em-jRCE0hKYJDibxGob0qzcl8RYSo2zpIDNltqV-WLi21nUhuh96e_BmlTNibWosa1pPokJhp9x6iR4QhjsMZQBRR1Knp-LWOZ9nOee_K83wk2moGrjyg9RwECKQ4uL_MahTWH9Z3fN80jjRnPrzNRZQdcbuv4tU'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(219,39,119,0.08)] border-b border-pink-100/60'
          : 'bg-[#fff8f7]/85 backdrop-blur-md shadow-[0_4px_24px_rgba(219,39,119,0.04)]'
      }`}
    >
      <div className="h-16 md:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center shadow-sm shrink-0 border border-pink-200 bg-pink-50">
            <img
              alt="Bích Nụ Celebration Emblem"
              className="w-full h-full object-contain p-0.5"
              src={logoUrl}
            />
          </div>
          <a className="flex flex-col leading-tight group truncate" href="#celebration">
            <span className="font-syne text-base sm:text-lg text-primary tracking-tight font-bold group-hover:text-primary-container transition-colors truncate">
              Bích Nụ's Birthday
            </span>
            <span className="text-[10px] sm:text-xs text-tertiary uppercase tracking-wider font-semibold">
              08.09.2001
            </span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#fff0ef]/80 backdrop-blur-md border border-pink-100/80">
          <a
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'celebration'
                ? 'bg-white text-primary shadow-sm'
                : 'text-[#594047] hover:text-primary hover:bg-white/60'
            }`}
            href="#celebration"
          >
            Chúc Mừng
          </a>
          <a
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'heartfelt-note'
                ? 'bg-white text-primary shadow-sm'
                : 'text-[#594047] hover:text-primary hover:bg-white/60'
            }`}
            href="#heartfelt-note"
          >
            Lời Chúc
          </a>
          <a
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'gallery'
                ? 'bg-white text-primary shadow-sm'
                : 'text-[#594047] hover:text-primary hover:bg-white/60'
            }`}
            href="#gallery"
          >
            Kỷ Niệm
          </a>
        </nav>
      </div>
    </header>
  )
}
