import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { 
  Home, Info, BookOpen, GraduationCap, 
  Newspaper, Download, Mail, ChevronRight 
} from 'lucide-react';

export const runtime = 'nodejs';

const sitemapData = [
  {
    category: 'GGC OVERVIEW',
    icon: <Home className="w-5 h-5" />,
    links: [
      { name: 'Home Page', href: '/' },
      { name: 'About the College', href: '/about' },
      { name: 'Contact Information', href: '/contact' },
      { name: 'Faculty Directory', href: '/faculty' },
      { name: 'Student Life', href: '/student-life' },
    ]
  },
  {
    category: 'ACADEMICS',
    icon: <BookOpen className="w-5 h-5" />,
    links: [
      { name: 'Academic Departments', href: '/academics/departments' },
      { name: 'Degree Offerings', href: '/academics/degrees' },
      { name: 'Programs of Study', href: '/academics/programs' },
      { name: 'Academic Results', href: '/academics/results' },
      { name: 'Class Timetable', href: '/academics/timetable' },
    ]
  },
  {
    category: 'ADMISSIONS',
    icon: <GraduationCap className="w-5 h-5" />,
    links: [
      { name: 'Admissions Landing', href: '/admissions' },
      { name: 'Admission Criteria', href: '/admissions/criteria' },
      { name: 'Admission Process', href: '/admissions/process' },
      { name: 'Fee Structure', href: '/admissions/fee' },
      { name: 'Enrollment Statistics', href: '/admissions/enrollment' },
    ]
  },
  {
    category: 'RESOURCES & NEWS',
    icon: <Newspaper className="w-5 h-5" />,
    links: [
      { name: 'Latest News & Events', href: '/news' },
      { name: 'Official Downloads', href: '/downloads' },
      { name: 'Admin Portal', href: '/admin/login' },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="bg-[#fcfdfe] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-48 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] block mb-6">Directory</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">Sitemap</h1>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
            A comprehensive guide to everything on our platform. Find exactly what you're looking for with ease.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sitemapData.map((section, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-slate-100 group-hover:border-[#ffcc00] transition-colors">
                <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center text-[#002d56] group-hover:bg-[#ffcc00] transition-colors">
                   {section.icon}
                </div>
                <h2 className="text-sm font-black text-[#002d56] uppercase tracking-widest">{section.category}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href} 
                      className="text-slate-500 hover:text-[#002d56] font-semibold text-[13px] flex items-center gap-2 group/item transition-all"
                    >
                      <ChevronRight size={14} className="text-slate-300 group-hover/item:text-[#ffcc00] group-hover/item:translate-x-1 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
         <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-12 h-12 text-[#ffcc00] mx-auto mb-8" />
            <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter mb-4">Can't find what you need?</h2>
            <p className="text-slate-500 font-medium mb-10">Our help desk is always available to assist you with any questions or technical difficulties.</p>
            <Link href="/contact" className="bg-[#002d56] text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-xl">
               Contact Support
            </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
}
