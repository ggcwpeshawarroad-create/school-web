'use client';

import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Award, GraduationCap, Target, Users, ArrowUpRight, CheckCircle2, Star } from 'lucide-react';

export default function StudentSuccessPage() {
  const achievements = [
    {
      title: "Academic Excellence",
      metric: "98% Pass Rate",
      desc: "Consistently achieving top results in BISE Rawalpindi and Punjab University examinations.",
      icon: Award,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "University Admissions",
      metric: "85% Placement",
      desc: "Our graduates secure admissions in Pakistan's top-tier universities like QAU, NUST, and UET.",
      icon: Target,
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Co-Curricular Wins",
      metric: "50+ Awards",
      desc: "Leading in sports, debating, and IT competitions at the provincial and national levels.",
      icon: Star,
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-[#002d56]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/student-life/WhatsApp Image 2026-05-09 at 6.05.31 PM (1).jpeg" 
            className="w-full h-full object-cover opacity-20 scale-110"
            alt="Success Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002d56]/50 to-[#002d56]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#002d56] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Empowering Futures <ArrowUpRight size={14} />
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            Student <span className="text-[#ffcc00]">Success.</span>
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Discover how Govt. Graduate College empowers students to reach their full potential through academic excellence and personal growth.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 group hover:-translate-y-2 transition-all duration-300">
               <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                 <item.icon size={32} />
               </div>
               <div className="text-4xl font-black text-[#002d56] mb-2 tracking-tighter">{item.metric}</div>
               <h3 className="text-lg font-black text-[#17a2b8] uppercase tracking-widest mb-4">{item.title}</h3>
               <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Journey */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
             <div className="relative group">
                <div className="absolute inset-0 bg-[#ffcc00] rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all" />
                <img 
                   src="/student-life/WhatsApp Image 2026-05-09 at 6.05.31 PM.jpeg" 
                   className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
                   alt="Academic Excellence"
                />
             </div>
             <div>
                <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Academic Parity</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-tight">
                  Unlocking Potential <br /> Through Innovation
                </h2>
                <div className="space-y-6">
                  {[
                    "Research-led learning environments",
                    "Dedicated mentorship programs",
                    "Advanced laboratory facilities",
                    "Career counseling & university prep"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-600 font-bold">
                       <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                         <CheckCircle2 size={16} />
                       </div>
                       {text}
                    </div>
                  ))}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <span className="text-[#17a2b8] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Holistic Growth</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-tight">
                  Beyond the <br /> Classroom Walls
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                  We believe success is not just about grades. Our vibrant student societies and sports clubs ensure that every student develops the leadership, collaboration, and critical thinking skills needed to thrive in the 21st century.
                </p>
                <div className="flex flex-wrap gap-4">
                   <div className="bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 flex items-center gap-3">
                      <Users size={18} className="text-[#17a2b8]" />
                      <span className="text-sm font-black text-[#002d56] uppercase tracking-widest">12+ Active Societies</span>
                   </div>
                   <div className="bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 flex items-center gap-3">
                      <GraduationCap size={18} className="text-[#17a2b8]" />
                      <span className="text-sm font-black text-[#002d56] uppercase tracking-widest">Alumni Global Presence</span>
                   </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-[#17a2b8] rounded-3xl -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-all" />
                <img 
                   src="/student-life/WhatsApp Image 2026-05-09 at 6.05.32 PM (2).jpeg" 
                   className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
                   alt="Beyond Classroom"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-[#002d56] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="text-center mb-20">
              <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Success in Action</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Capture the Moment</h2>
           </div>

           <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {[
                "WhatsApp Image 2026-05-09 at 6.05.30 PM.jpeg",
                "WhatsApp Image 2026-05-09 at 6.05.30 PM (2).jpeg",
                "WhatsApp Image 2026-05-09 at 6.05.32 PM.jpeg",
                "WhatsApp Image 2026-05-09 at 6.05.33 PM.jpeg",
                "WhatsApp Image 2026-05-09 at 6.05.35 PM (1).jpeg",
                "WhatsApp Image 2026-05-09 at 6.05.35 PM.jpeg",
              ].map((img, i) => (
                <div key={i} className="relative group overflow-hidden rounded-2xl break-inside-avoid">
                  <img 
                    src={`/student-life/${img}`} 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={`Success Gallery ${i}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002d56] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
         <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-[0.9]">
              Your Journey <br /> <span className="text-[#17a2b8]">Starts Here.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium mb-12">
              Join a community that celebrates success and fosters exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <a href="/admissions" className="bg-[#002d56] text-white px-12 py-5 rounded-sm font-black text-lg uppercase tracking-tighter hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-2xl">Apply Now</a>
               <a href="/contact" className="border-2 border-[#002d56] text-[#002d56] px-12 py-5 rounded-sm font-black text-lg uppercase tracking-tighter hover:bg-slate-50 transition-all">Visit Campus</a>
            </div>
         </div>
         {/* Background Decoration */}
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50" />
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ffcc00]/5 rounded-full blur-3xl opacity-50" />
      </section>

      <Footer />
    </div>
  );
}
