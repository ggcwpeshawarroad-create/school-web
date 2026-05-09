import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Fallback image if local artifact is not found
    const fallbackUrl = 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1920';

    return NextResponse.redirect(fallbackUrl);
  } catch (error) {
    return new NextResponse('Error loading image', { status: 500 });
  }
}
