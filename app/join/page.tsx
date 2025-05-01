import React from "react";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Join the Fund</h1>
      <p className="max-w-2xl text-center text-lg mb-8">
        Interested in joining? Applications are open to all students passionate about investing and leadership. Apply now to become part of our next cohort!
      </p>
      <a href="https://docs.google.com/forms/d/1hdezvcnerjws6pb3o61hzwague6hbxjwqlghdp4defc/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/80 transition-colors">Apply Now</a>
    </main>
  );
}
