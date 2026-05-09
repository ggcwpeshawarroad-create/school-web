import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Calendar, Bell, ExternalLink } from 'lucide-react';
import dbConnect from '@/lib/db';
import Notice from '@/lib/models/Notice';

export const revalidate = 0;

async function getNotices() {
  await dbConnect();
  const notices = await Notice.find({ isActive: true }).sort({ date: -1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(notices));
}

export default async function NoticeBoardPage() {
  const notices = await getNotices();

  return (
    <main>
      <Navbar />
      <section style={{ background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2347 100%)', padding: '150px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '20px' }}>Notice Board</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Latest announcements and official updates.</p>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: '#f7f9fc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {notices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px', background: '#fff', borderRadius: '30px', color: '#718096' }}>
              <Bell size={48} style={{ margin: '0 auto 20px', opacity: 0.3 }} />
              No notices at the moment.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {notices.map((notice: any) => (
                <div key={notice._id} style={{ background: '#fff', borderRadius: '30px', padding: '40px', border: '1px solid #e2e8f0', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                    <div style={{ background: '#f1f5f9', borderRadius: '20px', padding: '15px' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a6e', lineHeight: 1 }}>{new Date(notice.date).getDate()}</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase' }}>{new Date(notice.date).toLocaleString('default', { month: 'long' })}</div>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', padding: '4px 12px', borderRadius: '6px', background: notice.priority === 'urgent' ? '#fee2e2' : '#e0f2fe', color: notice.priority === 'urgent' ? '#ef4444' : '#0ea5e9' }}>
                        {notice.priority}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '16px' }}>{notice.title}</h3>
                    <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '24px', whiteSpace: 'pre-wrap' }}>{notice.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
