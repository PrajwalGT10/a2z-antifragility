import type { Metadata } from 'next';
import { Playfair_Display, Fira_Code, Inter } from 'next/font/google'; // 1. Added Inter
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css'; 

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

// 2. Configure Inter (The "Human" Body Font)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      // 3. Add inter.variable to the list so Tailwind can use it
      className={`${playfairDisplay.variable} ${firaCode.variable} ${inter.variable}`}
    >
      {/* 4. Update default background to Phase 2 'Ceramic' and text to 'Ink' */}
      <body className="bg-ceramic text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}