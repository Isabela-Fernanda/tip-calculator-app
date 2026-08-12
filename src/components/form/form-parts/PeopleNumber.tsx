import { useState } from "react";
import PersonIcon from "../../../assets/images/icon-person.svg";

export function PeopleNumber() {
    const [peopleNumber, setPeopleNumber] = useState('');

    return (
        <>
            <label htmlFor="value">Number of People</label>
            <div>
                <img src={PersonIcon} />
                <input id="bill" type="number" value={peopleNumber} onChange={(e) => setPeopleNumber(e.target.value)} placeholder="0" />
            </div>
        </>
    )

}