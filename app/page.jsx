"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { useForm } from "react-hook-form"

export default function LoginPage() {
  const router = useRouter()
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
      router.replace('/home')
      return;
    }
  }


  return (
    <main className="flex justify-center items-center h-screen bg-light">
      <div className="w-1/3 border-black p-10 bg-dark rounded-[10px] auth-form">
        <p className="text-center font-bold text-yellow text-3xl mb-10">Login</p>
        <form onSubmit={handleSubmit((data) => handleLogin(data))} className="flex flex-col w-full gap-10 text-white">
          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold">Username</label>
            <input type="text" {...register("username", { required: true })} className="border border-yellow rounded-md bg-light py-1 px-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold">Password</label>
            <input type="password" {...register("password", { required: true })} className="border border-yellow rounded-md bg-light py-1 px-2" />
          </div>
          <div className="flex justify-center">
            <button className="bg-yellow px-6 py-1 rounded-md text-black font-medium text-sm">Submit</button>
          </div>
        </form >
        <p className="text-[12px] text-blue text-center mt-4"><Link href='/'>Forgot your password?</Link></p>
        <p className="text-[12px] text-blue text-center mt-2"><Link href='/register'>New here? Register</Link></p>
      </div>
    </main>
  )
}