import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Feature from '@/lib/models/Feature';
import { auth } from '@/lib/auth';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id } = await params;
  const body = await req.json();
  const feature = await Feature.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(feature);
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id } = await params;
  await Feature.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
