// app/verify/page.tsx
'use client';
import React from 'react';

export default function VerifyPage() {
  return (
    <main className="h-screen flex items-center justify-center p-6 text-center font-sans">
      <div>
        <img src="/crib-logo.png" alt="Crib Logo" className="w-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">✅ Almost There!</h1>
        <p className="mb-2">Please check your email and click the link to verify your account.</p>
        <p>Once verified, you can log in and start using the app.</p>
      </div>
    </main>
  );
}

