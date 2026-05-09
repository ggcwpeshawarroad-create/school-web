'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2, User, ChevronRight, Camera } from 'lucide-react';

interface Teacher {
  _id: string;
  name: string;
  role: string;
  subject: string;
  photo: string;
  bio: string;
  qualifications: string[];
  experience: number;
  classes: string;
  isActive: boolean;
}

export default function TeachersAdminPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Teacher> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/teachers');
      const data = await res.json();
      setTeachers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const method = editing?._id ? 'PUT' : 'POST';
    const url = editing?._id ? `/api/teachers/${editing._id}` : '/api/teachers';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        fetchTeachers();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
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
        setEditing(prev => prev ? { ...prev, photo: data.url } : null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this teacher?')) return;
    try {
      await fetch(`/api/teachers/${id}`, { method: 'DELETE' });
      fetchTeachers();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading && teachers.length === 0) return <div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin text-[#002d56]" size={48} /></div>;

  return (
    <div className="p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002d56] mb-2 uppercase tracking-tighter">Faculty Management</h1>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest flex items-center gap-2">
            Admin <ChevronRight size={14} /> Teachers
          </p>
        </div>
        <button 
          onClick={() => setEditing({ name: '', role: '', subject: '', photo: '', bio: '', qualifications: [], experience: 0, classes: '', isActive: true })}
          className="bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#002d56] hover:text-white transition-all shadow-lg"
        >
          <Plus size={18} /> Add New Teacher
        </button>
      </div>

      <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#002d56] text-white uppercase text-[11px] font-black tracking-[0.2em]">
              <th className="px-10 py-6 border-r border-white/10">Faculty Member</th>
              <th className="px-10 py-6 border-r border-white/10">Subject</th>
              <th className="px-10 py-6 border-r border-white/10 text-center">Status</th>
              <th className="px-10 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {teachers.map((teacher) => (
              <tr key={teacher._id} className="hover:bg-slate-50 transition-all">
                <td className="px-10 py-8 border-r border-slate-50">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200">
                      {teacher.photo ? (
                        <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300"><User size={24} /></div>
                      )}
                    </div>
                    <div>
                      <div className="text-lg font-black text-[#002d56] uppercase tracking-tighter leading-none mb-1">{teacher.name}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#17a2b8]">{teacher.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-10 py-8 border-r border-slate-50">
                   <span className="text-slate-500 font-bold text-sm uppercase">{teacher.subject}</span>
                </td>
                <td className="px-10 py-8 border-r border-slate-50 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${teacher.isActive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {teacher.isActive ? 'Active' : 'Hidden'}
                  </span>
                </td>
                <td className="px-10 py-8">
                  <div className="flex justify-center gap-3">
                    <button onClick={() => setEditing(teacher)} className="p-3 bg-slate-50 text-[#002d56] rounded-sm hover:bg-[#ffcc00] transition-colors border border-slate-100"><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(teacher._id)} className="p-3 bg-red-50 text-red-500 rounded-sm hover:bg-red-500 hover:text-white transition-colors border border-red-100"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {teachers.length === 0 && !loading && (
          <div className="text-center py-32 bg-slate-50 border-t border-slate-100">
            <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">No faculty records found.</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {editing && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-[#002d56]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#002d56] p-8 flex justify-between items-center border-b border-white/10">
              <h2 className="text-white text-2xl font-black uppercase tracking-tighter">{editing._id ? 'Update Profile' : 'New Faculty Member'}</h2>
              <button onClick={() => setEditing(null)} className="text-white/60 hover:text-white"><X size={28} /></button>
            </div>
            
            <form onSubmit={handleSave} className="p-10 grid grid-cols-2 gap-8">
              <div className="col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                <input required type="text" value={editing.name || ''} onChange={e => setEditing({...editing, name: e.target.value})} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Role / Designation</label>
                <input required type="text" value={editing.role || ''} onChange={e => setEditing({...editing, role: e.target.value})} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Primary Subject</label>
                <input required type="text" value={editing.subject || ''} onChange={e => setEditing({...editing, subject: e.target.value})} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Qualifications (comma separated)</label>
                <input type="text" value={editing.qualifications?.join(', ') || ''} onChange={e => setEditing({...editing, qualifications: e.target.value.split(',').map(s => s.trim())})} placeholder="MSc Physics, Ph.D" className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><Camera size={14} /> Profile Photo</label>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium bg-white" />
                {editing.photo && <div className="mt-2 text-xs text-[#17a2b8]">Photo uploaded successfully!</div>}
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Biography</label>
                <textarea rows={3} value={editing.bio || ''} onChange={e => setEditing({...editing, bio: e.target.value})} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium resize-none" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Status</label>
                <select value={editing.isActive ? 'true' : 'false'} onChange={e => setEditing({...editing, isActive: e.target.value === 'true'})} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-black uppercase tracking-widest bg-white">
                  <option value="true">Active (Visible)</option>
                  <option value="false">Hidden</option>
                </select>
              </div>
              <div className="col-span-2 mt-4">
                <button 
                  disabled={saving} 
                  type="submit" 
                  className="w-full bg-[#002d56] text-white py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] hover:bg-[#ffcc00] hover:text-[#002d56] transition-all disabled:opacity-50 flex items-center justify-center gap-4 shadow-xl"
                >
                  {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} 
                  {editing._id ? 'Update Faculty Profile' : 'Create Faculty Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
