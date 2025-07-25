// Temporary in-memory store
let uploadedImages = [];

export async function GET() {
  return new Response(JSON.stringify(uploadedImages), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const { url } = await req.json();
  if (url) {
    uploadedImages.push(url);
  }
  return new Response(JSON.stringify({ success: true, uploadedImages }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
