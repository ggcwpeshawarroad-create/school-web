'use client';

import { useState } from 'react';
import { Plus, X, Users, Loader2 } from 'lucide-react';

export default function AddTeacherModal({ onAdd }: { onAdd: (formData: FormData) => Promise<void> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await onAdd(formData);
    setLoading(false);
    setIsOpen(false);
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#ffcc00] text-[#002d56] px-6 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#002d56] hover:text-white transition-all shadow-lg"
      >
        <Plus size={16} /> Add New Faculty
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-[#002d56]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#002d56] p-6 flex justify-between items-center">
              <h3 className="text-white font-black uppercase tracking-tighter text-lg flex items-center gap-2">
                <Users size={20} className="text-[#ffcc00]" /> Add Faculty Member
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white"><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                <input name="name" type="text" required placeholder="Dr. Ahmad Khan" className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Role / Designation</label>
                <input name="role" type="text" required placeholder="HOD Computer Science" className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Subject</label>
                <input name="subject" type="text" required placeholder="Mathematics" className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Photo URL</label>
                <input name="photo" type="url" placeholder="https://images.unsplash.com/..." className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Bio / Description</label>
                <textarea name="bio" rows={3} placeholder="Brief introduction..." className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-[#ffcc00] outline-none text-sm font-medium" />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="col-span-2 bg-[#002d56] text-white py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : 'Save Faculty Member'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
