'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2, Bell, ChevronRight, AlertTriangle } from 'lucide-react';

interface Notice {
  _id: string;
  title: string;
  content: string;
  date: string;
  priority: 'normal' | 'important' | 'urgent';
  attachment?: string;
  isActive: boolean;
}

export default function NoticesAdminPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Notice> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchNotices(); }, []);

  const fetchNotices = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/notices');
      const data = await res.json();
      setNotices(data);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const method = editing?._id ? 'PUT' : 'POST';
    const url = editing?._id ? `/api/notices/${editing._id}` : '/api/notices';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) { setEditing(null); fetchNotices(); }
    } catch (err) { console.error(err); } finally { setSaving(false); }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) {
        setEditing(prev => prev ? { ...prev, attachment: data.url } : null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this notice?')) return;
    try {
      await fetch(`/api/notices/${id}`, { method: 'DELETE' });
      fetchNotices();
    } catch (err) { console.error(err); }
  };

  if (loading && notices.length === 0) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}><Loader2 className="animate-spin" size={40} color="#1a3a6e" /></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '8px' }}>Notice Board Management</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '0.9rem' }}>
            Admin <ChevronRight size={14} /> Notices
          </div>
        </div>
        <button 
          onClick={() => setEditing({ title: '', content: '', priority: 'normal', date: new Date().toISOString(), isActive: true })}
          style={{ background: '#1a3a6e', color: '#fff', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={20} /> Post New Notice
        </button>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        {notices.map((notice) => (
          <div key={notice._id} style={{ background: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
               <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: notice.priority === 'urgent' ? '#fee2e2' : '#f7f9fc', color: notice.priority === 'urgent' ? '#ef4444' : '#1a3a6e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bell size={24} />
               </div>
               <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px', background: notice.priority === 'urgent' ? '#ef4444' : notice.priority === 'important' ? '#e8a020' : '#1a3a6e', color: '#fff' }}>
                      {notice.priority}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#718096' }}>{new Date(notice.date).toLocaleDateString()}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>{notice.title}</h3>
                  <p style={{ color: '#4a5568', fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{notice.content}</p>
               </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setEditing(notice)} style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f7f9fc', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a3a6e' }}><Edit2 size={18} /></button>
              <button onClick={() => handleDelete(notice._id)} style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#fff1f2', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}><Trash2 size={18} /></button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15, 35, 71, 0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: '600px', borderRadius: '30px', padding: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.2)', position: 'relative' }}>
            <button onClick={() => setEditing(null)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#718096' }}><X size={24} /></button>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '32px' }}>{editing._id ? 'Edit Notice' : 'New Announcement'}</h2>
            
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Title</label>
                <input required type="text" value={editing.title || ''} onChange={e => setEditing({...editing, title: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} placeholder="Short descriptive title" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Priority Level</label>
                  <select value={editing.priority} onChange={e => setEditing({...editing, priority: e.target.value as any})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}>
                    <option value="normal">Normal</option>
                    <option value="important">Important (Gold)</option>
                    <option value="urgent">Urgent (Red)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Notice Date</label>
                  <input type="date" value={editing.date ? new Date(editing.date).toISOString().split('T')[0] : ''} onChange={e => setEditing({...editing, date: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Notice Details</label>
                <textarea rows={6} required value={editing.content || ''} onChange={e => setEditing({...editing, content: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }} placeholder="Write the full notice content here..."></textarea>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Attach PDF File</label>
                <input type="file" accept=".pdf" onChange={handleFileUpload} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                {editing.attachment && <div style={{ marginTop: '8px', fontSize: '0.8rem', color: '#1a3a6e' }}>Attached: {editing.attachment}</div>}
              </div>
              <button disabled={saving} type="submit" style={{ width: '100%', background: '#1a3a6e', color: '#fff', padding: '18px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} {editing._id ? 'Save Changes' : 'Publish Notice'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
