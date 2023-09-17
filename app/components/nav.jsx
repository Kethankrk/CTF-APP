import Image from "next/image"
import Link from "next/link"
import LogoutBtn from "./logoutBtn"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-[80px] px-10 navbar relative z-10">
            <p className="text-3xl font-bold text-yellow">IEDC-CTF</p>
            <ul className="flex gap-10 text-white">
                <li><Link href='/home'>Challenges</Link></li>
                <li><Link href='/home/scoreboard'>Scoreboard</Link></li>
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