import { useRef } from "react";
import { useFormContext } from "react-hook-form";

import type { z } from "zod";

import { formSchema } from "../../../schema/formSchema";
import PersonIcon from "../../../assets/images/icon-person.svg";

type FormData = z.infer<typeof formSchema>

export function PeopleNumber() {
    const { register, formState: { errors }, } = useFormContext<FormData>();
    const error = errors.people?.message;

    const inputRef = useRef<HTMLInputElement>(null);
    const isInvalid = !!error;

    const peopleField = register("people", { setValueAs: (value) => value === "" ? "" : Number(value), });

    return (
        <>
            <div className="flex items-center justify-between">
                <label htmlFor="people" className="text-xl text-grey-500">Number of People</label>

                {error && (
                    <span className="text-red-400">
                        {error}
                    </span>
                )}
            </div>

            <div onClick={() => inputRef.current?.focus()}
                className={`bg-grey-50 flex items-center text-3xl my-2.5 px-5 h-14.5 rounded-md border-2 border-transparent focus-within:border-green-400 cursor-pointer ${isInvalid ? "border-red-600" : "border-transparent focus-within:border-green-400"}`}>

                <img src={PersonIcon} className="h-5.5" />

                <input id="people" type="number" placeholder="0" min={0} {...peopleField}
                    ref={(e) => {
                        peopleField.ref(e);
                        inputRef.current = e;
                    }}
                    className="flex-1 min-w-0 text-right text-green-900 cursor-pointer outline-none appearance-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
            </div>
        </>
    )

}