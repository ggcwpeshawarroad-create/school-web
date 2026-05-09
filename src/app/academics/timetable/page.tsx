import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { 
  Clock, Calendar, Download, MapPin, 
  BookOpen, Users, Bell, Info
} from 'lucide-react';

export const runtime = 'nodejs';

const schedules = [
  {
    program: 'Intermediate Programs',
    sessions: [
      { time: '08:00 AM - 09:30 AM', subject: 'English / Urdu', room: 'Hall A' },
      { time: '09:30 AM - 11:00 AM', subject: 'Mathematics / Biology', room: 'Room 204' },
      { time: '11:00 AM - 11:30 AM', subject: 'Recess Break', room: 'Cafeteria', isBreak: true },
      { time: '11:30 AM - 01:00 PM', subject: 'Physics / Computer Science', room: 'Labs' },
    ]
  },
  {
    program: 'BS Bachelor Programs',
    sessions: [
      { time: '09:00 AM - 10:30 AM', subject: 'Major Subject I', room: 'Dept Block' },
      { time: '10:30 AM - 12:00 PM', subject: 'General Elective', room: 'Room 105' },
      { time: '12:00 PM - 12:30 PM', subject: 'Prayer Break', room: 'Mosque', isBreak: true },
      { time: '12:30 PM - 02:00 PM', subject: 'Laboratory Work', room: 'Main Lab' },
    ]
  }
];

export default function TimetablePage() {
  return (
    <div className="bg-[#fcfdfe] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#ffcc00] opacity-50" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
                <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] block mb-6">Academic Schedule</span>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Class Timetable</h1>
                <p className="text-white/60 text-lg font-medium max-w-xl leading-relaxed">
                  Plan your academic journey with our organized class schedules. Timetables are updated every semester to ensure optimal learning hours.
                </p>
            </div>
            <div className="flex-shrink-0">
                <Link href="/downloads" className="inline-flex items-center gap-3 bg-white text-[#002d56] px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-[#ffcc00] transition-all shadow-2xl">
                   <Download size={20} /> Download PDF
                </Link>
            </div>
        </div>
      </section>

      {/* Notice Bar */}
      <div className="bg-blue-50 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4 text-blue-800">
              <Bell size={20} className="flex-shrink-0 animate-bounce" />
              <p className="text-xs font-black uppercase tracking-widest leading-none">Spring Semester 2025 Schedule is now effective from March 1st.</p>
          </div>
      </div>

      {/* Timetables Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {schedules.map((sched, idx) => (
                <div key={idx} className="bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
                    <div className="bg-slate-50 p-8 border-b border-slate-100">
                        <h2 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter">{sched.program}</h2>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                           <Calendar size={12} /> Monday — Friday
                        </p>
                    </div>
                    
                    <div className="flex-grow p-4 md:p-8 space-y-4">
                        {sched.sessions.map((session, sIdx) => (
                            <div 
                                key={sIdx} 
                                className={`relative p-6 rounded-sm border flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-300 ${
                                    session.isBreak 
                                    ? 'bg-amber-50 border-amber-100' 
                                    : 'bg-white border-slate-50 hover:border-[#ffcc00] hover:shadow-lg'
                                }`}
                            >
                                <div className="flex items-center gap-5 w-full md:w-auto">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${session.isBreak ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-[#002d56]'}`}>
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <div className={`font-black text-sm uppercase tracking-tight ${session.isBreak ? 'text-amber-700' : 'text-[#002d56]'}`}>
                                            {session.subject}
                                        </div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            {session.time}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 bg-slate-50 px-4 py-2 rounded-full w-full md:w-auto justify-center">
                                    <MapPin size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{session.room}</span>
                                </div>
                                
                                {/* Vertical Accent for non-break items */}
                                {!session.isBreak && <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-blue-600 rounded-r-full" />}
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center gap-3 text-slate-400">
                        <Info size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Classes may be subject to change. Please check notice board.</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-12">Looking for More?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                      { label: 'Exams Dates', icon: <BookOpen />, href: '/news' },
                      { label: 'Faculty List', icon: <Users />, href: '/faculty' },
                      { label: 'Contact Office', icon: <Info />, href: '/contact' },
                  ].map((item, i) => (
                      <Link key={i} href={item.href} className="group p-8 rounded-sm border-2 border-slate-50 hover:border-[#ffcc00] transition-all flex flex-col items-center">
                          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#002d56] mb-4 group-hover:bg-[#ffcc00] transition-colors">
                            {item.icon}
                          </div>
                          <span className="text-xs font-black text-[#002d56] uppercase tracking-[0.2em]">{item.label}</span>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
}
