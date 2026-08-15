import { Bill } from "./form-parts/Bill.tsx";
import { PeopleNumber } from "./form-parts/PeopleNumber.tsx";
import { SelecTip } from "./form-parts/SelectTip.tsx";

import { z } from "zod";
import { formSchema } from "../../schema/formSchema.ts";
import type { UseFormRegister, Control, FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";

type FormData = z.infer<typeof formSchema>;

type FormProps = {
    register: UseFormRegister<FormData>;
    control: Control<FormData>;
    setValue: UseFormSetValue<FormData>;
    watch: UseFormWatch<FormData>;
    errors: FieldErrors<FormData>;
};

export function Form({ register, control, setValue, watch, errors, }: FormProps) {
    return (
        <div className="mx-2.5">
            <Bill control={control} />
            <SelecTip register={register} setValue={setValue} watch={watch} />
            <PeopleNumber register={register} error={errors.people?.message} />
        </div>
    )
}