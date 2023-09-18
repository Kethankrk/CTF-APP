"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function MarkdonwInput() {
    const [selectedText, setSelectedText] = useState({
        start: 0,
        end: 0,
        text: ''
    })
    const [inputText, setInputText] = useState('')
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
                deco = '```'
                break;

        }
        const editedText = `${inputText.slice(0, start)}${deco}${text}${deco}${inputText.slice(end)}`
        setInputText(editedText)
        setSelectedText({
            start: 0,
            end: 0,
            text: ''
        })
    }
    return (
        <div className="w-full bg-dark p-2 rounded-[10px] mt-10">
            <div className="flex gap-5 justify-end py-2 px-5">
                <Image src='/B.svg' height={10} width={10} name='bold' className="fill-white" onClick={(event) => handleDcoration(event.target.name)} />
                <Image src='/H.svg' height={10} width={10} />
                <Image src='/code.svg' height={20} width={20} name='code' onClick={(e) => handleDcoration(e.target.name)}/>
            </div>
            <textarea ref={mdInput} className="w-full min-h-[200px] rounded-[6px] bg-dark border-[2px] border-light p-3" placeholder="Descrption" onSelect={(event) => handleSelect(event)} onChange={(event) => setInputText(event.target.value)} value={inputText}></textarea>
        </div>
    )
}