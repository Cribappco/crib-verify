export const metadata = {
  title: 'Crib Verify',
  description: 'Email verification for Crib',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

