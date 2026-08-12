import { useState } from "react"
import Logo from "./assets/images/logo.svg"
import { Form } from "./components/form/Form.tsx"
import { CalculatedResult } from "./components/result/CalculatedResult.tsx"

function App() {
  const [bill, setBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(5);
  const [peopleNumber, setPeopleNumber] = useState(1);

  return (
    <>
    <main>
      <img src={Logo}></img>
      <section>
        <Form bill={bill} setBill={setBill} selectedTip={selectedTip} setSelectedTip={setSelectedTip} peopleNumber={peopleNumber} setPeopleNumber={setPeopleNumber}/>
        <CalculatedResult bill={bill} selectedTip={selectedTip} peopleNumber={peopleNumber}/>
      </section>
    </main>
    </>
  )
}

export default App
