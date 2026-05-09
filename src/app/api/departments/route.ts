import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Department from '@/lib/models/Department';

export async function GET() {
  await dbConnect();
  const data = await Department.find().sort({ order: 1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const data = await Department.create(body);
  return NextResponse.json(data);
}
