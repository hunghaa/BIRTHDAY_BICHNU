import { useEffect, useRef } from 'react'
import { triggerHeartConfetti } from '../utils/confetti'

export default function LightboxModal({ photo, onClose, onNext, onPrev }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  // Reset video playback on change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }, [photo])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e9cfce] flex flex-col font-nunito"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#fff0ef] border-b border-pink-200">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="font-bold text-xs sm:text-sm text-primary truncate">
              {photo.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-secondary hover:text-primary hover:bg-pink-100 flex items-center justify-center transition-all shadow-sm shrink-0 cursor-pointer ml-2"
            title="Đóng"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative w-full max-h-[62vh] min-h-[260px] sm:min-h-[380px] bg-slate-950 flex items-center justify-center overflow-hidden">
          {photo.type === 'video' ? (
            <video
              ref={videoRef}
              src={photo.image}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-[62vh] object-contain"
            />
          ) : (
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full max-h-[62vh] object-contain"
            />
          )}

          {/* Nav buttons */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer z-10"
            title="Ảnh trước"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer z-10"
            title="Ảnh kế tiếp"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>

        {/* Footer Details */}
        <div className="p-4 sm:p-6 bg-white flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-primary font-bold">
              {photo.tag || 'Kỷ Niệm Thân Thương'}
            </span>

            <button
              onClick={triggerHeartConfetti}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-primary text-xs font-bold transition-all border border-pink-200 cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-base text-pink-600">favorite</span>
              <span>Thả Tim ❤️</span>
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
