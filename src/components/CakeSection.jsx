import { useState } from 'react'
import { triggerHeartConfetti, triggerConfetti } from '../utils/confetti'
import Icon from './Icon'

export default function CakeSection() {
  const [candlesLit, setCandlesLit] = useState(true)
  const [flameClass, setFlameClass] = useState('flame-active')
  const [showSmoke, setShowSmoke] = useState(false)
  const [message, setMessage] = useState({
    text: '✨ Nhắm mắt lại, ước một điều thật đẹp và chạm vào bánh để thổi nến nha! ✨',
    isWishDone: false,
  })

  // Play sparkle chime sound via Web Audio API
  const playWishSparkleSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (!AudioContext) return
      const audioCtx = new AudioContext()
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]
      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator()
        const gain = audioCtx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + index * 0.08)
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime + index * 0.08)
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + index * 0.08 + 0.35)
        osc.connect(gain)
        gain.connect(audioCtx.destination)
        osc.start(audioCtx.currentTime + index * 0.08)
        osc.stop(audioCtx.currentTime + index * 0.08 + 0.4)
      })
    } catch {}
  }

  const blowOutCandles = () => {
    if (!candlesLit) return
    setCandlesLit(false)

    // Flame blowing wind animation
    setFlameClass('flame-blowing')

    setTimeout(() => {
      setFlameClass('hidden')
      setShowSmoke(true)
    }, 450)

    setMessage({
      text: '✨ Điều ước tuổi 25 của Bích Nụ đã được gửi tới các vì sao! Chúc Bích Nụ luôn vui vẻ và ngập tràn hạnh phúc! 🌸💖',
      isWishDone: true,
    })

    // Confetti celebration
    triggerConfetti()
    triggerHeartConfetti({ particleCount: 50 })
    playWishSparkleSound()
  }

  const relightCandles = () => {
    setShowSmoke(false)
    setCandlesLit(true)
    setFlameClass('flame-active')
    triggerHeartConfetti({ particleCount: 25 })
  }

  const handleCakeClick = () => {
    if (candlesLit) {
      blowOutCandles()
    } else {
      relightCandles()
    }
  }

  return (
    <section
      className="relative w-full px-4 max-w-xl mx-auto py-4 md:py-8 mb-4 scroll-mt-10 md:scroll-mt-28"
      id="interactive-cake"
    >
      <div className="relative bg-gradient-to-b from-white via-[#fff0ef] to-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(219,39,119,0.18)] p-4 sm:p-6 border border-pink-200/60 overflow-hidden flex flex-col items-center text-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd8e7] text-[#3d0026] text-[11px] font-bold mb-2 backdrop-blur-sm border border-pink-200/80 shadow-xs">
          <Icon name="magic_button" className="w-3.5 h-3.5 text-primary" />
          <span>Góc Ước Nguyện Tuổi 25</span>
        </div>

       

        {/* The Floating Cake Structure */}
        <div
          className="relative w-full max-w-[320px] h-72 my-4 flex flex-col items-center justify-end float-cake cursor-pointer select-none"
          id="cake-container"
          onClick={handleCakeClick}
          title={candlesLit ? 'Chạm vào bánh để thổi nến & ước nha!' : 'Chạm để thắp lại nến!'}
        >
          {/* Candles Container */}
          <div className="relative flex items-end justify-center gap-6 z-20 mb-[-4px]">
            {/* Candle 1 (Left) */}
            <div className="candle flex flex-col items-center relative">
              <div
                className={`flame ${flameClass} w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_15px_#f59e0b] -mb-1`}
              />
              {showSmoke && (
                <div className="smoke smoke-puff absolute -top-4 w-3 h-3 rounded-full bg-slate-300/60 blur-xs" />
              )}
              <div className="w-1 h-2 bg-amber-950/70 rounded-t" />
              <div className="w-2.5 h-10 rounded-sm bg-gradient-to-b from-rose-200 via-pink-300 to-pink-200 shadow-sm border-x border-pink-300/40 flex flex-col justify-around py-0.5">
                <div className="w-full h-0.5 bg-white/70" />
                <div className="w-full h-0.5 bg-white/70" />
              </div>
            </div>

            {/* Candle 2 (Middle - 25 Years) */}
            <div className="candle flex flex-col items-center relative">
              <div
                className={`flame ${flameClass} w-4 h-7 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_18px_#f59e0b] -mb-1`}
              />
              {showSmoke && (
                <div className="smoke smoke-puff absolute -top-5 w-3.5 h-3.5 rounded-full bg-slate-300/60 blur-xs" />
              )}
              <div className="w-1 h-2 bg-amber-950/70 rounded-t" />
              <div className="w-3 h-12 rounded-sm bg-gradient-to-b from-amber-100 via-pink-200 to-rose-300 shadow-sm border-x border-pink-300/40 flex flex-col justify-around py-0.5 relative">
                <span className="text-[7px] text-primary font-bold text-center leading-none">25</span>
                <div className="w-full h-0.5 bg-white/80" />
              </div>
            </div>

            {/* Candle 3 (Right) */}
            <div className="candle flex flex-col items-center relative">
              <div
                className={`flame ${flameClass} w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_15px_#f59e0b] -mb-1`}
              />
              {showSmoke && (
                <div className="smoke smoke-puff absolute -top-4 w-3 h-3 rounded-full bg-slate-300/60 blur-xs" />
              )}
              <div className="w-1 h-2 bg-amber-950/70 rounded-t" />
              <div className="w-2.5 h-10 rounded-sm bg-gradient-to-b from-rose-200 via-pink-300 to-pink-200 shadow-sm border-x border-pink-300/40 flex flex-col justify-around py-0.5">
                <div className="w-full h-0.5 bg-white/70" />
                <div className="w-full h-0.5 bg-white/70" />
              </div>
            </div>
          </div>

          {/* Tier 1 (Top) */}
          <div className="relative w-36 h-14 bg-gradient-to-b from-pink-100 via-pink-50 to-rose-100 rounded-t-2xl shadow-md border-t-2 border-x-2 border-white/80 flex items-start justify-center z-10 overflow-hidden">
            <div className="absolute top-0 w-full flex justify-around">
              <span className="w-3 h-3 -mt-1 bg-white rounded-full shadow-xs" />
              <span className="w-3 h-3 -mt-1 bg-white rounded-full shadow-xs" />
              <span className="w-3 h-3 -mt-1 bg-white rounded-full shadow-xs" />
              <span className="w-3 h-3 -mt-1 bg-white rounded-full shadow-xs" />
              <span className="w-3 h-3 -mt-1 bg-white rounded-full shadow-xs" />
            </div>
            <div className="w-full h-3 bg-pink-300/40 mt-3 flex justify-center items-center gap-2">
              <span className="text-[10px]">🍓</span>
              <span className="text-[9px]">🤍</span>
              <span className="text-[10px]">🍓</span>
              <span className="text-[9px]">🤍</span>
              <span className="text-[10px]">🍓</span>
            </div>
            <div className="absolute bottom-1 w-full flex justify-evenly text-[8px] opacity-75">
              <span>🤍</span>
              <span>✨</span>
              <span>🤍</span>
            </div>
          </div>

          {/* Tier 2 (Middle) */}
          <div className="relative w-52 h-16 bg-gradient-to-b from-rose-200 via-pink-100 to-rose-100 rounded-t-2xl shadow-md border-t border-x border-pink-200/60 flex flex-col items-center justify-between z-[9] overflow-hidden -mt-1">
            <div className="w-full h-4 bg-white/85 rounded-b-xl shadow-xs flex justify-around px-2">
              <div className="w-3 h-3 rounded-full bg-pink-400 -mt-1" />
              <div className="w-3 h-3 rounded-full bg-pink-400 -mt-1" />
              <div className="w-3 h-3 rounded-full bg-pink-400 -mt-1" />
              <div className="w-3 h-3 rounded-full bg-pink-400 -mt-1" />
              <div className="w-3 h-3 rounded-full bg-pink-400 -mt-1" />
              <div className="w-3 h-3 rounded-full bg-pink-400 -mt-1" />
            </div>
            <div className="w-full px-3 flex justify-between items-center text-[10px] text-primary/80 font-bold">
              <span>🌸</span>
              <span className="tracking-wider font-syne text-xs text-primary">08 • 09 • 2001</span>
              <span>🌸</span>
            </div>
            <div className="w-full h-1.5 bg-pink-200/60" />
          </div>

          {/* Tier 3 (Base) */}
          <div className="relative w-64 h-16 bg-gradient-to-b from-pink-200 via-pink-100 to-rose-200 rounded-t-2xl shadow-lg border-t border-x border-pink-300 flex flex-col items-center justify-between z-[8] overflow-hidden -mt-1">
            <div className="w-full h-3.5 bg-white/90 rounded-b-2xl shadow-xs flex justify-between px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 -mt-1" />
            </div>
            <div className="flex items-center gap-1 text-[11px] text-primary font-bold">
              <span className="text-xs">💖</span>
              <span className="tracking-wide">NGUYỄN THỊ CẨM NGUYỆT</span>
              <span className="text-xs">💖</span>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-300" />
          </div>

          {/* Plate */}
          <div className="relative w-72 h-5 bg-gradient-to-r from-[#f1dedc] via-white to-[#f1dedc] rounded-full shadow-[0_8px_16px_rgba(183,0,94,0.15)] border border-pink-200/80 -mt-1.5 z-[7] flex items-center justify-around px-4">
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
          <div className="w-80 h-3 bg-pink-500/10 rounded-full blur-sm -mt-1.5 z-[5]" />
        </div>

        {/* Dynamic Wish Message Box */}
        <div className="w-full min-h-[58px] flex items-center justify-center px-2 transition-all duration-300">
          <p
            className={
              message.isWishDone
                ? 'font-nunito text-xs sm:text-[13px] text-primary font-bold animate-pulse bg-pink-100/80 px-3.5 py-2.5 rounded-xl border border-pink-200 shadow-xs leading-relaxed'
                : 'font-nunito text-xs text-[#594047] italic px-2 py-1 leading-relaxed'
            }
          >
            {message.text}
          </p>
        </div>

        {/* Action Buttons */}
        {message.isWishDone && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mt-2">
            <button
              onClick={relightCandles}
              className="px-4 py-3 rounded-full bg-[#f7e4e2] text-primary hover:bg-pink-100 font-nunito text-xs font-bold border border-pink-200 shadow-sm active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Icon name="local_fire_department" className="w-4.5 h-4.5 text-amber-500" />
              <span>Thắp lại nến 🔥✨</span>
            </button>
          </div>
        )}

        {/* Footer Info Row */}
        <div className="mt-3 flex items-center justify-center w-full px-2 pt-2 border-t border-pink-100/70 text-[11px] text-tertiary">
          <span className="uppercase tracking-wider text-[9px] bg-pink-100/60 px-3 py-1 rounded-full text-secondary font-bold">
            Sinh Nhật Tuổi 25 Của Bích Nụ ✨
          </span>
        </div>

      </div>
    </section>
  )
}
