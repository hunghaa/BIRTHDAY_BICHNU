import { useState } from 'react'
import { galleryPhotos } from '../data/galleryData'

export default function GallerySection({ onSelectPhoto }) {
  const [photoLikes, setPhotoLikes] = useState({})

  const toggleLike = (e, id) => {
    e.stopPropagation()
    setPhotoLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col"
      id="gallery"
    >
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/90 text-[#a43073] text-xs font-bold mb-2 border border-pink-200/60">
          <span className="material-symbols-outlined text-sm sm:text-base">photo_camera</span>
          <span>Cherished Memories &amp; Golden Moments</span>
        </div>
        <h2 className="font-syne text-2xl sm:text-4xl text-[#231918] font-bold">
          Moments with Bich Nu 📸
        </h2>
        <p className="text-xs sm:text-sm text-[#594047] max-w-xl mt-2 leading-relaxed px-2">
          A visual collection honoring Bich Nu’s luminous smile, classroom triumphs, and everyday radiance.
        </p>
      </div>

      {/* Photo Frame Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {galleryPhotos.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectPhoto(item)}
            className="group relative rounded-2xl bg-gradient-to-b from-[#fdfbf9] to-[#f4ebe6] p-4 sm:p-5 border-4 border-[#e9cfce] shadow-[0_12px_28px_rgba(117,83,104,0.12)] hover:shadow-[0_22px_44px_rgba(183,0,94,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center cursor-pointer"
          >
            {/* Hanging Pushpin Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#fc79bd] via-primary-container to-secondary border-2 border-white shadow-md z-20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>

            {/* Inner Polaroid Container */}
            <div className="w-full bg-white p-2.5 sm:p-3 rounded-xl shadow-inner border border-[#e1bec6]/60 flex flex-col items-center">
              <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden bg-[#fff0ef] shadow-[inset_0_2px_6px_rgba(0,0,0,0.1)] border border-pink-200/50">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 text-primary text-xs font-bold shadow-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    Xem ảnh
                  </span>
                </div>
              </div>

              {/* Polaroid Caption Row */}
              <div className="mt-3 flex items-center justify-between w-full px-1">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#755368] font-bold truncate pr-2">
                  {item.title}
                </span>

                <button
                  onClick={(e) => toggleLike(e, item.id)}
                  className="flex items-center gap-1 text-primary hover:scale-110 active:scale-95 transition-transform shrink-0"
                  title="Thả tim ảnh này"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon || 'favorite'}
                  </span>
                  {photoLikes[item.id] ? (
                    <span className="text-[10px] font-bold">{photoLikes[item.id]}</span>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
