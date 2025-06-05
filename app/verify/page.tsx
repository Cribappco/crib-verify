'use client';

import React from 'react';

export default function VerifyPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fdf8ee',
      fontFamily: 'sans-serif',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <img
        src="/crib-logo.png"
        alt="Crib logo"
        style={{ width: '220px', marginBottom: '2rem' }}
      />
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: '1rem'
      }}>
        ✅ You're Almost There
      </h1>
      <p style={{
        maxWidth: '500px',
        fontSize: '1rem',
        color: '#334155',
        lineHeight: 1.6
      }}>
        Just check your inbox and click the link to verify your email.
        Once verified, the app will guide you the rest of the way.
        <br />
        <br />
        If you're stuck, try refreshing or logging in again.
      </p>
    </main>
  );
}
