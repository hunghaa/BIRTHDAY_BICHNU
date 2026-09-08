import { useState, useEffect } from 'react'
import { musicBox } from '../utils/musicBox'

export default function AudioPlayer() {
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    isMuted: false,
    volume: 0.2,
  })

  useEffect(() => {
    return musicBox.subscribe((state) => {
      setAudioState(state)
    })
  }, [])

  const isMusicActive = audioState.isPlaying && !audioState.isMuted

  const handleToggleSound = () => {
    if (!audioState.isPlaying) {
      // If stopped/not started, start playing
      if (audioState.isMuted) {
        musicBox.toggleMute()
      }
      musicBox.start()
    } else {
      // If currently playing, toggle mute/pause
      musicBox.togglePlay()
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      <button
        onClick={handleToggleSound}
        className="relative group cursor-pointer focus:outline-none transition-transform active:scale-90"
        title={isMusicActive ? 'Bấm để tắt nhạc' : 'Bấm để mở nhạc'}
        aria-label="Bật hoặc tắt nhạc sinh nhật"
      >
        {/* The CD / Vinyl Disc */}
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] border-2 border-white/90 flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
            isMusicActive
              ? 'ring-3 ring-pink-400/70 shadow-pink-500/30'
              : 'opacity-70 grayscale-[30%]'
          }`}
          style={{
            background: 'radial-gradient(circle, #2d2427 0%, #1a1215 65%, #0f0b0d 100%)',
          }}
        >
          {/* Subtle Vinyl Grooves Texture */}
          <div className="absolute inset-1 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute inset-4 rounded-full border border-white/10 pointer-events-none" />

          {/* Rotating Content: Center label with CD hole */}
          <div
            className={`w-full h-full flex items-center justify-center ${
              isMusicActive ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '3.5s', animationTimingFunction: 'linear' }}
          >
            {/* Center Pastel Label */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#fc79bd] to-[#ffd8e7] border border-white/80 shadow-inner flex items-center justify-center">
              {/* Spindle hole */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1215]" />
            </div>
          </div>
        </div>

        {/* Small Status Badge on bottom-right of disc */}
        <div
          className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] shadow-sm border border-white transition-all ${
            isMusicActive ? 'bg-primary' : 'bg-neutral-500'
          }`}
        >
          <span className="material-symbols-outlined text-[12px]">
            {isMusicActive ? 'volume_up' : 'volume_off'}
          </span>
        </div>
      </button>
    </div>
  )
}
