import prisma from "@/app/helper/db"
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { username, password } = await request.json()
        let usrCount = 0;

        if (username) {
            usrCount = await prisma.user.count({
                where: {
                    username,
                    AND: {
                        password
                    }
                }
            })
        }
        if (!usrCount) {
            return NextResponse.json({
                status: "error",
                error: "Invalid Credentials"
            })
        }
        const token = sign({
            username
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