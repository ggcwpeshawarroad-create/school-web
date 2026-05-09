import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const page = await DynamicPage.create(body);
    return NextResponse.json(page);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const pages = await DynamicPage.find({ isActive: true }).sort({ title: 1 });
    return NextResponse.json(pages);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
