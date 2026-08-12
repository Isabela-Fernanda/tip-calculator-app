import { Bill } from "./form-parts/Bill.tsx";
import { PeopleNumber } from "./form-parts/PeopleNumber.tsx";
import { SelecTip } from "./form-parts/SelectTip.tsx";

type FormProps = {
    bill: number;
    setBill: (b: number) => void;
    selectedTip: number;
    setSelectedTip: (t: number) => void;
    peopleNumber: number;
    setPeopleNumber: (p: number) => void;
}

export function Form({bill, setBill, selectedTip, setSelectedTip, peopleNumber, setPeopleNumber,}: FormProps) {
    return (
        <>
            <Bill bill={bill} onChangeBill={setBill}/>
            <SelecTip tipSelected={selectedTip} onChangeTip={setSelectedTip}/>
            <PeopleNumber peopleNumber={peopleNumber} onChangePeopleNumber={setPeopleNumber}/>
        </>
    )
}