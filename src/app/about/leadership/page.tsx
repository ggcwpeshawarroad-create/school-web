import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function LeadershipPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Institute Leadership</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>Our Leadership</h2>
          <p>Govt. Graduate College, Peshawar Road, Rawalpindi  is led by dedicated and experienced educators committed to academic excellence.</p>
          <h3>Principal</h3>
          <p>The Principal provides strategic vision and administrative leadership for the college, ensuring high standards of academic quality and institutional governance.</p>
          <h3>Vice Principal</h3>
          <p>The Vice Principal assists in day-to-day administration, academic coordination, and student affairs management.</p>
          <h3>Heads of Departments</h3>
          <p>Each academic department is headed by a senior faculty member who oversees curriculum delivery, faculty coordination, and departmental planning.</p>
          <h3>Administrative Staff</h3>
          <p>Our administrative team ensures smooth operations across admissions, examinations, accounts, and student services.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
