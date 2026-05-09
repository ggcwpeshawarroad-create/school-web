import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Teacher from '@/lib/models/Teacher';
import { auth } from '@/lib/auth';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id } = await params;
  const body = await req.json();
  const teacher = await Teacher.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(teacher);
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id } = await params;
  await Teacher.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
