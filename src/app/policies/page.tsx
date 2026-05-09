import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Trophy } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies & Rules',
  description: 'Campus Guidelines, Discipline Rules, Uniform Code, and more for Govt. Graduate College for Women.',
};

export const runtime = 'nodejs';

export default function PoliciesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Header */}
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Policies & Rules</h1>
          <p className="text-lg text-white/80 font-medium">Please review our guidelines to strictly maintain a productive and respectful campus environment.</p>
        </div>
      </section>

      {/* Content from Student Life */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="mb-20 text-center">
             <span className="text-[#ffcc00] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Campus Guidelines</span>
             <h2 className="text-4xl md:text-5xl font-black text-[#002d56] uppercase tracking-tighter mb-4">Policies & Rules</h2>
             <p className="text-slate-500 font-medium max-w-2xl mx-auto">Adhering to our institutional guidelines ensures a safe, productive, and respectful environment for all students.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
             {/* Left Column */}
             <div className="space-y-10">
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#ffcc00]">
                   <h3 className="text-xl font-black text-[#002d56] uppercase mb-4">Discipline Rules</h3>
                   <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                      <li>Must keep current college ID cards on their person at all times.</li>
                      <li>Not allowed: Flashy Jewellery, cosmetics, Knives/Scissors, Mobile phone/Electronic devices.</li>
                      <li>Any application of makeup, henna, nail polish is strictly prohibited.</li>
                      <li>Prohibited from immoral talks/disputes based on personal/political/social issues.</li>
                      <li>Eatables are not allowed in classrooms or corridors.</li>
                      <li>Birthday or other private parties are not allowed on campus.</li>
                      <li>No visitors allowed to meet students. Bringing children/relatives/friends is prohibited.</li>
                   </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#17a2b8]">
                   <h3 className="text-xl font-black text-[#002d56] uppercase mb-4">Uniform Code</h3>
                   <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                      <li>White Shalwar, loose white Qamees (fitted shirts not allowed).</li>
                      <li>White dupatta with zero-size ribbon on four sides and two stripes on pocket/borders.</li>
                      <li>Trousers are not allowed. Shirt length in proportion to height.</li>
                      <li>Black shoes and black socks are compulsory. Informal/sports shoes not allowed.</li>
                      <li>Wrist watches must be plain with black straps.</li>
                      <li>Winter: Plain black sweaters (blazers/jackets/fancy sweaters not allowed).</li>
                      <li>Summer/Winter: Plain white scarves may be worn. Colored scarves are not allowed.</li>
                      <li>Hair should be properly braided or tied up.</li>
                   </ul>
                </div>
             </div>

             {/* Middle Column */}
             <div className="space-y-10">
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#002d56]">
                   <h3 className="text-xl font-black text-[#002d56] uppercase mb-4">Leave Rules</h3>
                   <ul className="space-y-3 text-sm text-slate-600 list-decimal list-inside">
                      <li>Participation in all curricular activities is compulsory.</li>
                      <li>Leaves must be pre-sanctioned with a proper application (name, roll no, address).</li>
                      <li>Medical leaves &gt; 1 week require a certificate from Govt. Hospital (DHQ, Benazir, Holy Family).</li>
                      <li>Absence of 15 days without application leads to expulsion.</li>
                      <li>Absence fine: Rs. 5 per lecture/practical.</li>
                      <li>Bunking classes while present in college invokes a Rs. 200 fine minimum. Repeated bunking leads to expulsion.</li>
                   </ul>
                </div>

                <div className="bg-[#002d56] p-8 rounded-xl shadow-sm text-white relative overflow-hidden">
                   <h3 className="text-xl font-black text-[#ffcc00] uppercase mb-4 tracking-tighter">Evaluation / Exams</h3>
                   <ul className="space-y-3 text-sm text-white/90 list-disc list-inside relative z-10">
                      <li>75% attendance is compulsory (Board/PU rules) for admission retention.</li>
                      <li>Absence from College Exam considered a fail.</li>
                      <li>Obtaining Grade F in college exams disqualifies students from Annual Board/Uni exams.</li>
                      <li>Monthly test attendance is compulsory. Missing two consecutive tests invokes a Rs. 200 fine/test.</li>
                      <li>Unfair means during exams will lead to punishment and expulsion.</li>
                   </ul>
                </div>
             </div>

             {/* Right Column */}
             <div className="space-y-10">
                <div className="bg-slate-50 p-8 rounded-xl border border-dashed border-slate-300">
                   <h3 className="text-xl font-black text-[#002d56] uppercase mb-4 tracking-tighter">Library & Dispensary</h3>
                   <p className="text-sm text-slate-600 mb-4">Over 9000 books available.</p>
                   <ul className="space-y-3 text-xs text-slate-600 list-disc list-inside mb-4">
                      <li>Membership requires regular student status and College ID.</li>
                      <li>Intermediate: 1 book, ADP: 2 books for 14 days. Rs. 1/day fine for late returns.</li>
                   </ul>
                   <div className="text-xs bg-white p-3 rounded shadow-sm border border-slate-100 font-medium text-slate-600 mb-6">
                       Issuance: Mon (1st Yr), Tue (2nd Yr), Wed (3rd Yr), Thu (4th Yr)
                   </div>
                   <h4 className="font-bold text-[#002d56] mb-2 uppercase text-xs">Dispensary</h4>
                   <p className="text-xs text-slate-500">Provides initial first aid to students on campus, managed by an in-charge staff member.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#17a2b8]">
                   <h3 className="text-xl font-black text-[#002d56] uppercase mb-4 tracking-tighter">College Bus</h3>
                   <p className="text-sm text-slate-600">The college is proud of having its own conveyance which runs on specific routes, tailored to student destinations.</p>
                </div>
             </div>
         </div>

         {/* Student Council & Activities */}
         <div className="mt-20 border-t border-slate-100 pt-20">
           <div className="flex justify-center items-center gap-4 mb-10">
             <Trophy className="text-[#17a2b8]" size={36} />
             <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter">Student Council & Activities</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
             <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-[#002d56] p-6 text-white text-center">
                   <h3 className="text-xl font-black uppercase tracking-widest text-[#ffcc00]">College Student Council</h3>
                   <p className="text-sm text-white/80 mt-2">Established in 1987.</p>
                   <p className="text-xs text-white/60 mt-1 uppercase">President, VP, Gen Secretary, Joint Secretary</p>
                </div>
                <div className="p-6 text-sm text-slate-600">
                   <h4 className="font-bold text-[#002d56] mb-3 uppercase tracking-tighter">Eligibility Criteria:</h4>
                   <ul className="space-y-2 list-disc list-inside">
                      <li>Excellent educational record (no failures).</li>
                      <li>Good conduct, leadership qualities, and a strong personality.</li>
                      <li>Willingness to perform duties with honesty and devotion.</li>
                      <li>Capable of resolving problems of college fellows.</li>
                      <li>Active participation in co-curriculars and motivating others.</li>
                   </ul>
                </div>
             </div>

             <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between">
                <div className="bg-[#17a2b8] p-6 text-white text-center">
                   <h3 className="text-xl font-black uppercase tracking-widest">Extra & Co-Curriculars</h3>
                   <p className="text-sm text-white/90 mt-2">Nourishing mind and personality</p>
                </div>
                <div className="p-6 text-sm text-slate-600 flex flex-col justify-between h-full">
                   <div>
                     <h4 className="font-bold text-[#002d56] mb-3 uppercase tracking-tighter">Active Societies:</h4>
                     <ul className="space-y-2 list-disc list-inside mb-6">
                        <li>Ideology of Pakistan Society</li>
                        <li>English Society</li>
                        <li>Urdu Society</li>
                        <li>Islamiyat Society</li>
                     </ul>
                   </div>
                   <div className="bg-slate-50 p-4 border border-slate-100 rounded-lg">
                      <p className="text-xs font-medium text-slate-500">
                        The college holds games and sports competitions at various levels to develop enthusiasm and positive thinking.
                      </p>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
