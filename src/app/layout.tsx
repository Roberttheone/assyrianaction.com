import "./globals.css";
import AssyrianStar from "./components/AssyrianStar"; // keep the animated star you added

export const metadata = {
  title: "Assyrian Action",
  description: "Culture, history, timeline & action hub for Indigenous Assyrians."
};

const NavLink = ({href, children}:{href:string;children:React.ReactNode}) =>
  <a className="hover:underline" href={href}>{children}</a>;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <a href="/" style={{display:'inline-flex',alignItems:'center',gap:10}}>
              <AssyrianStar size={28}/>
              <span style={{fontWeight:800, color:'#e5e7eb'}}>Assyrian Voice</span>
            </a>
            <nav className="nav" style={{display:'flex',gap:14,fontSize:14}}>
              <NavLink href="/voice/timeline">Timeline</NavLink>
              <NavLink href="/voice/signon">Sign-On</NavLink>
              <NavLink href="/donate">Donate</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/learn">Learn</NavLink>
              <a className="btn" href="https://assyrianaction.com/" target="_blank" rel="noreferrer">Write to Reps</a>
            </nav>
          </div>
        </header>
        <main className="container" style={{paddingTop:24, paddingBottom:24}}>{children}</main>
        <footer className="container" style={{borderTop:'1px solid rgba(148,163,184,.2)',padding:'16px 24px',opacity:.9}}>
          <div style={{fontSize:12,color:'#cbd5e1'}}>© {new Date().getFullYear()} Assyrian Voice · Images © respective museums (credits on page)</div>
        </footer>
      </body>
    </html>
  );
}

