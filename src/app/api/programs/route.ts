import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Program from '@/lib/models/Program';

export async function GET() {
  await dbConnect();
  const data = await Program.find().sort({ order: 1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const data = await Program.create(body);
  return NextResponse.json(data);
}
