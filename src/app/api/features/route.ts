import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Feature from '@/lib/models/Feature';
import { auth } from '@/lib/auth';

export async function GET() {
  await dbConnect();
  const features = await Feature.find({ isActive: true }).sort({ order: 1 });
  return NextResponse.json(features);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const body = await req.json();
  const feature = await Feature.create(body);
  return NextResponse.json(feature, { status: 201 });
}
