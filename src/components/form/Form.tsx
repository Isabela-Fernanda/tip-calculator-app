import { Bill } from "./form-parts/Bill.tsx";
import { PeopleNumber } from "./form-parts/PeopleNumber.tsx";
import { SelecTip } from "./form-parts/SelectTip.tsx";

export function Form() {
    return(
        <>
            <Bill />
            <SelecTip />
            <PeopleNumber />
        </>
    )
}