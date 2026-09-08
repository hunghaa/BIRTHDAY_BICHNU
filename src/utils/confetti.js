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

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}

export function triggerHeartConfetti() {
  confetti({
    particleCount: 40,
    spread: 60,
    origin: { y: 0.8 },
    shapes: ['star'],
    colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffd700'],
  })
}
