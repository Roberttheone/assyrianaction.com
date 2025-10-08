export default function Home(){
  return (
    <div className="grid" style={{gap:16}}>
      {/* HERO */}
      <section className="hero">
        <h1>Assyrian Voice</h1>
        <p>
          A living introduction to Assyrian civilization—language, inventions, cities—and practical ways to help today.
          Explore the timeline & map, sign coalition letters, donate, and share resources.
        </p>
        <div style={{display:'flex',gap:12,marginTop:12,flexWrap:'wrap'}}>
          <a className="btn" href="/voice/timeline">Explore Timeline & Map</a>
          <a className="btn-outline" href="/gallery">Gallery</a>
          <a className="btn-outline" href="/voice/signon">Coalition Sign-On</a>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="grid fit-3">
        <article className="card">
          <h3 style={{fontWeight:800, color:'#e5e7eb'}}>Jerwan Aqueduct</h3>
          <p style={{color:'#cbd5e1'}}>Early stone aqueduct near Nineveh attributed to Sennacherib—engineering heritage.</p>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800, color:'#e5e7eb'}}>Library of Ashurbanipal</h3>
          <p style={{color:'#cbd5e1'}}>Cuneiform tablets, royal correspondence—one of the world’s earliest knowledge repositories.</p>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800, color:'#e5e7eb'}}>Neo-Aramaic Today</h3>
          <p style={{color:'#cbd5e1'}}>Living language communities; revitalization & education urgently needed.</p>
        </article>
      </section>

      {/* FEATURED IMAGES */}
      <section className="card">
        <h2 style={{fontWeight:800, color:'#e5e7eb'}}>Featured Images</h2>
        <div className="grid fit-3" style={{marginTop:8}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.metmuseum.org/CRDImages/an/original/DP270389.jpg" alt="Tablet — Library of Ashurbanipal" loading="lazy" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg" alt="Lamassu — The Met" loading="lazy" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Jerwan_Aqueduct.jpg" alt="Jerwan Aqueduct" loading="lazy" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
        </div>
        <div style={{marginTop:10}}>
          <a className="btn" href="/gallery">See full gallery</a>
        </div>
      </section>

      {/* CTA CARDS */}
      <section className="grid fit-2">
        <article className="card">
          <h3 style={{fontWeight:800, color:'#e5e7eb'}}>Take Action</h3>
          <p style={{color:'#cbd5e1'}}>Join the coalition letter and prepare for UNPFII engagement.</p>
          <div style={{marginTop:8}}><a className="btn" href="/voice/signon">Coalition Sign-On</a></div>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800, color:'#e5e7eb'}}>Support the Work</h3>
          <p style={{color:'#cbd5e1'}}>Your donation helps language & cultural programs and site protection.</p>
          <div style={{marginTop:8}}><a className="btn" href="/donate">Donate</a></div>
        </article>
      </section>
    </div>
  );
}

