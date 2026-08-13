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
            <label htmlFor="value" className="text-xl text-grey-500">Bill</label>
            <div className="bg-grey-50 flex items-center justify-between text-3xl my-2.5 px-6 h-14.5 rounded-md border-2 border-transparent focus-within:border-green-500 cursor-pointer" onClick={() => inputRef.current?.focus()}>
                <img src={DollarIcon} className="h-5" />
                <input ref={inputRef} id="bill" type="number" value={bill} onChange={(e) => {
                    const value = e.target.value;
                    onChangeBill(value === "" ? "" : Number(value));
                }} placeholder="0" className="text-right  text-green-900 cursor-pointer outline-none appearance-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"/>
            </div>
        </>
    )
}