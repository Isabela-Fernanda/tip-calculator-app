import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { formSchema } from "./schema/formSchema.ts";

import Logo from "./assets/images/logo.svg";
import { Form } from "./components/form/Form.tsx";
import { CalculatedResult } from "./components/result/CalculatedResult.tsx";

type FormData = z.infer<typeof formSchema>;

export default function App() {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      bill: 0,
      tip: 0,
      people: "",
    },
  });

  const {
    handleSubmit,
    watch,
    reset,
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const bill = watch("bill");
  const selectedTip = watch("tip");
  const peopleNumber = watch("people");

  return (
    <>
      <main className="flex flex-col items-center">
        <img src={Logo} className="w-28 h-17.5 mt-16 mb-13" />
        <section className="bg-white-0 rounded-t-4xl w-full py-11 px-8">
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)} />
          </FormProvider>
          <CalculatedResult bill={bill} selectedTip={selectedTip} peopleNumber={peopleNumber} onReset={reset} />
        </section>
      </main>
    </>
  )
}
