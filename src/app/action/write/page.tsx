'use client';
import { useEffect, useMemo, useState } from 'react';
import recipients from '../../data/recipients.json';

type Target = { name: string; email: string };
type Grouped = { [k: string]: Target[] };

const template = (country: string) => `Subject: Recognition and protection of Indigenous Assyrians under UNDRIP

Dear Representative,

I am writing from ${country} to urge action in support of Indigenous Assyrians in their ancestral homelands. UNDRIP articulates standards for self-determination, language revitalization, and protection of culture and heritage.

We ask that ${country}'s Government:
1) Affirm the applicability of UNDRIP to Indigenous Assyrians;
2) Support Neo-Aramaic/Assyrian language & cultural programs and safeguard heritage sites (Nineveh, Ashur, Nimrud);
3) Prioritize at-risk Assyrian communities in foreign policy and assistance.

Sincerely,
[Your name]
[City]`;

export default function Page() {
  const [country, setCountry] = useState<'AU' | 'UK' | 'US' | 'OTHER'>('AU');
  const [targets, setTargets] = useState<Grouped>({});
  const [extra, setExtra] = useState('');
  const [body, setBody] = useState(template('Australia'));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const label = country === 'AU' ? 'Australia' : country === 'UK' ? 'United Kingdom' : country === 'US' ? 'United States' : 'Your Country';
    setBody(template(label));
    if (country === 'OTHER') {
      setTargets({});
    } else {
      // @ts-ignore
      const preset = (recipients as any)[country];
      setTargets((preset?.groups || {}) as Grouped);
    }
  }, [country]);

  const allEmails = useMemo(() => {
    const preset = Object.values(targets).flat().map((t) => t.email);
    const extraList = extra ? extra.split(/[;,]+/).map((s) => s.trim()).filter(Boolean) : [];
    return [...preset, ...extraList];
  }, [targets, extra]);

  const mailto = useMemo(() => {
    const params = new URLSearchParams({
      subject: 'Recognition and protection of Indigenous Assyrians under UNDRIP',
      body,
    });
    return `mailto:${allEmails.join(',')}?${params.toString()}`;
  }, [allEmails, body]);

  async function copyLetter(){
    await navigator.clipboard.writeText(body);
    setCopied(true); setTimeout(()=>setCopied(false), 1200);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>Write to your MP/Minister</h1>

      <div className="card" style={{marginTop:10}}>
        <label>Country<br/>
          <select value={country} onChange={(e) => setCountry(e.target.value as any)} className="card" style={{width:'100%'}}>
            <option value="AU">Australia</option>
            <option value="UK">United Kingdom</option>
            <option value="US">United States</option>
            <option value="OTHER">Other</option>
          </select>
        </label>

        {!!Object.keys(targets).length && (
          <div style={{ marginTop: 8 }}>
            {Object.entries(targets).map(([g, list]) => (
              <div key={g} style={{marginTop:6}}>
                <b>{g}</b>
                <ul>
                  {list.map((t) => (
                    <li key={t.email}>
                      {t.name} &lt;{t.email}&gt;
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 8 }}>
          <label>Add more recipients<br/>
            <input placeholder="name@parliament.gov..." value={extra} onChange={(e)=>setExtra(e.target.value)} className="card" style={{ width:'100%'}} />
          </label>
        </div>

        <div style={{ marginTop: 8 }}>
          <label>Letter<br/>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="card" style={{ width:'100%', height: 260 }} />
          </label>
        </div>

        <div style={{ display:'flex', gap:10, marginTop: 10, flexWrap:'wrap' }}>
          <a href={mailto} className="btn">Open in email client</a>
          <button className="btn-outline" onClick={copyLetter}>{copied ? 'Copied!' : 'Copy letter'}</button>
        </div>

        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>Multi-send via Postmark/SendGrid can be added later.</p>
      </div>
    </div>
  );
}
