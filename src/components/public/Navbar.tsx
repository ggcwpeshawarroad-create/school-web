'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Academics',
    href: '/academics',
    dropdown: [
      { name: 'Departments', href: '/academics/departments' },
      { name: 'Degrees', href: '/academics/degrees' },
      { name: 'Degree Programs', href: '/academics/programs' },
      { name: 'Student Life', href: '/student-life' },
    ]
  },
  {
    name: 'Admissions',
    href: '/admissions',
    dropdown: [
      { name: 'Fee Structure', href: '/admissions/fee' },
      { name: 'Admission Criteria', href: '/admissions/criteria' },
      { name: 'Admission Process', href: '/admissions/process' },
    ]
  },
  { name: 'News & Events', href: '/news' },
  { name: 'Downloads', href: '/downloads' },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'About Us', href: '/about' },
      { name: 'Faculty', href: '/faculty' },
      { name: 'Enrollment', href: '/admissions/enrollment' },
      { name: 'Contact Us', href: '/contact' },
    ]
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-sans ${scrolled ? 'bg-[#002d56] py-3 shadow-xl' : 'bg-[#002d56]/90 backdrop-blur-md py-4'}`}>
        {/* Top Bar */}
        <div className={`hidden lg:block border-b border-white/10 pb-3 mb-3 transition-all ${scrolled ? 'h-0 opacity-0 overflow-hidden mb-0' : 'h-auto opacity-100'}`}>
          <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-[12px] font-medium text-white/80 tracking-wide">
            <div className="flex gap-8">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-[#ffcc00]" /> Peshawar Road, Rawalpindi </span>
              <span className="flex items-center gap-2"><Phone size={14} className="text-[#ffcc00]" /> 051-9334301</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-[#ffcc00]" /> gcw.peshawar.r.pindi@gmail.com</span>
            </div>
            <div className="flex gap-6">
              <Link href="/admin/login" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors">Admin Portal</Link>
              <Link href="#" className="hover:text-[#ffcc00] transition-colors">LMS</Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1 shadow-lg group-hover:scale-105 transition-transform">
              <img src="/Logo_.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-bold text-lg leading-tight tracking-tight uppercase">GGC FOR WOMEN</span>
              <span className="text-[10px] font-semibold tracking-wide text-[#ffcc00] mt-0.5 uppercase">PESHAWAR ROAD, RAWALPINDI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-white text-[14px] font-semibold tracking-wide flex items-center gap-1.5 hover:text-[#ffcc00] transition-all py-2"
                >
                  {link.name} {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-md shadow-2xl overflow-hidden border-t-4 border-[#ffcc00]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-4 text-[#002d56] text-[13px] font-medium hover:bg-slate-50 hover:text-[#ffcc00] transition-all border-b border-slate-50 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="https://ocas.punjab.gov.pk/" target="_blank" rel="noopener noreferrer" className="bg-[#ffcc00] text-[#002d56] px-6 py-2.5 rounded-md font-bold text-sm hover:bg-white transition-all shadow-lg">
              Apply Online
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div
        style={{ zIndex: 9999 }}
        className={`fixed inset-0 bg-[#002d56] flex flex-col xl:hidden transition-transform duration-200 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center p-1">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-white font-bold text-sm tracking-tight uppercase">GGC FOR WOMEN, RWP</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/5 last:border-0">
                <div className="flex justify-between items-center py-5">
                  <Link
                    href={link.href}
                    className="text-white text-xl font-black uppercase tracking-tighter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={`p-2 text-white/40 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 !text-[#ffcc00]' : ''}`}
                    >
                      <ChevronDown size={22} />
                    </button>
                  )}
                </div>

                {link.dropdown && activeDropdown === link.name && (
                  <div className="flex flex-col gap-4 pb-5 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white/60 text-base font-semibold uppercase tracking-wider hover:text-[#ffcc00]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://ocas.punjab.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ffcc00] text-[#002d56] py-5 rounded-sm font-black text-center text-lg uppercase tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Online
            </a>
          </div>
        </div>
      </div>
    </>
  );
}