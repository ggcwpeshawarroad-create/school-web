import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Zap, BookOpen, Users, Compass, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the legacy, mission, and vision of Govt. Graduate College. Our commitment to excellence in higher education has served students for decades.',
};
import dbConnect from '@/lib/db';
import Settings from '@/lib/models/Settings';

export const revalidate = 0;

async function getSettings() {
  await dbConnect();
  return await Settings.findOne({}).lean();
}

export default async function AboutPage() {
  const settings = await getSettings();
  
  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/student-life/WhatsApp Image 2026-05-09 at 6.05.31 PM.jpeg" alt="About GGC Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#002d56]/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#ffcc00] font-black uppercase tracking-[0.3em] text-xs mb-6 px-4 py-1.5 border border-[#ffcc00]/50 rounded-full inline-flex">Who We Are</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none drop-shadow-2xl">
            Legacy Of <br /> Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl px-4">
            Established with the mission to provide quality higher education, Govt. Graduate College for Women, Peshawar Road, Rawalpindi has been serving students from diverse backgrounds for decades.
          </p>
        </div>
      </section>

      {/* Intro Stats Bar */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          {[
            { value: "Heritage", label: 'Rich History & Heritage' },
            { value: "5,000+", label: 'Enrolled Students' },
            { value: "120+", label: 'Distinguished Faculty' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 p-10 text-center border-b md:border-b-0 md:border-r border-slate-100 last:border-0 hover:bg-[#fafafa] transition-colors">
              <h3 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-2">{stat.value}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Principal Message */}
      <section className="py-24 px-6 bg-white relative">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="max-w-[1000px] mx-auto relative z-10 bg-white p-12 md:p-16 lg:p-20 rounded-[2rem] shadow-xl border border-slate-100 mt-8 md:mt-16">
            <div className="absolute top-12 right-12 text-[#ffcc00]/20 pointer-events-none hidden md:block">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.41 14.594C16.666 13.916 16.805 13.208 16.805 12.5V3H21.5V12.5C21.5 15.327 20.315 18.04 18.156 21H14.017ZM2.516 21L4.91 14.594C5.166 13.916 5.305 13.208 5.305 12.5V3H10V12.5C10 15.327 8.815 18.04 6.656 21H2.516Z"/></svg>
            </div>
            <span className="text-[#ffcc00] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Welcome</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-tight">
              Principal&apos;s Message
            </h2>
            <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-lg lg:text-xl max-w-3xl relative z-10">
              <p>
                It gives me immense pleasure to welcome you to this prestigious institution of highest learning. This platform of ardent scholarship, passionate learning and zealous training provides you with sufficient space to explore your hidden talent and to come up with your best attributes.
              </p>
              <p>
                Highly skilled and professionally trained teachers would become inspirational role models to polish your skills and groom your personalties. The competent staff members work hard to facilitate their students to attain their goals and fulfill their dreams.
              </p>
              <p>
                Our mission is to cultivate spiritual well-being, promote religious harmony, create cultural awareness and produce strength of character. I hope you will thoroughly enjoy this journey of learning and teaching.
              </p>
            </div>
            <div className="mt-12 pt-10 border-t border-slate-100 max-w-3xl">
              <h4 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter">Mrs. Noshin Rehman</h4>
              <p className="text-[#17a2b8] font-bold mt-2 uppercase tracking-widest text-sm">Principal / Associate Prof. Of Economic</p>
            </div>
        </div>
      </section>

      {/* Vision, Mission and Philosophy */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.3em] block mb-4">Our Purpose</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#002d56] uppercase tracking-tighter max-w-3xl mx-auto leading-tight">Vision, Mission & Philosophy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Vision */}
          <div className="bg-[#002d56] p-10 lg:p-12 rounded-xl shadow-xl group transition-all duration-300 relative overflow-hidden text-white flex flex-col items-start h-full hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={160} />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#ffcc00] mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 relative z-10 block w-full border-b border-white/10 pb-6">
              Our Vision
            </h2>
            <p className="text-white/80 font-medium leading-relaxed text-lg relative z-10 flex-1">
              To become an institution that serves society through excellence in education, practice and life values.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 lg:p-12 rounded-xl shadow-xl border border-slate-100 group hover:border-[#ffcc00] transition-all duration-300 relative overflow-hidden flex flex-col items-start h-full hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Target size={160} />
            </div>
            <div className="w-16 h-16 bg-[#002d56] rounded-2xl flex items-center justify-center text-[#ffcc00] mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter mb-6 relative z-10 block w-full border-b border-slate-100 pb-6 group-hover:border-[#ffcc00]/30 transition-colors">
              Our Mission
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed text-lg relative z-10 flex-1">
              Govt. Graduate College for Women Peshawar Road Rawalpindi aspires to achieve excellence through dedicated teaching, practice and motivation for the constructive participation of the graduates for the betterment of the region and the nation.
            </p>
          </div>

          {/* Philosophy */}
           <div className="bg-slate-50 p-10 lg:p-12 rounded-xl shadow-xl border border-slate-200 group hover:border-[#17a2b8] transition-all duration-300 relative overflow-hidden flex flex-col items-start h-full hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <BookOpen size={160} />
            </div>
            <div className="w-16 h-16 bg-[#17a2b8]/10 rounded-2xl flex items-center justify-center text-[#17a2b8] mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <BookOpen size={32} />
            </div>
            <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter mb-6 relative z-10 block w-full border-b border-slate-200 pb-6 group-hover:border-[#17a2b8]/30 transition-colors">
              Our Philosophy
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed text-lg relative z-10 flex-1">
              G.G.C(W) Philosophy is merit based approach, hard work, value addition, intellectual rigor and character building.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
             <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.3em] block mb-4">6 Principles We Live By</span>
             <h2 className="text-4xl md:text-6xl font-black text-[#002d56] uppercase tracking-tighter">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Academic Excellence', desc: 'Commitment to the highest standards of teaching, research, and collaborative learning.' },
              { icon: ShieldCheck, title: 'Integrity', desc: 'Upholding strict ethical values, honesty, and transparency in all institutional operations.' },
              { icon: Users, title: 'Inclusivity', desc: 'Providing equal opportunities, a welcoming campus, and a safe space for all students.' },
              { icon: Zap, title: 'Innovation', desc: 'Embracing modern teaching methodologies, technologies, and visionary strategies.' },
              { icon: Compass, title: 'Community Service', desc: 'Encouraging students to give back to society and develop strong moral responsibilities.' },
              { icon: Target, title: 'Leadership', desc: 'Cultivating confident, ethical leaders who inspire positive change in society and the nation.' },
            ].map((val, i) => (
              <div key={i} className="group p-10 border border-slate-100 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-slate-50 hover:bg-white text-center flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#17a2b8] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:text-[#002d56]">
                   <val.icon size={32} />
                 </div>
                 <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter mb-4">{val.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
