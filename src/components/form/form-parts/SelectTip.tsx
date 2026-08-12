const tipOptions = [5, 10, 15, 25, 50];

export function SelecTip() {
    return (
        <>
            <label htmlFor="value">Selec Tip %</label>
            <div>
                {tipOptions.map((item, index) => (
                    <button key={index}>{item}</button>
                ))}
                <button>Custom</button>
            </div>
        </>
    )
}