import MarkdonwInput from "../components/markdonwInput";

export default function AddChallenge() {
    return (
        <div className="home flex flex-col items-center">
            <p className="text-white text-3xl font-bold mt-20">Create Challenge</p>
            <div className="mt-10 min-w-[500px] text-white">
                <div className="flex flex-col">
                    <label htmlFor="" className="font-medium">Challenge name:</label>
                    <input type="text" placeholder="Enter challenge name here." className="bg-dark py-1 px-2 rounded-md shadow-inner placeholder:text-sm" />
                </div>
                <MarkdonwInput />
            </div>
        </div>
    )
}