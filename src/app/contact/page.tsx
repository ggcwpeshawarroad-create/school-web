import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import ContactForm from '@/components/public/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Govt. Graduate College. Find our address, phone number, email, and office hours. Use our contact form to request information.',
};

export const runtime = 'nodejs';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Contact Us</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#002d56]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#002d56]" />
                </div>
                <div>
                  <h3 className="font-black text-[#002d56] uppercase text-sm tracking-widest mb-1">Address</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Peshawar Road, Rawalpindi <br />Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#002d56]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#002d56]" />
                </div>
                <div>
                  <h3 className="font-black text-[#002d56] uppercase text-sm tracking-widest mb-1">Phone</h3>
                  <p className="text-slate-500 font-medium">051-9334301</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#002d56]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#002d56]" />
                </div>
                <div>
                  <h3 className="font-black text-[#002d56] uppercase text-sm tracking-widest mb-1">Email</h3>
                  <p className="text-slate-500 font-medium">gcw.peshawar.r.pindi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#002d56]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-[#002d56]" />
                </div>
                <div>
                  <h3 className="font-black text-[#002d56] uppercase text-sm tracking-widest mb-1">Office Hours</h3>
                  <p className="text-slate-500 font-medium">Monday – Friday: 8:00 AM – 3:00 PM<br />Saturday: 8:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
