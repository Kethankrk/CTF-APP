"use client"
import Image from "next/image"
import { useRef, useState } from "react"

export default function MarkdonwInput({ inputMarkdown, setInputMarkdown }) {
    const [selectedText, setSelectedText] = useState({
        start: 0,
        end: 0,
        text: ''
    })

    const mdInput = useRef(null)

    const handleSelect = (event) => {
        const end = event.target.selectionEnd;
        const start = event.target.selectionStart;
        if (start != end) {
            const text = mdInput.current.value.slice(start, end);
            setSelectedText({
                start,
                end,
                text
            });
        }
    }
    const handleDcoration = (item) => {
        const { start, end, text } = selectedText
        if (start == end) return;
        let deco = '';
        switch (item) {
            case 'bold':
                deco = '**'
                break;
            case 'italic':
                deco = '*'
                break;
            case 'underline':
                deco = "_"
                break;
            case 'code':
                deco = '\n```\n'
                break;

        }
        const editedText = `${inputMarkdown.slice(0, start)}${deco}${text}${deco}${inputMarkdown.slice(end)}`
        setInputMarkdown(editedText)
        setSelectedText({
            start: 0,
            end: 0,
            text: ''
        })
    }

    // const handleEnter = (key) => {
    //     if (key.keyCode == 13) {
    //         key.preventDefault();
    //         const location = key.target.selectionEnd;
    //         const currentValue = mdInput.current.value;
    //         const newValue =
    //             currentValue.substring(0, location) +
    //             '  \n' +
    //             currentValue.substring(location);

    //         mdInput.current.value = newValue;
    //         mdInput.current.selectionStart = mdInput.current.selectionEnd = location + 3;
    //         setInputMarkdown(newValue)

    //     }
    // }

    return (
        <div className="w-full bg-dark p-2 rounded-[10px] mt-10">
            <div className="flex gap-5 justify-end py-2 px-5">
                <Image src='/B.svg' height={100} width={100} name='bold' className="h-8 w-fit p-2 rounded-md bg-light hover:scale-110 transition-transform" onClick={(event) => handleDcoration(event.target.name)} />
                <Image src='/H.svg' height={100} width={100} name='heading' className="h-8 w-fit p-2 rounded-md bg-light hover:scale-110 transition-transform" onClick={(event) => handleDcoration(event.target.name)} />
                <Image src='/U.svg' height={100} width={100} name='underline' className="h-8 w-fit p-2 rounded-md bg-light hover:scale-110 transition-transform" onClick={(event) => handleDcoration(event.target.name)} />
                <Image src='/link.svg' height={100} width={100} name='link' className="h-8 w-fit p-2 rounded-md bg-light hover:scale-110 transition-transform" onClick={(event) => handleDcoration(event.target.name)} />
                <Image src='/img.svg' height={100} width={100} name='img' className="h-8 w-fit p-2 rounded-md bg-light hover:scale-110 transition-transform" onClick={(event) => handleDcoration(event.target.name)} />
                <Image src='/code.svg' height={100} width={100} name='code' className="h-8 w-fit p-2 rounded-md bg-light hover:scale-110 transition-transform" onClick={(event) => handleDcoration(event.target.name)} />
            </div>
            <textarea required ref={mdInput} className="w-full min-h-[300px] rounded-[6px] bg-dark border-[2px] border-light p-3" placeholder="Descrption" onSelect={(event) => handleSelect(event)} onChange={(event) => setInputMarkdown(event.target.value)} value={inputMarkdown} ></textarea>
        </div>
    )
}