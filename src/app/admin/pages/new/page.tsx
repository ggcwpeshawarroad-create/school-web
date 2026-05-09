'use client';

import PageEditor from '@/components/admin/PageEditor';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NewPageInner() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || '';
  const title = searchParams.get('title') || '';

  const initialData = slug ? { title, slug, content: '', isActive: true } : undefined;
  const isSystemPage = !!slug;

  return <PageEditor mode="create" initialData={initialData} lockSlug={isSystemPage} />;
}

export default function NewPage() {
  return (
    <Suspense fallback={<div className="p-8 text-slate-400 font-bold uppercase tracking-widest">Loading...</div>}>
      <NewPageInner />
    </Suspense>
  );
}
