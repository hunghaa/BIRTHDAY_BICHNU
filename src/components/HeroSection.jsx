import { useState } from 'react'
import { triggerConfetti, triggerHeartConfetti } from '../utils/confetti'

export default function HeroSection({ onOpenWishModal }) {
  const [likes, setLikes] = useState(520)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    setLikes((prev) => prev + 1)
    setHasLiked(true)
    triggerHeartConfetti()
  }

  const stats = [
    { value: '24', label: 'Sunlit Years', color: 'text-primary' },
    { value: 'Sept 8', label: 'Golden Birthday', color: 'text-primary-container' },
    { value: '1,000+', label: 'Smiles Shared', color: 'text-secondary' },
    { value: '∞', label: 'Classroom Warmth', color: 'text-primary' },
  ]

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 sm:pt-14 pb-14 sm:pb-20 flex flex-col items-center text-center overflow-hidden"
      id="celebration"
    >
      {/* Floating Decorative Balloons - Left */}
      <div className="absolute left-1 sm:left-6 lg:left-12 top-2 sm:top-8 flex flex-col items-center animate-bounce duration-[6000ms] pointer-events-none opacity-85 z-0">
        <div className="w-11 h-14 sm:w-16 sm:h-20 rounded-full bg-gradient-to-t from-primary-fixed to-secondary-container shadow-[0_12px_24px_rgba(219,39,119,0.22)] relative">
          <span className="absolute bottom-1 right-2 sm:right-3 text-[9px] sm:text-[11px] text-white font-black drop-shadow">
            24
          </span>
          <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary-container"></div>
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 sm:h-8 bg-outline-variant/60"></div>
        </div>
        <div className="w-9 h-12 sm:w-12 sm:h-16 -mt-3 -ml-4 sm:-ml-6 rounded-full bg-gradient-to-t from-secondary-fixed to-primary-fixed-dim shadow-[0_8px_20px_rgba(244,114,182,0.25)] relative">
          <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-secondary"></div>
          <div className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2 w-[1px] h-5 sm:h-7 bg-outline-variant/60"></div>
        </div>
      </div>

      {/* Floating Decorative Balloons - Right */}
      <div className="absolute right-1 sm:right-6 lg:right-12 top-4 sm:top-10 flex flex-col items-center animate-bounce duration-[7000ms] pointer-events-none opacity-85 z-0">
        <div className="w-10 h-13 sm:w-14 sm:h-18 rounded-full bg-gradient-to-t from-tertiary-fixed to-secondary-fixed shadow-[0_10px_20px_rgba(117,83,104,0.18)] relative">
          <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-tertiary"></div>
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 sm:h-8 bg-outline-variant/60"></div>
        </div>
        <div className="w-11 h-14 sm:w-16 sm:h-20 -mt-3 ml-4 sm:ml-6 rounded-full bg-gradient-to-t from-primary-fixed-dim to-primary-container/70 shadow-[0_12px_24px_rgba(219,39,119,0.2)] relative">
          <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary"></div>
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 sm:h-8 bg-outline-variant/60"></div>
        </div>
      </div>

      {/* Celebration Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#f7e4e2]/90 text-primary shadow-[0_4px_16px_rgba(219,39,119,0.12)] backdrop-blur-md mb-4 sm:mb-6 border border-pink-200/50">
        <span className="material-symbols-outlined text-[15px] sm:text-[18px] text-pink-600 animate-spin duration-3000">
          auto_awesome
        </span>
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-bold text-primary">
          Sept 8, 2001 • Celebrating 24 Radiant Years
        </span>
        <span className="material-symbols-outlined text-[15px] sm:text-[18px] text-pink-600">
          cake
        </span>
      </div>

      {/* Main Title */}
      <h1 className="relative z-10 font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#231918] max-w-4xl mx-auto drop-shadow-sm leading-tight px-2">
        Happy Birthday <br className="xs:hidden" />
        <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent underline decoration-pink-300/80 decoration-wavy decoration-2 sm:decoration-4">
          Bich Nu
        </span>{' '}
        🎂
      </h1>

      {/* Subtitle / Bio note */}
      <p className="relative z-10 mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#594047] max-w-3xl mx-auto leading-relaxed px-3">
        Dedicated to <strong className="text-primary font-semibold">Bich Nu</strong> (Nguyễn Thị Cẩm Nguyệt • September 8, 2001) — our most radiant, passionate, and inspiring English teacher who turns every single day into a joyful celebration of learning, laughter, and endless light.
      </p>

      {/* Call To Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          onClick={handleLike}
          className="group px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary via-primary-container to-secondary hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-200 active:scale-95 flex items-center gap-2 text-sm sm:text-base"
        >
          <span
            className={`material-symbols-outlined text-lg sm:text-xl ${
              hasLiked ? 'text-yellow-200 animate-ping' : 'text-white'
            }`}
          >
            favorite
          </span>
          <span>Thả tim ({likes})</span>
        </button>

        <a
          href="#heartfelt-note"
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[#594047] hover:text-primary bg-white/90 border border-pink-200/80 hover:border-pink-300 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 flex items-center gap-2 text-sm sm:text-base"
        >
          <span className="material-symbols-outlined text-lg sm:text-xl text-primary">
            mark_email_read
          </span>
          <span>Đọc thư chúc mừng</span>
        </a>

        <button
          onClick={triggerConfetti}
          className="px-4 py-2.5 sm:py-3 rounded-full font-bold text-secondary bg-pink-100/70 hover:bg-pink-200/70 border border-pink-200 transition-all duration-200 active:scale-95 flex items-center gap-1.5 text-xs sm:text-sm"
          title="Bắn pháo hoa"
        >
          <span className="material-symbols-outlined text-base">celebration</span>
          <span>Pháo hoa 🎉</span>
        </button>
      </div>

      {/* 4 Stats Cards (Responsive 2x2 on mobile, 4 in a row on tablet/desktop) */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-3xl mt-8 sm:mt-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/90 rounded-2xl shadow-[0_4px_16px_rgba(219,39,119,0.06)] hover:shadow-[0_8px_24px_rgba(219,39,119,0.12)] transition-all duration-300 backdrop-blur-sm border border-pink-100/80 group hover:-translate-y-1"
          >
            <span
              className={`font-syne text-xl sm:text-2xl lg:text-3xl font-extrabold ${item.color} group-hover:scale-105 transition-transform`}
            >
              {item.value}
            </span>
            <span className="text-[10px] sm:text-xs text-tertiary uppercase tracking-wider font-bold mt-0.5 sm:mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
