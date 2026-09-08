import { useState, useEffect, useRef } from 'react'
import { triggerHeartConfetti } from '../utils/confetti'

const letterParagraphs = [
  {
    id: 1,
    isSalutation: true,
    text: 'Dearest Bich Nu,',
  },
  {
    id: 2,
    text: 'Happy 24th Birthday! Today is a celebration of the wonderful, kindhearted, and brilliant soul that you are. Watching your endless devotion and vibrant passion as an English teacher has always been an inspiration. You don’t simply teach lessons; you infuse courage, joy, and gentle optimism into every single classroom you step into.',
  },
  {
    id: 3,
    text: 'Your sparkling smile has the rare power to illuminate even the quietest rooms. Through every challenge and milestone, you carry yourself with unwavering grace, genuine warmth, and a heartfelt laugh that warms everyone lucky enough to know you.',
  },
  {
    id: 4,
    text: 'As you enter this magical 24th year of your life, I wish you countless sunlit mornings, peaceful cafe afternoons, exciting adventures around the world, and the fulfillment of every quiet dream you hold close to your heart. May happiness accompany you wherever you go, and may your days always be filled with love and sweet wonder.',
  },
]

export default function LetterSection() {
  const [currentParaIndex, setCurrentParaIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef(null)

  // Start typing when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  // Typewriter ticker
  useEffect(() => {
    if (!hasStarted || isTypingComplete) return

    const currentPara = letterParagraphs[currentParaIndex]
    if (!currentPara) {
      setIsTypingComplete(true)
      triggerHeartConfetti()
      return
    }

    if (currentCharIndex < currentPara.text.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1)
      }, 16)

      return () => clearTimeout(timeout)
    } else {
      const pauseTimeout = setTimeout(() => {
        if (currentParaIndex < letterParagraphs.length - 1) {
          setCurrentParaIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        } else {
          setIsTypingComplete(true)
          triggerHeartConfetti()
        }
      }, 250)

      return () => clearTimeout(pauseTimeout)
    }
  }, [hasStarted, currentParaIndex, currentCharIndex, isTypingComplete])

  const handleShowAll = () => {
    setCurrentParaIndex(letterParagraphs.length - 1)
    setCurrentCharIndex(letterParagraphs[letterParagraphs.length - 1].text.length)
    setIsTypingComplete(true)
    triggerHeartConfetti()
  }

  const handleReplayTyping = () => {
    setIsTypingComplete(false)
    setCurrentParaIndex(0)
    setCurrentCharIndex(0)
    setHasStarted(true)
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-10 pb-8 md:py-16 scroll-mt-10 md:scroll-mt-28"
      id="heartfelt-note"
    >
      {/* Letter Card (overflow-visible để không bị che sticker washi tape) */}
      <div className="relative bg-white rounded-xl md:rounded-3xl shadow-[0_20px_60px_-15px_rgba(219,39,119,0.18)] p-4 sm:p-8 md:p-12 overflow-visible border border-pink-200/50 mt-2 md:mt-4">
        {/* Top Washi Tape Sticker */}
        <div className="absolute -top-3.5 md:-top-4 left-1/2 -translate-x-1/2 w-40 md:w-52 h-7 md:h-8 bg-[#ffd8e7] rotate-[-2deg] rounded-sm backdrop-blur-md shadow-md z-30 flex items-center justify-center border-t border-b border-pink-300/60 pointer-events-none">
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#76014e] font-black opacity-90">
            WITH LOVE • CHERISHED
          </span>
        </div>

        {/* Vintage Postal Stamp - Responsive size */}
        <div className="absolute top-2 md:top-6 right-2 md:right-6 w-12 h-16 md:w-16 md:h-22 bg-[#fdeae8] rounded-md md:rounded-lg p-0.5 md:p-1.5 shadow-inner flex flex-col items-center justify-between pointer-events-none rotate-3 border md:border-2 border-dashed border-pink-300/70">
          <div className="w-full h-9 md:h-12 bg-gradient-to-tr from-pink-300 to-pink-400 rounded flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-base md:text-2xl animate-pulse">
              favorite
            </span>
          </div>
          <span className="text-[8px] md:text-[9px] text-[#755368] font-mono font-bold tracking-tighter">
            08.09.2001
          </span>
        </div>

        {/* Letter Header */}
        <div className="flex flex-col gap-1 pt-2 md:pt-2 border-b pb-3 md:pb-5 border-pink-100 pr-14 md:pr-20">
          <div className="flex items-center gap-1.5 md:gap-2 text-primary font-syne text-base md:text-2xl font-bold">
            <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">
              mail
            </span>
            <span>Letter to Bich Nu</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm text-tertiary font-semibold">
              Nguyen Thi Cam Nguyet (Our Brightest Sunshine)
            </span>

            {/* Quick Action Toggle */}
            {!isTypingComplete ? (
              <button
                onClick={handleShowAll}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-secondary hover:text-primary font-bold px-2.5 py-0.5 rounded-full bg-pink-50 hover:bg-pink-100 transition-all border border-pink-200"
                title="Show full letter immediately"
              >
                <span>Fast Forward</span>
                <span>⏩</span>
              </button>
            ) : (
              <button
                onClick={handleReplayTyping}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-secondary hover:text-primary font-bold px-2.5 py-0.5 rounded-full bg-pink-50 hover:bg-pink-100 transition-all border border-pink-200"
                title="Watch letter write again"
              >
                <span>Replay Writing</span>
                <span>✍️</span>
              </button>
            )}
          </div>
        </div>

        {/* Letter Body with Progressive Reveal */}
        <div className="mt-4 md:mt-8 flex flex-col gap-3 md:gap-5 text-[#594047] text-sm md:text-lg leading-relaxed font-normal min-h-[220px]">
          {letterParagraphs.map((para, pIdx) => {
            if (pIdx < currentParaIndex) {
              return para.isSalutation ? (
                <p key={para.id} className="font-syne text-base md:text-xl text-primary font-bold">
                  {para.text}
                </p>
              ) : (
                <p key={para.id}>{para.text}</p>
              )
            }

            if (pIdx === currentParaIndex) {
              const visibleSubstring = para.text.slice(0, currentCharIndex)
              return para.isSalutation ? (
                <p key={para.id} className="font-syne text-base md:text-xl text-primary font-bold">
                  {visibleSubstring}
                  {!isTypingComplete && (
                    <span className="inline-block w-1.5 md:w-2 h-4 md:h-5 bg-pink-500 ml-1 animate-pulse rounded-xs align-middle" />
                  )}
                </p>
              ) : (
                <p key={para.id}>
                  {visibleSubstring}
                  {!isTypingComplete && (
                    <span className="inline-block w-1.5 md:w-2 h-4 md:h-5 bg-pink-500 ml-1 animate-pulse rounded-xs align-middle" />
                  )}
                </p>
              )
            }

            return null
          })}

          {/* Sign-off smoothly appears */}
          <div
            className={`pt-2 md:pt-6 flex flex-col items-end text-right transition-all duration-700 ${
              isTypingComplete
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            <p className="font-syne text-sm md:text-base text-secondary font-bold">
              With all my heartfelt love and deepest admiration,
            </p>
            <p className="text-xs md:text-sm text-primary font-semibold flex items-center gap-1 mt-0.5">
              Forever cheering for you, always and always! 🌸💖
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
