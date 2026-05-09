import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const runtime = 'nodejs';

export default function ServicePage() {
  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      <Navbar />

      <section className="bg-[#4a7729] pt-40 pb-20 px-6 text-white text-center flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Service & Character</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto mb-8" />
          <p className="text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
            We believe in building character through service to others. Learn about our student-led initiatives and community outreach programs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
            Get Involved <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
