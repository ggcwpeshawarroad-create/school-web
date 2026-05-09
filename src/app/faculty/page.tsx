import dbConnect from '@/lib/db';
import Teacher from '@/lib/models/Teacher';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getFaculty() {
  await dbConnect();
  const teachers = await Teacher.find({ isActive: true }).sort({ order: 1, name: 1 }).lean();
  return JSON.parse(JSON.stringify(teachers));
}

const FemaleIcon = () => (
  <div className="w-full h-full bg-pink-50 flex items-center justify-center text-pink-300 group-hover:scale-105 transition-transform duration-500">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[50%] h-[50%]">
      <path d="M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L8 14h2v8h4v-8h2l-2.06-5.69zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </svg>
  </div>
);

const MaleIcon = () => (
  <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-300 group-hover:scale-105 transition-transform duration-500">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[50%] h-[50%]">
      <path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </svg>
  </div>
);

const isFemale = (name: string) => {
  const lower = name.toLowerCase();
  return lower.startsWith('ms.') || lower.startsWith('mrs.') || lower.startsWith('miss');
};

export default async function FacultyPage() {
  const teachers = await getFaculty();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Academic Faculty</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Meet Our Distinguished Educators</p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher: any) => (
            <div key={teacher._id} className="bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100">
              <div className="h-96 overflow-hidden relative">
                {teacher.photo ? (
                  <img 
                    src={teacher.photo} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  isFemale(teacher.name) ? <FemaleIcon /> : <MaleIcon />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d56]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-[#002d56] mb-1 leading-none uppercase tracking-tighter">{teacher.name}</h3>
                    <p className="text-[#17a2b8] font-black text-[10px] uppercase tracking-widest">{teacher.role}</p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium line-clamp-3">
                  {teacher.bio || "Dedicated faculty member committed to fostering a culture of learning and academic rigor."}
                </p>
                <div className="space-y-3 pt-6 border-t border-slate-100">
                   <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <span className="text-[#002d56]">Qualifications:</span> {teacher.qualifications?.join(', ') || 'Post Graduate'}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {teachers.length === 0 && (
          <div className="text-center py-32 bg-white rounded-sm border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">No faculty members found at this time.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
