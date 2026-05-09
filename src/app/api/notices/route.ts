import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Notice from '@/lib/models/Notice';
import { auth } from '@/lib/auth';

export async function GET() {
  await dbConnect();
  const notices = await Notice.find({ isActive: true }).sort({ date: -1, createdAt: -1 });
  return NextResponse.json(notices);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const body = await req.json();
  const notice = await Notice.create(body);
  return NextResponse.json(notice, { status: 201 });
}
