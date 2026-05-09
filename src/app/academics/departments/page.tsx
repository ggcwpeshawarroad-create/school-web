import dbConnect from '@/lib/db';
import Department from '@/lib/models/Department';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Departments',
  description: 'Explore the various academic departments at Govt. Graduate College Rawalpindi. Find information about faculty, research, and specialized blocks.',
};

export const runtime = 'nodejs';
export const revalidate = 0;

async function getDepartments() {
  await dbConnect();
  const departments = await Department.find({ isActive: true }).sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(departments));
}

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Academic Departments</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Centers of Excellence & Innovation</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.map((dept: any) => (
            <div key={dept._id} className="bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={dept.image || '/Logo_.png'} 
                  alt={dept.name} 
                  className={`w-full h-full ${dept.image ? 'object-cover' : 'object-contain p-8 bg-slate-50'} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d56]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{dept.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-500 leading-relaxed mb-8 font-medium line-clamp-3">
                  {dept.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#002d56]">
                    HOD: <span className="text-[#17a2b8]">{dept.headName || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {departments.length === 0 && (
            <div className="lg:col-span-3 text-center py-32 bg-white rounded-sm border-2 border-dashed border-slate-200">
              <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">No departments listed yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
