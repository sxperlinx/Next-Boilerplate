import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
	return NextResponse.json('This is an API route!');
}
