import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Degrees',
  description: 'View our range of undergraduate BS programs and intermediate level certificates. Find the right path for your academic future at GGC.',
};

export const runtime = 'nodejs';

const bsPrograms = [
  {
    name: 'BS Mathematics',
    icon: '∑',
    description: 'Explore pure and applied mathematics — calculus, algebra, topology, and beyond.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-blue-900/80',
  },
  {
    name: 'BS Physics',
    icon: '⚛',
    description: 'Dive into mechanics, electromagnetism, quantum physics, and modern science.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-indigo-900/80',
  },
  {
    name: 'BS Chemistry',
    icon: '🧪',
    description: 'Understand matter and its transformations through organic, inorganic & physical chemistry.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-emerald-900/80',
  },
  {
    name: 'BS Computer Science',
    icon: '💻',
    description: 'Master programming, algorithms, AI, data structures and software engineering.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-purple-900/80',
  },
  {
    name: 'BS English',
    icon: '📖',
    description: 'Study literature, linguistics, and language for careers in education, writing, and media.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-amber-900/80',
  },
  {
    name: 'BS Urdu',
    icon: 'اردو',
    description: 'Explore the richness of Urdu literature, linguistics, and classical poetry.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-rose-900/80',
  },
  {
    name: 'BS Economics',
    icon: '📊',
    description: 'Analyze markets, policy, microeconomics, macroeconomics, and development.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-teal-900/80',
  },
  {
    name: 'BS Statistics',
    icon: '📈',
    description: 'Master data analysis, probability, inference and statistical computing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tag: 'BS · 4 Years',
    color: 'from-cyan-900/80',
  },
];

const intermediatePrograms = [
  {
    name: 'FSc Pre-Medical',
    icon: '🩺',
    description: 'Biology, Chemistry & Physics — the gateway to medicine, pharmacy and health sciences.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    tag: 'Intermediate · 2 Years',
    color: 'from-red-900/80',
  },
  {
    name: 'FSc Pre-Engineering',
    icon: '⚙️',
    description: 'Physics, Chemistry & Mathematics — the foundation for engineering and technology.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
    tag: 'Intermediate · 2 Years',
    color: 'from-slate-900/80',
  },
  {
    name: 'ICS (Computer Science)',
    icon: '🖥️',
    description: 'Mathematics, Physics & Computer Science for a future in software and IT.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    tag: 'Intermediate · 2 Years',
    color: 'from-violet-900/80',
  },
  {
    name: 'FA (Faculty of Arts)',
    icon: '🎨',
    description: 'Humanities, social sciences and languages to develop critical thinking and creativity.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
    tag: 'Intermediate · 2 Years',
    color: 'from-orange-900/80',
  },
  {
    name: 'I.Com (Commerce)',
    icon: '💼',
    description: 'Accounting, business studies and economics for commerce and finance careers.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    tag: 'Intermediate · 2 Years',
    color: 'from-lime-900/80',
  },
];

function ProgramCard({ prog }: { prog: typeof bsPrograms[0] }) {
  return (
    <div className="group relative bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={prog.image}
          alt={prog.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} to-transparent`} />
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#ffcc00] rounded-sm flex items-center justify-center text-xl shadow-lg">
          <span>{prog.icon}</span>
        </div>
        {/* Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm border border-white/20">
            {prog.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[#002d56] font-black text-lg uppercase tracking-tighter leading-tight mb-3">
          {prog.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">
          {prog.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-[#002d56] to-[#ffcc00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function DegreesPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-44 pb-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffcc00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.4em] mb-6">Academic Programs</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Our Degrees
          </h1>
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto">
            Build your future with world-class undergraduate and intermediate programs.
          </p>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto mt-8" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#ffcc00]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-[#002d56] font-black text-3xl">13+</div>
            <div className="text-[#002d56]/60 text-[11px] font-bold uppercase tracking-widest">Programs</div>
          </div>
          <div>
            <div className="text-[#002d56] font-black text-3xl">4</div>
            <div className="text-[#002d56]/60 text-[11px] font-bold uppercase tracking-widest">Year BS Degrees</div>
          </div>
          <div>
            <div className="text-[#002d56] font-black text-3xl">HEC</div>
            <div className="text-[#002d56]/60 text-[11px] font-bold uppercase tracking-widest">Recognized</div>
          </div>
        </div>
      </div>

      {/* BS Programs */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="mb-14">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Undergraduate</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter">BS Programs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bsPrograms.map((prog) => (
            <ProgramCard key={prog.name} prog={prog} />
          ))}
        </div>
      </section>

      {/* Intermediate Programs */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-slate-200">
        <div className="mb-14">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.3em] mb-3">College Level</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter">Intermediate Programs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {intermediatePrograms.map((prog) => (
            <ProgramCard key={prog.name} prog={prog} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002d56] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Ready to Apply?</h2>
          <p className="text-white/60 font-medium mb-10">Join thousands of students shaping their future at GGC Rawalpindi.</p>
          <a
            href="/admissions"
            className="inline-block bg-[#ffcc00] text-[#002d56] px-12 py-5 font-black text-lg uppercase tracking-tighter hover:bg-white transition-colors shadow-2xl"
          >
            Apply for Admission
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
