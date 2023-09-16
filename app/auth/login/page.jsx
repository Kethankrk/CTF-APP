"use client"

import { useForm } from "react-hook-form"

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function handleLogin(data) {
        const rawRes = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const res = await rawRes.json()

        if (res.status == "error") {
            alert(res.error)
        }
        else {
            console.log(res.status)
        }
    }


    return (
        <form onSubmit={handleSubmit((data) => handleLogin(data))} className="flex flex-col w-full gap-10">
            <div className="flex flex-col">
                <label htmlFor="">Username</label>
                <input type="text" {...register("username", { required: true })} className="border border-black bg-transparent" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input type="password" {...register("password", { required: true })} className="border border-black bg-transparent" />
            </div>
            <button>Login</button>
        </form >
    )
}