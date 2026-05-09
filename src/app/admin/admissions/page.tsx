'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2, Image as ImageIcon, ChevronRight, Hash } from 'lucide-react';

interface Admission {
  _id: string;
  title: string;
  description: string;
  poster: string;
  order: number;
  isActive: boolean;
}

export default function AdmissionsAdminPage() {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Admission> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchAdmissions(); }, []);

  const fetchAdmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admissions');
      const data = await res.json();
      setAdmissions(data);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const method = editing?._id ? 'PUT' : 'POST';
    const url = editing?._id ? `/api/admissions/${editing._id}` : '/api/admissions';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) { setEditing(null); fetchAdmissions(); }
    } catch (err) { console.error(err); } finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this admission?')) return;
    try {
      await fetch(`/api/admissions/${id}`, { method: 'DELETE' });
      fetchAdmissions();
    } catch (err) { console.error(err); }
  };

  if (loading && admissions.length === 0) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}><Loader2 className="animate-spin" size={40} color="#1a3a6e" /></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '8px' }}>Admissions Posts</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '0.9rem' }}>
            Admin <ChevronRight size={14} /> Admissions
          </div>
        </div>
        <button 
          onClick={() => setEditing({ title: '', description: '', poster: '', order: admissions.length + 1, isActive: true })}
          style={{ background: '#1a3a6e', color: '#fff', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={20} /> Add New Admission
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
        {admissions.map((admission) => (
          <div key={admission._id} style={{ background: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative' }}>
             <div style={{ height: '200px', background: '#f1f5f9', position: 'relative' }}>
               <img src={admission.poster || '/slider1.jpg'} alt={admission.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '8px' }}>
                 <button onClick={() => setEditing(admission)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a3a6e', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}><Edit2 size={14} /></button>
                 <button onClick={() => handleDelete(admission._id)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fff1f2', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}><Trash2 size={14} /></button>
               </div>
             </div>
             
             <div style={{ padding: '24px' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '10px' }}>{admission.title}</h3>
               <p style={{ color: '#718096', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '15px' }}>{admission.description}</p>
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1a3a6e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Hash size={12} /> Priority: {admission.order}
                 </div>
                 <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: admission.isActive ? '#059669' : '#718096' }}>
                  {admission.isActive ? 'Active' : 'Archived'}
                 </span>
               </div>
             </div>
          </div>
        ))}
      </div>

      {editing && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15, 35, 71, 0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: '600px', borderRadius: '30px', padding: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.2)', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setEditing(null)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#718096' }}><X size={24} /></button>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '32px' }}>{editing._id ? 'Edit Admission' : 'New Admission'}</h2>
            
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Admission Title</label>
                <input required type="text" value={editing.title || ''} onChange={e => setEditing({...editing, title: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Image URL (Poster)</label>
                <input type="url" placeholder="https://example.com/image.jpg" value={editing.poster || ''} onChange={e => setEditing({...editing, poster: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Display Order</label>
                <input type="number" value={editing.order || 0} onChange={e => setEditing({...editing, order: parseInt(e.target.value)})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Description</label>
                <textarea rows={4} required value={editing.description || ''} onChange={e => setEditing({...editing, description: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#4a5568', cursor: 'pointer' }}>
                  <input type="checkbox" checked={editing.isActive ?? true} onChange={e => setEditing({...editing, isActive: e.target.checked})} />
                  Make this admission visible on admissions page
                </label>
              </div>
              <button disabled={saving} type="submit" style={{ width: '100%', background: '#1a3a6e', color: '#fff', padding: '18px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} {editing._id ? 'Update Admission' : 'Create Admission'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
