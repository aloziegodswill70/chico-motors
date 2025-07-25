// app/api/upload/route.js
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file'); // this is a Blob from the formData

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  // Convert the file Blob to a buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Cloudinary upload via upload_stream
  try {
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'derealchicocars' }, // optional folder
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      const readable = new Readable();
      readable._read = () => {};
      readable.push(buffer);
      readable.push(null);
      readable.pipe(uploadStream);
    });

    const uploaded = await uploadPromise;
    return NextResponse.json({ url: uploaded.secure_url });
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
