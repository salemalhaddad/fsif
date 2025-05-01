import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">About</h1>
      <p className="max-w-2xl text-center text-lg">
        The Falcon Student Investment Fund aims to provide hands-on investment experience while contributing to Abu Dhabi's vision of developing top-tier financial talent.
      </p>
    </main>
  );
}
