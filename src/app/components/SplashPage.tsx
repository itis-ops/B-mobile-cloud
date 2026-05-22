'use client'

import { useState } from 'react'

type Phase = 'form' | 'result'

const FEELINGS = [
  { emoji: '😴', label: 'Tired' },
  { emoji: '✨', label: 'Glowing' },
  { emoji: '😤', label: 'Stressed' },
  { emoji: '😊', label: 'Happy' },
  { emoji: '🏜️', label: 'Dry' },
  { emoji: '💧', label: 'Oily' },
  { emoji: '🌸', label: 'Sensitive' },
  { emoji: '🦁', label: 'Bold' },
  { emoji: '🛋️', label: 'Lazy' },
  { emoji: '😬', label: 'Anxious' },
  { emoji: '🌟', label: 'Radiant' },
  { emoji: '😎', label: 'Chill' },
]

// [5-syllable line, 7-syllable line, 5-syllable line]
const HAIKUS: Record<string, [string, string, string]> = {
  Tired:     ['Eyes heavy like lead',         'Beef tallow says wake up babe',     'Glow first, nap later'],
  Glowing:   ['Already on fire',              'Why are you even here though?',     'Tallow shows off too'],
  Stressed:  ['Cortisol is spiked',           "Dani's jar says: breathe and rub",  'Skin forgives it all'],
  Happy:     ['Joy pours from your face',     'Tallow seals the good vibes in',    'Glow forever more'],
  Dry:       ['Desert called. Your face.',    'Beef tallow to the rescue',         'Sahara who now?'],
  Oily:      ['Shiny like a star',            'Tallow calms your inner shine',     'Not greasy, just blessed'],
  Sensitive: ['Handle you with care',         'Grass-fed love for tender skin',    'Dani hugs your face'],
  Bold:      ['Fearless and alive',           'Tallow matches your big moves',     'Skin flexing on them'],
  Lazy:      ['Couch is calling loud',        'One jar, zero effort, glow',        'Moisturized in bed'],
  Anxious:   ['Thoughts race like wild bees', 'Rub tallow, count to seven',        'Skin stayed calm for you'],
  Radiant:   ['Sun bows at your feet',        'Even tallow seems confused',        'You did not need us'],
  Chill:     ['Vibes only, no stress',        'Tallow glides on smooth as jazz',   'Skin thanks you later'],
}

const CAPTIONS: Record<string, string> = {
  Tired:     'Rest assured — your skin will be wide awake.',
  Glowing:   'Honestly? You came here just to flex on us.',
  Stressed:  'Take a breath. Your pores have been heard.',
  Happy:     'Good energy + grass-fed tallow = unstoppable.',
  Dry:       'Hydration incoming. The desert has met its match.',
  Oily:      'Balance is everything. Tallow gets it.',
  Sensitive: 'You deserve the gentlest things. This is that.',
  Bold:      'Your skin energy is unmatched. We keep up.',
  Lazy:      "Minimal effort. Maximum glow. Dani’s specialty.",
  Anxious:   'The ritual is the medicine. Smooth and slow.',
  Radiant:   'You literally do not need us. But here we are.',
  Chill:     'Smooth vibes, smoother skin. That is the move.',
}

