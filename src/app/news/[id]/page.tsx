import dbConnect from '@/lib/db';
import Notice from '@/lib/models/Notice';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Calendar, Download, ArrowLeft, Clock, Share2, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const notice = await getNotice(id);
  return {
    title: notice?.title || 'Notice Details',
    description: notice?.description?.substring(0, 160) || 'Official notice from GGC Rawalpindi.',
  };
}

export const runtime = 'nodejs';
export const revalidate = 0;

async function getNotice(id: string) {
  await dbConnect();
  try {
    const notice = await Notice.findById(id).lean();
    return notice ? JSON.parse(JSON.stringify(notice)) : null;
  } catch (err) {
    return null;
  }
}

async function getLatestNews() {
  await dbConnect();
  const news = await Notice.find({ isActive: true }).sort({ date: -1, createdAt: -1 }).limit(2).lean();
  return JSON.parse(JSON.stringify(news));
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notice = await getNotice(id);
  const latestNews = await getLatestNews();

  if (!notice || !notice.isActive) {
    notFound();
  }

  const priorityColors = {
    urgent: 'bg-red-500 text-white',
    important: 'bg-[#ffcc00] text-[#002d56]',
    normal: 'bg-blue-500 text-white'
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      {/* Header / Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-slate-50">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Link href="/news" className="inline-flex items-center gap-2 text-[#002d56] font-black text-xs uppercase tracking-[0.2em] mb-10 hover:text-[#ffcc00] transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to News
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md ${priorityColors[notice.priority as keyof typeof priorityColors] || priorityColors.normal}`}>
                {notice.priority}
              </span>
              <span className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <Calendar size={14} className="text-[#ffcc00]" /> {new Date(notice.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest border-l pl-4 border-slate-200">
                <Clock size={14} className="text-[#ffcc00]" /> 5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-[#002d56] uppercase tracking-tighter leading-[0.95] mb-10">
              {notice.title}
            </h1>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#002d56] rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg">GGC</div>
                    <div>
                        <div className="text-[10px] font-black text-[#002d56] uppercase tracking-widest">Official Post</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administration Dept</div>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#ffcc00]/20 rounded-sm -rotate-2 z-0" />
            <div className="relative z-10 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={notice.image || '/Logo_.png'} 
                alt={notice.title} 
                className={`w-full h-full ${notice.image ? 'object-cover' : 'object-contain p-12 bg-slate-50'}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar / Tools */}
          <div className="lg:col-span-1 hidden lg:block sticky top-32 h-fit">
             <div className="flex flex-col gap-8 items-center border-r border-slate-100 pr-8">
                <button title="Share" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#ffcc00] hover:text-[#002d56] hover:border-[#ffcc00] transition-all">
                   <Share2 size={20} />
                </button>
                <button title="Tags" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#ffcc00] hover:text-[#002d56] hover:border-[#ffcc00] transition-all">
                   <Tag size={20} />
                </button>
             </div>
          </div>

          {/* Main Content Body */}
          <div className="lg:col-span-8">
            <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed whitespace-pre-wrap selection:bg-[#ffcc00] selection:text-[#002d56]">
                {notice.content}
            </div>

            {notice.attachment && (
              <div className="mt-20 p-8 md:p-12 bg-slate-50 rounded-sm border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Download size={80} />
                </div>
                <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter mb-6">Article Documentation</h3>
                <p className="text-slate-500 text-sm mb-10 max-w-md">The following official document is associated with this announcement. Please download and review carefully.</p>
                
                <a 
                  href={notice.attachment} 
                  target="_blank" 
                  className="inline-flex items-center gap-4 bg-[#002d56] text-white px-8 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-xl"
                >
                  <Download size={18} /> Official Attachment (PDF)
                </a>
              </div>
            )}
          </div>

          {/* Right Sidebar / Related */}
          <div className="lg:col-span-3">
             <div className="bg-slate-50 p-8 rounded-sm sticky top-32">
                <h4 className="text-xs font-black text-[#002d56] uppercase tracking-[0.2em] mb-8 pb-4 border-b border-slate-200">Campus Notices</h4>
                <div className="space-y-8">
                   {latestNews.map((item: any) => (
                     <Link key={item._id} href={`/news/${item._id}`} className="group cursor-pointer block">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc00]" /> {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <h5 className="text-sm font-black text-[#002d56] uppercase tracking-tight group-hover:text-[#ffcc00] transition-colors line-clamp-2">{item.title}</h5>
                     </Link>
                   ))}
                </div>
                <Link href="/news" className="mt-12 block text-center py-4 border-2 border-slate-200 text-[#002d56] font-black text-[10px] uppercase tracking-widest hover:border-[#002d56] transition-all">
                   View All News
                </Link>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
