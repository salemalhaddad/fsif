import React from "react";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Education</h1>
      <p className="max-w-2xl text-center text-lg mb-8">
        We offer workshops, guest speakers, and resources to help members learn about investing, finance, and leadership.
      </p>
      <ul className="list-disc text-lg max-w-xl mx-auto text-left">
        <li>Investment Research Workshops</li>
        <li>Pitch Competitions</li>
        <li>Guest Speakers from Industry</li>
        <li>Networking Events</li>
      </ul>
    </main>
  );
}
