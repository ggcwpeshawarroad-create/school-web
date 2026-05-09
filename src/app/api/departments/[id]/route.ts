import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Department from '@/lib/models/Department';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();
  const data = await Department.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const { id } = await params;
  await Department.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
