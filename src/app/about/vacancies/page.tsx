import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function VacanciesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Vacancy Positions</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>Current Vacancies</h2>
          <p>Govt. Graduate College, Peshawar Road, Rawalpindi  regularly announces vacancies for teaching and non-teaching positions as per Punjab Higher Education Department guidelines.</p>
          <h3>How to Apply</h3>
          <ul>
            <li>Applications are accepted through the Punjab Public Service Commission (PPSC) or as per the advertisement.</li>
            <li>Candidates must meet the eligibility criteria as specified in the official job advertisement.</li>
            <li>All appointments are made strictly on merit.</li>
          </ul>
          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '4px', border: '1px solid #e2e8f0', marginTop: '24px' }}>
            <p><strong>No vacancies are currently advertised.</strong></p>
            <p>Please check back later or visit the Punjab Higher Education Department website for the latest announcements.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
