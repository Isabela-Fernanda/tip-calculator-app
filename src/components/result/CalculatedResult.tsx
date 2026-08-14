type CalculatedResultProps = {
    bill: number | "";
    selectedTip: number | "";
    peopleNumber: number | "";
    onReset: () => void;
}

export function CalculatedResult({ bill, selectedTip, peopleNumber, onReset }: CalculatedResultProps) {
    const billValue = bill === "" ? 0 : bill;
    const tipValue = selectedTip === "" ? 0 : selectedTip;
    const peopleValue = peopleNumber === "" ? 0 : peopleNumber;

    const tip = calcTip(billValue, tipValue);

    let billPerPerson = 0;
    let tipPerPerson = 0;

    if (peopleValue > 0) {
        billPerPerson = calcPerPerson(billValue, peopleValue);
        tipPerPerson = calcPerPerson(tip, peopleValue);
    }

    return (
        <>
            <div className="bg-green-900 mt-11 pt-13 pb-7.5 px-7.5 rounded-2xl text-xl tracking-wide text-white-0">
                <div className="flex justify-between items-center">
                    <p>Tip Amount <br /><span className="text-grey-500 text-sm">/ person</span></p>
                    <p className="text-green-400 text-[40px] tracking-tight">${tipPerPerson.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <p>Total <br /><span className="text-grey-500 text-sm">/ person</span></p>
                    <p className="text-green-400 text-[40px] tracking-tight">${(billPerPerson + tipPerPerson).toFixed(2)}</p>
                </div>
                <button onClick={onReset}
                    className="bg-green-400 rounded-xl mt-11 h-15.5 w-full text-2xl transition-colors duration-150 cursor-pointer hover:brightness-150">RESET</button>
            </div>
        </>
    )
}

function calcTip(bill: number, selectedTip: number): number {
    return bill * selectedTip / 100;
}


function calcPerPerson(value: number, peopleNumber: number) {
    return value / peopleNumber;
}

