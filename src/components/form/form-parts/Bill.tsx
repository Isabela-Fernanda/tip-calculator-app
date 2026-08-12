import { useState } from "react";
import DollarIcon from "../../../assets/images/icon-dollar.svg";

export function Bill() {
    const [billValue, setBillValue] = useState('');

    return (
        <>
        <label htmlFor="value">Bill</label>
        <div>    
            <img src={DollarIcon} />
            <input id="bill" type="number" value={billValue} onChange={(e) => setBillValue(e.target.value)} placeholder="0"/>
        </div>
        </>
    )
}