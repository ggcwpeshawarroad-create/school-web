'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import {
  Users, BookOpen, ScrollText, GraduationCap,
  ChevronRight, Calendar, ArrowUpRight, Play, CheckCircle2, X, ChevronLeft, Globe
} from 'lucide-react';

export default function HomePage({ data }: { data: any }) {
  const { features, teachers, notices, popups, departments, admissions, settings, gallery } = data;
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: '/student-life/WhatsApp Image 2026-05-09 at 6.05.29 PM.jpeg', alt: 'Campus Life 1' },
    { src: '/student-life/WhatsApp Image 2026-05-09 at 6.05.30 PM (1).jpeg', alt: 'Campus Life 2' },
    { src: '/student-life/WhatsApp Image 2026-05-09 at 6.05.30 PM (2).jpeg', alt: 'Campus Life 3' },
    { src: '/student-life/WhatsApp Image 2026-05-09 at 6.05.30 PM (3).jpeg', alt: 'Campus Life 4' },
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (popups && popups.length > 0) {
      const timer = setTimeout(() => setShowPopup(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [popups]);

  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center text-center overflow-hidden">
        {/* Slider Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#002d56]/40" />
          </div>
        ))}

        <div className="relative z-10 max-w-5xl px-6 text-white">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
            Building Confidence <br /> Through Support
          </h1>
          <div className="flex justify-center gap-6 mt-12">
            <Link href="/visit" className="bg-[#ffcc00] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
              VISIT US
            </Link>
            <a href="https://ocas.punjab.gov.pk/" target="_blank" rel="noopener noreferrer" className="bg-[#ffcc00] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
              APPLY ONLINE
            </a>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={goToPrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          <ChevronRight size={32} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'bg-[#ffcc00] scale-125'
                : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </section>

      {/* 2. EXPLORE SECTION */}
      <section className="py-24 bg-[#002d56] text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 uppercase tracking-wider">Explore Our College</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'BS Programs', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600', desc: 'Bachelor of Science degree programs across multiple disciplines' },
              { title: 'Pre Medical', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600', desc: 'Preparing students for medical and health science careers' },
              { title: 'Pre Engineering', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600', desc: 'Foundation courses for engineering and technology fields' },
              { title: 'ICS', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600', desc: 'Intermediate in Computer Science for the digital future' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 text-left">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-white/70 text-xs font-medium leading-relaxed">{item.desc}</p>
                  <div className="w-12 h-1 bg-[#ffcc00] mt-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BY THE NUMBERS */}
      <section className="bg-[#4a7729] py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase">
                We Build Character Through <br /> Service to Others
              </h2>
              <Link href="/service" className="inline-block bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest mb-16 hover:bg-white transition-all">
                LEARN MORE
              </Link>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-12 px-4">
                <div className="bg-white/10 p-6 rounded-sm border border-white/5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:border-0 sm:backdrop-blur-none">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 tracking-tighter">{settings?.totalStudents || '1200'}+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">Active Students <br /> Enrolled Currently</div>
                </div>
                <div className="bg-white/10 p-6 rounded-sm border border-white/5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:border-0 sm:backdrop-blur-none">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 tracking-tighter">{settings?.totalTeachers || '65'}+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">Qualified Faculty <br /> Members</div>
                </div>
                <div className="bg-white/10 p-6 rounded-sm border border-white/5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:border-0 sm:backdrop-blur-none">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 tracking-tighter">{settings?.passRate || '98'}%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">Success Rate <br /> in Board Exams</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ethics.webp"
                className="w-full h-[300px] sm:h-[500px] object-cover rounded-sm shadow-2xl"
                alt="Ethics and Character Building"
              />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 sm:w-40 sm:h-40 border-[10px] border-white/20" />
            </div>
          </div>
        </div>
      </section>


      {/* 5. OPPORTUNITIES SECTION */}
      <section className="relative py-24 sm:py-40 overflow-hidden bg-[#002d56]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-60" alt="Graduation" />
          <div className="absolute inset-0 bg-[#002d56]/60" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="text-[#ffcc00] font-black text-sm uppercase tracking-widest block mb-6">Success</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">We Provide <br /> Opportunities <br /> to Succeed</h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-xl">
              At Govt. Graduate College, students excel in academics and co-curricular activities while developing the skills to succeed in higher education and beyond.
            </p>
            <Link href="/success" className="bg-[#ffcc00] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
              LEARN MORE
            </Link>
          </div>
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 border-8 border-[#ffcc00] translate-x-6 translate-y-6" />
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQEEx9Ssia0snA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1686754243438?e=2147483647&v=beta&t=FvbLWwWGYxE-8hCueVlb6Q0vkacYENiIi8UmySgv27U"
              className="relative z-10 w-full h-full object-cover rounded-sm shadow-2xl"
              alt="Successful Graduates"
            />
          </div>
        </div>
      </section>

      {/* 6. GRADUATES SECTION */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002d56] mb-4 uppercase tracking-tighter">Our Graduates Are Following Their Dreams</h2>
          <div className="text-[#17a2b8] font-bold uppercase tracking-widest mb-16 text-xs sm:text-sm">Full Admission Profile 2023</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {[
              { 
                name: 'Sana Ahmed', 
                img: 'https://t3.ftcdn.net/jpg/04/98/91/96/360_F_498919631_Me4XD0pVj0tX109wnyH7FIo6FHTb5J0E.jpg', 
                role: 'Senior Software Engineer', 
                quote: 'The CS department at GGC gave me the foundation to compete globally. Today, I am leading engineering teams in a top tech firm.' 
              },
              { 
                name: 'Dr. Maria Khan', 
                img: 'https://i.pinimg.com/736x/02/48/d1/0248d190d33adf33287bf35c137b3ecf.jpg', 
                role: 'Medical Resident at PIMS', 
                quote: 'My years at GGC were transformative. The support of my teachers helped me clear my medical entrance exams with distinction.' 
              },
              { 
                name: 'Ayesha Malik', 
                img: 'https://t4.ftcdn.net/jpg/02/37/57/11/360_F_237571142_VA5kg8IaT9F7kaCXZ5K9vaQLbcYYioX4.jpg', 
                role: 'Lecturer & Ph.D. Scholar', 
                quote: 'The academic rigor at GGC prepared me for the challenges of higher research. I am proud to give back to the education system.' 
              },
            ].map((graduate, i) => (
              <div key={i} className="flex flex-col items-center gap-6 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ffcc00] rounded-full translate-x-1 translate-y-1 z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#002d56] relative z-10">
                    <img src={graduate.img} alt={graduate.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[#002d56] font-black text-xl uppercase tracking-tighter">{graduate.name}</h3>
                  <div className="text-[#17a2b8] font-bold text-[10px] uppercase tracking-widest mb-4">{graduate.role}</div>
                  <p className="text-slate-500 text-sm italic font-medium max-w-xs leading-relaxed mx-auto">
                    "{graduate.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 CAMPUS GALLERY SECTION */}
      {gallery && gallery.length > 0 && (
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <span className="text-[#17a2b8] font-bold text-xs uppercase tracking-[0.4em] block mb-6">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-20 uppercase tracking-tight">Life at GGC</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gallery.map((item: any) => (
                <div key={item._id} className="group relative h-80 overflow-hidden rounded-sm cursor-pointer border border-slate-100">
                  <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 text-left transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm font-black uppercase tracking-tight mb-2">{item.caption}</p>
                    <div className="w-8 h-1 bg-[#ffcc00]" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <Link href="/gallery" className="text-[#002d56] font-black text-xs uppercase tracking-widest border-b-2 border-[#ffcc00] pb-1 hover:text-[#ffcc00] transition-colors">
                VIEW MORE GALLERY
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. NEWS SECTION */}
      <section className="py-32 bg-[#002d56] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em] block mb-6">Social Feed</span>
          <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tight">What's Happening at GGC</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {notices.slice(0, 4).map((notice: any, i: number) => (
              <div key={notice._id} className="bg-white text-[#002d56] text-left rounded-sm overflow-hidden flex flex-col group cursor-pointer">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  <img src={notice.image || '/Logo_.png'} className="w-full h-full object-contain p-4 bg-slate-50 group-hover:scale-105 transition-transform duration-500" alt="News" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-[#17a2b8] font-bold text-[10px] uppercase tracking-widest mb-4">College News</span>
                  <h4 className="font-black text-lg mb-4 line-clamp-2 leading-snug uppercase tracking-tighter">{notice.title}</h4>
                  <p className="text-slate-500 text-[11px] font-medium mb-8 flex-grow line-clamp-3 leading-relaxed">
                    {notice.content}
                  </p>
                  <Link href={`/news/${notice._id}`} className="text-[#002d56] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all border-b border-[#002d56] pb-1 w-fit">
                    READ STORY
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/news" className="inline-block mt-20 bg-[#ffcc00] text-[#002d56] px-12 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
            VIEW ALL NEWS
          </Link>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-32 bg-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-8 uppercase tracking-tighter leading-none">Want to be a Part of GGC Family?</h2>
          <p className="text-xl text-slate-500 font-medium mb-12">
            The best way to start finding your place at Govt. Graduate College is to connect with us in person and see our vibrant campus community first-hand.
          </p>
          <Link href="/visit" className="bg-[#ffcc00] text-[#002d56] px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-[#002d56] hover:text-white transition-all shadow-xl">
            PLAN YOUR CAMPUS VISIT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
