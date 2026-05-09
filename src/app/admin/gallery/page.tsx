import dbConnect from '@/lib/db';
import Gallery from '@/lib/models/Gallery';
import { ImageIcon, Trash2, ExternalLink } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import AddGalleryModal from '@/components/admin/AddGalleryModal';

export const runtime = 'nodejs';

async function getGallery() {
  await dbConnect();
  return await Gallery.find({}).sort({ createdAt: -1 }).lean();
}

export default async function AdminGalleryPage() {
  const items = await getGallery();

  async function addItem(formData: FormData) {
    'use server';
    const imageUrl = formData.get('imageUrl');
    const caption = formData.get('caption');
    await dbConnect();
    await Gallery.create({ imageUrl, caption });
    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
  }

  async function deleteItem(formData: FormData) {
    'use server';
    const id = formData.get('id');
    await dbConnect();
    await Gallery.findByIdAndDelete(id);
    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002d56] mb-2 uppercase tracking-tighter">Gallery Management</h1>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Manage your institution's visual history</p>
        </div>
        <AddGalleryModal onAdd={addItem} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item: any) => (
          <div key={item._id.toString()} className="bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                 <a href={item.imageUrl} target="_blank" className="p-2 bg-white text-[#002d56] rounded-full hover:bg-[#ffcc00] transition-colors">
                    <ExternalLink size={18} />
                 </a>
                 <form action={deleteItem}>
                    <input type="hidden" name="id" value={item._id.toString()} />
                    <button type="submit" className="p-2 bg-white text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                       <Trash2 size={18} />
                    </button>
                 </form>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-black text-[#002d56] uppercase text-sm mb-2 line-clamp-1">{item.caption}</h3>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {new Date(item.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <ImageIcon size={32} className="text-slate-300" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest">No gallery items found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
