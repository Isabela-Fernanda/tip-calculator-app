import { Bill } from "./form-parts/Bill.tsx";
import { PeopleNumber } from "./form-parts/PeopleNumber.tsx";
import { SelecTip } from "./form-parts/SelectTip.tsx";

type FormProps = {
    onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
};

export function Form({ onSubmit }: FormProps) {
    return (
        <form onSubmit={onSubmit} className="mx-2.5 sm:px-2 sm:py-3">
            <Bill />
            <SelecTip />
            <PeopleNumber />
        </form>
    )
}