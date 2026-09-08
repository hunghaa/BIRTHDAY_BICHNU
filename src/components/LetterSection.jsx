export default function LetterSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8 sm:py-16"
      id="heartfelt-note"
    >
      {/* Letter Card */}
      <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(219,39,119,0.18)] p-6 sm:p-10 md:p-12 overflow-hidden border border-pink-200/70">
        {/* Top Washi Tape Sticker */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-44 sm:w-52 h-8 bg-pink-200/80 rotate-[-2deg] rounded-sm backdrop-blur-md shadow-sm z-20 flex items-center justify-center border-t border-b border-pink-300/40">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#76014e] font-black opacity-85">
            WITH LOVE • FOREVER CHERISHED
          </span>
        </div>

        {/* Vintage Postal Stamp */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-13 h-18 sm:w-16 sm:h-22 bg-[#fdeae8] rounded-lg p-1 sm:p-1.5 shadow-inner flex flex-col items-center justify-between pointer-events-none rotate-3 border-2 border-dashed border-pink-300/70">
          <div className="w-full h-10 sm:h-12 bg-gradient-to-tr from-pink-300 to-pink-400 rounded flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-xl sm:text-2xl animate-pulse">
              favorite
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] text-[#755368] font-mono font-bold tracking-tighter">
            08.09.2001
          </span>
        </div>

        {/* Letter Header */}
        <div className="flex flex-col gap-1 pt-4 sm:pt-2 border-b pb-4 sm:pb-5 border-pink-100 pr-16 sm:pr-20">
          <div className="flex items-center gap-2 text-primary font-syne text-lg sm:text-2xl font-bold">
            <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">
              mail
            </span>
            <span>A Heartfelt Birthday Letter to Bich Nu</span>
          </div>
          <span className="text-xs sm:text-sm text-tertiary font-semibold">
            Dedicated to Nguyễn Thị Cẩm Nguyệt (Our Brightest Sunshine)
          </span>
        </div>

        {/* Letter Body */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5 text-[#594047] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          <p className="font-syne text-base sm:text-xl text-primary font-bold">
            Dearest Bich Nu,
          </p>

          <p>
            Happy 24th Birthday! Today is a celebration of the wonderful, kindhearted, and brilliant
            soul that you are. Watching your endless devotion and vibrant passion as an English
            teacher has always been an inspiration. You don’t simply teach lessons; you infuse
            courage, joy, and gentle optimism into every single classroom you step into.
          </p>

          <p>
            Your sparkling smile has the rare power to illuminate even the quietest rooms. Through
            every challenge and milestone, you carry yourself with unwavering grace, genuine warmth,
            and a heartfelt laugh that warms everyone lucky enough to know you.
          </p>

          <p>
            As you enter this magical 24th year of your life, I wish you countless sunlit mornings,
            peaceful cafe afternoons, exciting adventures around the world, and the fulfillment of
            every quiet dream you hold close to your heart. May happiness accompany you wherever you
            go, and may your days always be filled with love and sweet wonder.
          </p>

          <div className="pt-4 sm:pt-6 flex flex-col items-end text-right">
            <p className="font-syne text-sm sm:text-base text-secondary font-bold">
              With all my heartfelt love and deepest admiration,
            </p>
            <p className="text-xs sm:text-sm text-primary font-semibold flex items-center gap-1 mt-1">
              Forever cheering for you, always and always! 🌸💖
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
