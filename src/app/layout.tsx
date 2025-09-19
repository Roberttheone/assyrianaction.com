import "./globals.css";
import Logo from "./components/Logo";

export const metadata = {
  title: "Assyrian Action",
  description: "Advocacy hub for Indigenous Assyrian rights and heritage."
};

const NavLink = ({href, children}:{href:string;children:React.ReactNode}) =>
  <a className="hover:underline" href={href}>{children}</a>;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{background:'#fff',borderBottom:'1px solid #e2e8f0'}}>
          <div style={{maxWidth:1040,margin:'0 auto',padding:'12px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <a href="/"><Logo /></a>
            <nav style={{display:'flex',gap:14,fontSize:14}}>
              <NavLink href="/action/write">Write</NavLink>
              <NavLink href="/campaigns">Campaigns</NavLink>
              <NavLink href="/undrip">UNDRIP</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              {/* Cross-site link to Voice */}
              <a className="btn" href="https://assyrianvoice.org/" target="_blank" rel="noreferrer">Learn & Donate</a>
            </nav>
          </div>
        </header>
        <main style={{maxWidth:1040,margin:'0 auto',padding:'24px'}}>{children}</main>
        <footer style={{borderTop:'1px solid #e2e8f0',padding:'16px 24px',background:'#fff'}}>
          <div style={{maxWidth:1040,margin:'0 auto',fontSize:12,color:'#64748b'}}>
            © {new Date().getFullYear()} Assyrian Action · Images © respective museums (credits on Gallery)
          </div>
        </footer>
      </body>
    </html>
  );
}
