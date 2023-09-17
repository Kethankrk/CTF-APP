"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
export default function LogoutBtn() {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            const rawRes = await fetch('/api/logout', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const res = await rawRes.json();
            if (!res.success) {
                alert('error while logging out')
            }
            router.replace('/')
        }
        catch (error) {
            alert('error while logging out')
        }
    }
    return (
        <button onClick={handleLogout}>
            <div className="flex gap-1">
                <p className="text-yellow">Logout</p>
                <Image src="/logout.svg" width={20} height={20} />
            </div>
        </button>
    )
}