function JarSVG({ name }: { name?: string }) {
  return (
    <svg viewBox="0 0 300 330" className="w-56 sm:w-64 h-auto drop-shadow-2xl">
      <defs>
        <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#e8c06a" />
          <stop offset="50%"  stopColor="#c9952e" />
          <stop offset="100%" stopColor="#9e7220" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.92)" />
          <stop offset="12%"  stopColor="rgba(242,238,234,0.96)" />
          <stop offset="88%"  stopColor="rgba(242,238,234,0.96)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.82)" />
        </linearGradient>
        <linearGradient id="creamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#faf5ee" />
          <stop offset="100%" stopColor="#ede0cc" />
        </linearGradient>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#c5a4e8" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="150" cy="325" rx="105" ry="9" fill="rgba(0,0,0,0.10)" />

      {/* Glass jar body */}
      <rect x="14" y="112" width="272" height="200" rx="22"
        fill="url(#glassGrad)"
        stroke="rgba(190,185,210,0.55)" strokeWidth="1.5"
        filter="url(#softShadow)"
      />

      {/* Cream inside */}
      <rect x="22" y="118" width="256" height="188" rx="16" fill="url(#creamGrad)" />

      {/* Left glass shine */}
      <rect x="26" y="124" width="16" height="158" rx="8" fill="rgba(255,255,255,0.62)" />

      {/* Right glass shine */}
      <rect x="258" y="136" width="9"  height="130" rx="4" fill="rgba(255,255,255,0.28)" />

      {/* Purple splat label */}
      <path
        d="M 150 152
           C 185 132, 222 152, 228 182
           C 248 190, 258 218, 244 238
           C 255 260, 242 288, 218 292
           C 210 314, 184 322, 164 312
           C 150 326, 124 322, 112 308
           C 88  314, 64  294, 66  268
           C 44  255, 40  224, 56  208
           C 44  184, 56  156, 80  152
           C 88  130, 118 130, 150 152 Z"
        fill="#c9aaee"
        opacity="0.97"
      />

      {/* Splat blob dots (decorative) */}
      <circle cx="240" cy="165" r="10" fill="#c9aaee" opacity="0.7" />
      <circle cx="248" cy="180" r="5"  fill="#c9aaee" opacity="0.5" />
      <circle cx="58"  cy="168" r="8"  fill="#c9aaee" opacity="0.6" />
      <circle cx="70"  cy="298" r="7"  fill="#c9aaee" opacity="0.55" />
      <circle cx="228" cy="296" r="9"  fill="#c9aaee" opacity="0.6" />
      <circle cx="155" cy="328" r="6"  fill="#c9aaee" opacity="0.4" />

      {/* Label text */}
      <text x="150" y="183" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13" fill="#2a2050" letterSpacing="0.8">
        Dani&apos;s
      </text>
      <text x="150" y="220" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="29" fontWeight="bold" fill="#1a1040">
        Skin Juice
      </text>
      <line x1="76" y1="228" x2="224" y2="228" stroke="#2a2050" strokeWidth="0.7" opacity="0.55" />
      <text x="150" y="246" textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="7.5" fill="#2a2050" letterSpacing="2.5">
        SMALL BATCH • HANDMADE
      </text>

      {/* Personalized name or tagline */}
      {name ? (
        <text x="150" y="278" textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="13" fill="#2a2050" fontStyle="italic">
          for {name} ✨
        </text>
      ) : (
        <text x="150" y="274" textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="7" fill="#2a2050" letterSpacing="0.6">
          Made with Grass-Fed Beef Tallow
        </text>
      )}

      {/* Bamboo lid body */}
      <rect x="6" y="68" width="288" height="50" rx="8" fill="url(#lidGrad)" />

      {/* Lid top dome */}
      <ellipse cx="150" cy="70" rx="144" ry="26" fill="#ddb04a" />

      {/* Wood grain lines */}
      {[38, 62, 86, 112, 138, 162, 188, 214, 238, 262].map((x, i) => (
        <line key={i}
          x1={x} y1="48"
          x2={x - 3} y2="118"
          stroke="rgba(110,70,10,0.20)" strokeWidth="1.8"
        />
      ))}

      {/* Lid top highlight */}
      <ellipse cx="105" cy="60" rx="45" ry="10"
        fill="rgba(255,255,255,0.18)"
        transform="rotate(-8 105 60)"
      />

      {/* Lid-to-jar seam */}
      <ellipse cx="150" cy="118" rx="136" ry="9" fill="#8a6018" opacity="0.45" />
    </svg>
  )
}

