'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: 'EXPLORE GGC',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Faculty', href: '/faculty' },
        { name: 'News & Events', href: '/news' },
        { name: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'ACADEMICS',
      links: [
        { name: 'Programs', href: '/academics/programs' },
        { name: 'Degrees', href: '/academics/degrees' },
        { name: 'Departments', href: '/academics/departments' },
        { name: 'Downloads', href: '/downloads' },
      ]
    },
    {
      title: 'ADMISSIONS',
      links: [
        { name: 'Apply Online', href: 'https://ocas.punjab.gov.pk/', external: true },
        { name: 'Admission Criteria', href: '/admissions/criteria' },
        { name: 'Admission Process', href: '/admissions/process' },
        { name: 'Fee Structure', href: '/admissions/fee' },
        { name: 'Enrollment', href: '/admissions/enrollment' },
        { name: 'Student Life', href: '/student-life' },
      ]
    },
  ];

  const socialIcons = [
    { name: 'Facebook', path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.05 9.77v-6.91h-2.5v-2.86h2.5v-2.2c0-2.47 1.49-3.83 3.73-3.83 1.08 0 2.2.19 2.2.19v2.41h-1.24c-1.23 0-1.61.76-1.61 1.54v1.86h2.72l-.44 2.87h-2.28v6.91C18.56 20.87 22 16.84 22 12z" },
    { name: 'Twitter', path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
    { name: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
    { name: 'Youtube', path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }
  ];

  return (
    <footer className="bg-[#002d56] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-16 gap-x-8 lg:gap-16 pb-20">
          {/* Logo and Brand - Full width on mobile/sm, then col-span-4 on lg */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3 shadow-2xl group-hover:rotate-12 transition-transform">
                <img src="/Logo_.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tight uppercase">GGC FOR WOMEN</span>
                <span className="text-[11px] font-bold tracking-[0.2em] opacity-60 uppercase mt-1">Peshawar Road, Rawalpindi</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xs font-medium">
              Peshawar Road, Rawalpindi <br />
              Punjab, Pakistan <br />
              051-9334301
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ffcc00] hover:text-[#002d56] hover:border-[#ffcc00] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - Each group takes 1 column on mobile (so 2 groups per row) */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1 lg:col-span-2">
              <h4 className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.2em] mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-[13px] font-medium transition-colors">
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-white/60 hover:text-white text-[13px] font-medium transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-3 flex flex-col items-center lg:items-end gap-5 lg:mt-0 mt-8">
            <h4 className="text-[#ffcc00] font-black text-[10px] uppercase tracking-[0.3em] opacity-80 self-center lg:self-end">Accreditations</h4>
            <div className="flex flex-row gap-3 justify-center flex-wrap lg:justify-end">
              <div className="group w-20 h-16 bg-white rounded-lg flex items-center justify-center border border-white/10 hover:border-[#ffcc00]/60 hover:shadow-[0_0_20px_rgba(255,204,0,0.15)] transition-all duration-300 p-2 shadow-xl">
                <img src="https://www.hec.gov.pk/SiteAssets/higher-education-commission-pakistan-logo.png" alt="HEC" className="w-full h-full object-contain" />
              </div>
              <div className="group w-20 h-16 bg-white rounded-lg flex items-center justify-center border border-white/10 hover:border-[#ffcc00]/60 hover:shadow-[0_0_20px_rgba(255,204,0,0.15)] transition-all duration-300 p-2 shadow-xl">
                <img src="https://upload.wikimedia.org/wikipedia/en/2/20/BISE_Rawalpindi_logo.png" alt="BISE" className="w-full h-full object-contain" />
              </div>
              <div className="group w-20 h-16 bg-white rounded-lg flex items-center justify-center border border-white/10 hover:border-[#ffcc00]/60 hover:shadow-[0_0_20px_rgba(255,204,0,0.15)] transition-all duration-300 p-2 shadow-xl">
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072010/punjab_uni_0.jpeg?itok=qziCt1QK" alt="Punjab University" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Govt. Graduate College for Women, Peshawar Road, Rawalpindi. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[11px] font-bold text-white/40 uppercase tracking-widest">
            <Link href="/policies" className="hover:text-white transition-colors">Policies & Rules</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
