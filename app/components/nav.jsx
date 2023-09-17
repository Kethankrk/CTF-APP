import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex justify-between items-center h-[80px] px-10 navbar relative z-10">
            <p className="text-3xl font-bold text-yellow">IEDC-CTF</p>
            <ul className="flex gap-10 text-white">
                <li>Challenges</li>
                <li>Scoreboard</li>
            </ul>
            <div className="flex gap-5">
                <div className="flex gap-1">
                    <Image src="/usr.svg" width={25} height={25} />
                    <p className="text-white">Profile</p>
                </div>
                <div>
                    <p className="text-yellow">Logout</p>
                </div>
            </div>
        </div>
    )
}