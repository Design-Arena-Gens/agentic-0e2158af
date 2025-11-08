import './globals.css';

export const metadata = {
  title: 'Mirmbrema',
  description: 'A minimal landing page for Mirmbrema',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
