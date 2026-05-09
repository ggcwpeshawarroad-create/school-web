import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';
import PageEditor from '@/components/admin/PageEditor';
import { notFound } from 'next/navigation';

export default async function EditPage({ params }: { params: { id: string } }) {
  await dbConnect();
  const page = await DynamicPage.findById(params.id).lean();
  if (!page) notFound();

  return <PageEditor mode="edit" initialData={JSON.parse(JSON.stringify(page))} />;
}
