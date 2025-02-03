// app/api/nanny/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello World' });
}