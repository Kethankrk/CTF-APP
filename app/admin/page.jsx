import Link from "next/link"
import prisma from "../helper/db"
import TableRow from "./components/tableRow"
import Image from "next/image"


export default async function AdminChallenges() {
    const data = await prisma.challenge.findMany()
    return (
        <div className="admin-challenges">
            <div className="flex justify-center">
                <Link href="/admin/add-challenges" className="flex flex-col items-center mt-20 w-fit">
                    <Image src="/add.svg" height={40} width={40} />
                    <p className="text-yellow text-3xl font-bold">Challenges</p>
                </Link>
            </div>
            <div className="flex justify-center mt-12 text-white">
                <table className="border-collapse w-[90%] challenge-table">
                    <tbody>
                        <tr className="border-[2px] border-dark">
                            <th className="px-5 text-left"></th>
                            <th className="w-1/12 pl-5 text-left">ID</th>
                            <th className="w-3/12 text-left">Name</th>
                            <th className="w-2/12 text-left">Category</th>
                            <th className="w-2/12 text-left">Value</th>
                            <th className="w-2/12 text-left">Type</th>
                            <th className="w-2/12 text-left">Status</th>
                        </tr>
                        {data.map((item) => (
                            <TableRow item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}