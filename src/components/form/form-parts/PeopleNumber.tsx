import { useRef } from "react";
import PersonIcon from "../../../assets/images/icon-person.svg";

type PeopleNumberProps = {
    peopleNumber: number | "";
    onChangePeopleNumber: (p: number | "") => void;
}

export function PeopleNumber({ peopleNumber, onChangePeopleNumber }: PeopleNumberProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const isInvalid = peopleNumber === 0;
    return (
        <>
            <label htmlFor="value" className="text-xl text-grey-500">Number of People</label>
            {isInvalid && (
                <span className="text-red-400">
                    Can't be zero
                </span>
            )}
            <div className="bg-grey-50 flex items-center justify-between text-3xl my-2.5 px-6 h-14.5 rounded-md border-2 border-transparent focus-within:border-green-500 cursor-pointer" onClick={() => inputRef.current?.focus()}>
                <img src={PersonIcon} className="h-5" />
                <input id="people" type="number" value={peopleNumber} onChange={(e) => {
                    const value = e.target.value;
                    onChangePeopleNumber(value === "" ? "" : Number(value));
                }} placeholder="0" className={`text-right  text-green-900 cursor-pointer outline-none appearance-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] ${isInvalid ? "border-red-400" : "border-transparent focus-within:border-green-400"
                    }`} />
            </div>
        </>
    )

}