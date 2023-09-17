import Image from "next/image";

export default function LoadingPage() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-light">
            <Image src='/loading.svg' height={60} width={60} />
            <p className="text-white">Loading...</p>
        </main>
    )
}