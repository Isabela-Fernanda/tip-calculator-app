type CalculatedResultProps = {
    bill: number | "";
    selectedTip: number | "";
    peopleNumber: number | "";
}

export function CalculatedResult({ bill, selectedTip, peopleNumber }: CalculatedResultProps) {
    if (!bill || !selectedTip || !peopleNumber) {
        return <p>Preencha todos os campos</p>
    }

    const tip = calcTip(bill, selectedTip);
    return (
        <>
            <div  className="bg-green-900 mt-11 pt-13 pb-7.5 px-7.5 rounded-2xl text-xl tracking-wide text-white-0">
                <div className="flex justify-between items-center">
                    <p>Tip Amount <br/><span className="text-grey-500 text-sm">/ person</span></p>
                    <p className="text-green-400 text-[40px] tracking-tight">${calcTipPerPerson(tip, peopleNumber)}</p>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <p>Total <br/><span className="text-grey-500">/ person</span></p>
                    <p className="text-green-400 text-[40px] tracking-tight">${tip}</p>
                </div>
                <button 
                className="bg-green-400 rounded-xl mt-11 h-15.5 w-full text-2xl transition-colors duration-150 cursor-pointer hover:brightness-150">RESET</button>
            </div>
        </>
    )
}

function calcTip(bill: number, selectedTip: number): number {
    return bill * selectedTip / 100;
}


function calcTipPerPerson(tip: number, peopleNumber: number) {
    return tip / peopleNumber;
}

