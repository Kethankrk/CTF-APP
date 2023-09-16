"use client"
import { useForm } from "react-hook-form"


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
        <form onSubmit={handleSubmit((data) => handleRegister(data))} className="flex flex-col w-full gap-10">
            <div className="flex flex-col">
                <label htmlFor="">Username</label>
                <input {...register('username', { required: true })} className="border border-black bg-transparent" />
                {errors.username && <errorMsg message="username is required." />}
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input {...register('email', { required: true })} type="email" className="border border-black bg-transparent" />
                {errors.email && <p>Last name is required.</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input {...register('password', { required: true })} className="border border-black bg-transparent" />
                {errors.password && <p>Password is required.</p>}
            </div>
            <button>Register</button>
        </form>
    )
}


function errorMsg({ message }) {
    return <p className="text-sm text-red-600">{message}</p>
}