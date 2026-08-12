import PersonIcon from "../../../assets/images/icon-person.svg";

type PeopleNumberProps = {
    peopleNumber: number; 
    onChangePeopleNumber: (p: number) => void;
}

export function PeopleNumber({peopleNumber, onChangePeopleNumber}: PeopleNumberProps) {
    return (
        <>
            <label htmlFor="value">Number of People</label>
            <div>
                <img src={PersonIcon} />
                <input id="people" type="number" value={peopleNumber} onChange={(e) => onChangePeopleNumber(Number(e.target.value))} placeholder="0" />
            </div>
        </>
    )

}