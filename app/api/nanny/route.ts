// app/api/nanny/route.ts
export const runtime = 'edge';  // Add this line

export async function GET() {
  return new Response('Hello World');
}