import dbConnect from '@/lib/db';
import Program from '@/lib/models/Program';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Degree Programs',
  description: 'Detailed overview of the professional degree programs offered at GGC Rawalpindi, including semester structures and career paths.',
};

export const runtime = 'nodejs';
export const revalidate = 0;

async function getPrograms() {
  await dbConnect();
  const programs = await Program.find({ isActive: true }).sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(programs));
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Degree Programs</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Pathway to Your Professional Career</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((prog: any) => (
            <div key={prog._id} className="bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden group hover:border-[#ffcc00] transition-all">
              <div className="h-64 bg-slate-100 relative overflow-hidden">
                <img 
                  src={prog.image || '/Logo_.png'} 
                  alt={prog.title} 
                  className={`w-full h-full ${prog.image ? 'object-cover' : 'object-contain p-8 bg-slate-50'} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d56]/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-4 leading-tight group-hover:text-[#17a2b8] transition-colors">{prog.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed line-clamp-3 mb-6">
                  {prog.shortDesc || prog.description || 'No description available.'}
                </p>
              </div>
            </div>
          ))}

          {programs.length === 0 && (
            <div className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-sm bg-white">
              <p className="text-slate-400 font-bold uppercase tracking-widest">No programs found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
