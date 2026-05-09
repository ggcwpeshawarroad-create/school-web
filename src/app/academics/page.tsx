import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { BookOpen, Award, GraduationCap, ChevronRight, FileCheck, Target, ScrollText, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore our academic programs, including BS degrees, Inter-Science (FSC), and co-curricular societies. GGC provides pathways to success for every student.',
};

export default function AcademicsPage() {
  const levels = [
    {
      title: "Inter-Science (FSC)",
      streams: "Pre-Medical / Pre-Engineering / Computer Science",
      icon: FileCheck,
      details: "Comprehensive higher secondary education following the BISE Rawalpindi curriculum with specialized lab work.",
    },
    {
       title: "Bachelor Programs (BS)",
       streams: "4-Year Multi-Disciplinary Degrees",
       icon: BookOpen,
       details: "Higher Education Department approved semester-based degrees across Sciences, Humanities, and Information Technology.",
    },
    {
       title: "Co-Curricular Societies",
       streams: "Leadership & Personal Growth",
       icon: Target,
       details: "Vibrant student societies including Debating, Sports, Science, and IT for holistic development beyond the classroom.",
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Dark Styled Header */}
      <section className="relative pt-48 pb-24 bg-[#061727] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#17a2b8] font-black text-xs uppercase tracking-[0.4em] mb-6 block">Academic Excellence & Innovation</span>
          <h1 className="text-6xl font-black tracking-tight mb-8 animate-in fade-in zoom-in duration-500">
            Pathways to <span className="text-[#17a2b8]">Success.</span>
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#17a2b8]/5 rounded-full blur-3xl -mb-48 -mr-48" />
      </section>

      {/* Program Details: Formal List using Navy/Teal palette */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {levels.map((lvl, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 items-center p-12 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-[#17a2b8]/20 transition-all group">
                 <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#17a2b8] transition-all">
                    <lvl.icon className="text-[#17a2b8] group-hover:text-white" size={40} />
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="text-2xl font-black text-[#061727]">{lvl.title}</h3>
                       <CheckCircle2 size={18} className="text-[#17a2b8]" />
                    </div>
                    <div className="text-[#17a2b8] font-black text-xs uppercase tracking-widest mb-6">{lvl.streams}</div>
                    <p className="text-slate-500 leading-relaxed font-medium text-lg mb-8">{lvl.details}</p>
                    <div className="flex gap-4">
                       <button className="bg-[#061727] text-white px-6 py-2.5 rounded font-black text-[10px] uppercase tracking-widest hover:bg-[#17a2b8] transition-all">Program Details</button>
                       <button className="border-2 border-slate-100 text-slate-400 px-6 py-2.5 rounded font-black text-[10px] uppercase tracking-widest hover:border-[#17a2b8] hover:text-[#17a2b8] transition-all">Admission Criteria</button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation: Clean Navy Section */}
      <section className="py-32 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-7 bg-[#061727] p-16 rounded-3xl shadow-2xl relative overflow-hidden text-white">
                  <ScrollText className="text-[#17a2b8] mb-8" size={60} />
                  <h2 className="text-4xl font-black mb-8 leading-tight">Board & University <br /> Affiliations.</h2>
                  <p className="text-white/60 leading-relaxed text-lg mb-12 font-medium">
                    Our academic standards are monitored by the BISE Rawalpindi and the Punjab Higher Education Department to ensure 1:1 parity with national quality frameworks.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#17a2b8]" />
                        <span className="text-xs font-black uppercase tracking-widest">BISE RPDI: 10293</span>
                     </div>
                     <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#17a2b8]" />
                        <span className="text-xs font-black uppercase tracking-widest">HED GOVT: PNJ-901</span>
                     </div>
                  </div>
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
               </div>
               
               <div className="lg:col-span-5">
                  <h3 className="text-2xl font-black text-[#061727] mb-10 border-b-4 border-[#17a2b8] pb-4 inline-block tracking-tight">Institutional Accreditations</h3>
                  <div className="space-y-6">
                     {[
                       "Punjab University (PU) Affiliated",
                       "HEC Recognized Institutional Quality",
                       "BISE Rawalpindi Board Certified",
                       "ISO 9001:2015 Educational Standard"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-5 group cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-[#17a2b8]/10 flex items-center justify-center group-hover:bg-[#17a2b8] transition-all">
                             <Award className="text-[#17a2b8] group-hover:text-white" size={20} />
                          </div>
                          <span className="text-[#061727] font-bold text-lg tracking-tight group-hover:text-[#17a2b8] transition-all">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
