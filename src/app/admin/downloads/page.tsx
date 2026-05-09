'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2, ChevronRight, Download } from 'lucide-react';

interface DownloadItem {
  _id: string;
  title: string;
  fileUrl: string;
  isActive: boolean;
}

export default function DownloadsAdminPage() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<DownloadItem> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchDownloads(); }, []);

  const fetchDownloads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/downloads');
      const data = await res.json();
      setDownloads(data);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const method = editing?._id ? 'PUT' : 'POST';
    const url = editing?._id ? `/api/downloads/${editing._id}` : '/api/downloads';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) { setEditing(null); fetchDownloads(); }
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
        setEditing(prev => prev ? { ...prev, fileUrl: data.url } : null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this download?')) return;
    try {
      await fetch(`/api/downloads/${id}`, { method: 'DELETE' });
      fetchDownloads();
    } catch (err) { console.error(err); }
  };

  if (loading && downloads.length === 0) return <div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin text-[#002d56]" size={48} /></div>;

  return (
    <div className="p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002d56] mb-2 uppercase tracking-tighter">Downloads</h1>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest flex items-center gap-2">
            Admin <ChevronRight size={14} /> Downloads
          </p>
        </div>
        <button 
          onClick={() => setEditing({ title: '', fileUrl: '', isActive: true })}
          className="bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#002d56] hover:text-white transition-all shadow-lg"
        >
          <Plus size={18} /> Add New Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloads.map((dl) => (
          <div key={dl._id} className="bg-white rounded-sm shadow-xl border border-slate-100 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center">
                  <Download size={20} />
                </div>
                <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter">{dl.title}</h3>
              </div>
              <a href={dl.fileUrl} target="_blank" className="text-xs text-[#17a2b8] font-bold">View File</a>
            </div>
            <div className="flex justify-between items-center border-t border-slate-100 pt-4 mt-6">
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${dl.isActive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {dl.isActive ? 'Active' : 'Hidden'}
              </span>
              <div className="flex gap-2">
                <button onClick={() => setEditing(dl)} className="p-2 bg-slate-50 text-[#002d56] rounded-sm hover:bg-[#ffcc00]"><Edit2 size={16} /></button>
                <button onClick={() => handleDelete(dl._id)} className="p-2 bg-red-50 text-red-500 rounded-sm hover:bg-red-500 hover:text-white"><Trash2 size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-[#002d56]/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden">
            <div className="bg-[#002d56] p-8 flex justify-between items-center">
              <h2 className="text-white text-xl font-black uppercase tracking-tighter">{editing._id ? 'Edit Download' : 'New Download'}</h2>
              <button onClick={() => setEditing(null)} className="text-white/60 hover:text-white"><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSave} className="p-8 space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Title</label>
                <input required type="text" value={editing.title || ''} onChange={e => setEditing({...editing, title: e.target.value})} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><Download size={14} /> Upload File</label>
                <input type="file" onChange={handleFileUpload} className="w-full px-5 py-4 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium bg-white" />
                {editing.fileUrl && <div className="mt-2 text-xs text-[#17a2b8]">File uploaded successfully!</div>}
              </div>
              <div className="pt-4">
                <button disabled={saving} type="submit" className="w-full bg-[#002d56] text-white py-4 rounded-sm font-black uppercase text-xs tracking-[0.2em] hover:bg-[#ffcc00] hover:text-[#002d56] transition-all flex items-center justify-center gap-4">
                  {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} 
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
