import confetti from 'canvas-confetti'

export function triggerConfetti() {
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#db2777', '#f472b6', '#fbcfe8', '#ffd700', '#ba0060', '#fc79bd'],
  }

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    })
  }

  fire(0.25, { spread: 26, startVelocity: 55 })
  fire(0.2, { spread: 60 })
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
  fire(0.1, { spread: 120, startVelocity: 45 })
}

export function triggerHeartConfetti(opts = {}) {
  confetti({
    particleCount: opts.particleCount || 50,
    spread: opts.spread || 70,
    origin: opts.origin || { y: 0.75 },
    shapes: ['star'],
    colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffd700', '#ba0060', '#fc79bd'],
    ...opts,
  })
}

// Bắn pháo hoa đại tiệc sinh nhật đa tầng (Grand Fireworks)
export function triggerGrandFireworks() {
  const duration = 2500
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 9999 }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  // Tiếng nổ pháo hoa trung tâm
  triggerConfetti()
  triggerHeartConfetti()

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 60 * (timeLeft / duration)

    // Bắn từ 2 góc dưới và trung tâm
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#db2777', '#f472b6', '#ffd700', '#fc79bd'],
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ba0060', '#ffd8ed', '#ffafd3', '#ffd700'],
    })
  }, 250)
}
