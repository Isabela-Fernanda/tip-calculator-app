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
      customTip: "",
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
      <main className="flex flex-col items-center max-w-230 mx-auto">
        <img src={Logo} className="w-28 h-17.5 mt-16 mb-13 sm:w-22 sm:h-13 sm:mt-12" />
        <section className="bg-white-0 rounded-t-4xl w-full py-11 px-8 sm:rounded-4xl sm:mt-9 sm:py-8 sm:grid sm:grid-cols-2 sm:gap-7.5">
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)} />
          </FormProvider>
          <CalculatedResult bill={bill} selectedTip={selectedTip} peopleNumber={peopleNumber} onReset={reset} />
        </section>
      </main>
    </>
  )
}
