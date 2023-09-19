"use client"
export default function TableRow({ item }) {
    return (
        <tr className="border-[2px] border-dark py-5">
            <td className="px-5 border-[2px] border-dark"><input type="checkbox" value={item.id} /></td>
            <td className="w-1/12 pl-5">{item.id}</td>
            <td className="w-4/12">{item.name}</td>
            <td className="w-2/12">{item.category}</td>
            <td className="w-2/12">{item.value}</td>
            <td className="w-2/12">{item.level}</td>
            <td className="w-1/12">{item.visiblity ? "visible" : "hidden"}</td>
        </tr>
    )
}