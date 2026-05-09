import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';
import { FileText, Plus, Edit3, Trash2, Globe, Lock, Layout } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export const runtime = 'nodejs';

// These are static pages whose routes are fixed — content is editable but they cannot be deleted
const SYSTEM_PAGES = [
  { slug: 'admissions', title: 'Admissions Page', category: 'Admissions' },
  { slug: 'degrees', title: 'Degrees', category: 'Academics' },
  { slug: 'fee-structure', title: 'Fee Structure', category: 'Admissions' },
  { slug: 'admission-criteria', title: 'Admission Criteria', category: 'Admissions' },
  { slug: 'admission-process', title: 'Admission Process', category: 'Admissions' },
  { slug: 'contact-us', title: 'Contact Us', category: 'About' },
  { slug: 'committees', title: 'Institute Committees', category: 'About' },
  { slug: 'leadership', title: 'Institute Leadership', category: 'About' },
  { slug: 'privacy', title: 'Privacy Policy', category: 'Legal' },
  { slug: 'accessibility', title: 'Accessibility', category: 'Legal' },
  { slug: 'sitemap', title: 'Sitemap', category: 'Legal' },
];

const SYSTEM_SLUGS = SYSTEM_PAGES.map(p => p.slug);

async function getPages() {
  await dbConnect();
  return await DynamicPage.find({}).sort({ updatedAt: -1 }).lean();
}

export default async function AdminPagesManagement() {
  const allPages = await getPages();

  // Separate system pages from custom pages
  const systemPageDocs = allPages.filter((p: any) => SYSTEM_SLUGS.includes(p.slug));
  const customPages = allPages.filter((p: any) => !SYSTEM_SLUGS.includes(p.slug));

  // Build system pages display — merge defined list with existing DB docs
  const systemPagesDisplay = SYSTEM_PAGES.map(sp => {
    const doc = systemPageDocs.find((d: any) => d.slug === sp.slug);
    return {
      ...sp,
      _id: doc ? (doc as any)._id.toString() : null,
      hasContent: !!doc,
    };
  });

  async function deletePage(formData: FormData) {
    'use server';
    const id = formData.get('id');
    await dbConnect();
    // Only delete non-system pages
    const page = await DynamicPage.findById(id);
    if (page && !SYSTEM_SLUGS.includes(page.slug)) {
      await DynamicPage.findByIdAndDelete(id);
    }
    revalidatePath('/admin/pages');
  }

  return (
    <div className="p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002d56] mb-2 uppercase tracking-tighter">Content Management</h1>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Manage all informational pages across the site</p>
        </div>
        <Link href="/admin/pages/new" className="bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#002d56] hover:text-white transition-all shadow-lg">
          <Plus size={18} /> Create New Page
        </Link>
      </div>

      {/* SECTION 1: Static / System Pages */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#002d56] rounded-sm flex items-center justify-center">
            <Lock size={18} className="text-[#ffcc00]" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#002d56] uppercase tracking-tighter">Static Pages</h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Fixed routes — edit content only</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {systemPagesDisplay.map((page) => (
            <div key={page.slug} className="bg-white rounded-sm shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:border-[#002d56] transition-all">
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#002d56]/10 text-[#002d56] px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full">
                    {page.category}
                  </span>
                  <Lock size={14} className="text-slate-300" />
                </div>
                <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter mb-2">{page.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Globe size={12} /> /{page.slug}
                </p>
                {!page.hasContent && (
                  <div className="mt-4 bg-amber-50 text-amber-600 px-3 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-amber-200">
                    ⚠ No content yet
                  </div>
                )}
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                {page._id ? (
                  <Link href={`/admin/pages/edit/${page._id}`} className="text-[#002d56] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#ffcc00] transition-all">
                    <Edit3 size={14} /> Edit Content
                  </Link>
                ) : (
                  <Link href={`/admin/pages/new?slug=${page.slug}&title=${encodeURIComponent(page.title)}`} className="text-[#17a2b8] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#ffcc00] transition-all">
                    <Plus size={14} /> Add Content
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note about pages managed elsewhere */}
        <div className="mt-8 bg-slate-50 rounded-sm p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Layout size={16} className="text-[#002d56]" />
            <span className="font-black text-[#002d56] text-xs uppercase tracking-widest">Pages managed via dedicated sections</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Departments', link: '/admin/departments', note: 'Academics' },
              { name: 'Faculty / Teachers', link: '/admin/teachers', note: 'About' },
              { name: 'News & Events', link: '/admin/notices', note: 'Notices' },
            ].map((item) => (
              <Link key={item.name} href={item.link} className="bg-white px-4 py-2 rounded-sm border border-slate-200 text-[11px] font-bold text-[#002d56] hover:border-[#ffcc00] transition-all flex items-center gap-2">
                {item.name} <span className="text-slate-300">•</span> <span className="text-slate-400">{item.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: Custom / Dynamic Pages */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#ffcc00] rounded-sm flex items-center justify-center">
            <FileText size={18} className="text-[#002d56]" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#002d56] uppercase tracking-tighter">Custom Pages</h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">User-created pages — fully manageable</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customPages.map((page: any) => (
            <div key={page._id.toString()} className="bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden flex flex-col hover:border-[#ffcc00] transition-all">
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-[#002d56]">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter mb-2">{page.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Globe size={12} /> Slug: /{page.slug}
                </p>
                <div className="prose prose-sm line-clamp-3 opacity-60 pointer-events-none" dangerouslySetInnerHTML={{ __html: page.content.substring(0, 200) }} />
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <Link href={`/admin/pages/edit/${page._id}`} className="text-[#002d56] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#ffcc00] transition-all">
                  <Edit3 size={14} /> Edit Content
                </Link>
                <form action={deletePage}>
                  <input type="hidden" name="id" value={page._id.toString()} />
                  <button type="submit" className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-red-700 transition-all">
                    <Trash2 size={14} /> Delete
                  </button>
                </form>
              </div>
            </div>
          ))}

          {customPages.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 rounded-sm">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No custom pages created yet.</p>
              <p className="text-slate-300 text-xs font-medium mt-2">Click "Create New Page" to add a custom page.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
