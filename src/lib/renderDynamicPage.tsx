import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { notFound } from 'next/navigation';

export const runtime = 'nodejs';

export async function renderDynamicPage(slug: string, fallbackTitle?: string) {
  await dbConnect();
  const raw = await DynamicPage.findOne({ slug, isActive: true }).lean();
  
  const title = raw ? raw.title : (fallbackTitle || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
  const content = raw ? raw.content : `<div class="text-center py-20"><p class="text-2xl text-slate-400">Content for this page is currently being updated.</p><p class="mt-4">Please check back later.</p></div>`;

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      <Navbar />
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">{title}</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>
      <section className="py-24 px-6 max-w-4xl mx-auto flex-grow w-full">
        <div
          className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-strong:text-[#002d56] prose-a:text-[#17a2b8] hover:prose-a:text-[#ffcc00]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
      <Footer />
    </div>
  );
}
