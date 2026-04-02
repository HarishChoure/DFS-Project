"use client";
import {openWhatsApp} from "@/utils/whatsapp"
import {PopupModal} from "react-calendly";
import {useState} from "react";

export default function Hero() {
  const[open, setOpen]=useState(false);
  return (
    <section className="relative bg-[#0B1D3A] text-white overflow-hidden">
      
      {/* 🔷 Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1D3A] via-[#0F2A55] to-[#0B1D3A] opacity-95"></div>

      {/* 🔷 Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        
        {/* 🔶 Badge */}
        <div className="inline-block border border-yellow-500/40 text-yellow-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
          AMFI Registered Mutual Fund Distributor
        </div>

        {/* 🔶 Heading */}
        <h1 className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight max-w-3xl">
          
          <span className="text-yellow-400">
            Unlock Financial Freedom
          </span>{" "}
          with Expert Mutual Fund Guidance
        </h1>

        {/* 🔶 Subtext */}
        <p className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed font-[var(--font-inter)]">
          Book your personalised 1-to-1 session today and start your journey towards wealth creation.
        </p>

        {/* 🔶 Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={()=>setOpen(true)} className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-100 transition">Schedule a 1:1 Meeting</button>
          <button onClick={openWhatsApp} className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-100 transition">
            Invest Now →
          </button>

        <PopupModal url="https://calendly.com/anshika19sh/30min" open={open} onModalClose={()=>setOpen(false)} rootElement={document.body}/>

        </div>
      </div>
    </section>
  );
}