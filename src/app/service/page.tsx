import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { 
  Heart, 
  ShieldCheck, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  Droplet, 
  HandHelping 
} from 'lucide-react';

export const runtime = 'nodejs';

export default function ServicePage() {
  const initiatives = [
    {
      title: "Cultural Programs",
      desc: "Celebrating our diverse heritage through annual festivals, traditional arts, and student-led cultural showcases.",
      icon: Users,
      image: "/student-life/WhatsApp Image 2026-05-09 at 6.05.34 PM.jpeg",
      color: "text-amber-600"
    },
    {
      title: "Social Welfare Society",
      desc: "Dedicated to community outreach, supporting underprivileged local schools and organizing seasonal charity drives.",
      icon: HandHelping,
      image: "/student-life/WhatsApp Image 2026-05-09 at 6.05.33 PM.jpeg",
      color: "text-blue-600"
    },
    {
      title: "Green Campus Initiative",
      desc: "Leading the way in environmental stewardship through tree plantation drives and waste management workshops.",
      icon: Leaf,
      image: "/student-life/WhatsApp Image 2026-05-09 at 6.05.35 PM.jpeg",
      color: "text-green-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative pt-60 pb-40 bg-[#1e3a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/student-life/WhatsApp Image 2026-05-09 at 6.05.32 PM.jpeg" 
            className="w-full h-full object-cover opacity-30 scale-105"
            alt="Service Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a1a] via-[#1e3a1a]/80 to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#002d56] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Community & Ethics <Heart size={14} className="fill-current" />
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              Service & <br /><span className="text-[#ffcc00]">Character.</span>
            </h1>
            <p className="text-white/80 text-xl font-medium leading-relaxed max-w-xl">
              We believe in building character through service to others, fostering a generation of compassionate leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-6 bg-slate-50 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 -mt-52 relative z-20">
             {[
               { title: "Leadership", desc: "Developing the courage to lead with integrity and purpose.", icon: ShieldCheck },
               { title: "Compassion", desc: "Understanding and serving the needs of our local community.", icon: Heart },
               { title: "Impact", desc: "Creating tangible change through consistent, student-led action.", icon: Globe }
             ].map((pillar, i) => (
               <div key={i} className="bg-white p-12 rounded-2xl shadow-2xl border border-slate-100 text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#4a7729] mx-auto mb-8 group-hover:bg-[#4a7729] group-hover:text-white transition-all">
                     <pillar.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-4">{pillar.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Active Initiatives Showcase */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
             <span className="text-[#17a2b8] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Impact</span>
             <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter">Student-Led Initiatives</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
                 <div className="h-64 relative overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                    <div className="absolute inset-0 bg-[#002d56]/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                       <item.icon className={item.color} size={24} />
                    </div>
                 </div>
                 <div className="p-10 flex-grow">
                    <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8">{item.desc}</p>
                    <Link href="/student-life" className="flex items-center gap-2 text-[#4a7729] font-black text-xs uppercase tracking-widest hover:gap-4 transition-all">
                       Learn About Society <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-32 bg-[#1e3a1a] text-white relative overflow-hidden text-center sm:text-left">
         <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20 relative z-10">
            <div>
               <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
                 Building a <br /> Legacy of <br /><span className="text-[#ffcc00]">Service.</span>
               </h2>
               <p className="text-white/60 text-lg sm:text-xl font-medium leading-relaxed mb-12">
                 At Govt. Graduate College, we believe that education is incomplete without a commitment to humanity. Our students are encouraged to look beyond their textbooks and contribute to the well-being of the society they belong to.
               </p>
               <div className="flex gap-10">
                  <div className="text-center sm:text-left">
                     <div className="text-4xl font-black text-[#ffcc00] mb-1">500+</div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Volunteer Hours Monthly</div>
                  </div>
                  <div className="text-center sm:text-left border-l border-white/20 pl-10">
                     <div className="text-4xl font-black text-[#ffcc00] mb-1">100%</div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Student Participation</div>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 border-8 border-[#ffcc00] translate-x-6 translate-y-6 -z-10" />
               <img src="/student-life/WhatsApp Image 2026-05-09 at 6.05.34 PM.jpeg" className="w-full h-[500px] object-cover rounded-sm shadow-2xl" alt="Community Work" />
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-8 uppercase tracking-tighter">Want to Make a Difference?</h2>
           <p className="text-xl text-slate-500 font-medium mb-12">
             Join one of our student societies today and be part of the change you want to see in the world.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-[#4a7729] text-white px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-[#002d56] transition-all shadow-xl">
                 Contact Admission Office
              </Link>
              <Link href="/about" className="border-2 border-[#4a7729] text-[#4a7729] px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                 Learn More About Us
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
