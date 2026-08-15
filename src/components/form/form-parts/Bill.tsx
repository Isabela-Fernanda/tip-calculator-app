import { useRef } from "react";
import { Controller } from "react-hook-form";

import type { z } from "zod";
import type { Control } from "react-hook-form";

import { formSchema } from "../../../schema/formSchema";
import DollarIcon from "../../../assets/images/icon-dollar.svg";

type FormData = z.infer<typeof formSchema>

type BillProps = {
    control: Control<FormData>;
}

export function Bill({ control }: BillProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const formatCurrency = (value: number) => new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    }).format(value);

    return (
        <>
            <label htmlFor="bill" className="text-xl text-grey-500">Bill</label>

            <div className="bg-grey-50 flex items-center text-3xl mt-2.5 mb-11.5 px-5.5 h-14.5 rounded-md border-2 border-transparent focus-within:border-green-400 cursor-pointer" onClick={() => inputRef.current?.focus()}>
                <img src={DollarIcon} className="h-5.5" />

                <Controller name="bill" control={control} render={({ field }) => (
                    <input ref={(e) => {
                        field.ref(e);
                        inputRef.current = e;
                    }} id="bill" type="text" inputMode="numeric" value={field.value === 0 ? "" : formatCurrency(field.value)} placeholder="0.00" onChange={(e) => {
                        const raw = e.target.value.replace(/\D/g, "");
                        if (raw === "") {
                            field.onChange(0);
                            return;
                        }

                        const number = parseFloat(raw) / 100;
                        field.onChange(number)
                    }} onBlur={field.onBlur}
                        className="flex-1 min-w-0 text-right text-green-900 cursor-pointer outline-none appearance-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]" />
                )}
                />
            </div>
        </>
    );
}