import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
  try {
    // Check for required environment variables
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Missing Cloudinary environment variables');
      return NextResponse.json({ 
        error: 'Cloudinary configuration is incomplete. Please check your environment variables.' 
      }, { status: 500 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary using a promise to handle the stream
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'school-web-gallery',
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary callback error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      
      uploadStream.end(buffer);
    }) as any;
    
    console.log('Upload successful:', result.secure_url);
    return NextResponse.json({ url: result.secure_url });
  } catch (error: any) {
    console.error('Comprehensive upload error:', error);
    return NextResponse.json({ 
      error: 'Upload failed', 
      details: error.message || 'Unknown error' 
    }, { status: 500 });
  }
}
