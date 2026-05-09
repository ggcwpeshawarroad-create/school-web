import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import TeacherSection from '@/components/public/TeacherSection';
import dbConnect from '@/lib/db';
import Teacher from '@/lib/models/Teacher';

export const revalidate = 0;

async function getTeachers() {
  await dbConnect();
  const teachers = await Teacher.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(teachers));
}

export default async function FullTeachersPage() {
  const teachers = await getTeachers();

  return (
    <main>
      <Navbar />
      <section style={{ background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2347 100%)', padding: '150px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '20px' }}>Meet Our Educators</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>The mentors who shape the future every single day.</p>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <TeacherSection teachers={teachers} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
