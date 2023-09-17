import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verify } from "jsonwebtoken"

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
        const usr = verify(token.value, process.env.JWT_SEC)
        console.log(usr)

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