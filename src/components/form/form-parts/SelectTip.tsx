import { useState } from "react";

const tipOptions = [5, 10, 15, 25, 50];

type SelectTipProps = {
    tipSelected: number;
    onChangeTip: (t: number) => void;
}

export function SelecTip({ tipSelected, onChangeTip }: SelectTipProps) {
    const [showCustom, setShowCustom] = useState(false);

    return (
        <>
            <label htmlFor="value">Selec Tip %</label>
            <div>
                {tipOptions.map((item) => (
                    <button key={item} onClick={() => { setShowCustom(false); onChangeTip(item); }} className={`px-3 py-2 rounded transition-colors duration-150 hover:text-white cursor-pointer ${tipSelected === item ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                        {item}%
                    </button>
                ))}
                <button onClick={() => { setShowCustom(true); onChangeTip(0); }} className={`px-3 py-2 rounded transition-colors duration-150 hover:text-white cursor-pointer ${showCustom ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}> Custom </button>

                {showCustom && (<input type="number" placeholder="Custom %" onChange={(e) => onChangeTip(Number(e.target.value))} className="border p-2 rounded w-20" />)}
            </div >
        </>
    )
}
