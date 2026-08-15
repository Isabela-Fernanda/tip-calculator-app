type CalculatedResultProps = {
    bill: number;
    selectedTip: number | "";
    peopleNumber: number | "";
    onReset: () => void;
}

export function CalculatedResult({ bill, selectedTip, peopleNumber, onReset }: CalculatedResultProps) {
    const tipValue = selectedTip === "" ? 0 : selectedTip;
    const tip = calcTip(bill, tipValue);

    let billPerPerson = 0;
    let tipPerPerson = 0;

    if (!!peopleNumber) {
        billPerPerson = calcPerPerson(bill, peopleNumber);
        tipPerPerson = calcPerPerson(tip, peopleNumber);
    }

    return (
        <>
            <div className="bg-green-900 mt-11 pt-13 pb-7.5 px-7.5 rounded-2xl text-xl tracking-wide text-white-0 sm:mt-0 sm:pt-13 sm:px-10 sm:pb-0 sm:text-base">
                <div className="flex justify-between items-center">
                    <p>Tip Amount <br /><span className="text-grey-500 text-sm">/ person</span></p>
                    <p className="text-green-400 text-[40px] tracking-tight lg:text-5xl">${tipPerPerson.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center mt-8 lg:mt-12">
                    <p>Total <br /><span className="text-grey-500 text-sm">/ person</span></p>
                    <p className="text-green-400 text-[40px] tracking-tight lg:text-5xl">${(billPerPerson + tipPerPerson).toFixed(2)}</p>
                </div>
                <button onClick={onReset}
                    className="bg-green-400 rounded-xl mt-11 h-15.5 w-full text-2xl transition-colors duration-150 cursor-pointer hover:brightness-150 sm:mt-33 sm:rounded-lg sm:h-12 sm:text-xl sm:text-green-900">RESET</button>
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

