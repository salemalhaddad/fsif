import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="max-w-2xl text-center text-lg mb-8">
        Have questions or want to partner with us? Reach out below!
      </p>
      <a href="mailto:contact@falconsif.org" className="text-primary underline text-lg">contact@falconsif.org</a>
    </main>
  );
}
