'use client'

import { motion } from 'framer-motion'

interface SlideNavigationProps {
  current: number
  total: number
  onNext: () => void
  onPrev: () => void
  onGoTo: (index: number) => void
}

export default function SlideNavigation({
  current,
  total,
  onNext,
  onPrev,
  onGoTo,
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center gap-6 px-8">
      {/* Prev button */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="w-10 h-10 rounded-full border border-ash/30 flex items-center justify-center text-ash hover:border-amber hover:text-amber transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center justify-center"
          >
            <motion.div
              className="rounded-full transition-all"
              animate={{
                width: i === current ? 24 : 6,
                height: 6,
                backgroundColor: i === current ? '#C4892A' : i < current ? '#C4892A55' : '#9A9A8E44',
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="w-10 h-10 rounded-full border border-ash/30 flex items-center justify-center text-ash hover:border-amber hover:text-amber transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Slide counter */}
      <div className="absolute right-8 text-ash text-[18px] font-mono">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  )
}
