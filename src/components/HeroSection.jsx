import { useState, useEffect } from 'react'
import { triggerHeartConfetti } from '../utils/confetti'

export default function HeroSection() {
  const [candleLit, setCandleLit] = useState(true)
  const [wishMade, setWishMade] = useState(false)
  const [extraSmiles, setExtraSmiles] = useState(0)
  const [activeCard, setActiveCard] = useState(null)

  // Tự động bắn hiệu ứng Smiles Shared định kỳ (mỗi ~13s) để trang web luôn tươi vui, sống động
  useEffect(() => {
    const triggerAutoSmile = () => {
      // Bỏ qua nếu tab không active (người dùng chuyển tab khác)
      if (document.hidden) return

      setExtraSmiles((prev) => prev + 1)
      const randomX = 0.35 + Math.random() * 0.3
      triggerHeartConfetti({
        origin: { x: randomX, y: 0.72 },
        particleCount: 38,
        spread: 65,
      })
      setActiveCard(2)
      setTimeout(() => setActiveCard(null), 1300)
    }

    // Bắn lần đầu sau 6 giây trải nghiệm
    const initialTimer = setTimeout(triggerAutoSmile, 6000)
    // Sau đó lặp lại mỗi 13 giây
    const interval = setInterval(triggerAutoSmile, 13000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  const playChimeSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      const notes = [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6 (sparkle chime)
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05)
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.05)
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + i * 0.05 + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 0.35)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(ctx.currentTime + i * 0.05)
        osc.stop(ctx.currentTime + i * 0.05 + 0.4)
      })
    } catch {
      // Ignore if audio is restricted by browser policy
    }
  }

  const handleBlowCandle = () => {
    if (candleLit) {
      setCandleLit(false)
      setWishMade(true)
      triggerHeartConfetti()
    } else {
      setCandleLit(true)
      setWishMade(false)
    }
  }

  const handleCardClick = (index) => {
    setActiveCard(index)
    if (index === 2) {
      setExtraSmiles((prev) => prev + 1)
      triggerHeartConfetti({
        origin: { x: 0.5, y: 0.75 },
        particleCount: 50,
      })
      playChimeSound()
    }
    setTimeout(() => setActiveCard(null), 1200)
  }

  const stats = [
    {
      value: '25',
      label: 'Sunlit Years',
      color: 'text-primary',
      icon: 'sparkles',
      detail: 'A radiant silver jubilee! ✨',
    },
    {
      value: 'Sept 8',
      label: 'Golden Birthday',
      color: 'text-primary-container',
      icon: 'cake',
      detail: 'Day of light & beauty 🎂',
    },
    {
      value: `${1000 + extraSmiles}+`,
      label: 'Smiles Shared',
      color: 'text-secondary',
      icon: 'favorite',
      detail: 'Tap to add your smile! ❤️',
    },
    {
      value: '∞',
      label: 'Classroom Warmth',
      color: 'text-primary',
      icon: 'all_inclusive',
      detail: 'Endless inspiration 💫',
    },
  ]

  // Gentle drifting petals in background
  const petals = [
    { left: '10%', delay: '0s', duration: '9s', size: 'text-base' },
    { left: '25%', delay: '3s', duration: '11s', size: 'text-xs' },
    { left: '45%', delay: '1.5s', duration: '8.5s', size: 'text-sm' },
    { left: '70%', delay: '4s', duration: '10s', size: 'text-xs' },
    { left: '85%', delay: '2s', duration: '9.5s', size: 'text-base' },
    { left: '92%', delay: '5s', duration: '12s', size: 'text-xs' },
  ]

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 md:pt-14 pb-12 md:pb-20 flex flex-col items-center text-center overflow-hidden scroll-mt-10 md:scroll-mt-28"
      id="celebration"
    >
      {/* Floating Gentle Petals (Idea 2) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {petals.map((p, idx) => (
          <div
            key={idx}
            className={`absolute -top-6 animate-petal select-none opacity-75 ${p.size}`}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          >
            {idx % 2 === 0 ? '🌸' : '✨'}
          </div>
        ))}
      </div>

      {/* Floating Decorative Balloons - Left (Mobile & Desktop) */}
      <div className="absolute left-1 md:left-8 top-14 md:top-12 flex flex-col items-center animate-float-slow pointer-events-none opacity-80 md:opacity-85 z-0">
        <div className="w-10 h-14 md:w-16 md:h-20 rounded-full bg-gradient-to-t from-primary-fixed to-secondary-container shadow-[0_8px_16px_rgba(219,39,119,0.2)] relative">
          <span className="absolute bottom-1 right-2 md:right-3 text-[9px] md:text-[10px] text-white font-bold drop-shadow">
            25
          </span>
          <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary-container"></div>
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 md:h-8 bg-outline-variant/60"></div>
        </div>
        <div className="hidden md:flex w-12 h-16 -mt-3 -ml-6 rounded-full bg-gradient-to-t from-secondary-fixed to-primary-fixed-dim shadow-[0_8px_20px_rgba(244,114,182,0.25)] relative">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary"></div>
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[1px] h-7 bg-outline-variant/60"></div>
        </div>
      </div>

      {/* Floating Decorative Balloons - Right (Mobile & Desktop) */}
      <div className="absolute right-1 md:right-10 top-20 md:top-16 flex flex-col items-center animate-float-gentle pointer-events-none opacity-80 md:opacity-85 z-0">
        <div className="w-10 h-14 md:w-14 md:h-18 rounded-full bg-gradient-to-t from-tertiary-fixed to-secondary-fixed shadow-[0_8px_16px_rgba(117,83,104,0.18)] relative">
          <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-tertiary"></div>
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 md:h-8 bg-outline-variant/60"></div>
        </div>
        <div className="hidden md:flex w-16 h-20 -mt-4 ml-8 rounded-full bg-gradient-to-t from-primary-fixed-dim to-primary-container/70 shadow-[0_12px_24px_rgba(219,39,119,0.2)] relative">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/60"></div>
        </div>
      </div>

      {/* Celebration Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#f7e4e2]/90 text-primary shadow-[0_4px_16px_rgba(219,39,119,0.12)] backdrop-blur-md mb-3 md:mb-5 border border-pink-200/50">
        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-pink-600 animate-spin duration-3000">
          auto_awesome
        </span>
        <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-primary">
          Sept 8, 2001 • Celebrating 25 Radiant Years
        </span>
        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-pink-600">
          cake
        </span>
      </div>

      {/* Main Title with Shimmering Gradient & Wave (Idea 3) */}
      <h1 className="relative z-10 font-syne text-[1.875rem] sm:text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#231918] max-w-4xl mx-auto drop-shadow-sm leading-[1.15] px-1 md:px-2">
        Happy Birthday <br className="sm:hidden" />
        <span className="shimmer-text bg-gradient-to-r from-primary via-[#fc79bd] via-[#ffd8e7] via-[#db2777] to-primary bg-clip-text text-transparent underline decoration-pink-300/80 decoration-wavy decoration-2 md:decoration-4">
          Bich Nu
        </span>{' '}
        🎂
      </h1>

      {/* Subtitle / Bio note */}
      <p className="relative z-10 mt-3 md:mt-4 text-sm md:text-lg text-[#594047] max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 md:px-3">
        Dedicated to <strong className="text-primary font-semibold">Bich Nu</strong> (Nguyen Thi Cam Nguyet • September 8, 2001) — our most radiant, passionate, and inspiring English teacher who turns every single day into a joyful celebration of learning, laughter, and endless light.
      </p>

      {/* 4 Interactive Stat Cards (Idea 5: Micro-interactions & animations) */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 w-full max-w-sm md:max-w-3xl mt-5 md:mt-10">
        {stats.map((item, index) => {
          const isSmiles = index === 2
          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`group relative flex flex-col items-center justify-center p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer active:scale-95 ${
                isSmiles
                  ? 'bg-gradient-to-b from-pink-50/90 via-white to-rose-50/60 border-2 border-pink-300 shadow-[0_6px_20px_rgba(244,114,182,0.22)] hover:shadow-[0_10px_28px_rgba(219,39,119,0.3)] hover:-translate-y-1.5 ring-1 ring-pink-300/40'
                  : 'bg-white/95 border border-pink-200/50 hover:border-pink-300 shadow-[0_4px_16px_rgba(219,39,119,0.06)] md:shadow-[0_6px_20px_rgba(219,39,119,0.08)] hover:shadow-[0_12px_28px_rgba(219,39,119,0.18)] hover:-translate-y-1'
              } backdrop-blur-sm ${
                activeCard === index ? 'ring-2 ring-pink-400 scale-[1.03]' : ''
              }`}
            >
              {/* Cute Call-To-Action Badge Perched on Top of Smiles Card */}
              {isSmiles && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white text-[9px] md:text-[10px] font-extrabold shadow-[0_3px_10px_rgba(219,39,119,0.35)] flex items-center gap-1 whitespace-nowrap animate-pulse">
                  <span>💖</span>
                  <span>Tap Me!</span>
                </div>
              )}

              {/* Floating indicator when smiles are added (click or auto-burst) */}
              {isSmiles && activeCard === 2 && (
                <span className="absolute -top-4 right-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400 text-white text-[10px] font-extrabold shadow-[0_4px_12px_rgba(219,39,119,0.4)] animate-bounce pointer-events-none z-20">
                  +1 💖
                </span>
              )}

              <div className="flex items-center gap-1">
                <span
                  className={`font-syne text-xl md:text-3xl font-extrabold ${item.color} group-hover:scale-110 transition-transform`}
                >
                  {item.value}
                </span>
                {isSmiles && (
                  <span className="text-sm md:text-base animate-pulse select-none" title="Send love!">
                    ❤️
                  </span>
                )}
              </div>

              <span className="text-[10px] md:text-xs text-tertiary uppercase tracking-wider font-bold mt-0.5 md:mt-1">
                {item.label}
              </span>

              {/* Action hint: Always visible on Smiles Card for mobile clarity */}
              {isSmiles ? (
                <span className="text-[9px] md:text-[10px] text-pink-600 font-bold mt-0.5 flex items-center gap-0.5 animate-pulse">
                  <span>✨</span> Tap to send love
                </span>
              ) : (
                <span className="text-[9px] text-pink-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 truncate max-w-full">
                  {item.detail}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
