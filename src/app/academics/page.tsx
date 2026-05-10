import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { BookOpen, Award, GraduationCap, ChevronRight, FileCheck, Target, ScrollText, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Academics | GGC Peshawar Road',
  description: 'Explore our academic programs, including BS degrees, Inter-Science (FSC), and co-curricular societies. GGC provides pathways to success for every student.',
};

export default function AcademicsPage() {
  const levels = [
    {
      title: "Inter-Science (FSC)",
      streams: "Pre-Medical / Pre-Engineering / Computer Science",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80",
      details: "Comprehensive higher secondary education following the BISE Rawalpindi curriculum with specialized laboratory research.",
      link: "/academics/degrees"
    },
    {
      title: "Bachelor Programs (BS)",
      streams: "4-Year Multi-Disciplinary Degrees",
      icon: BookOpen,
      image: "/bs-prog.png",
      details: "HEC-approved semester-based degrees across Sciences, Humanities, and Information Technology with industrial exposure.",
      link: "/academics/degrees"
    },
    {
      title: "Associate Degree (ADP)",
      streams: "2-Year Professional Pathway",
      icon: Award,
      image: "/adp.png",
      details: "HEC-accredited program representing the first two years of a BS degree, enabling direct entry to the 5th semester.",
      link: "/academics/degrees"
    },
    {
      title: "Campus Societies",
      streams: "Leadership & Personal Growth",
      icon: Target,
      image: "/student-life/WhatsApp Image 2026-05-09 at 6.05.32 PM.jpeg",
      details: "Vibrant student-led societies including Debating, Sports, Science, and IT for holistic development beyond the classroom.",
      link: "/student-life"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Premium Hero Header */}
      <section className="relative pt-60 pb-40 bg-[#002d56] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/student-life/WhatsApp Image 2026-05-09 at 6.05.31 PM.jpeg" 
            className="w-full h-full object-cover opacity-30 scale-105"
            alt="Academic Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002d56] via-[#002d56]/80 to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#002d56] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Academic Excellence <Award size={14} />
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              Pathways to <br /><span className="text-[#ffcc00]">Success.</span>
            </h1>
            <p className="text-white/80 text-xl font-medium leading-relaxed max-w-xl">
              We provide a rigorous and supportive environment where intellectual curiosity meets practical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-32 px-6 bg-slate-50 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-52 relative z-20">
            {levels.map((lvl, i) => (
              <div key={lvl.title} className="group bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col sm:flex-row transition-all duration-500 hover:-translate-y-2">
                <div className="sm:w-1/2 h-64 sm:h-auto relative overflow-hidden">
                   <img src={lvl.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={lvl.title} />
                   <div className="absolute inset-0 bg-[#002d56]/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="sm:w-1/2 p-10 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#ffcc00] group-hover:bg-[#002d56] group-hover:text-white transition-all">
                         <lvl.icon size={20} />
                      </div>
                      <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter">{lvl.title}</h3>
                   </div>
                   <div className="text-[#17a2b8] font-black text-[10px] uppercase tracking-widest mb-6">{lvl.streams}</div>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{lvl.details}</p>
                   <Link href={lvl.link} className="flex items-center gap-2 text-[#002d56] font-black text-xs uppercase tracking-widest hover:gap-4 transition-all group-hover:text-[#ffcc00]">
                      Details <ArrowRight size={14} />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Affiliations */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-5">
              <span className="text-[#17a2b8] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Credentials</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-10 leading-tight">Institutional <br /> Accreditations.</h2>
              <div className="space-y-6">
                 {[
                    { text: "Punjab University (PU) Affiliated", id: "PU-9021" },
                    { text: "HEC Recognized Quality Education", id: "HEC-HED" },
                    { text: "BISE Rawalpindi Board Certified", id: "BISR-RWP" },
                    { text: "ISO 9001:2015 Standards", id: "EDU-ISO" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-100 group hover:bg-[#002d56] transition-all">
                       <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:text-[#ffcc00]">
                             <CheckCircle2 size={24} className="text-[#17a2b8]" />
                          </div>
                          <span className="text-[#002d56] font-black text-sm uppercase tracking-tight group-hover:text-white">{item.text}</span>
                       </div>
                       <span className="text-slate-400 text-[10px] font-bold group-hover:text-white/40">{item.id}</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7 bg-[#002d56] p-16 rounded-3xl shadow-2xl relative overflow-hidden text-white group">
              <ScrollText className="text-[#ffcc00] mb-8 group-hover:scale-110 transition-transform" size={60} />
              <h2 className="text-4xl font-black mb-8 leading-tight tracking-tighter uppercase">Board & University <br /> Affiliations.</h2>
              <p className="text-white/60 leading-relaxed text-lg mb-12 font-medium">
                Our academic standards are monitored by the BISE Rawalpindi and the Punjab Higher Education Department to ensure 1:1 parity with national quality frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">BISE RPDI: 10293</span>
                 </div>
                 <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">HED GOVT: PNJ-901</span>
                 </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffcc00]/5 rounded-full -ml-16 -mb-16 blur-xl" />
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-8 uppercase tracking-tighter">Ready to Start Your Journey?</h2>
           <p className="text-lg text-slate-500 font-medium mb-12">
             Explore our specific degree programs or connect with our admission office to find your place at Govt. Graduate College.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/academics/degrees" className="bg-[#002d56] text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-xl">
                 View Degree Programs
              </Link>
              <Link href="/contact" className="border-2 border-[#002d56] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
                 Request Information
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
