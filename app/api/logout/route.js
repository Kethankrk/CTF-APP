import { NextResponse } from "next/server";
export async function GET(request) {

    const response = NextResponse.json({
        success: true,
    })
    response.cookies.delete('krk')

    return response;
}