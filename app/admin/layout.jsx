"use client"
import { useEffect, useState } from "react";
import AdminNav from "./components/adminNav";
import { useRouter } from 'next/navigation'
import LoadingPage from "../components/loadingPage";

export default function AdminLayout({ children }) {
    const router = useRouter()
    const [isChecking, setIsChecking] = useState(true)

    useEffect(() => {
        (async () => {
            const isAdmin = await checkAdmin()
            if (!isAdmin.admin) {
                router.replace('/home')
                return
            }
            setIsChecking(false)
        })()
    }, [router])

    if (isChecking) {
        return <LoadingPage />
    }

    return (
        <div className="bg-light h-min-screen">
            <AdminNav />
            {children}
        </div>
    )
}

async function checkAdmin() {
    try {
        const rawData = await fetch("/api/checkAdmin", {
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
        return { admin: false }
    }
}