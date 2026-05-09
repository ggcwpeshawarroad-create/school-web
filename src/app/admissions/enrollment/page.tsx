import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { 
  Users, TrendingUp, Award, BarChart3, 
  MapPin, CheckCircle, GraduationCap, School
} from 'lucide-react';

export const runtime = 'nodejs';

const stats = [
  { label: 'Intermediate', value: '780', color: 'bg-blue-600', sub: 'FSc, ICS & FA' },
  { label: 'BS Programs', value: '320', color: 'bg-[#ffcc00]', sub: '8 Major Disciplines' },
  { label: 'Post Graduate', value: '150', color: 'bg-emerald-600', sub: 'Advanced Certifications' },
  { label: 'Total Strength', value: '1,250+', color: 'bg-indigo-600', sub: 'Active Student Body' },
];

const programData = [
  { name: 'FSc Pre-Medical', count: '250', trend: '+12%', icon: '🧬' },
  { name: 'FSc Pre-Engineering', count: '200', trend: '+8%', icon: '⚙️' },
  { name: 'ICS (Comp. Science)', count: '180', trend: '+15%', icon: '💻' },
  { name: 'FA / Humanities', count: '150', trend: '+5%', icon: '📚' },
  { name: 'BS Mathematics', count: '45', trend: '+20%', icon: '📐' },
  { name: 'BS Physics', count: '40', trend: '+10%', icon: '⚛️' },
];

export default function EnrollmentPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] block mb-6">Institute Data</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">Current Enrollment</h1>
            <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Tracking our growth and success through academic excellence. GGC Peshawar Road is home to a diverse and thriving student community.
            </p>
        </div>
      </section>

      {/* Registration Trends - Bar Graphs */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <span className="text-[#17a2b8] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Annual Growth</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-4">Registration Trends</h2>
            <p className="text-slate-500 font-medium leading-relaxed">Our enrollment statistics demonstrate a consistent year-over-year increase across all major disciplines, reflecting our growing reputation for excellence.</p>
          </div>
          <div className="flex gap-4 justify-center">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#002d56] rounded-full" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth Peak</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-100 rounded-full" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Historical Base</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            { name: 'FSc Pre-Medical', icon: '🧬', color: 'bg-blue-600', trend: [65, 72, 80, 88, 100] },
            { name: 'FSc Pre-Engineering', icon: '⚙️', color: 'bg-blue-600', trend: [50, 58, 65, 72, 82] },
            { name: 'ICS (Comp. Science)', icon: '💻', color: 'bg-blue-600', trend: [45, 55, 70, 85, 100] },
            { name: 'FA / Humanities', icon: '📚', color: 'bg-blue-600', trend: [70, 75, 82, 88, 95] },
            { name: 'BS Programs', icon: '📐', color: 'bg-blue-600', trend: [15, 30, 50, 75, 100] },
            { name: 'Professional Studies', icon: '⚛️', color: 'bg-blue-600', trend: [25, 38, 52, 68, 85] },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-50 group relative overflow-hidden">
              {/* Grid Lines Background */}
              <div className="absolute inset-x-10 top-28 bottom-24 border-y border-slate-100 flex flex-col justify-between opacity-50">
                 <div className="w-full border-t border-slate-50" />
                 <div className="w-full border-t border-slate-50" />
              </div>

              <div className="flex items-center gap-4 mb-12 relative z-10">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-3xl transition-all group-hover:scale-110 duration-500">
                  {item.icon}
                </div>
                <h3 className="text-sm font-black text-[#002d56] uppercase tracking-tight">{item.name}</h3>
              </div>
              
              <div className="flex items-end gap-3 h-48 relative z-10 px-2 border-l border-b border-slate-200 ml-4 pb-1">
                {item.trend.map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                    <div 
                      className={`w-full ${item.color} rounded-t-sm transition-all duration-700 shadow-md transform origin-bottom hover:scale-x-110`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] font-black text-[#002d56] transition-colors">{2020 + idx}</span>
                  </div>
                ))}
                
                {/* Vertical Axis labels */}
                <div className="absolute -left-8 top-0 bottom-0 flex flex-col justify-between text-[8px] font-bold text-slate-400 py-1">
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-50 flex justify-between items-center relative z-10">
                 <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                    <TrendingUp size={14} /> Global Growth
                 </div>
                 <div className="text-[10px] font-black text-[#002d56] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Academic Year</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Popularity - Horizontal Bars */}
      <section className="py-24 px-6 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-[#17a2b8] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Student Interest</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-tight">Program Popularity Index</h2>
              <div className="space-y-8">
                 {[
                   { label: 'Science & Research', val: 95, color: 'bg-[#002d56]' },
                   { label: 'Information Technology', val: 88, color: 'bg-indigo-600' },
                   { label: 'Social Sciences', val: 75, color: 'bg-[#ffcc00]' },
                   { label: 'Professional Degrees', val: 82, color: 'bg-[#17a2b8]' },
                 ].map((bar) => (
                    <div key={bar.label} className="group cursor-default">
                       <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-[#002d56] mb-3">
                          <span>{bar.label}</span>
                          <span className="text-slate-400 group-hover:text-[#002d56] transition-colors">Higher Interest</span>
                       </div>
                       <div className="h-4 bg-white rounded-full overflow-hidden p-1 shadow-inner">
                          <div 
                            className={`h-full ${bar.color} rounded-full transition-all duration-1000 shadow-md`} 
                            style={{ width: `${bar.val}%` }} 
                          />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-3xl" />
              <div className="bg-white p-12 rounded-3xl shadow-2xl relative z-10 border border-white">
                 <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-8">Performance Outlook</h3>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: 'Pass Rate', val: '99%', sub: '2023 Batch' },
                      { label: 'Placements', val: '86%', sub: 'Higher Education' },
                      { label: 'Satisfaction', val: '94%', sub: 'Student Surveys' },
                      { label: 'Exams', val: '100%', sub: 'Retained Merit' },
                    ].map((stat, i) => (
                       <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl">
                          <div className="text-3xl font-black text-[#002d56] mb-1">{stat.val}</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-[#17a2b8] mb-1">{stat.label}</div>
                          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Institutional Success Section */}
      <section className="py-24 bg-[#002d56] text-white relative overflow-hidden">
        <School className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 rotate-12" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Consistency in Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="p-8 border border-white/10 rounded-xl backdrop-blur-sm">
                <Award className="w-12 h-12 text-[#ffcc00] mx-auto mb-6" />
                <h4 className="text-lg font-black uppercase tracking-tight mb-4">Top Merits</h4>
                <p className="text-white/60 text-sm font-medium">Attracting the brightest minds from across the region year after year.</p>
             </div>
             <div className="p-8 border border-white/10 rounded-xl backdrop-blur-sm">
                <Users className="w-12 h-12 text-[#ffcc00] mx-auto mb-6" />
                <h4 className="text-lg font-black uppercase tracking-tight mb-4">Empowerment</h4>
                <p className="text-white/60 text-sm font-medium">Providing a safe and nurturing environment for women to lead and succeed.</p>
             </div>
             <div className="p-8 border border-white/10 rounded-xl backdrop-blur-sm">
                <BarChart3 className="w-12 h-12 text-[#ffcc00] mx-auto mb-6" />
                <h4 className="text-lg font-black uppercase tracking-tight mb-4">Career Path</h4>
                <p className="text-white/60 text-sm font-medium">Tracking our alumni success through professional placements and achievements.</p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
