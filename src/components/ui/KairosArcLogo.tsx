/**
 * KairosArcLogo — Official brand mark
 *
 * SVG paths reconstructed from brand book (kairos-arc-brand-book.html).
 * The mark is a tapered calligraphic arc stroke with an amber dot at
 * the cross-point. Two variants: dark (white mark on dark bg) and light
 * (slate mark on light bg).
 *
 * Usage:
 *   <KairosArcLogo variant="dark" height={48} />
 *   <KairosArcLogo variant="light" height={48} />
 */

interface KairosArcLogoProps {
  /** 'dark' = white arc on dark backgrounds (default). 'light' = slate arc on light bg. */
  variant?: 'dark' | 'light'
  /** Height in px. Width scales proportionally (viewBox ratio ~765:450). */
  height?: number
  className?: string
}

export default function KairosArcLogo({
  variant = 'dark',
  height = 48,
  className = '',
}: KairosArcLogoProps) {
  const arcColor = variant === 'dark' ? '#FDFCF9' : '#1C2B3A'
  const width = Math.round(height * (765 / 450))

  return (
    <svg
      width={width}
      height={height}
      viewBox="130 250 765 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kairos Arc"
    >
      {/* Vertical stroke */}
      <path
        fill={arcColor}
        d="M609.5,412.7c-0.4-44.1-0.4-88.3,0-132.4c1.9,0.1,3.7,0.3,5.6,0.4c0,43.9,0.1,87.7-0.1,131.6C613.1,412.4,611.3,412.6,609.5,412.7z"
      />
      {/* Horizontal arc stroke — right sweep */}
      <path
        fill={arcColor}
        d="M832.9,388.8c10.5-0.3,21-0.8,31.4,0.4c-77.9,6-154.5,22.8-229.9,43c-1.5-4.7-3.4-9.2-6.2-13.3C695.2,402.4,763.8,391.4,832.9,388.8z"
      />
      {/* Diagonal arc stroke — main calligraphic sweep */}
      <path
        fill={arcColor}
        d="M464.8,472.9c40.9-17.2,83-31.7,125.7-43.9c-0.6,5.5-0.1,11,1.6,16.2c-74.4,24.1-146.9,54.4-215.2,92.6c-62.6,35.1-122,76.5-174.1,125.9c-3.2,2.7-5.9,7.2-10.7,6.9c-10.8,0-21.6,0-32.4-0.2C246.4,584.5,352.4,519.6,464.8,472.9z"
      />
      {/* Lower vertical stroke */}
      <path
        fill={arcColor}
        d="M609.3,456.8c1.8,0,3.7-0.1,5.5-0.1c0.4,71.3,0.1,142.7,0,214c-1.9,0-3.8,0-5.6,0C609.3,599.4,609,528.1,609.3,456.8z"
      />
      {/* Amber dot — cross-point marker */}
      <circle fill="#C4892A" cx="612.2" cy="434.2" r="17.2" />
    </svg>
  )
}
