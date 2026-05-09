import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  ShieldCheck, 
  Users, 
  TrendingUp,
  MapPin,
  Clock,
  IdCard,
  CreditCard,
  Smartphone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admission Criteria',
  description: 'Find out if you are eligible to join GGC. Detailed qualification and merit criteria for all undergraduate and intermediate programs.',
};

export const runtime = 'nodejs';

export default function AdmissionCriteriaPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-44 pb-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffcc00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.4em] mb-5">Admissions</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Admission<br />Criteria
          </h1>
          <p className="text-white/60 text-base font-medium max-w-lg mx-auto leading-relaxed">
            Everything you need to know about eligibility, required documents, and the institutional rules for the upcoming session.
          </p>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto mt-8" />
        </div>
      </section>

      {/* Admission Rules & Process */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-[#ffcc00]" size={20} />
                <span className="text-[#002d56] font-black text-[11px] uppercase tracking-[0.3em]">Institutional Guidelines</span>
              </div>
              <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-8 leading-tight">Admission Rules</h2>
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>The last dates for admission in Undergraduate Programs (F.A / F.Sc / ICS) and Associate Degree programs will be announced in local newspapers and displayed on the college gate.</p>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <Clock className="text-[#ffcc00] shrink-0" size={24} />
                  <p className="text-sm">Admission forms and prospectus are available at the college gate from <span className="font-bold text-[#002d56]">9:00 AM to 1:00 PM</span> after payment of the prescribed fee.</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Applicants must submit filled forms at the gate till the announced last date.",
                    "Incomplete forms or those with missing information will not be accepted.",
                    "The Merit List will be displayed on the College Notice Board.",
                    "Selected students must submit their fee after original document confirmation.",
                    "Failure to submit fee by the deadline leads to immediate seat forfeiture."
                  ].map((rule, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-[#ffcc00] shrink-0 mt-1" size={16} />
                      <span className="text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#002d56] p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden">
               <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 opacity-5 text-white" />
               <h3 className="text-2xl font-black mb-8 uppercase tracking-tight text-[#ffcc00]">Required Documents</h3>
               <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">Checklist for Submission:</p>
               <ul className="space-y-5 text-sm font-medium">
                 {[
                   { label: "Matriculation / F.A / F.Sc Certificate", copies: "x2 Attested" },
                   { label: "Character Certificate", copies: "x2 Attested" },
                   { label: "Father/Guardian's CNIC", copies: "x2 Attested" },
                   { label: "Applicant CNIC / B-Form", copies: "x2 Attested" },
                   { label: "Passport-sized photographs", copies: "Blue Background" },
                   { label: "Valid Contact Number", copies: "Father/Guardian (x4)" },
                 ].map((doc, idx) => (
                   <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                     <span className="text-white/80">{idx + 1}. {doc.label}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#ffcc00] bg-white/5 px-2 py-1 rounded">{doc.copies}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
               <div className="flex items-center gap-3 mb-6">
                 <MapPin className="text-[#17a2b8]" size={20} />
                 <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tight">Migration & Other Boards</h3>
               </div>
               <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-50 pb-4">Applicants from outside Rawalpindi Board:</p>
               <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-slate-200 rounded-full" />
                    <h5 className="font-black text-[#002d56] text-sm uppercase mb-2">A. NOC / Migration</h5>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Original migration certificate from the concerned Board must be submitted along with 2 photocopies.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-slate-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-slate-200 rounded-full" />
                    <h5 className="font-black text-[#002d56] text-sm uppercase mb-2">B. Certificate Verification</h5>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Original verification of Matric certificate photocopy from the concerned Board is mandatory.</p>
                  </div>
               </div>
            </div>

            <div className="bg-emerald-50 p-10 rounded-2xl border-t-8 border-emerald-600 shadow-lg">
               <div className="flex items-center gap-3 mb-8">
                 <AlertCircle className="text-emerald-700" size={24} />
                 <h3 className="text-xl font-black text-emerald-900 uppercase tracking-tight">Crucial Notes</h3>
               </div>
               <ul className="space-y-6 text-sm">
                 <li className="flex items-start gap-4">
                   <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={18} />
                   <p className="text-emerald-900 font-medium leading-relaxed">Admission form cannot be submitted without <span className="font-black">NADRA CNIC or B-Form</span>. No relaxation allowed.</p>
                 </li>
                 <li className="flex items-start gap-4">
                   <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={18} />
                   <p className="text-emerald-900 font-medium leading-relaxed">O Levels applicants must submit an <span className="font-black">Equivalence Certificate</span> issued by IBCC Islamabad.</p>
                 </li>
                 <li className="flex items-start gap-4">
                   <Smartphone className="text-emerald-600 shrink-0 mt-1" size={18} />
                   <p className="text-emerald-900 font-medium leading-relaxed italic uppercase text-xs">Applicants must arrange access to a <span className="font-bold underline">mobile phone/tablet and internet</span> for potentially conducting hybrid classes.</p>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Further Rules & Guidelines */}
      <section className="py-24 px-6 bg-[#002d56] text-white overflow-hidden relative">
        <TrendingUp className="absolute -top-20 -left-20 w-96 h-96 opacity-5 rotate-12" />
        <div className="max-w-[1200px] mx-auto relative z-10">
           <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center">Institutional Policies</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                 <TrendingUp className="text-[#ffcc00] mb-6 group-hover:scale-110 transition-transform" size={32} />
                 <h4 className="text-[#ffcc00] font-black uppercase tracking-widest text-xs mb-4">01. Academic Pre-requisites</h4>
                 <p className="text-sm font-medium text-white/70 leading-relaxed uppercase">Mathematics optional is compulsory for Pre-Engineering/ICS. Biology is compulsory for Pre-Medical.</p>
              </div>
              <div className="p-8 bg-white/10 border border-white/10 rounded-2xl relative shadow-xl">
                 <AlertCircle className="text-rose-400 mb-6" size={32} />
                 <h4 className="text-rose-400 font-black uppercase tracking-widest text-xs mb-4">02. No Group Changes</h4>
                 <p className="text-sm font-black leading-relaxed uppercase text-white">No student is allowed to change her section or group (Science / Arts) once admitted under any circumstances.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                 <IdCard className="text-[#ffcc00] mb-6 group-hover:scale-110 transition-transform" size={32} />
                 <h4 className="text-[#ffcc00] font-black uppercase tracking-widest text-xs mb-4">03. Student ID Cards</h4>
                 <p className="text-sm font-medium text-white/70 leading-relaxed">Mandatory for library, scholarships, and exam entry. Must be carried at all times. Replacements cost Rs. 50/-.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                 <Users className="text-[#ffcc00] mb-6 group-hover:scale-110 transition-transform" size={32} />
                 <h4 className="text-[#ffcc00] font-black uppercase tracking-widest text-xs mb-4">04. Migration & Selection</h4>
                 <p className="text-sm font-medium text-white/70 leading-relaxed uppercase">Subjects must be selected from prescribed groups. Failing science students must submit a separate Arts form.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                 <CreditCard className="text-[#ffcc00] mb-6 group-hover:scale-110 transition-transform" size={32} />
                 <h4 className="text-[#ffcc00] font-black uppercase tracking-widest text-xs mb-4">05. Compulsory Options</h4>
                 <p className="text-sm font-medium text-white/70 leading-relaxed uppercase">Non-Muslim students opting for Ethics instead of Islamiyat must indicate this clearly during form submission.</p>
              </div>
              <div className="p-8 bg-[#ffcc00] text-[#002d56] rounded-2xl shadow-2xl scale-105 border-4 border-white/20">
                 <Users className="text-[#002d56] mb-6" size={32} />
                 <h4 className="font-black uppercase tracking-widest text-xs mb-4">06. Presence at Admission</h4>
                 <p className="text-sm font-black leading-relaxed uppercase">Mothers must accompany daughters at admission. <span className="underline">Male guardians are strictly prohibited in Admin premises.</span></p>
              </div>
           </div>
        </div>
      </section>

      {/* Final Assistance / Principal Note */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex flex-col items-center mb-10">
             <AlertCircle size={48} className="text-blue-600 mb-6" />
             <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-4">Admission Protocol</h2>
             <div className="w-16 h-1 bg-[#ffcc00] rounded-full" />
          </div>
          <p className="text-slate-600 font-bold text-lg mb-12 leading-relaxed max-w-2xl mx-auto uppercase tracking-tighter">
            Only the applicant should enter the college. Parents and relatives will wait outside. Principal consultation is reserved exclusively for mothers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://ocas.punjab.gov.pk/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#002d56] text-white px-12 py-5 font-black text-xs uppercase tracking-[0.3em] hover:bg-[#ffcc00] hover:text-[#002d56] transition-all rounded-full shadow-2xl">
              Apply Online
            </a>
            <Link href="/contact" className="inline-block border-2 border-slate-200 text-[#002d56] px-12 py-5 font-black text-xs uppercase tracking-[0.3em] hover:border-[#002d56] transition-all rounded-full">
              Contact Office
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
