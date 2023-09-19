import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verify } from "jsonwebtoken"
import prisma from '@/app/helper/db'

export async function GET(request) {
    const cookieStore = cookies()
    const token = cookieStore.get('krk')

    console.log(token)

    if (!token) {
        return NextResponse.json({
            auth: false
        })
    }

    try {
        const data = verify(token.value, process.env.JWT_SEC)

        const user = await prisma.user.findUnique({
            where: {
                username: data.username
            }
        })

        if (!user) {
            const response = NextResponse.json({
                auth: false
            });
            response.cookies.delete('krk');
            return response;
        }

        return NextResponse.json({
            auth: true
        })
    }
    catch (error) {
        console.log(`Error while verifying token: ${error.name}`)
        return NextResponse.json({
            auth: false
        })
    }

}