import { useEffect, useRef, useState } from 'react'

export default function SecretEntrance({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalHidden, setIsModalHidden] = useState(false)
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animFrameIdRef = useRef(null)

  const confettiColors = [
    '#b7005e',
    '#db2777',
    '#fc79bd',
    '#ffd8e7',
    '#ffd8ed',
    '#ffafd3',
    '#ffd9e2',
    '#a43073',
    '#ffffff',
    '#f43f5e',
  ]

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current)
      }
    }
  }, [])

  // Particle Class
  class Particle {
    constructor(x, y, vx, vy, color, shape, size, life) {
      this.x = x
      this.y = y
      this.vx = vx
      this.vy = vy
      this.color = color
      this.shape = shape // 'circle', 'rect', 'star', 'heart'
      this.size = size
      this.maxLife = life
      this.life = life
      this.gravity = 0.16
      this.drag = 0.982
      this.rotation = Math.random() * Math.PI * 2
      this.rotationSpeed = (Math.random() - 0.5) * 0.2
    }

    update() {
      this.vx *= this.drag
      this.vy = this.vy * this.drag + this.gravity
      this.x += this.vx
      this.y += this.vy
      this.rotation += this.rotationSpeed
      this.life--
    }

    draw(ctx) {
      const alpha = Math.max(0, this.life / this.maxLife)
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = this.color
      ctx.strokeStyle = this.color
      ctx.translate(this.x, this.y)
      ctx.rotate(this.rotation)

      if (this.shape === 'circle') {
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fill()
      } else if (this.shape === 'rect') {
        ctx.fillRect(-this.size, -this.size * 0.5, this.size * 2, this.size)
      } else if (this.shape === 'star') {
        const spikes = 5
        const outerRadius = this.size * 1.5
        const innerRadius = this.size * 0.7
        let rot = (Math.PI / 2) * 3
        let step = Math.PI / spikes
        ctx.beginPath()
        ctx.moveTo(0, -outerRadius)
        for (let i = 0; i < spikes; i++) {
          ctx.lineTo(Math.cos(rot) * outerRadius, Math.sin(rot) * outerRadius)
          rot += step
          ctx.lineTo(Math.cos(rot) * innerRadius, Math.sin(rot) * innerRadius)
          rot += step
        }
        ctx.closePath()
        ctx.fill()
      } else if (this.shape === 'heart') {
        const s = this.size * 0.8
        ctx.beginPath()
        ctx.moveTo(0, s * 0.3)
        ctx.bezierCurveTo(-s, -s * 0.8, -s * 1.6, s * 0.3, 0, s * 1.5)
        ctx.bezierCurveTo(s * 1.6, s * 0.3, s, -s * 0.8, 0, s * 0.3)
        ctx.fill()
      }

      ctx.restore()
    }
  }

  const animateParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const particles = particlesRef.current

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update()
      particles[i].draw(ctx)
      if (particles[i].life <= 0) {
        particles.splice(i, 1)
      }
    }

    if (particles.length > 0) {
      animFrameIdRef.current = requestAnimationFrame(animateParticles)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      animFrameIdRef.current = null
    }
  }

  // Visual web audio celebratory chime
  const playSynthSparkleTone = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return
      const actx = new AudioCtx()
      if (actx.state === 'suspended') actx.resume()

      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]
      notes.forEach((freq, idx) => {
        const osc = actx.createOscillator()
        const gain = actx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, actx.currentTime + idx * 0.08)
        gain.gain.setValueAtTime(0.001, actx.currentTime + idx * 0.08)
        gain.gain.exponentialRampToValueAtTime(0.2, actx.currentTime + idx * 0.08 + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + idx * 0.08 + 0.6)
        osc.connect(gain)
        gain.connect(actx.destination)
        osc.start(actx.currentTime + idx * 0.08)
        osc.stop(actx.currentTime + idx * 0.08 + 0.65)
      })
    } catch (e) {}
  }

  // Fireworks & Confetti explosion
  const launchCelebrationExplosion = () => {
    const origins = [
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.45 },
      { x: window.innerWidth * 0.25, y: window.innerHeight * 0.35 },
      { x: window.innerWidth * 0.75, y: window.innerHeight * 0.35 },
      { x: window.innerWidth * 0.35, y: window.innerHeight * 0.6 },
      { x: window.innerWidth * 0.65, y: window.innerHeight * 0.6 },
    ]

    origins.forEach((origin, index) => {
      setTimeout(() => {
        playSynthSparkleTone()
        for (let i = 0; i < 90; i++) {
          const angle = Math.random() * Math.PI * 2
          const speed = Math.random() * 16 + 4
          const vx = Math.cos(angle) * speed
          const vy = Math.sin(angle) * speed - 2
          const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
          const shapes = ['circle', 'rect', 'star', 'heart']
          const shape = shapes[Math.floor(Math.random() * shapes.length)]
          const size = Math.random() * 6 + 3
          const life = Math.floor(Math.random() * 70 + 60)

          particlesRef.current.push(
            new Particle(origin.x, origin.y, vx, vy, color, shape, size, life)
          )
        }

        if (!animFrameIdRef.current) {
          animateParticles()
        }
      }, index * 160)
    })
  }

  const handleOpenSurprise = () => {
    launchCelebrationExplosion()
    setIsOpen(true)
    if (onOpen) onOpen()

    setTimeout(() => {
      setIsModalHidden(true)
    }, 900)
  }

  return (
    <>
      {/* Canvas for fireworks & confetti explosion */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[110] w-full h-full"
      />

      {/* Secret Entrance Modal / Overlay */}
      {!isModalHidden && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#fff5f6] transition-all duration-1000 ease-out overflow-hidden ${
            isOpen ? 'scale-110 opacity-0 pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          {/* Glowing dreamy background orbs & aura */}
          <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-[#ffb1c7]/45 blur-3xl pointer-events-none animate-pulse duration-[5000ms]" />
          <div className="absolute top-1/2 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#ffd8e7]/50 blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
          <div className="absolute -bottom-24 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[#ffd8ed]/40 blur-3xl pointer-events-none" />

          {/* Subtle twinkling stars in entrance */}
          <div className="magical-sparkle top-12 left-1/4 text-primary text-2xl">✨</div>
          <div className="magical-sparkle top-1/4 right-1/4 text-secondary text-xl">🌸</div>
          <div className="magical-sparkle bottom-20 left-16 text-primary-container text-2xl">💖</div>
          <div className="magical-sparkle bottom-28 right-20 text-tertiary text-xl">✨</div>
          <div className="magical-sparkle top-20 right-1/6 text-secondary-container text-3xl">🎀</div>

          {/* Central Interactive Birthday Gift / Gate Card */}
          <div
            className={`relative z-10 w-[92%] max-w-lg mx-auto bg-white/95 backdrop-blur-2xl p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-pink-200 shadow-[0_25px_70px_rgba(219,39,119,0.22)] text-center flex flex-col items-center animate-float-slow transition-transform duration-700 ${
              isOpen ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            {/* Delicate Top Ribbon Tag */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-container via-secondary to-primary text-white font-nunito uppercase tracking-widest text-[11px] font-bold shadow-md flex items-center gap-1.5 border border-white/50 whitespace-nowrap">
              <span className="text-xs">🎀</span>
              <span>Birthday Surprise Gate</span>
              <span className="text-xs">🎀</span>
            </div>

            {/* Pulsing Sparkling Birthday Icon / Gift Box */}
            <div className="relative mt-2 mb-4 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#ffd8e7] via-[#ffd9e2] to-[#ffb1c7] flex items-center justify-center shadow-[0_12px_32px_rgba(219,39,119,0.3)] animate-pulse-glow">
                <span className="text-5xl sm:text-6xl select-none filter drop-shadow-sm transition-transform duration-300 hover:scale-110">
                  🎁
                </span>
              </div>
              <div className="absolute -top-1 -right-2 text-2xl animate-bounce duration-1000">✨</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">🎂</div>
            </div>

            {/* Teaser Badge & Heading */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#f7e4e2] text-primary text-xs font-bold mb-3 border border-pink-200/40 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-primary-container">
                favorite
              </span>
              <span>A special delivery for Bich Nu ✨</span>
            </div>

            <h2 className="font-syne text-2xl sm:text-4xl text-[#231918] font-extrabold tracking-tight mb-2">
              Someone Made This <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                Just For You!
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#594047] max-w-sm mb-6 leading-relaxed">
              A sparkling wonderland crafted with heartfelt memories, joyful smiles, and boundless
              warmth for Nguyen Thi Cam Nguyet.
            </p>

            {/* Main CTA Button */}
            <button
              onClick={handleOpenSurprise}
              className="shimmer-effect group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary text-white font-syne text-base sm:text-lg font-bold shadow-[0_12px_30px_rgba(219,39,119,0.38)] hover:shadow-[0_18px_40px_rgba(219,39,119,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/40"
              type="button"
            >
              <span>Tap to open your surprise</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                🎀
              </span>
            </button>

            {/* Hint text */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-tertiary text-xs opacity-90 font-medium">
              <span className="material-symbols-outlined text-[16px] animate-pulse">
                volume_up
              </span>
              <span>Turn on your volume &amp; click to unwrap your birthday magic ✨</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
