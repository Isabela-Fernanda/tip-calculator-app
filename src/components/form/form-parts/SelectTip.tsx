import { Controller, useFormContext } from "react-hook-form";

import type { z } from "zod";

import { formSchema } from "../../../schema/formSchema";

type FormData = z.infer<typeof formSchema>

const tipOptions = [5, 10, 15, 25, 50];

export function SelecTip() {
    const { control, setValue, watch } = useFormContext<FormData>();

    const tipSelected = watch("tip");
    const customTip = watch("customTip");

    const handleTipOption = (value: number) => {
        setValue("tip", value);
        setValue("customTip", "");
    }

    return (
        <>
            <label htmlFor="tip" className="text-xl tracking-wide text-grey-500">Select Tip %</label>

            <div className="mt-5.5 mb-11 grid grid-cols-2 gap-5 text-3xl">
                {tipOptions.map((item) => (
                    <button type="button" key={item}
                        onClick={() => handleTipOption(item)}
                        className={`h-15.5 px-3 py-2 rounded transition-colors duration-150 hover:bg-green-400/60 cursor-pointer ${tipSelected === item && customTip === "" ? "text-green-900 bg-green-400" : "text-white-0 bg-green-900"}`}>
                        {item}%
                    </button>
                ))}

                <Controller name="customTip" control={control} render={({ field }) => (
                    <input {...field} id="customTip" type="number" min={0} placeholder="Custom" value={field.value}
                        onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(value);
                            if (value === "") {
                                setValue("tip", "");
                                return
                            }
                            setValue("tip", Number(value));
                        }}
                        className="h-15 w-full px-3 py-2 rounded text-center text-green-900 bg-grey-50 outline-none border-2 border-transparent focus-within:border-green-400 focus-within:text-right appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]" />
                )}></Controller>
            </div >
        </>
    )
}
