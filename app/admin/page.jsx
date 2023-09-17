export default function AdminChallenges() {
    return (
        <div className="admin-challenges">
            <div className="flex justify-center mt-28 text-white">
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
                        <tr className="border-[2px] border-dark py-5">
                            <td className="px-5 border-[2px] border-dark"><input type="checkbox" /></td>
                            <td className="w-1/12 pl-5">ID</td>
                            <td className="w-4/12">Name</td>
                            <td className="w-2/12">Category</td>
                            <td className="w-2/12">Value</td>
                            <td className="w-2/12">Type</td>
                            <td className="w-1/12">Status</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}