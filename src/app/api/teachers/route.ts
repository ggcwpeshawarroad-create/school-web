import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Teacher from '@/lib/models/Teacher';
import { auth } from '@/lib/auth';

export async function GET() {
  await dbConnect();
  const teachers = await Teacher.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
  return NextResponse.json(teachers);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const body = await req.json();
  const teacher = await Teacher.create(body);
  return NextResponse.json(teacher, { status: 201 });
}
