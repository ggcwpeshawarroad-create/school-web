import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { 
  Music, Camera, Trophy, Globe, Heart, 
  Users, Coffee, Laptop, BookOpen, Star 
} from 'lucide-react';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Student Life',
  description: 'Experience a vibrant campus life at GGC. Explore our student societies, sports facilities, arts and culture events, and innovation clubs.',
};

export const runtime = 'nodejs';

function getGalleryImages() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'student-life');
    const files = fs.readdirSync(galleryDir);
    return files
      .filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i))
      .map(f => `/student-life/${f}`);
  } catch (err) {
    return [];
  }
}



const steps = [
  {
    title: 'Classes & Academics',
    subtitle: 'Nourishing the Mind',
    content: 'Participation in all lectures and practicals is compulsory. The college maintains a strict attendance rule to ensure consistent academic progress. Our passionate, highly skilled teachers and vibrant classroom environment provide the perfect foundation for intellectual growth and exploration.',
  },
  {
    title: 'Exams & Evaluation',
    subtitle: 'Assessing Excellence',
    content: 'Students must maintain excellent educational records with regular monthly test attendance. Comprehensive evaluations prepare students for Board and University exams, rewarding dedication, honesty, and consistent performance across all disciplines.',
  },
  {
    title: 'Sports & Athletics',
    subtitle: 'Physical Development',
    content: 'The college holds games and sports competitions at various levels to develop enthusiasm and positive thinking. Students gear up in dedicated sports shoes to utilize our grounds, cultivating teamwork, stamina, and competitive spirit.',
  },
  {
    title: 'Co-Curriculars',
    subtitle: 'Leadership & Vision',
    content: 'Our active societies—including the Ideology of Pakistan, English, Urdu, and Islamiyat Societies—facilitate intellectual and social development. The esteemed College Student Council gives students a platform to lead and resolve campus challenges.',
  },
  {
    title: 'Cultural Programs',
    subtitle: 'Celebrating Diversity',
    content: 'Through events, festival assemblies, and diverse cultural programs, we celebrate our rich traditions while embracing progress. Every student is encouraged to participate, promoting religious harmony, cultural awareness, and spiritual well-being.',
  }
];



export default function StudentLifePage() {
  const galleryImages = getGalleryImages();

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Student Life Hero" 
          />
          <div className="absolute inset-0 bg-[#002d56]/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] block mb-6 animate-fade-in">Experience GGC</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            A Vibrant <br /> <span className="text-[#ffcc00]">Campus Life</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Education at GGC goes beyond the classroom. We provide an environment where students grow as individuals, leaders, and community members.
          </p>
          <div className="w-24 h-1.5 bg-[#ffcc00] mx-auto" />
        </div>
      </section>





      {/* 5-Step Campus Journey */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-32">
               <span className="text-[#17a2b8] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Full Experience</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#002d56] uppercase tracking-tighter mb-6">A Day in the Life</h2>
               <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">From the classroom to the sports grounds and cultural stages, here is how our students achieve excellence every single day.</p>
            </div>
            
            <div className="space-y-32">
              {steps.map((step, idx) => {
                 let imageSrc = '/Logo_.png';
                 if (galleryImages.length > 0) {
                     let mappingIdx = idx;
                     if (idx === 1) mappingIdx = 2; // Swap Exams image with Sports
                     else if (idx === 2) mappingIdx = 1; // Swap Sports image with Exams
                     imageSrc = galleryImages[(mappingIdx * 3 + 2) % galleryImages.length];
                 }
                 return (
                   <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-full lg:w-1/2 relative h-[500px]">
                          <div className={`absolute inset-0 bg-[#ffcc00] ${idx % 2 === 1 ? '-translate-x-6' : 'translate-x-6'} translate-y-6 rounded-sm`} />
                          <img 
                            src={imageSrc} 
                            alt={step.title}
                            className={`relative z-10 w-full h-full ${imageSrc === '/Logo_.png' ? 'object-contain p-12 bg-white' : 'object-cover'} rounded-sm shadow-2xl hover:scale-[1.02] transition-transform duration-500`}
                          />
                      </div>
                      <div className="w-full lg:w-1/2">
                         <span className="text-[#17a2b8] font-bold text-sm uppercase tracking-widest block mb-4">{step.subtitle}</span>
                         <h3 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-tight">{step.title}</h3>
                         <div className="w-16 h-1.5 bg-[#002d56] mb-8" />
                         <p className="text-slate-600 text-lg leading-relaxed font-medium">{step.content}</p>
                      </div>
                   </div>
                 );
              })}
            </div>
         </div>
      </section>

      {/* FULL CAMPUS GALLERY (FROM USER UPLOADS) */}
      {galleryImages.length > 0 && (
        <section className="py-24 bg-white border-t border-slate-100">
           <div className="max-w-[1400px] mx-auto px-6">
               <div className="text-center mb-16">
                 <span className="text-[#17a2b8] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Capturing Moments</span>
                 <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-4">Campus Life Gallery</h2>
                 <p className="text-slate-500 font-medium max-w-2xl mx-auto">Take a glimpse into the vibrant daily routine, sports, events, and extra-curricular life of our amazing students.</p>
               </div>
               
               <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-6 space-y-6">
                 {galleryImages.map((src, idx) => (
                   <div key={idx} className="break-inside-avoid relative group rounded-sm overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                      <img src={src} alt={`Campus Life ${idx}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 hover:z-10 relative" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002d56]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                   </div>
                 ))}
               </div>
           </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-6 leading-none">Ready to Start Your Journey?</h2>
          <p className="text-slate-500 font-medium mb-12">Join a community where you can thrive and make lifelong memories.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/admissions" className="bg-[#ffcc00] text-[#002d56] px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-[#002d56] hover:text-white transition-all shadow-xl">
               Apply for Admission
             </Link>
             <Link href="/contact" className="border-2 border-slate-100 text-[#002d56] px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:border-[#002d56] transition-all">
               Visit Our Campus
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}
