import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Logo from "./assets/images/logo.svg";
import { formSchema } from "./schema/formSchema.ts";
import { Form } from "./components/form/Form.tsx";
import { CalculatedResult } from "./components/result/CalculatedResult.tsx";

type FormData = z.infer<typeof formSchema>;

export default function App() {
  const {
    register,
    handleSubmit, 
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bill: 0,
      tip: 0,
      people: "",
    },
  });

  const bill = watch("bill");
  const selectedTip = watch("tip");
  const peopleNumber = watch("people");

  return (
    <>
      <main className="flex flex-col items-center">
        <img src={Logo} className="w-28 h-17.5 mt-16 mb-13" />
        <section className="bg-white-0 rounded-t-4xl w-full py-11 px-8">
          <Form register={register} control={control} setValue={setValue} watch={watch} errors={errors} />
          <CalculatedResult bill={bill} selectedTip={selectedTip} peopleNumber={peopleNumber} onReset={reset} />
        </section>
      </main>
    </>
  )
}
