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
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col scroll-mt-10 md:scroll-mt-28"
      id="gallery"
    >
      {/* Section Heading - Exact Mobile & Desktop specs */}
      <div className="flex flex-col items-center text-center mb-6 md:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd8e7] text-[#3d0026] text-xs font-bold mb-2 border border-pink-200/60 shadow-xs">
          <span className="material-symbols-outlined text-sm">photo_camera</span>
          <span>Cherished Memories &amp; Golden Moments</span>
        </div>
        <h2 className="font-syne text-xl sm:text-2xl md:text-4xl text-[#231918] font-bold">
          Moments with Bich Nu 📸
        </h2>
        <p className="text-xs sm:text-sm text-[#594047] max-w-xl mt-1 md:mt-2 leading-relaxed px-2">
          A visual collection honoring Bich Nu’s luminous smile, classroom triumphs, and everyday radiance.
        </p>
      </div>

      {/* Photo Frame Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {galleryPhotos.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectPhoto(item)}
            className="group relative rounded-xl md:rounded-2xl bg-white p-3 md:p-5 border-2 md:border-4 border-[#e9cfce] shadow-[0_12px_24px_rgba(219,39,119,0.18)] hover:shadow-[0_20px_60px_-15px_rgba(219,39,119,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center cursor-pointer pt-4 md:pt-6"
          >
            {/* Hanging Pushpin Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary shadow-md border border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            {/* Inner Picture Container */}
            <div className="relative w-full rounded-lg overflow-hidden bg-white p-1 md:p-2 shadow-inner border border-pink-200/40">
              <div className="relative w-full h-80 rounded overflow-hidden shadow-sm bg-[#fff0ef]">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 text-primary text-xs font-bold shadow-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    View Photo
                  </span>
                </div>
              </div>

              {/* Caption Row */}
              <div className="mt-2.5 md:mt-3 flex items-center justify-between w-full px-1">
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-[#755368] font-bold truncate pr-2">
                  {item.title}
                </span>

                <button
                  onClick={(e) => toggleLike(e, item.id)}
                  className="flex items-center gap-1 text-primary hover:scale-110 active:scale-95 transition-transform shrink-0"
                  title="Like this moment"
                >
                  <span className="material-symbols-outlined text-[16px] md:text-[18px]">
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
