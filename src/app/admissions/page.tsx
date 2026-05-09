import dbConnect from '@/lib/db';
import Admission from '@/lib/models/Admission';
import DynamicPage from '@/lib/models/DynamicPage';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { BookOpen, FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Join the GGC family. Find information about current open admissions, application processes, and enrollment for Fall 2024.',
};

export const runtime = 'nodejs';
export const revalidate = 0;

async function getAdmissions() {
  await dbConnect();
  const admissions = await Admission.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(admissions));
}

export default async function AdmissionsPage() {
  const admissions = await getAdmissions();

  await dbConnect();
  const rawPage = await DynamicPage.findOne({ slug: 'admissions' }).lean();
  const pageData = rawPage ? JSON.parse(JSON.stringify(rawPage)) : null;

  const pageTitle = pageData?.title || 'Admissions';
  const pageDesc = pageData?.description || 'Join the GGC Family';
  const pageImg = pageData?.image || '/Logo_.png';

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pageImg}
            alt={pageTitle}
            className={`w-full h-full ${pageImg === '/Logo_.png' ? 'object-contain p-20 bg-[#002d56]' : 'object-cover'}`}
          />
          <div className="absolute inset-0 bg-[#002d56]/60" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">{pageTitle}</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">{pageDesc}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {admissions.map((item: any) => (
            <div key={item._id} className="group relative bg-slate-50 rounded-sm overflow-hidden border border-slate-100 hover:border-[#ffcc00] transition-all duration-500 shadow-xl">
              <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={item.poster || '/Logo_.png'}
                    alt={item.title}
                    className={`w-full h-full ${item.poster ? 'object-cover' : 'object-contain p-12 bg-slate-50'} group-hover:scale-105 transition-transform duration-700`}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d56] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-10">
                <span className="bg-[#ffcc00] text-[#002d56] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                  Entry 2024
                </span>
                <h3 className="text-3xl font-black text-[#002d56] mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="w-full bg-[#002d56] text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-lg flex items-center justify-center">
                    REQUEST INFO
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {admissions.length === 0 && (
            <div className="lg:col-span-2 text-center py-32 bg-slate-50 rounded-sm border-2 border-dashed border-slate-200">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-4xl text-[#002d56]">🎓</span>
              </div>
              <h3 className="text-3xl font-black text-[#002d56] mb-4 uppercase tracking-tighter">Current Admissions Closed</h3>
              <p className="text-slate-400 text-lg font-medium max-w-md mx-auto">Please stay tuned for upcoming enrollment periods and academic announcements.</p>
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Admissions Info Section */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto space-y-16">
          
          {/* Programs Offered */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b-2 border-[#002d56] pb-4">
              <BookOpen className="text-[#17a2b8]" size={36} />
              <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter">Programs Offered</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#ffcc00] hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-[#002d56] mb-4">HSSC / Intermediate</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This is the next level of education after Matriculation. Students completing HSSC can pursue any degree level program.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#002d56] hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-[#002d56] mb-4">Associate Degree Program (ADP)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A two-year degree for candidates having 12 years of education, accredited by HEC. It represents the first two years of a 4-year Bachelor Degree.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#17a2b8] hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-[#002d56] mb-4">BS Program (PU Affiliated)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  BS in English Linguistics. The normal duration is 4 years (8 semesters). Can be extended up to two additional years for valid reasons.
                </p>
              </div>
            </div>
          </div>

          {/* Admission Rules */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b-2 border-[#002d56] pb-4">
              <FileText className="text-[#17a2b8]" size={36} />
              <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter">Admission Rules & Eligibility</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter mb-4 flex items-center gap-2"><CheckCircle size={20} className="text-[#17a2b8]" /> General Eligibility</h3>
                <ul className="space-y-3 text-slate-600 text-sm list-disc list-inside">
                  <li>Students securing 3rd division in Intermediate Examinations are not eligible to apply.</li>
                  <li>Student with a star (pass with grace marks) is eligible on the condition of clearing a test in that subject.</li>
                  <li>Must clear Matriculation with Math for F.Sc. Pre-Engineering and ICS.</li>
                  <li>Must clear Matriculation with Biology for F.Sc. Pre-Medical.</li>
                  <li>Humanities/Arts students cannot apply for FSc/ICS/G.Science groups.</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter mb-4 flex items-center gap-2"><Info size={20} className="text-[#17a2b8]" /> Essential Guidelines</h3>
                <ul className="space-y-3 text-slate-600 text-sm list-disc list-inside">
                  <li>Admission forms available at the college gate from 9 a.m. to 1 p.m.</li>
                  <li>No student is allowed to change her section or group (Science/Arts).</li>
                  <li>Mothers must accompany applicants; male guardians are strictly prohibited in the admin premises.</li>
                  <li>Applicant should enter college alone, parents wait outside; only mothers may contact principal if needed.</li>
                  <li>Non-Muslim students may opt for Ethics instead of Islamic Education.</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#002d56] p-8 rounded-xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <AlertCircle size={150} />
              </div>
              <h3 className="text-xl font-black text-[#ffcc00] uppercase tracking-widest mb-4">Important Notes</h3>
              <ul className="space-y-3 text-white/90 text-sm list-disc list-inside relative z-10">
                <li>Admission form cannot be submitted without NADRA CNIC or B-Form (No relaxation).</li>
                <li>O-Level candidates must submit Equivalence Certificate from Chairman Committee Islamabad.</li>
                <li>Students from boards other than Rawalpindi must submit original NOC/Migration and verified Matric certificate copies.</li>
                <li>Be prepared for hybrid classes per government policy; internet and smart devices are advised.</li>
                <li>If fee is not submitted by the last date displayed on the merit list, the seat may be lost.</li>
              </ul>
            </div>
            
            {/* Required Documents */}
            <div className="bg-slate-100 p-8 rounded-xl border border-dashed border-slate-300">
              <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter mb-4">Required Documents to Attach:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                <ul className="space-y-2 list-none">
                  <li>✅ Attested copies of Matriculation / F.A/F.Sc. Certificate (x2)</li>
                  <li>✅ Attested copies of character certificate (x2)</li>
                  <li>✅ Attested copies of father/guardian’s CNIC (x2)</li>
                  <li>✅ Attested copies of CNIC/B form of applicant (x2)</li>
                </ul>
                <ul className="space-y-2 list-none">
                  <li>✅ Passport sized photographs with blue background (x4)</li>
                  <li>✅ Valid PTCL or Mobile phone No of Father/Guardian</li>
                  <li>✅ For other boards: Original NOC + 2 photocopies</li>
                  <li>✅ For other boards: Verified Matric certificate + 2 photocopies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subject Combinations */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b-2 border-[#002d56] pb-4">
              <BookOpen className="text-[#17a2b8]" size={36} />
              <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter">Subject Combinations</h2>
            </div>
            
            {/* FSc and ICS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full uppercase">F.Sc. Pre-Medical</span>
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-bold mb-2">Compulsory:</p>
                  <p className="mb-4 text-xs">English, Urdu, Pakistan Studies, Islamic Studies</p>
                  <p className="font-bold mb-2">Elective:</p>
                  <p className="text-xs">Biology, Physics, Chemistry</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full uppercase">F.Sc. Pre-Engineering</span>
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-bold mb-2">Compulsory:</p>
                  <p className="mb-4 text-xs">English, Urdu, Pakistan Studies, Islamic Studies</p>
                  <p className="font-bold mb-2">Elective:</p>
                  <p className="text-xs">Physics, Chemistry, Mathematics</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full uppercase">I.C.S. (General Science)</span>
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-bold mb-2">Compulsory:</p>
                  <p className="mb-4 text-xs">English... (as above)</p>
                  <p className="font-bold mb-2">Elective Options:</p>
                  <ul className="text-xs list-disc pl-4 space-y-1">
                    <li>Physics, Computer, Mathematics</li>
                    <li>Economics, Computer, Mathematics</li>
                    <li>Stats, Economics, Computer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FA Humanities */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm pt-2">
               <div className="bg-slate-50 p-6 border-b border-slate-200">
                  <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter">F.A / Humanities</h3>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Compulsory: English, Urdu, Pakistan Studies, Islamic Studies</p>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-slate-600">
                    <thead className="bg-[#002d56] text-white text-xs uppercase">
                      <tr>
                        <th className="px-6 py-4 font-bold">S.No.</th>
                        <th className="px-6 py-4 font-bold">Elective Combinations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        'Islamic Studies, Civics, Economics',
                        'Islamic Studies, Civics, Education',
                        'Islamic Studies, Psychology, Economics',
                        'Islamic Studies, Psychology, Home Economics',
                        'Islamic Studies, Psychology, Education',
                        'History, Civics, Economics',
                        'History, Civics, Home Economics',
                        'History, Psychology, Economics',
                        'History, Psychology, Education',
                        'History, Psychology, Home Economics',
                        'Library Science, Civics, Economics',
                        'Library Science, Civics, Education',
                        'Library Science, Psychology, Economics',
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-[#002d56] bg-slate-50 border-r border-slate-100 w-16 text-center">{idx + 1}</td>
                          <td className="px-6 py-4">{item}</td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
               </div>
            </div>

            {/* ADP */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm pt-2">
               <div className="bg-slate-50 p-6 border-b border-slate-200">
                  <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter">Associate Degree of Arts (ADP)</h3>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Compulsory: English, Pakistan Studies, Islamiyat (C)<br/>Optional: Islamiyat (Opt)</p>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-slate-600">
                    <thead className="bg-[#002d56] text-white text-xs uppercase">
                      <tr>
                        <th className="px-6 py-4 font-bold">S.No.</th>
                        <th className="px-6 py-4 font-bold">Elective Combinations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        'Journalism, Political Science',
                        'History, Political Science',
                        'History, Journalism'
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-[#002d56] bg-slate-50 border-r border-slate-100 w-16 text-center">{idx + 1}</td>
                          <td className="px-6 py-4">{item}</td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
               </div>
               <div className="p-4 bg-yellow-50 text-yellow-800 text-xs border-t border-yellow-100">
                 * Subject combinations and scheme of Studies is subject to change on discretion of Univ. of Punjab. Islamic Education and Pakistan Studies will be taken in Part-1 (Third year), whereas Islamiyat optional will be taken in Part-2 (Fourth Year).
               </div>
            </div>
            
            <div className="p-4 bg-[#ffcc00]/20 text-[#002d56] text-sm font-medium rounded-xl text-center border border-[#ffcc00]/50">
              📝 Note: Only the first 70 students will be accommodated in each subject; after that, students must choose from the remaining limited choices.
            </div>
          </div>

          {/* Fee Schedule */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b-2 border-[#002d56] pb-4">
              <FileText className="text-[#17a2b8]" size={36} />
              <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter">Fee Schedule</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* FA FSc ICS */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm pt-2">
                 <div className="bg-slate-50 p-6 border-b border-slate-200">
                    <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter">F.A / F.Sc / I.C.S</h3>
                 </div>
                 <div className="overflow-x-auto">
                   <table className="w-full text-sm text-left text-slate-600">
                      <thead className="bg-[#002d56] text-white text-xs uppercase">
                        <tr>
                          <th className="px-6 py-4 font-bold">Fund / Category</th>
                          <th className="px-6 py-4 font-bold text-right">Payment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ['Admission Fee (F.A)', 'Rs. 80/-'],
                          ['Tuition Fee (F.A/F.Sc)', 'Rs. 600/-'],
                          ['Admission Fee (F.Sc) Science', 'Rs. 65/-'],
                          ['Breakage Fund', 'Rs. 60/-'],
                          ['Board Registration Fee', 'Board Policy'],
                          ['Library Security (Refundable)', 'Rs. 500/-'],
                          ['General Fund', 'Rs. 50/-'],
                          ['Medical Fund', 'Rs. 50/-'],
                          ['Red Cross Fund', 'Rs. 60/-'],
                          ['Magazine Fund', 'Rs. 120/-'],
                          ['College Welfare Fund', 'Rs. 50/-'],
                          ['Examination Fund', 'Rs. 180/-'],
                          ['Burka Fund', 'Rs. 100/-'],
                          ['Computer Fund', 'Rs. 300/-'],
                          ['Transport Fund', 'Rs. 150/-'],
                          ['Sports Fund', 'Rs. 180/-'],
                          ['Identity Card Fund', 'Rs. 50/-'],
                          ['Board Affiliation Fund', 'Rs. 240/-'],
                        ].map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-3 font-medium text-[#002d56]">{item[0]}</td>
                            <td className="px-6 py-3 text-right">{item[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                   </table>
                 </div>
              </div>

              {/* ADP */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm pt-2">
                 <div className="bg-slate-50 p-6 border-b border-slate-200">
                    <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter">Associate Degree (ADP Arts)</h3>
                 </div>
                 <div className="overflow-x-auto">
                   <table className="w-full text-sm text-left text-slate-600">
                      <thead className="bg-[#002d56] text-white text-xs uppercase">
                        <tr>
                          <th className="px-6 py-4 font-bold">Fund / Category</th>
                          <th className="px-6 py-4 font-bold text-right">Payment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ['Admission Fee (ADP)', 'Rs. 225/-'],
                          ['Tuition Fee (ADP)', 'Rs. 720/-'],
                          ['Welfare Fund', 'Rs. 500/-'],
                          ['General Fund', 'Rs. 50/-'],
                          ['Medical Fund', 'Rs. 120/-'],
                          ['Red Cross Fund', 'Rs. 50/-'],
                          ['Magazine Fund', 'Rs. 60/-'],
                          ['Late Fee', 'Rs. 120/-'],
                          ['Examination Fund', 'University Policy'],
                          ['Burka Fund', 'Rs. 180/-'],
                          ['Computer Fund', 'Rs. 100/-'],
                          ['Transport Fund', 'To be notified'],
                          ['Sports Fund', 'To be notified'],
                          ['Identity Card Fund', 'To be notified'],
                          ['University Card Fund', 'To be notified'],
                        ].map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-3 font-medium text-[#002d56]">{item[0]}</td>
                            <td className="px-6 py-3 text-right">{item[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                   </table>
                 </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 text-blue-800 text-sm font-medium rounded-xl text-center border border-blue-100 mt-4">
              🔹 Any change in the Fee Schedule can be made according to the directions given by Higher Education Department, Punjab, Lahore.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
