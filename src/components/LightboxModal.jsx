import { useEffect } from 'react'
import { triggerHeartConfetti } from '../utils/confetti'

export default function LightboxModal({ photo, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e9cfce] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#fff0ef] border-b border-pink-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-syne text-xs sm:text-sm font-bold text-primary truncate max-w-[240px] sm:max-w-none">
              {photo.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-secondary hover:text-primary hover:bg-pink-100 flex items-center justify-center transition-all shadow-sm"
            title="Close"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Picture Frame */}
        <div className="relative w-full max-h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full max-h-[60vh] object-contain"
          />

          {/* Nav buttons */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-lg transition-all active:scale-95"
            title="Previous photo"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-lg transition-all active:scale-95"
            title="Next photo"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>

        {/* Footer Details */}
        <div className="p-4 sm:p-6 bg-white flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-primary font-bold">
              {photo.tag || 'Cherished Memory'}
            </span>

            <button
              onClick={triggerHeartConfetti}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-primary text-xs font-bold transition-all border border-pink-200"
            >
              <span className="material-symbols-outlined text-base text-pink-600">favorite</span>
              <span>Love ❤️</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#594047] leading-relaxed italic">
            "{photo.wish}"
          </p>
        </div>
      </div>
    </div>
  )
}
