export default function Logo({ size=28 }:{size?:number}){
  return (
    <div style={{display:'inline-flex',alignItems:'center',gap:8}}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
        <circle cx="32" cy="32" r="30" fill="#111827"/>
        <path d="M20 40 L32 16 L44 40 Z" fill="#22c55e"/>
        <circle cx="32" cy="40" r="4" fill="#16a34a"/>
      </svg>
      <span style={{fontWeight:800}}>Assyrian Action</span>
    </div>
  );
}
