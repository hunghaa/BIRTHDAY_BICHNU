import birthdayAudioSrc from '../assets/sound_birthday.mp3'

// Birthday Audio Player with sound_birthday.mp3 & Web Audio fallback
class BirthdayMusicBox {
  constructor() {
    this.audio = null
    this.isPlaying = false
    this.onFinishCallback = null
    this.ctx = null
    this.timer = null
  }

  initAudio() {
    if (!this.audio && typeof window !== 'undefined') {
      try {
        this.audio = new Audio(birthdayAudioSrc)
        this.audio.loop = true
        this.audio.volume = 0.4
        this.audio.addEventListener('ended', () => {
          this.isPlaying = false
          if (this.onFinishCallback) this.onFinishCallback()
        })
      } catch (err) {
        console.warn('Audio init error, will use synth fallback:', err)
      }
    }
  }

  start(onFinish) {
    this.initAudio()
    this.onFinishCallback = onFinish

    if (this.audio) {
      this.audio.currentTime = 0
      const playPromise = this.audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true
          })
          .catch((err) => {
            console.warn('HTML5 Audio autoplay restricted, falling back to synth tone:', err)
            this.startSynthMelody(onFinish)
          })
        return
      }
    }

    // Fallback if audio element cannot be initialized
    this.startSynthMelody(onFinish)
  }

  stop() {
    this.isPlaying = false
    if (this.audio) {
      try {
        this.audio.pause()
        this.audio.currentTime = 0
      } catch {}
    }
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (this.ctx) {
      try {
        this.ctx.close()
      } catch {}
      this.ctx = null
    }
  }

  // Synthesizer fallback if mp3 blocked
  startSynthMelody(onFinish) {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) this.ctx = new AudioCtx()
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
    if (!this.ctx) return
    this.isPlaying = true

    const notes = {
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
      G4: 392.00, A4: 440.00, B4: 493.88, C5: 523.25,
      D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00,
    }

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
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(item.note, currTime)
      gain.gain.setValueAtTime(0.001, currTime)
      gain.gain.exponentialRampToValueAtTime(0.25, currTime + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, currTime + item.dur)
      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start(currTime)
      osc.stop(currTime + item.dur)
      currTime += item.pause
    })

    const totalDuration = (currTime - this.ctx.currentTime) * 1000
    this.timer = setTimeout(() => {
      this.isPlaying = false
      if (onFinish) onFinish()
    }, totalDuration)
  }
}

export const musicBox = new BirthdayMusicBox()
