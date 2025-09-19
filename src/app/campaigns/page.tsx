export default function Campaigns(){
  return (
    <div className="grid" style={{gap:16}}>
      <h1 style={{fontSize:26,fontWeight:800}}>Active Campaigns</h1>

      <article className="card">
        <h2 style={{fontWeight:800}}>Write to Your Government (AU/UK/US)</h2>
        <p>Ask your government to affirm UNDRIP’s applicability and support language, culture, and site protection.</p>
        <a className="btn" href="/action/write">Open Write Tool</a>
      </article>

      <article className="card">
        <h2 style={{fontWeight:800}}>UNPFII Advocacy (coordinate via Voice)</h2>
        <p>Coalition sign-on, talking points, and deadlines are hosted at our partner site.</p>
        <a className="btn-outline" href="https://assyrianvoice.org/voice/signon" target="_blank" rel="noreferrer">Coalition Sign-On</a>
      </article>

      <article className="card">
        <h2 style={{fontWeight:800}}>Learn & Resource Hub</h2>
        <p>Share the cultural context with supporters to build durable public will.</p>
        <a className="btn-outline" href="https://assyrianvoice.org/learn" target="_blank" rel="noreferrer">Learning Pack</a>
      </article>
    </div>
  );
}
