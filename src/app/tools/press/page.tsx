'use client';
import { useMemo, useState } from 'react';

function todayISO(){
  const d=new Date(); return d.toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'});
}
function downloadTxt(filename:string, text:string){
  const blob = new Blob([text], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

export default function PressBuilder(){
  const [org,setOrg]=useState('Assyrian Voice & Action Coalition');
  const [headline,setHeadline]=useState('Coalition urges recognition and protection of Indigenous Assyrians under UNDRIP');
  const [city,setCity]=useState('Sydney');
  const [date,setDate]=useState(todayISO());
  const [contact,setContact]=useState('Media: Name Surname — media@example.org — +61 4xx xxx xxx');
  const [lead,setLead]=useState('Advocates today called on member states to affirm UNDRIP’s applicability to Indigenous Assyrians and to protect language, culture, and heritage sites in their ancestral homelands.');
  const [quote1By,setQuote1By]=useState('Spokesperson, Assyrian Action');
  const [quote1,setQuote1]=useState('We are asking governments to match words with protection—support Neo-Aramaic language programs and safeguard Nineveh, Ashur, and Nimrud.');
  const [quote2By,setQuote2By]=useState('Community Leader');
  const [quote2,setQuote2]=useState('Assyrians remain indigenous to our lands. Recognition under UNDRIP is a floor, not a ceiling, for dignity and survival.');
  const [cta,setCta]=useState('Take action: https://assyrianaction.com/action/write  ·  Learn & donate: https://assyrianvoice.org/');
  const [boiler,setBoiler]=useState('About the Coalition: A non-partisan network of Assyrian community groups, scholars, and allies advocating for language revitalization, heritage protection, and equal rights in ancestral homelands.');

  const content = useMemo(()=>`FOR IMMEDIATE RELEASE

${org}
${city}, ${date}

${headline}

${lead}

"${quote1}"
— ${quote1By}

"${quote2}"
— ${quote2By}

${cta}

${boiler}

${contact}
`,[org,city,date,headline,lead,quote1,quote1By,quote2,quote2By,cta,boiler,contact]);

  return (
    <div style={{maxWidth:900}} className="card">
      <h1 style={{fontSize:26,fontWeight:800}}>Press Release Builder</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:10}}>
        <label>Organization<input className="card" value={org} onChange={e=>setOrg(e.target.value)}/></label>
        <label>Dateline City<input className="card" value={city} onChange={e=>setCity(e.target.value)}/></label>
        <label>Date<input className="card" value={date} onChange={e=>setDate(e.target.value)}/></label>
        <label>Contact line<input className="card" value={contact} onChange={e=>setContact(e.target.value)}/></label>
      </div>
      <label style={{display:'block',marginTop:8}}>Headline<input className="card" value={headline} onChange={e=>setHeadline(e.target.value)}/></label>
      <label style={{display:'block',marginTop:8}}>Lead paragraph<textarea className="card" value={lead} onChange={e=>setLead(e.target.value)} style={{width:'100%',height:80}}/></label>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:8}}>
        <label>Quote #1<textarea className="card" value={quote1} onChange={e=>setQuote1(e.target.value)} style={{height:100}}/></label>
        <label>Quote #1 — attribution<input className="card" value={quote1By} onChange={e=>setQuote1By(e.target.value)}/></label>
        <label>Quote #2<textarea className="card" value={quote2} onChange={e=>setQuote2(e.target.value)} style={{height:100}}/></label>
        <label>Quote #2 — attribution<input className="card" value={quote2By} onChange={e=>setQuote2By(e.target.value)}/></label>
      </div>
      <label style={{display:'block',marginTop:8}}>Call to action / links<input className="card" value={cta} onChange={e=>setCta(e.target.value)}/></label>
      <label style={{display:'block',marginTop:8}}>Boilerplate<textarea className="card" value={boiler} onChange={e=>setBoiler(e.target.value)} style={{width:'100%',height:80}}/></label>

      <h2 style={{fontWeight:800,marginTop:12}}>Preview</h2>
      <textarea className="card" style={{width:'100%',height:300}} value={content} onChange={()=>{}} readOnly/>

      <div style={{display:'flex',gap:10,marginTop:10,flexWrap:'wrap'}}>
        <button className="btn" onClick={()=>navigator.clipboard.writeText(content)}>Copy</button>
        <button className="btn-outline" onClick={()=>downloadTxt('press-release.txt', content)}>Download .txt</button>
      </div>
    </div>
  );
}
