import "./globals.css"
export const metadata = { title: "Assyrian Action" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{background:'white',borderBottom:'1px solid #e2e8f0'}}>
          <div style={{maxWidth:960,margin:'0 auto',padding:'12px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <a href="/" style={{fontWeight:800,fontSize:20}}>Assyrian Action</a>
            <nav style={{display:'flex',gap:12,fontSize:14}}>
              <a className="hover:underline" href="/action/write">Write</a><a className="hover:underline" href="/gallery">Gallery</a>
            </nav>
          </div>
        </header>
        <main style={{maxWidth:960,margin:'0 auto',padding:'24px'}}>{children}</main>
        <footer style={{borderTop:'1px solid #e2e8f0',padding:'16px 24px',background:'white'}}>
          <div style={{maxWidth:960,margin:'0 auto',fontSize:12,color:'#64748b'}}>© 2025 Assyrian Action</div>
        </footer>
      </body>
    </html>
  );
}