import prisma from "@/app/helper/db"
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { username, password } = await request.json()
        const user = await prisma.user.findUnique({
            where: {
                username,
                AND: {
                    password
                }
            }
        })
        if (!user) {
            console.log(user)
            return NextResponse.json({
                status: "error",
                error: "Invalid Credentials"
            })
        }
        const token = sign({
            username: user.username,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC
        )

        const response = NextResponse.json({
            status: "success"
        })

        response.cookies.set(
            'krk',
            token,
            {
                httpOnly: true,
                sameSite: "strict",
                path: '/'
            }
        )

        return response

    }
    catch (error) {
        console.log(error)
    }
}