import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"
import prisma from "@/app/helper/db"


export async function POST(request) {
    try {
        const { email, username, password } = await request.json()

        const checkUsername = await prisma.user.count({
            where: {
                username
            }
        })

        const checkEmail = await prisma.user.count({
            where: {
                email
            }
        })

        if (checkUsername) {
            console.log(checkUsername);
            return NextResponse.json({
                status: "error",
                error: `Username already exists!`
            })
        }

        if (checkEmail) {
            console.log(checkEmail);
            return NextResponse.json({
                status: "error",
                error: `Email already exists!`
            })
        }

        const usr = await prisma.user.create({
            data: {
                email,
                password,
                username
            }
        })

        const token = sign({
            username: usr.username,
            isAdmin: usr.isAdmin
        },
            process.env.JWT_SEC,
        )
        const response = NextResponse.json({ status: "success" })

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