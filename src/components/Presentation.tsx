'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SlideNavigation from './ui/SlideNavigation'

import TitleSlide from './slides/TitleSlide'
import TensionScoreSlide from './slides/TensionScoreSlide'
import CrisisSlide from './slides/CrisisSlide'
import DiapagaMapSlide from './slides/DiapagaMapSlide'
import TimelineSlide from './slides/TimelineSlide'
import BeninComparisonSlide from './slides/BeninComparisonSlide'
import IntelCollapseSlide from './slides/IntelCollapseSlide'
import KairosArcDifferenceSlide from './slides/KairosArcDifferenceSlide'
import LeadTimeSlide from './slides/LeadTimeSlide'
import EarlyWarningSlide from './slides/EarlyWarningSlide'
import RequirementsSlide from './slides/RequirementsSlide'
import EngagementSlide from './slides/EngagementSlide'
import CallToActionSlide from './slides/CallToActionSlide'
import ClosingSlide from './slides/ClosingSlide'

const slides = [
  TitleSlide,
  TensionScoreSlide,
  CrisisSlide,
  DiapagaMapSlide,
  TimelineSlide,
  BeninComparisonSlide,
  IntelCollapseSlide,
  KairosArcDifferenceSlide,
  LeadTimeSlide,
  EarlyWarningSlide,
  RequirementsSlide,
  EngagementSlide,
  CallToActionSlide,
  ClosingSlide,
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function Presentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1)
      setCurrent(c => c + 1)
    }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1)
      setCurrent(c => c - 1)
    }
  }, [current])

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  const CurrentSlide = slides[current]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate slide-container">
      {/* Subtle scan line overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }}
      />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <SlideNavigation
        current={current}
        total={slides.length}
        onNext={goNext}
        onPrev={goPrev}
        onGoTo={goTo}
      />
    </div>
  )
}
