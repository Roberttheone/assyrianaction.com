export default function AssyrianStar({ size = 32, speed = 16 }: { size?: number; speed?: number }) {
  return (
    <div style={{ width: size, height: size, display: 'inline-block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,.2))' }}>
      <svg viewBox="0 0 100 100" className="assyrian-star" style={{ width: '100%', height: '100%' }} aria-hidden>
        <defs>
          <linearGradient id="assyrianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="50%" stopColor="#10b981"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
        </defs>
        {/* 8-point star */}
        <polygon
          points="50,6 58,32 86,32 62,48 70,76 50,60 30,76 38,48 14,32 42,32"
          fill="url(#assyrianGrad)"
          stroke="#111827"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="6" fill="#111827" />
      </svg>
      <style jsx>{`
        .assyrian-star {
          animation: spin ${speed}s linear infinite, hue 9s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hue  { from { filter: hue-rotate(0deg);} to { filter: hue-rotate(360deg);} }
      `}</style>
    </div>
  );
}
