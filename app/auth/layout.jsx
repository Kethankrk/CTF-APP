
export default function AuthLayout({ children }) {
    return (
        <main className="flex justify-center items-center h-screen bg-gray-500">
            <div className="w-1/3 border-[2px] border-black p-10">
                {children}
            </div>
        </main>
    )
}