import React from "react";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Events</h1>
      <p className="max-w-2xl text-center text-lg mb-8">
        Stay up to date with our upcoming events and workshops. Join us to learn, network, and grow!
      </p>
      <ul className="list-disc text-lg max-w-xl mx-auto text-left">
        <li>Investment Pitch Night – May 2025</li>
        <li>Financial Literacy Workshop – June 2025</li>
        <li>Partner Networking Mixer – July 2025</li>
      </ul>
    </main>
  );
}
