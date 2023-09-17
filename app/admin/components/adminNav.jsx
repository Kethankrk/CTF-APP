import LogoutBtn from "@/app/components/logoutBtn";
import Link from "next/link";
import Image from "next/image";

export default function AdminNav() {
    return (
        <nav className="flex justify-between items-center h-[80px] px-10 navbar relative z-10">
            <p className="text-3xl font-bold text-yellow">IEDC-CTF</p>
            <ul className="flex gap-10 text-white">
                <li><Link href='/admin'>Challenges</Link></li>
                <li><Link href='/admin/scoreboard'>Scoreboard</Link></li>
                <li><Link href='/admin/statistics'>Statistics</Link></li>
                <li><Link href='/admin/users'>Users</Link></li>
                <li><Link href='/admin/config'>Config</Link></li>
            </ul>
            <div className="flex gap-5">
                <div className="flex gap-1">
                    <Image src="/usr.svg" width={20} height={20} />
                    <p className="text-white">Profile</p>
                </div>
                <LogoutBtn />
            </div>
        </nav>
    )
}