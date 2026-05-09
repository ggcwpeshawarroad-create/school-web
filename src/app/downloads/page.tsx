import dbConnect from '@/lib/db';
import Download from '@/lib/models/Download';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Download as DownloadIcon } from 'lucide-react';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getDownloads() {
  await dbConnect();
  const downloads = await Download.find({ isActive: true }).sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(downloads));
}

export default async function DownloadsPage() {
  const downloads = await getDownloads();

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Downloads</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid gap-6">
          {downloads.map((dl: any) => (
            <div key={dl._id} className="bg-slate-50 border border-slate-100 rounded-sm p-8 flex items-center justify-between hover:border-[#ffcc00] transition-all group shadow-sm hover:shadow-md">
              <div>
                 <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter">{dl.title}</h3>
                 {dl.description && <p className="text-slate-500 text-sm font-medium mt-1">{dl.description}</p>}
              </div>
              <a 
                href={dl.fileUrl} 
                target="_blank" 
                className="bg-[#002d56] text-white px-6 py-3 rounded-sm font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:bg-[#ffcc00] group-hover:text-[#002d56] transition-all flex-shrink-0 ml-4"
              >
                <DownloadIcon size={14} /> Download
              </a>
            </div>
          ))}

          {downloads.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-sm">
               <p className="text-slate-400 font-bold uppercase tracking-widest">No downloads available.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