export default function SplashPage() {
  const [phase, setPhase]     = useState<Phase>('form')
  const [name, setName]       = useState('')
  const [age, setAge]         = useState('')
  const [feeling, setFeeling] = useState<string | null>(null)

  const canSubmit = name.trim().length > 0 && age.trim().length > 0 && feeling !== null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setPhase('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleReset() {
    setPhase('form')
    setName('')
    setAge('')
    setFeeling(null)
  }

  if (phase === 'result' && feeling) {
    const [line1, line2, line3] = HAIKUS[feeling]
    const caption = CAPTIONS[feeling]

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-[#faf8ff] flex flex-col items-center px-6 py-14">

        {/* Header */}
        <div className="text-center mb-2 animate-fade-in">
          <p className="text-[#9b6fd4] uppercase tracking-[0.25em] text-xs font-semibold mb-1">
            Your personal jar is ready
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1a1040]">
            {name}, age {age} 🌿
          </h1>
        </div>

        {/* Floating jar */}
        <div className="my-8 animate-float animate-pop">
          <JarSVG name={name} />
        </div>

        {/* Feeling badge */}
        <div className="animate-fade-in delay-200 mb-6">
          <span className="inline-flex items-center gap-2 bg-[#ede5f8] text-[#6b3fa0] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#c9aaee]">
            {FEELINGS.find(f => f.label === feeling)?.emoji} Feeling {feeling} today
          </span>
        </div>

        {/* Haiku card */}
        <div className="animate-fade-in-up delay-300 w-full max-w-sm bg-white rounded-3xl shadow-lg border border-[#e8d8f8] p-8 text-center mb-6">
          <p className="text-[#9b6fd4] text-xs uppercase tracking-widest mb-4 font-semibold">
            A haiku, just for you
          </p>
          <div className="font-playfair italic text-[#1a1040] space-y-1.5 text-lg leading-relaxed">
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
          </div>
          <div className="mt-5 pt-5 border-t border-[#f0e4ff] text-[#7c5cbf] text-sm leading-relaxed font-[var(--font-geist)]">
            {caption}
          </div>
        </div>

        {/* Sparkle decoration */}
        <div className="flex gap-4 text-xl mb-8 animate-fade-in delay-500">
          {['✨', '🌿', '✨'].map((s, i) => (
            <span key={i} className="animate-sparkle" style={{ animationDelay: `${i * 0.4}s` }}>
              {s}
            </span>
          ))}
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="animate-fade-in delay-600 rounded-full border-2 border-[#c9aaee] text-[#6b3fa0] font-semibold px-8 py-3 hover:bg-[#ede5f8] transition-colors text-sm"
        >
          Make another jar →
        </button>

        {/* Brand footer */}
        <p className="mt-12 text-[#c0a8e0] text-xs tracking-widest uppercase animate-fade-in delay-700">
          Dani&apos;s Skin Juice • Small Batch • Handmade
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5eeff] via-[#faf8ff] to-[#f5eeff] flex flex-col items-center px-6 py-14">

      {/* Brand header */}
      <div className="text-center mb-10 animate-fade-in">
        {/* Logo splat */}
        <div className="relative inline-flex items-center justify-center mb-4">
          <svg viewBox="0 0 160 140" className="w-52 h-auto">
            <path
              d="M 80 18 C 108 4, 138 20, 140 48 C 158 55, 162 80, 148 94
                 C 158 112, 146 136, 124 138 C 118 152, 94 156, 80 146
                 C 64 158, 38 152, 34 136 C 12 132, 0 108, 14 92
                 C 0 76, 6 50, 26 44 C 28 18, 56 6, 80 18 Z"
              fill="#c9aaee"
            />
            {/* Small blob dots */}
            <circle cx="142" cy="38"  r="6" fill="#c9aaee" opacity="0.65" />
            <circle cx="18"  cy="40"  r="5" fill="#c9aaee" opacity="0.55" />
            <circle cx="20"  cy="108" r="7" fill="#c9aaee" opacity="0.6"  />
            <circle cx="140" cy="110" r="6" fill="#c9aaee" opacity="0.6"  />
            <circle cx="80"  cy="152" r="5" fill="#c9aaee" opacity="0.45" />

            <text x="80" y="56" textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="10.5" fill="#2a2050" letterSpacing="0.4">
              Dani&apos;s
            </text>
            <text x="80" y="84" textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="24" fontWeight="bold" fill="#1a1040">
              Skin Juice
            </text>
            <line x1="24" y1="91" x2="136" y2="91" stroke="#2a2050" strokeWidth="0.6" opacity="0.5" />
            <text x="80" y="104" textAnchor="middle"
              fontFamily="Arial, sans-serif" fontSize="5.5" fill="#2a2050" letterSpacing="2">
              SMALL BATCH • HANDMADE
            </text>
            <text x="80" y="120" textAnchor="middle"
              fontFamily="Arial, sans-serif" fontSize="5" fill="#2a2050" letterSpacing="0.3">
              Made with Grass-Fed Beef Tallow
            </text>
          </svg>
        </div>

        <h2 className="text-[#1a1040] text-lg font-semibold mt-1">
          Get your personalized jar ✨
        </h2>
        <p className="text-[#9b6fd4] text-sm mt-1">
          Tell us about you — we&apos;ll make something just for your skin.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">

        {/* Name */}
        <div className="animate-fade-in-up delay-100">
          <label className="block text-xs font-semibold text-[#6b3fa0] uppercase tracking-widest mb-2">
            Your name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Dani"
            className="w-full rounded-2xl border-2 border-[#e0d0f5] bg-white px-5 py-3.5 text-[#1a1040] placeholder-[#c0a8e0] focus:outline-none focus:border-[#c9aaee] transition-colors text-base"
          />
        </div>

        {/* Age */}
        <div className="animate-fade-in-up delay-200">
          <label className="block text-xs font-semibold text-[#6b3fa0] uppercase tracking-widest mb-2">
            Your age
          </label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="e.g. 28"
            min="1"
            max="120"
            className="w-full rounded-2xl border-2 border-[#e0d0f5] bg-white px-5 py-3.5 text-[#1a1040] placeholder-[#c0a8e0] focus:outline-none focus:border-[#c9aaee] transition-colors text-base"
          />
        </div>

        {/* Feelings grid */}
        <div className="animate-fade-in-up delay-300">
          <label className="block text-xs font-semibold text-[#6b3fa0] uppercase tracking-widest mb-3">
            How are you feeling today?
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {FEELINGS.map(({ emoji, label }) => {
              const selected = feeling === label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFeeling(label)}
                  className={`
                    flex flex-col items-center gap-1 rounded-2xl border-2 px-2 py-3
                    text-center transition-all duration-150 select-none
                    ${selected
                      ? 'border-[#9b6fd4] bg-[#ede5f8] shadow-md scale-105'
                      : 'border-[#e0d0f5] bg-white hover:border-[#c9aaee] hover:bg-[#f8f2ff]'
                    }
                  `}
                >
                  <span className="text-2xl leading-none">{emoji}</span>
                  <span className={`text-xs font-semibold ${selected ? 'text-[#6b3fa0]' : 'text-[#8a6ab0]'}`}>
                    {label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Submit */}
        <div className="animate-fade-in-up delay-400 pt-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className={`
              w-full rounded-full py-4 font-bold text-base tracking-wide transition-all duration-200
              ${canSubmit
                ? 'bg-[#9b6fd4] text-white hover:bg-[#7c52b8] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100'
                : 'bg-[#e0d0f5] text-[#b89ad4] cursor-not-allowed'
              }
            `}
          >
            {canSubmit ? 'Make my jar ✨' : 'Fill in all three to continue'}
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="mt-16 text-[#c0a8e0] text-xs tracking-widest uppercase animate-fade-in delay-700">
        Dani&apos;s Skin Juice • Small Batch • Handmade
      </p>
    </div>
  )
}
