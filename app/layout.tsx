// app/layout.tsx
export const metadata = {
  title: 'Crib Verify',
  description: 'Verify your Crib account',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
