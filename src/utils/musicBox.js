// Web Audio API Birthday Music Box
class BirthdayMusicBox {
  constructor() {
    this.ctx = null
    this.isPlaying = false
    this.timer = null
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  playNote(freq, startTime, duration) {
    if (!this.ctx) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    // Warm music box sound: sine wave + soft harmonics
    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, startTime)

    // Music box envelope: instant attack, exponential decay
    gain.gain.setValueAtTime(0.001, startTime)
    gain.gain.exponentialRampToValueAtTime(0.3, startTime + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)

    osc.connect(gain)
    gain.connect(this.ctx.destination)

    osc.start(startTime)
    osc.stop(startTime + duration)
  }

  start(onFinish) {
    this.init()
    if (!this.ctx) return
    this.isPlaying = true

    // Note frequencies (Hz)
    const notes = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.00,
      A4: 440.00,
      B4: 493.88,
      C5: 523.25,
      D5: 587.33,
      E5: 659.25,
      F5: 698.46,
      G5: 783.99,
      A5: 880.00,
    }

    // Happy Birthday melody
    const melody = [
      { note: notes.G4, dur: 0.35, pause: 0.4 },
      { note: notes.G4, dur: 0.25, pause: 0.3 },
      { note: notes.A4, dur: 0.55, pause: 0.6 },
      { note: notes.G4, dur: 0.55, pause: 0.6 },
      { note: notes.C5, dur: 0.55, pause: 0.6 },
      { note: notes.B4, dur: 1.1, pause: 1.2 },

      { note: notes.G4, dur: 0.35, pause: 0.4 },
      { note: notes.G4, dur: 0.25, pause: 0.3 },
      { note: notes.A4, dur: 0.55, pause: 0.6 },
      { note: notes.G4, dur: 0.55, pause: 0.6 },
      { note: notes.D5, dur: 0.55, pause: 0.6 },
      { note: notes.C5, dur: 1.1, pause: 1.2 },

      { note: notes.G4, dur: 0.35, pause: 0.4 },
      { note: notes.G4, dur: 0.25, pause: 0.3 },
      { note: notes.G5, dur: 0.55, pause: 0.6 },
      { note: notes.E5, dur: 0.55, pause: 0.6 },
      { note: notes.C5, dur: 0.55, pause: 0.6 },
      { note: notes.B4, dur: 0.55, pause: 0.6 },
      { note: notes.A4, dur: 1.0, pause: 1.1 },

      { note: notes.F5, dur: 0.35, pause: 0.4 },
      { note: notes.F5, dur: 0.25, pause: 0.3 },
      { note: notes.E5, dur: 0.55, pause: 0.6 },
      { note: notes.C5, dur: 0.55, pause: 0.6 },
      { note: notes.D5, dur: 0.55, pause: 0.6 },
      { note: notes.C5, dur: 1.3, pause: 1.5 },
    ]

    let currTime = this.ctx.currentTime + 0.1
    melody.forEach((item) => {
      this.playNote(item.note, currTime, item.dur)
      currTime += item.pause
    })

    const totalDuration = (currTime - this.ctx.currentTime) * 1000
    this.timer = setTimeout(() => {
      this.isPlaying = false
      if (onFinish) onFinish()
    }, totalDuration)
  }

  stop() {
    this.isPlaying = false
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (this.ctx) {
      this.ctx.close()
      this.ctx = null
    }
  }
}

export const musicBox = new BirthdayMusicBox()
