import { useRef } from "react";
import DollarIcon from "../../../assets/images/icon-dollar.svg";

type BillProps = {
    bill: number | "";
    onChangeBill: (b: number | "") => void;
}

export function Bill({ bill, onChangeBill }: BillProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <label htmlFor="bill" className="text-xl text-grey-500">Bill</label>
            <div className="bg-grey-50 flex items-center text-3xl mt-2.5 mb-11.5 px-5.5 h-14.5 rounded-md border-2 border-transparent focus-within:border-green-400 cursor-pointer" onClick={() => inputRef.current?.focus()}>
                <img src={DollarIcon} className="h-5.5" />
                <input ref={inputRef} id="bill" type="number" min={0} value={bill} placeholder="0"
                    onChange={(e) => {
                        const value = e.target.value;
                        onChangeBill(value === "" ? "" : Number(value));
                    }}
                    className="flex-1 min-w-0 text-right text-green-900 cursor-pointer outline-none appearance-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
            </div>
        </>
    )
}