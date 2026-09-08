export default function HeroSection() {
  const stats = [
    { value: '24', label: 'Sunlit Years', color: 'text-primary' },
    { value: 'Sept 8', label: 'Golden Birthday', color: 'text-primary-container' },
    { value: '1,000+', label: 'Smiles Shared', color: 'text-secondary' },
    { value: '∞', label: 'Classroom Warmth', color: 'text-primary' },
  ]

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 md:pt-14 pb-12 md:pb-20 flex flex-col items-center text-center overflow-hidden scroll-mt-20 md:scroll-mt-28"
      id="celebration"
    >
      {/* Floating Decorative Balloons - Left (Mobile & Desktop) */}
      <div className="absolute -left-2 md:left-8 top-2 md:top-12 flex flex-col items-center animate-bounce duration-[6000ms] pointer-events-none opacity-80 md:opacity-85 z-0">
        <div className="w-10 h-14 md:w-16 md:h-20 rounded-full bg-gradient-to-t from-primary-fixed to-secondary-container shadow-[0_8px_16px_rgba(219,39,119,0.2)] relative">
          <span className="absolute bottom-1 right-2 md:right-3 text-[9px] md:text-[10px] text-white font-bold drop-shadow">
            24
          </span>
          <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary-container"></div>
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 md:h-8 bg-outline-variant/60"></div>
        </div>
        {/* Desktop second balloon */}
        <div className="hidden md:flex w-12 h-16 -mt-3 -ml-6 rounded-full bg-gradient-to-t from-secondary-fixed to-primary-fixed-dim shadow-[0_8px_20px_rgba(244,114,182,0.25)] relative">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary"></div>
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[1px] h-7 bg-outline-variant/60"></div>
        </div>
      </div>

      {/* Floating Decorative Balloons - Right (Mobile & Desktop) */}
      <div className="absolute -right-2 md:right-10 top-4 md:top-16 flex flex-col items-center animate-bounce duration-[7000ms] pointer-events-none opacity-80 md:opacity-85 z-0">
        <div className="w-10 h-14 md:w-14 md:h-18 rounded-full bg-gradient-to-t from-tertiary-fixed to-secondary-fixed shadow-[0_8px_16px_rgba(117,83,104,0.18)] relative">
          <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-tertiary"></div>
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 md:h-8 bg-outline-variant/60"></div>
        </div>
        {/* Desktop second balloon */}
        <div className="hidden md:flex w-16 h-20 -mt-4 ml-8 rounded-full bg-gradient-to-t from-primary-fixed-dim to-primary-container/70 shadow-[0_12px_24px_rgba(219,39,119,0.2)] relative">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/60"></div>
        </div>
      </div>

      {/* Celebration Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#f7e4e2]/90 text-primary shadow-[0_4px_16px_rgba(219,39,119,0.12)] backdrop-blur-md mb-3 md:mb-6 border border-pink-200/50">
        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-pink-600 animate-spin duration-3000">
          auto_awesome
        </span>
        <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-primary">
          Sept 8, 2001 • Celebrating 24 Radiant Years
        </span>
        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-pink-600">
          cake
        </span>
      </div>

      {/* Main Title - Responsive to exact Mobile display hero */}
      <h1 className="relative z-10 font-syne text-[1.875rem] sm:text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#231918] max-w-4xl mx-auto drop-shadow-sm leading-[1.15] px-1 md:px-2">
        Happy Birthday <br className="sm:hidden" />
        <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent underline decoration-pink-300/80 decoration-wavy decoration-2 md:decoration-4">
          Bich Nu
        </span>{' '}
        🎂
      </h1>

      {/* Subtitle / Bio note */}
      <p className="relative z-10 mt-3 md:mt-5 text-sm md:text-lg text-[#594047] max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 md:px-3">
        Dedicated to <strong className="text-primary font-semibold">Bich Nu</strong> (Nguyen Thi Cam Nguyet • September 8, 2001) — our most radiant, passionate, and inspiring English teacher who turns every single day into a joyful celebration of learning, laughter, and endless light.
      </p>

      {/* 4 Stats Cards (Responsive 2x2 max-w-sm on mobile, 4 in a row max-w-3xl on desktop) */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full max-w-sm md:max-w-3xl mt-6 md:mt-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 md:p-4 bg-white/90 rounded-xl md:rounded-2xl shadow-[0_4px_16px_rgba(219,39,119,0.06)] md:shadow-[0_6px_20px_rgba(219,39,119,0.06)] backdrop-blur-sm border border-pink-200/40 group hover:-translate-y-1 transition-all duration-300"
          >
            <span
              className={`font-syne text-xl md:text-3xl font-extrabold ${item.color} group-hover:scale-105 transition-transform`}
            >
              {item.value}
            </span>
            <span className="text-[10px] md:text-xs text-tertiary uppercase tracking-wider font-bold mt-0.5 md:mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
