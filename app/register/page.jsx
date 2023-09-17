"use client"
import { useForm } from "react-hook-form"
import Link from "next/link"


export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function handleRegister(data) {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const finalRes = await res.json();
        if (finalRes.status == "error") {
            alert(finalRes.error)
        }
        else {
            console.log(finalRes)
        }
    }

    return (
        <main className="flex justify-center items-center h-screen bg-light">
            <div className="w-1/3 bg-dark rounded-[10px] p-10 auth-form">
                <p className="text-center font-bold text-yellow text-3xl mb-10">Register</p>
                <form onSubmit={handleSubmit((data) => handleRegister(data))} className="flex flex-col w-full gap-10 text-white">
                    <div className="flex flex-col">
                        <label htmlFor="">Username</label>
                        <input {...register('username', { required: true })} className="border border-yellow rounded-md py-1 px-2 bg-light" />
                        {errors.username && <errorMsg message="username is required." />}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input {...register('email', { required: true })} type="email" className="border border-yellow rounded-md py-1 px-2 bg-light" />
                        {errors.email && <p>Last name is required.</p>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input {...register('password', { required: true })} className="border border-yellow rounded-md py-1 px-2 bg-light" />
                        {errors.password && <p>Password is required.</p>}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-yellow px-6 py-1 rounded-md text-black font-medium text-sm">Submit</button>
                    </div>
                </form>
                <p className="text-[12px] text-blue text-center mt-2"><Link href='/'>Already have an account? Login.</Link></p>
            </div>
        </main>
    )
}


function errorMsg({ message }) {
    return <p className="text-sm text-red-600">{message}</p>
}