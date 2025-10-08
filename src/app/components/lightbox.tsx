'use client';
import { useEffect } from 'react';

export default function Lightbox({
  src, alt, onClose
}:{src:string;alt:string;onClose:()=>void}){
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{ if(e.key==='Escape') onClose(); };
    window.addEventListener('keydown',onKey); return ()=>window.removeEventListener('keydown',onKey);
  },[onClose]);
  return (
    <div className="lb-backdrop" onClick={onClose}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lb-img" src={src} alt={alt} onClick={e=>e.stopPropagation()}/>
    </div>
  );
}
