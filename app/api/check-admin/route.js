// app/api/check-admin/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { password } = body;

  if (password === process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: true });
  } else {
    return NextResponse.json({ ok: false });
  }
}
