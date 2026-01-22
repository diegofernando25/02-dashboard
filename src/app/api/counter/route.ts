import { NextResponse } from "next/server";

export async function GET(request: Request) {

    console.log({ method: request.method})

    return NextResponse.json({ 
        method: 'Get',
        count: 100,
    });

}
export async function POST(request: Request) {

    console.log({ method: request.method})

    return NextResponse.json({ 
        method: 'Post',
        count: 250,
    });

}