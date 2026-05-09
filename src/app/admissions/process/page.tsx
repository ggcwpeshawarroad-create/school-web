import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Process',
  description: 'A step-by-step guide on how to apply for admission at Govt. Graduate College. From obtaining forms to fee deposit and enrollment.',
};

export const runtime = 'nodejs';

const steps = [
  {
    number: '01',
    title: 'Obtain Admission Form',
    icon: '📋',
    description: 'Collect the admission form from the college admissions office during the open admission period, or download it from the college website.',
    tip: 'Admission forms are available from June–August for Intermediate and October–November for BS programs.',
    color: 'bg-blue-50 border-blue-200',
    accent: 'bg-blue-600',
  },
  {
    number: '02',
    title: 'Fill the Form',
    icon: '✍️',
    description: 'Complete the admission form with accurate personal details, academic history, and your preferred program of study.',
    tip: 'Double-check all information before submitting — errors may delay your application.',
    color: 'bg-indigo-50 border-indigo-200',
    accent: 'bg-indigo-600',
  },
  {
    number: '03',
    title: 'Attach Documents',
    icon: '📎',
    description: 'Attach attested copies of all required documents — Matric/Inter certificates, CNIC/B-Form, domicile, character certificate, and photographs.',
    tip: 'Keep original documents ready for verification at the admissions office.',
    color: 'bg-amber-50 border-amber-200',
    accent: 'bg-amber-500',
  },
  {
    number: '04',
    title: 'Submit Your Application',
    icon: '📬',
    description: 'Submit the completed form along with all documents at the admissions office before the closing date.',
    tip: 'Submission deadlines are strict — late submissions are generally not accepted.',
    color: 'bg-emerald-50 border-emerald-200',
    accent: 'bg-emerald-600',
  },
  {
    number: '05',
    title: 'Merit List',
    icon: '📊',
    description: 'Merit lists are published on the college notice board and website. Selection is purely based on academic merit.',
    tip: 'Check the merit list regularly and contact the office if you have concerns.',
    color: 'bg-purple-50 border-purple-200',
    accent: 'bg-purple-600',
  },
  {
    number: '06',
    title: 'Pay Your Fee',
    icon: '🏦',
    description: 'If selected, deposit the admission and tuition fee at the designated bank or online portal within the specified time.',
    tip: 'Failure to pay within the deadline will result in forfeiture of your seat.',
    color: 'bg-rose-50 border-rose-200',
    accent: 'bg-rose-600',
  },
  {
    number: '07',
    title: 'Enrollment & ID Card',
    icon: '🎓',
    description: 'After fee payment, complete your enrollment at the Student Affairs office and collect your official college ID card.',
    tip: 'Congratulations — you are now an official student of GGC Rawalpindi!',
    color: 'bg-teal-50 border-teal-200',
    accent: 'bg-teal-600',
  },
];

const highlights = [
  { icon: '📅', label: 'Admissions Open', value: 'June – August' },
  { icon: '📢', label: 'Merit List', value: 'Within 2 Weeks' },
  { icon: '⏱️', label: 'Fee Deadline', value: '7 Days After Merit' },
  { icon: '🏛️', label: 'Programs', value: '13+ Programs' },
];

export default function AdmissionProcessPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-44 pb-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffcc00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.4em] mb-5">Admissions</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Admission<br />Process
          </h1>
          <p className="text-white/60 text-base font-medium max-w-lg mx-auto">
            A simple, step-by-step guide to joining Govt. Graduate College, Peshawar Road, Rawalpindi .
          </p>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto mt-8" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="bg-[#ffcc00]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center">
              <span className="text-2xl mb-1">{h.icon}</span>
              <div className="text-[#002d56] font-black text-sm">{h.value}</div>
              <div className="text-[#002d56]/60 text-[10px] font-bold uppercase tracking-widest">{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <section className="py-24 px-6 max-w-[900px] mx-auto">
        <div className="mb-14 text-center">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Step by Step</p>
          <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter">How to Apply</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 items-start">
                {/* Number bubble */}
                <div className={`relative z-10 w-16 h-16 ${step.accent} rounded-sm flex flex-col items-center justify-center text-white font-black text-xs shadow-xl flex-shrink-0`}>
                  <span className="text-[10px] opacity-70">STEP</span>
                  <span className="text-lg leading-none">{step.number}</span>
                </div>

                {/* Card */}
                <div className={`flex-1 rounded-sm border-2 p-6 shadow-lg ${step.color} hover:-translate-y-0.5 transition-transform duration-200`}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className="text-[#002d56] font-black text-lg uppercase tracking-tighter mt-1">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-start gap-2 bg-white/70 rounded-sm px-4 py-3 border border-white/50">
                    <span className="text-[#ffcc00] font-black text-[10px] uppercase tracking-widest flex-shrink-0 mt-0.5">💡 TIP</span>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-6 max-w-[900px] mx-auto">
        <div className="bg-[#002d56] rounded-sm p-8 flex gap-5 items-start shadow-2xl">
          <div className="text-4xl flex-shrink-0">📣</div>
          <div>
            <h3 className="text-[#ffcc00] font-black text-lg uppercase tracking-tighter mb-2">Important Dates Notice</h3>
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Admission dates are officially announced by the <strong className="text-white">Punjab Higher Education Department</strong>. Please check the college notice board regularly or contact the admissions office for each session's exact schedule.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002d56] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Start Your Application</h2>
          <p className="text-white/60 font-medium mb-10">Apply now or learn more about our programs and admission criteria.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="inline-block bg-[#ffcc00] text-[#002d56] px-10 py-5 font-black text-base uppercase tracking-tighter hover:bg-white transition-colors shadow-2xl">
              Apply Now
            </Link>
            <Link href="/admissions/criteria" className="inline-block border-2 border-white/20 text-white px-10 py-5 font-black text-base uppercase tracking-tighter hover:border-[#ffcc00] hover:text-[#ffcc00] transition-colors">
              View Criteria
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
