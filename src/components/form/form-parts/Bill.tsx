import DollarIcon from "../../../assets/images/icon-dollar.svg";

type BillProps = {
    bill: number;
    onChangeBill: (b: number) => void;
}

export function Bill({bill, onChangeBill}: BillProps) {
    return (
        <>
        <label htmlFor="value">Bill</label>
        <div>    
            <img src={DollarIcon} />
            <input id="bill" type="number" value={bill} onChange={(e) => onChangeBill(Number(e.target.value))} placeholder="0"/>
        </div>
        </>
    )
}