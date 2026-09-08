import { useState, useEffect, useRef } from 'react'
import { triggerHeartConfetti } from '../utils/confetti'

const letterParagraphs = [
  {
    id: 1,
    isSalutation: true,
    text: 'Bích Nụ ơi,',
  },
  {
    id: 2,
    text: 'Tui Hùng nè =)), nhân dịp sinh nhật tuổi 25, tui chúc cho Bích Nụ tuổi mới vui vẻ hơn, nhẹ đầu hơn, làm gì cũng được suôn sẻ hơn nha. Mong là Nụ luôn giữ được tinh thần tích cực và dễ thương của mình. Nói chung là mong Bích Nụ tuổi mới vẫn là Bích Nụ thôi. Làm cô giáo tiếng Anh thì cứ ngày càng xịn hơn, dạy học vui hơn, học trò thương hơn và đồng nghiệp xung quanh cũng thân thiện hơn, và body cũng bốc lửa hơn nữa.',
  },
  {
    id: 3,
    text: 'Với thật ra chơi với nhau cũng lâu rồi, nhưng mà nhìn lại trong điện thoại Minh Hùng thì hình đi chơi chung hay mấy lúc gặp nhau cũng không có nhiều. Chắc cũng vì vậy mà tui thấy cũng hay. Không cần phải hiểu nhau quá sâu hay lúc nào cũng nói chuyện nhiều, vậy mà vẫn giữ được mối quan hệ tới giờ. Xin lỗi Nụ vì nhiều cái tui làm Nụ chưa vui, đừng để bụng tui nhe, hehe, cám ơn Bích Nụ vì đã làm bạn với tui đến giờ.',
  },
  {
    id: 4,
    text: 'Mong sẽ sớm lên được kèo cùng Bích Nụ. Thôi nói cũng dài rồi, quan trọng là hôm nay vui nha Bích Nụ 🎂💖',
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
                <p key={para.id} className="font-nunito text-lg md:text-2xl text-primary font-extrabold tracking-tight">
                  {para.text}
                </p>
              ) : (
                <p key={para.id} className="font-nunito text-sm md:text-base text-[#4a3439] leading-relaxed">
                  {para.text}
                </p>
              )
            }

            if (pIdx === currentParaIndex) {
              const visibleSubstring = para.text.slice(0, currentCharIndex)
              return para.isSalutation ? (
                <p key={para.id} className="font-nunito text-lg md:text-2xl text-primary font-extrabold tracking-tight">
                  {visibleSubstring}
                  {!isTypingComplete && (
                    <span className="inline-block w-1.5 md:w-2 h-4 md:h-5 bg-pink-500 ml-1 animate-pulse rounded-xs align-middle" />
                  )}
                </p>
              ) : (
                <p key={para.id} className="font-nunito text-sm md:text-base text-[#4a3439] leading-relaxed">
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
            <p className="font-nunito text-sm md:text-base text-secondary font-bold">
              Chúc mừng sinh nhật Bích Nụ!
            </p>
            <p className="font-nunito text-xs md:text-sm text-primary font-semibold flex items-center gap-1 mt-0.5">
              Từ Minh Hùng 🌸✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
