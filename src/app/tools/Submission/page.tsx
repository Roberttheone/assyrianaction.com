'use client';
import { useEffect, useMemo, useState } from 'react';
// If importing JSON causes TS errors, switch to a .ts data file or add "resolveJsonModule": true in tsconfig.
let preset:any = null;
try { preset = require('../../data/recipients.json'); } catch {}

const UND = [
  { art: 'Article 3',  text: 'Self-determination in political, social, and cultural life.' },
  { art: 'Article 11', text: 'Right to practice and revitalize cultural traditions and customs.' },
  { art: 'Article 13', text: 'Right to revitalize, use, develop and transmit to future generations their languages.' },
  { art: 'Article 25', text: 'Right to maintain and strengthen spiritual relationship with lands, territories, waters.' },
  { art: 'Article 31', text: 'Right to maintain, control, protect and develop cultural heritage.' }
];

function mailtoLink(to:string[], subject:string, body:string){
  const p = new URLSearchParams({ subject, body });
  return `mailto:${to.join(',')}?${p.toString()}`;
}
function downloadTxt(filename:string, text:string){
  const blob = new Blob([text], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

export default function SubmissionBuilder(){
  const [country,setCountry]=useState<'AU'|'UK'|'US'|'OTHER'>('AU');
  const [sel,setSel]=useState<string[]>(['Article 3','Article 13','Article 31']);
  const [name,setName]=useState('Your Name');
  const [city,setCity]=useState('City, Country');
  const [extra,setExtra]=useState('');
  const [asks,setAsks]=useState([
    'Affirm UNDRIP’s applicability to Indigenous Assyrians.',
    'Fund Neo-Aramaic/Assyrian language and cultural programs.',
    'Safeguard key heritage sites (Nineveh, Ashur, Nimrud) and at-risk communities.'
  ]);

  const label = country==='AU'?'Australia':country==='UK'?'United Kingdom':country==='US'?'United States':'Your Country';

  const groups = useMemo(()=>{
    if(!preset || country==='OTHER') return {};
    const p = (preset as any)[country];
    return p?.groups || {};
  },[country]);

  const to = useMemo(()=>{
    const base = Object.values(groups).flat().map((g:any)=>g.email);
    const more = extra? extra.split(/[;,]+/).map(s=>s.trim()).filter(Boolean):[];
    return [...base, ...more];
  },[groups, extra]);

  const undripBullets = UND.filter(u=>sel.includes(u.art))
    .map(u=>`- ${u.art}: ${u.text}`).join('\n');

  const subject = 'Submission regarding Indigenous Assyrians under UNDRIP';
  const body = `Dear ${country==='OTHER'?'Representative':label+' officials'},

I write to urge action in support of Indigenous Assyrians in their ancestral homelands.

Drawing on UNDRIP, please note:
${undripBullets}

Requested actions:
- ${asks.join('\n- ')}

Sincerely,
${name}
${city}
`;

  return (
    <div className="card" style={{maxWidth:900}}>
      <h1 style={{fontSize:26,fontWeight:800}}>Draft Submission Builder</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:10}}>
        <label>Country<select className="card" value={country} onChange={e=>setCountry(e.target.value as any)}>
          <option value="AU">Australia</option><option value="UK">United Kingdom</option><option value="US">United States</option><option value="OTHER">Other</option>
        </select></label>
        <label>Your name<input className="card" value={name} onChange={e=>setName(e.target.value)}/></label>
        <label>City / Country<input className="card" value={city} onChange={e=>setCity(e.target.value)}/></label>
      </div>

      {!!Object.keys(groups).length && (
        <div style={{marginTop:8}}>
          <b>Preset recipients</b>
          <ul>{Object.entries(groups).map(([g,list]:any)=>
            <li key={g}><b>{g}:</b> {list.map((r:any)=>`${r.name} <${r.email}>`).join(', ')}</li>
          )}</ul>
        </div>
      )}

      <label style={{display:'block',marginTop:8}}>Add recipients (comma/semicolon separated)
        <input className="card" value={extra} onChange={e=>setExtra(e.target.value)} placeholder="name@parliament.gov..." />
      </label>

      <div className="card" style={{marginTop:10}}>
        <b>Reference UNDRIP Articles</b>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:8}}>
          {UND.map(u=>(
            <label key={u.art} style={{display:'inline-flex',gap:6,alignItems:'center',padding:'4px 8px',border:'1px solid rgba(148,163,184,.35)',borderRadius:10}}>
              <input type="checkbox" checked={sel.includes(u.art)} onChange={e=>{
                setSel(v=>e.target.checked? [...v,u.art] : v.filter(x=>x!==u.art));
              }}/>
              {u.art}
            </label>
          ))}
        </div>
      </div>

      <label style={{display:'block',marginTop:8}}>Your specific asks (one per line)
        <textarea className="card" value={asks.join('\n')} onChange={e=>setAsks(e.target.value.split('\n').filter(Boolean))} style={{width:'100%',height:100}}/>
      </label>

      <h2 style={{fontWeight:800,marginTop:12}}>Preview</h2>
      <textarea className="card" value={body} onChange={()=>{}} readOnly style={{width:'100%',height:280}}/>

      <div style={{display:'flex',gap:10,marginTop:10,flexWrap:'wrap'}}>
        <a className="btn" href={mailtoLink(to, subject, body)}>Open email</a>
        <button className="btn" onClick={()=>navigator.clipboard.writeText(body)}>Copy</button>
        <button className="btn-outline" onClick={()=>downloadTxt('submission.txt', body)}>Download .txt</button>
        <a className="btn-outline" href="/tools/press">Go to Press Builder</a>
      </div>
    </div>
  );
}
