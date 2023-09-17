"use client"
import Navbar from '../components/nav'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RootLayout({ children }) {
    const router = useRouter()
    const [isChecking, setisChecking] = useState(true);

    useEffect(() => {
        (async () => {
            const check = await CheckUser()
            if (!check.auth) {
                console.log("redirect")
                router.replace('/')
                return;
            }
            setisChecking(false)
        })()
    }, [router])

    if (isChecking) {
        return <p>loading</p>
    }

    return (
        <div className='bg-light min-h-screen'>
            <Navbar />
            {children}
        </div>
    )
}


async function CheckUser() {
    try {
        const rawData = await fetch("/api/checkAuth", {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            }
        })

        const res = await rawData.json()

        return res
    }
    catch (error) {
        console.log('error')
        return { auth: false }
    }
}