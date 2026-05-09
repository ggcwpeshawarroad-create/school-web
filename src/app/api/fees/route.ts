import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Fee from '@/lib/models/Fee';

export async function GET() {
  await dbConnect();
  const data = await Fee.find().sort({ order: 1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const data = await Fee.create(body);
  return NextResponse.json(data);
}
