import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admission from '@/lib/models/Admission';
import { auth } from '@/lib/auth';

export async function GET() {
  await dbConnect();
  const admissions = await Admission.find().sort({ order: 1, createdAt: -1 });
  return NextResponse.json(admissions);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const body = await req.json();
  const admission = await Admission.create(body);
  return NextResponse.json(admission, { status: 201 });
}
