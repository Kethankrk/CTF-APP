"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import MarkdonwInput from "../components/markdonwInput";

export default function AddChallenge() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [inputMarkdown, setInputMarkdown] = useState('');

    console.log(errors)
    const submitChallenge = (data) => {
        let finalText = '';
        for (const i in inputMarkdown) {
            if (inputMarkdown[i] === '\n') {
                finalText += "  "
                finalText += inputMarkdown[i];
            }
            else {
                finalText += inputMarkdown[i];
            }
        }
        console.log({...data, description: finalText});
    }

    return (
        <div className="home flex flex-col items-center">
            <p className="text-white text-3xl font-bold mt-20">Create Challenge</p>
            <form className="mt-10 min-w-[800px] text-white" onSubmit={handleSubmit((data) => submitChallenge(data))}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium">Challenge name:</label>
                    <input type="text" {...register('challengeName', { required: true })} placeholder="Enter challenge name here." className="bg-dark py-1 px-2 rounded-md shadow-inner placeholder:text-sm" />
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-1 mt-10 w-1/2">
                        <label htmlFor="" className="font-medium">Category</label>
                        <select name="" id="" className="p-2 bg-dark rounded-md" {...register('category', { required: true })}>
                            <option >Programming</option>
                            <option>Fun</option>
                            <option>General</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 mt-10 w-1/2">
                        <label htmlFor="" className="font-medium">Level</label>
                        <select name="" id="" className="p-2 bg-dark rounded-md" {...register('level', { required: true })}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>
                <MarkdonwInput setInputMarkdown={setInputMarkdown} inputMarkdown={inputMarkdown} />
                <div className="flex flex-col gap-1 mt-10">
                    <label htmlFor="" className="font-semibold">Value</label>
                    <input type="text" placeholder="Challenge value." className="bg-dark py-1 px-2 rounded-md shadow-inner placeholder:text-sm" {...register('value', { required: true })} />
                </div>
                <div className="flex gap-1 mt-10">
                    <label htmlFor="" className="font-medium">Visibility</label>
                    <input type="checkbox" checked {...register('visiblity', { required: true })} />
                </div>
                <div className="flex justify-center">
                    <button className="font-semibold py-1 px-4 bg-yellow rounded-md mt-10 text-light">Submit</button>
                </div>
            </form>
        </div>
    )
}