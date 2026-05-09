import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function CommitteesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Institute Committees</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>College Committees</h2>
          <p>Govt. Graduate College, Peshawar Road, Rawalpindi  has constituted the following committees for the smooth functioning of the institution:</p>
          <h3>Discipline Committee</h3>
          <p>Responsible for maintaining discipline and code of conduct within the college premises.</p>
          <h3>Examination Committee</h3>
          <p>Oversees all examination-related matters including scheduling, invigilation, and result compilation.</p>
          <h3>Sports Committee</h3>
          <p>Organizes sports events, inter-college competitions, and manages sports facilities.</p>
          <h3>Library Committee</h3>
          <p>Manages library resources, book procurement, and reading room facilities.</p>
          <h3>Admission Committee</h3>
          <p>Handles the admission process, merit list preparation, and enrollment procedures.</p>
          <h3>Anti-Harassment Committee</h3>
          <p>Ensures a safe and respectful environment for all students and staff members.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
