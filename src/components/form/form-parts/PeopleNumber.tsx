import { Controller, useFormContext } from "react-hook-form";
import type { z } from "zod";

import { formSchema } from "../../../schema/formSchema";
import PersonIcon from "../../../assets/images/icon-person.svg";

type FormData = z.infer<typeof formSchema>

export function PeopleNumber() {
    const { control, setFocus, formState: { errors }, } = useFormContext<FormData>();
    const error = errors.people?.message;

    const isInvalid = !!error;

    return (
        <>
            <div className="flex items-center justify-between">
                <label htmlFor="people" className="text-xl text-grey-500 sm:text-lg sm:tracking-tighter">Number of People</label>

                {error && (
                    <span className="text-red-400">
                        {error}
                    </span>
                )}
            </div>

            <div onClick={() => setFocus("people")}
                className={`bg-grey-50 flex items-center text-3xl my-2.5 px-5 h-14.5 rounded-md border-2 cursor-pointer ${isInvalid ? "border-red-400" : "border-transparent focus-within:border-green-400"} sm:mt-0 sm:mb-0 sm:px-4 sm:text-2xl`}>

                <img src={PersonIcon} className="h-5.5 sm:h-4.5" />

                <Controller name="people" control={control} render={({ field }) => (
                    <input {...field}
                    id="people" type="number" min={0} placeholder="0" value={field.value === "" ? "" : field.value}
                    onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === "" ? "" : Number(value));
                    }}
                    className="flex-1 min-w-0 text-right text-green-900 cursor-pointer outline-none appearance-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
                )}></Controller>
            </div>
        </>
    )
}