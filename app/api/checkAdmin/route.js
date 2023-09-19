import prisma from "@/app/helper/db";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookeStore = cookies()

    const token = cookeStore.get('krk')

    if (!token) {
        return NextResponse.json({
            admin: false
        })
    }
    try {
        const data = verify(token.value, process.env.JWT_SEC)
        if (data.isAdmin) {
            const usr = await prisma.user.findUnique({
                where: {
                    username: data.username
                }
            })

            if (!usr.isAdmin) {
                const response = NextResponse.json({
                    admin: false
                })
                response.cookies.delete('krk');
                return response;
            }

            return NextResponse.json({
                admin: true
            })
        }
    }
    catch (error) {
        return NextResponse.json({
            admin: false
        })
    }
}