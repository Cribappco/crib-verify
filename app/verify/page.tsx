'use client';

import React from 'react';

export default function VerifyPage() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: 20,
      textAlign: 'center'
    }}>
      <div>
        <h1>✅ Almost There!</h1>
        <p>Please check your email and click the link to verify your account.</p>
        <p>Once verified, you can log in and start using the app.</p>
      </div>
    </main>
  );
}
