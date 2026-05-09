'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Loader2, Globe, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PageEditor({ initialData, mode = 'create', lockSlug = false }: { initialData?: any, mode?: 'create' | 'edit', lockSlug?: boolean }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    image: initialData?.image || '',
    content: initialData?.content || '',
    isActive: initialData?.isActive ?? true
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    const method = mode === 'create' ? 'POST' : 'PUT';
    const url = mode === 'create' ? '/api/pages' : `/api/pages/${initialData._id}`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        router.push('/admin/pages');
        router.refresh();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex items-center gap-6 mb-12">
        <Link href="/admin/pages" className="w-12 h-12 bg-white rounded-sm border border-slate-100 flex items-center justify-center text-[#002d56] hover:bg-[#ffcc00] transition-all">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter">
          {mode === 'create' ? 'Create New Page' : `Editing: ${formData.title}`}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="bg-white rounded-sm shadow-2xl border border-slate-100 p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Page Title</label>
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  required
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:border-[#ffcc00] outline-none font-bold text-[#002d56] uppercase transition-all"
                  placeholder="e.g. Fee Structure"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">URL Slug (URL path)</label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  required
                  value={formData.slug}
                  onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                  disabled={lockSlug}
                  className={`w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:border-[#ffcc00] outline-none font-bold text-[#17a2b8] transition-all ${lockSlug ? 'opacity-60 cursor-not-allowed' : ''}`}
                  placeholder="fee-structure"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Short Description (Optional)</label>
            <textarea 
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:border-[#ffcc00] outline-none font-medium text-slate-600 transition-all"
              placeholder="Brief summary or subtitle for the page..."
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hero Image URL (Optional)</label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="url"
                value={formData.image}
                onChange={e => setFormData({...formData, image: e.target.value})}
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:border-[#ffcc00] outline-none font-medium transition-all"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Page Content (HTML Allowed)</label>
            <textarea 
              required
              rows={15}
              value={formData.content}
              onChange={e => setFormData({...formData, content: e.target.value})}
              className="w-full px-6 py-6 bg-slate-50 border border-slate-100 rounded-sm focus:border-[#ffcc00] outline-none font-medium text-slate-600 leading-relaxed font-mono text-sm"
              placeholder="<h1>Main Heading</h1><p>Start writing your content here...</p>"
            />
          </div>

          <div className="flex items-center gap-4 pt-6">
             <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={formData.isActive}
                  onChange={e => setFormData({...formData, isActive: e.target.checked})}
                  className="w-5 h-5 border-slate-200 text-[#002d56] focus:ring-[#ffcc00] rounded-sm"
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#002d56]">Publish this page publicly</span>
             </label>
          </div>
        </div>

        <div className="flex justify-end gap-6">
           <Link href="/admin/pages" className="px-10 py-4 font-black uppercase text-xs tracking-widest text-slate-400 hover:text-[#002d56] transition-all">Cancel</Link>
           <button 
            type="submit"
            disabled={loading}
            className="bg-[#002d56] text-white px-12 py-4 rounded-sm font-black uppercase text-xs tracking-[0.2em] hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-2xl flex items-center gap-3"
           >
             {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
             Save Page
           </button>
        </div>
      </form>
    </div>
  );
}
