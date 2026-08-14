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
    <main className="flex flex-col items-center">
      <img src={Logo} className="w-28 h-17.5 mt-16 mb-13"/>
      <section className="bg-white-0 rounded-t-4xl w-full py-11 px-8">
        <Form bill={bill} setBill={setBill} selectedTip={selectedTip} setSelectedTip={setSelectedTip} peopleNumber={peopleNumber} setPeopleNumber={setPeopleNumber}/>
        <CalculatedResult bill={bill} selectedTip={selectedTip} peopleNumber={peopleNumber}/>
      </section>
    </main>
    </>
  )
}

export default App
