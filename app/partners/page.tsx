import React from "react";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-12">Our Partners</h1>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        <div className="bg-card border border-primary/20 rounded-lg px-8 py-6 min-w-[220px] text-center">
          <span className="text-xl font-semibold text-primary">Global Ventures</span>
        </div>
        <div className="bg-card border border-primary/20 rounded-lg px-8 py-6 min-w-[220px] text-center">
          <span className="text-xl font-semibold text-primary">ADNOC Drilling</span>
        </div>
        <div className="bg-card border border-primary/20 rounded-lg px-8 py-6 min-w-[220px] text-center">
          <span className="text-xl font-semibold text-primary">ADGM Academy</span>
        </div>
        <div className="bg-card border border-primary/20 rounded-lg px-8 py-6 min-w-[220px] text-center">
          <span className="text-xl font-semibold text-primary">Sarwa</span>
        </div>
        <div className="bg-card border border-primary/20 rounded-lg px-8 py-6 min-w-[220px] text-center">
          <span className="text-xl font-semibold text-primary">Magnitude Creative</span>
        </div>
      </div>
    </main>
  );
}
