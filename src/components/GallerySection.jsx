import { useState, useRef, useEffect } from 'react'
import { galleryPhotos } from '../data/galleryData'

function VideoCard({ item, isPlaying, onTogglePlay, photoLikes, toggleLike }) {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // If autoplay with sound is blocked, fallback to muted playback
        if (videoRef.current) {
          videoRef.current.muted = true
          setIsMuted(true)
          videoRef.current.play().catch(() => {})
        }
      })
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying])

  const handleMuteToggle = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <div
      onClick={onTogglePlay}
      className={`group relative rounded-xl md:rounded-2xl bg-white p-3 md:p-5 border-2 md:border-4 transition-all duration-300 flex flex-col items-center cursor-pointer pt-4 md:pt-6 ${
        isPlaying
          ? 'border-pink-400 shadow-[0_16px_36px_rgba(219,39,119,0.28)] ring-2 ring-pink-300/60 -translate-y-1'
          : 'border-[#e9cfce] shadow-[0_12px_24px_rgba(219,39,119,0.14)] hover:shadow-[0_20px_60px_-15px_rgba(219,39,119,0.25)] hover:-translate-y-1.5'
      }`}
    >
      {/* Hanging Pushpin Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary shadow-md border border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Inner Media Container */}
      <div className="relative w-full rounded-lg overflow-hidden bg-white p-1 md:p-2 shadow-inner border border-pink-200/40">
        <div className="relative w-full h-80 rounded overflow-hidden shadow-sm bg-neutral-900 flex items-center justify-center">
          <video
            ref={videoRef}
            src={item.image}
            className="w-full h-full object-cover"
            loop
            playsInline
            preload="metadata"
          />

          {/* Badge top-right */}
          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-sm text-white text-[11px] font-bold flex items-center gap-1 shadow-md z-10 pointer-events-none">
            <span className="material-symbols-outlined text-sm text-pink-400">
              {isPlaying ? 'graphic_eq' : 'smart_display'}
            </span>
            <span>{isPlaying ? 'Đang phát' : 'Video Clip'}</span>
          </div>

          {/* Sound toggle button top-left */}
          {isPlaying && (
            <button
              onClick={handleMuteToggle}
              className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-sm text-white flex items-center justify-center shadow-md z-10 transition-transform active:scale-90 cursor-pointer"
              title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            >
              <span className="material-symbols-outlined text-base">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
          )}

          {/* Big Play Button Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex flex-col items-center justify-center transition-all group-hover:bg-black/25">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-pink-500/40 animate-ping" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-pink-400 text-white flex items-center justify-center shadow-lg shadow-pink-600/50 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl ml-0.5">play_arrow</span>
                </div>
              </div>
              <span className="mt-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-bold shadow-md tracking-wide">
                Nhấn để phát video
              </span>
            </div>
          )}

          {/* Subtle Pause button overlay on hover when playing */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-2xl">pause</span>
              </div>
            </div>
          )}
        </div>

        {/* Caption Row */}
        <div className="mt-2.5 md:mt-3 flex flex-col w-full px-1 gap-1">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col truncate pr-2">
              <span className="text-[11px] md:text-xs text-[#231918] font-bold truncate">
                {item.title}
              </span>
              <span className="text-[9px] md:text-[10px] text-primary/80 font-medium truncate">
                {item.tag}
              </span>
            </div>

            <button
              onClick={(e) => toggleLike(e, item.id)}
              className="flex items-center gap-1 text-primary hover:scale-110 active:scale-95 transition-transform shrink-0 px-2 py-1 rounded-full hover:bg-pink-50 cursor-pointer"
              title="Thả tim khoảnh khắc này"
            >
              <span className="material-symbols-outlined text-[16px] md:text-[18px]">
                {item.icon || 'favorite'}
              </span>
              {photoLikes[item.id] ? (
                <span className="text-[10px] font-bold">{photoLikes[item.id]}</span>
              ) : null}
            </button>
          </div>

          {item.wish && (
            <p className="text-[10px] sm:text-[11px] text-[#594047]/85 leading-relaxed italic border-t border-pink-100/70 pt-1 mt-0.5">
              "{item.wish}"
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function GallerySection() {
  const [photoLikes, setPhotoLikes] = useState({})
  const [playingVideoId, setPlayingVideoId] = useState(null)

  const toggleLike = (e, id) => {
    e.stopPropagation()
    setPhotoLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col scroll-mt-10 md:scroll-mt-28"
      id="gallery"
    >
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center mb-6 md:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffd8e7] text-[#3d0026] text-xs font-bold mb-2.5 border border-pink-200/70 shadow-xs">
          <span className="material-symbols-outlined text-sm text-pink-600">photo_library</span>
          <span>Một vài tấm hình trong máy tui</span>
        </div>
      </div>

      {/* Photo & Video Frame Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {galleryPhotos.map((item) => {
          if (item.type === 'video') {
            return (
              <VideoCard
                key={item.id}
                item={item}
                isPlaying={playingVideoId === item.id}
                onTogglePlay={() => {
                  setPlayingVideoId((prev) => (prev === item.id ? null : item.id))
                }}
                photoLikes={photoLikes}
                toggleLike={toggleLike}
              />
            )
          }

          return (
            <div
              key={item.id}
              className="group relative rounded-xl md:rounded-2xl bg-white p-3 md:p-5 border-2 md:border-4 border-[#e9cfce] shadow-[0_12px_24px_rgba(219,39,119,0.14)] hover:shadow-[0_20px_60px_-15px_rgba(219,39,119,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center pt-4 md:pt-6"
            >
              {/* Hanging Pushpin Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary shadow-md border border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>

              {/* Inner Media Container */}
              <div className="relative w-full rounded-lg overflow-hidden bg-white p-1 md:p-2 shadow-inner border border-pink-200/40">
                <div className="relative w-full h-80 rounded overflow-hidden shadow-sm bg-[#fff0ef]">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    loading="lazy"
                  />
                </div>

                {/* Caption Row */}
                <div className="mt-2.5 md:mt-3 flex flex-col w-full px-1 gap-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col truncate pr-2">
                      <span className="text-[11px] md:text-xs text-[#231918] font-bold truncate">
                        {item.title}
                      </span>
                      <span className="text-[9px] md:text-[10px] text-primary/80 font-medium truncate">
                        {item.tag}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleLike(e, item.id)}
                      className="flex items-center gap-1 text-primary hover:scale-110 active:scale-95 transition-transform shrink-0 px-2 py-1 rounded-full hover:bg-pink-50 cursor-pointer"
                      title="Thả tim khoảnh khắc này"
                    >
                      <span className="material-symbols-outlined text-[16px] md:text-[18px]">
                        {item.icon || 'favorite'}
                      </span>
                      {photoLikes[item.id] ? (
                        <span className="text-[10px] font-bold">{photoLikes[item.id]}</span>
                      ) : null}
                    </button>
                  </div>

                  {item.wish && (
                    <p className="text-[10px] sm:text-[11px] text-[#594047]/85 leading-relaxed italic border-t border-pink-100/70 pt-1 mt-0.5">
                      "{item.wish}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
