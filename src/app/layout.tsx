import type { Metadata } from 'next';
import './globals.css';
import Chatbot from '@/components/public/Chatbot';
import dbConnect from '@/lib/db';
import Settings from '@/lib/models/Settings';

export const metadata: Metadata = {
  title: {
    default: 'Govt. Graduate College, Peshawar Road, Rawalpindi — Excellence in Higher Education',
    template: '%s | Govt. Graduate College, Rawalpindi'
  },
  description: 'Govt. Graduate College, Peshawar Road, Rawalpindi offers quality higher education with distinguished faculty and modern facilities. Admissions open for various programs.',
  keywords: ['Govt Graduate College', 'Rawalpindi College', 'Peshawar Road College', 'Higher Education Rawalpindi', 'BS Programs', 'Intermediate Admissions'],
};

async function getSettings() {
  try {
    await dbConnect();
    return await Settings.findOne({}).lean();
  } catch (error) {
    console.error('Failed to fetch settings for layout:', error);
    return null;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  const serializedSettings = settings ? JSON.parse(JSON.stringify(settings)) : null;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Chatbot settings={serializedSettings} />
      </body>
    </html>
  );
}
