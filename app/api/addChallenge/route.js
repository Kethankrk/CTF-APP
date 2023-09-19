import prisma from "@/app/helper/db";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {
        const body = await request.json();
        if (!body) {
            return NextResponse.json({
                success: false
            })
        }

        const { challengeName, category, level, visiblity, description, value } = body;
        const valueInt = parseInt(value);

        const newChallenge = await prisma.challenge.create({
            data: {
                name: challengeName,
                category,
                level,
                description,
                visiblity,
                value: valueInt
            }
        })

        if (!newChallenge) {
            return NextResponse.json({
                success: false,
            })
        }

        return NextResponse.json({
            success: true
        });

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            error
        })
    }
}