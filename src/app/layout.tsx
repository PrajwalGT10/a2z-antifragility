import type { Metadata } from 'next';
import { Playfair_Display, Fira_Code } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css' assert { type: 'css' };

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'A2Z Antifragility Foundation',
  description:
    'Empowering individuals and organizations to break through fragility and emerge stronger from chaos.',
  keywords: [
    'antifragility',
    'resilience',
    'section 8',
    'non-profit',
    'nassim taleb',
  ],
  openGraph: {
    title: 'A2Z Antifragility Foundation',
    description:
      'Empowering individuals and organizations to break through fragility and emerge stronger from chaos.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${firaCode.variable}`}
    >
      <body className="bg-navy text-slate-light">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
