type CalculatedResultProps = {
    bill: number;
    selectedTip: number;
    peopleNumber: number;
}

export function CalculatedResult({bill, selectedTip, peopleNumber}:CalculatedResultProps) {
    const tip = calcTip(bill, selectedTip);
    return (
        <>
            <div>
                <p>Tip Amount <span>/ person</span></p>
                <p>{calcTipPerPerson(tip, peopleNumber)}</p>
            </div>
            <div>
                <p>Total <span>/ person</span></p>
                <p>{tip}</p>
            </div>
        </>
    )
}

function calcTip(bill: number, selectedTip:number): number {
    return bill * selectedTip / 100;
}


function calcTipPerPerson(tip: number, peopleNumber: number) {
    return tip / peopleNumber;
}

