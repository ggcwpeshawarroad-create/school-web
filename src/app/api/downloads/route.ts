import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Download from '@/lib/models/Download';

export async function GET() {
  await dbConnect();
  const data = await Download.find().sort({ order: 1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const data = await Download.create(body);
  return NextResponse.json(data);
}
