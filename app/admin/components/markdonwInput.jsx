import Image from "next/image"

export default function MarkdonwInput() {
    return (
        <div className="w-full bg-dark p-2 rounded-[10px] mt-10">
            <div className="flex gap-5 justify-end py-2 px-5">
                <Image src='/B.svg' height={10} width={10} className="fill-white"/>
                <Image src='/H.svg' height={10} width={10}/>
                <Image src='/code.svg' height={20} width={20}/>
            </div>
            <textarea className="w-full min-h-[200px] rounded-[6px] bg-dark border-[2px] border-light p-3" placeholder="Descrption"></textarea>
        </div>
    )
}