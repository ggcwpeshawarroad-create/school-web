import dbConnect from '@/lib/db';
import Notice from '@/lib/models/Notice';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, announcements, and upcoming events from Govt. Graduate College. Read official notices and campus updates.',
};

export const runtime = 'nodejs';
export const revalidate = 0;

async function getNews() {
  await dbConnect();
  return await Notice.find({ isActive: true }).sort({ date: -1, createdAt: -1 }).lean();
}

export default async function NewsPage() {
  const newsItems = await getNews();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">News & Events</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Stay updated with the latest from GGC</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item: any, i: number) => (
            <div key={item._id.toString()} className="bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden flex flex-col hover:border-[#ffcc00] transition-all group">
              <div className="h-64 bg-slate-100 overflow-hidden relative">
                <img 
                   src={item.image || '/Logo_.png'} 
                   className={`w-full h-full ${item.image ? 'object-cover' : 'object-contain p-8 bg-slate-50'} group-hover:scale-110 transition-transform duration-700`} 
                   alt="News" 
                />
                <div className="absolute top-6 left-6 bg-[#ffcc00] text-[#002d56] px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg">
                   {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#17a2b8] mb-4">
                  <Calendar size={12} /> {new Date(item.date).getFullYear()}
                </div>
                <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-4 leading-tight group-hover:text-[#17a2b8] transition-colors">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed line-clamp-3 mb-8">
                  {item.content}
                </p>
                <Link href={`/news/${item._id}`} className="inline-flex text-[#002d56] font-black text-[10px] uppercase tracking-widest border-b-2 border-[#ffcc00] pb-1 hover:border-[#002d56] transition-all items-center gap-2">
                   Read Full Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}

          {newsItems.length === 0 && (
            <div className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-sm bg-white">
              <p className="text-slate-400 font-bold uppercase tracking-widest">No news items found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
