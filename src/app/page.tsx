export default function Home(){
  return (
    <div className="grid" style={{gap:16}}>
      <section className="card">
        <h1 style={{fontSize:34,fontWeight:900,letterSpacing:-0.5}}>Mobilize for Indigenous Assyrian Rights</h1>
        <p style={{maxWidth:760,color:'var(--muted)',marginTop:8}}>
          Take action for recognition, language and cultural protection, and safeguarding heritage sites—Nineveh, Ashur, Nimrud and beyond.
        </p>
        <div style={{display:'flex',gap:12,marginTop:12,flexWrap:'wrap'}}>
          <a className="btn" href="/action/write">Write to Your Representatives</a>
          <a className="btn-outline" href="/campaigns">See Active Campaigns</a>
          <a className="btn-outline" href="/undrip">What is UNDRIP?</a>
        </div>
      </section>

      <section className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
        <div className="card">
          <h2 style={{fontWeight:800}}>Why now?</h2>
          <p>Assyrian communities face existential risks. Policy, funding, and protection can change outcomes.</p>
        </div>
        <div className="card">
          <h2 style={{fontWeight:800}}>What you can do</h2>
          <ul style={{marginTop:8,lineHeight:1.6}}>
            <li>Send targeted letters (AU/UK/US presets)</li>
            <li>Share the briefing pack with your networks</li>
            <li>Direct supporters to <a href="https://assyrianvoice.org/" target="_blank">AssyrianVoice.org</a> for learning & donations</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
