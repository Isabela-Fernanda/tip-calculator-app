import Logo from "./assets/images/logo.svg"
import { Form } from "./components/form/Form.tsx"
import { CalculatedResult } from "./components/result/CalculatedResult.tsx"

function App() {
  return (
    <>
    <main>
      <img src={Logo}></img>
      <section>
        <Form />
        <CalculatedResult bill={0} selectedTip={5} peopleNumber={1}/>
      </section>
    </main>
    </>
  )
}

export default App
