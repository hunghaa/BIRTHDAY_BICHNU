export default function Footer() {
  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1XQlN4nsA2PaMTAKc56GtaENkvuo6lNrb8ahPhz5hSKapeUESzilVQ5G5SHyEyLR9i6gEngAq1M1qN4rBdzyJutvR1Em-jRCE0hKYJDibxGob0qzcl8RYSo2zpIDNltqV-WLi21nUhuh96e_BmlTNibWosa1pPokJhp9x6iR4QhjsMZQBRR1Knp-LWOZ9nOee_K83wk2moGrjyg9RwECKQ4uL_MahTWH9Z3fN80jjRnPrzNRZQdcbuv4tU'

  return (
    <footer className="relative z-10 w-full bg-[#fff0ef] py-10 sm:py-14 px-4 sm:px-6 shadow-[0_-4px_24px_rgba(219,39,119,0.03)] border-t border-pink-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-3 sm:gap-4">
        {/* Emblem & Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-pink-200 bg-white shadow-sm">
            <img
              alt="Birthday Cake Logo"
              className="w-full h-full object-contain p-0.5 opacity-90"
              src={logoUrl}
            />
          </div>
          <span className="font-syne text-base sm:text-lg text-primary font-bold">
            Bich Nu • Nguyễn Thị Cẩm Nguyệt
          </span>
        </div>

        {/* Dedicated text */}
        <p className="text-xs sm:text-sm text-[#594047] max-w-lg leading-relaxed px-2">
          Commemorating milestone personal moments with tenderness, gentle blooms, and everlasting
          sunshine. Born on September 8, 2001.
        </p>

        {/* Wishes tagline */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[10px] sm:text-xs text-tertiary uppercase tracking-widest font-semibold">
            Sweetest Wishes &amp; Cloud Confetti • Forever Cherished 🌸
          </span>
        </div>

        {/* Copyright */}
        <div className="text-[#8d6f77] text-[10px] sm:text-xs pt-3 border-t border-pink-200/50 w-full max-w-md">
          © 2025 Dedicated with unconditional love to Bich Nu (Cẩm Nguyệt). All sweet memories
          reserved.
        </div>
      </div>
    </footer>
  )
}
