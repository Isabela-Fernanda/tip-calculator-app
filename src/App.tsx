import { useState } from "react";
import Logo from "./assets/images/logo.svg";
import { formSchema } from "./schema/formSchema.ts";
import { Form } from "./components/form/Form.tsx";
import { CalculatedResult } from "./components/result/CalculatedResult.tsx";

const result = formSchema.safeParse({
  bill: 100,
  tip: 12,
  people: 0,
});

console.log(result);

function App() {
  const [bill, setBill] = useState<number | "">("");
  const [selectedTip, setSelectedTip] = useState<number | "">("");
  const [peopleNumber, setPeopleNumber] = useState<number | "">("");

  const reset = () => {
    setBill("");
    setSelectedTip("");
    setPeopleNumber("");
  }

  return (
    <>
    <main className="flex flex-col items-center">
      <img src={Logo} className="w-28 h-17.5 mt-16 mb-13"/>
      <section className="bg-white-0 rounded-t-4xl w-full py-11 px-8">
        <Form bill={bill} setBill={setBill} selectedTip={selectedTip} setSelectedTip={setSelectedTip} peopleNumber={peopleNumber} setPeopleNumber={setPeopleNumber}/>
        <CalculatedResult bill={bill} selectedTip={selectedTip} peopleNumber={peopleNumber} onReset={reset}/>
      </section>
    </main>
    </>
  )
}

export default App
