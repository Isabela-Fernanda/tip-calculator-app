import { useState } from "react";

const tipOptions = [5, 10, 15, 25, 50];

type SelectTipProps = {
    tipSelected: number | "";
    onChangeTip: (t: number | "") => void;
}

export function SelecTip({ tipSelected, onChangeTip }: SelectTipProps) {
    const [showCustom, setShowCustom] = useState(false);

    return (
        <>
            <label htmlFor="tip" className="text-xl tracking-wide text-grey-500">Select Tip %</label>
            <div className="mt-5.5 mb-11 grid grid-cols-2 gap-5 text-3xl">
                {tipOptions.map((item) => (
                    <button type="button" key={item}
                        onClick={() => { setShowCustom(false); onChangeTip(item); }}
                        className={`h-15.5 px-3 py-2 rounded transition-colors duration-150 hover:bg-green-400/60 cursor-pointer ${tipSelected === item && !showCustom ? "text-green-900 bg-green-400/60" : "text-white-0 bg-green-900"}`}>
                        {item}%
                    </button>
                ))}

                {showCustom ? (
                    <input id="tip" type="number" min={0} value={tipSelected} placeholder="Custom %" autoFocus onChange={(e) => {
                        const value = e.target.value;
                        if (value === "") {
                            onChangeTip("");
                            return;
                        }
                        const number = Number(value);
                        if (number >= 0) {
                            onChangeTip(number);
                            return;
                        }
                    }}
                        className="h-15 w-full px-3 py-2 rounded text-right text-green-900 bg-grey-200 outline-none border-2 border-green-400 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"/>) : (<button
                    type="button"
                    onClick={() => {
                        setShowCustom(true);
                        onChangeTip("");
                    }}
                    className="h-15 px-3 py-2 rounded bg-grey-50 text-green-900 transition-colors duration-150 hover:bg-green-400/60 cursor-pointer"
                >
                    Custom
                </button>
                )}
            </div >
        </>
    )
}
