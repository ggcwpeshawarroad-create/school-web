'use client';

import { useState } from 'react';
import { Plus, X, ImageIcon, Loader2 } from 'lucide-react';

export default function AddGalleryModal({ onAdd }: { onAdd: (formData: FormData) => Promise<void> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.set('imageUrl', imageUrl);
    await onAdd(formData);
    setLoading(false);
    setIsOpen(false);
    setImageUrl('');
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) {
        setImageUrl(data.url);
      } else {
        alert(data.error || "Upload failed. Please check your configuration.");
      }
    } catch (err) {
      console.error(err);
      alert("A network error occurred during upload.");
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#ffcc00] text-[#002d56] px-6 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#002d56] hover:text-white transition-all shadow-lg"
      >
        <Plus size={16} /> Add New Image
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-[#002d56]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#002d56] p-6 flex justify-between items-center">
              <h3 className="text-white font-black uppercase tracking-tighter text-lg flex items-center gap-2">
                <ImageIcon size={20} className="text-[#ffcc00]" /> Add to Gallery
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white"><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Upload Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  required={!imageUrl}
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] focus:ring-0 outline-none transition-all text-sm font-medium"
                />
                {imageUrl && <div className="mt-2 text-xs text-[#17a2b8]">Image uploaded successfully!</div>}
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Caption / Title</label>
                <input 
                  name="caption" 
                  type="text" 
                  required 
                  placeholder="Campus Sports Day 2024"
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] focus:ring-0 outline-none transition-all text-sm font-medium"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#002d56] text-white py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : 'Save to Gallery'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
