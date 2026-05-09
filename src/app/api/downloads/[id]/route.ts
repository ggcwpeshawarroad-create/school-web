import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Download from '@/lib/models/Download';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();
  const data = await Download.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const { id } = await params;
  await Download.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
