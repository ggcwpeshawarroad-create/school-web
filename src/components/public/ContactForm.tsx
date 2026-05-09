'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-slate-50 rounded-sm p-10 border border-slate-100">
      <h2 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-6">Send a Message</h2>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-sm flex items-center gap-3">
          <CheckCircle2 size={20} />
          <span className="text-sm font-bold uppercase tracking-widest">Message sent successfully!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-sm flex items-center gap-3">
          <AlertCircle size={20} />
          <span className="text-sm font-bold">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:border-[#ffcc00] outline-none font-medium text-[#002d56]" 
            placeholder="Your full name" 
          />
        </div>
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Email</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:border-[#ffcc00] outline-none font-medium text-[#002d56]" 
            placeholder="your@email.com" 
          />
        </div>
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Message</label>
          <textarea 
            rows={5} 
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:border-[#ffcc00] outline-none font-medium text-[#002d56]" 
            placeholder="Write your message..." 
          />
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="bg-[#002d56] text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
          Send Message
        </button>
      </form>
    </div>
  );
}
