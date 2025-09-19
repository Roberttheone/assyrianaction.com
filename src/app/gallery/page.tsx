import data from "../data/gallery.json";

type Item = { title:string; image:string; creditUrl:string; blurb?:string };

export default function Gallery(){
  const items = (data as Item[]).filter(Boolean);
  return (
    <div>
      <h1 style={{fontSize:26,fontWeight:800}}>Gallery</h1>
      <p style={{color:'#475569', marginTop:4}}>
        Museum/Commons images with proper attributions. Add more via <code>src/app/data/gallery.json</code>.
      </p>

      <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',marginTop:12}}>
        {items.map((img, i) => (
          <figure key={i} style={{background:'#fff',padding:12,borderRadius:16,boxShadow:'0 1px 8px rgba(0,0,0,.06)'}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.image}
              alt={img.title}
              loading="lazy"
              style={{width:'100%',height:220,objectFit:'cover',borderRadius:12}}
              onError={(e:any)=>{ e.currentTarget.style.opacity='0.25'; e.currentTarget.alt='Image unavailable'; }}
            />
            <figcaption style={{fontSize:12,marginTop:8}}>
              <div style={{fontWeight:700}}>{img.title}</div>
              {img.blurb && <div style={{marginTop:4,color:'#475569'}}>{img.blurb}</div>}
              <a href={img.creditUrl} target="_blank" rel="noreferrer" style={{display:'inline-block',marginTop:6}}>
                Source & credit
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
