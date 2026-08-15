import { z } from "zod";

export const formSchema = z.object({
    bill: z.number().min(0, "Bill cannot be negative"),
    tip: z.union([
        z.literal(""),
        z.number().min(0, "Tip cannot be negative")]),
    customTip: z.string(),
    people: z.union([
        z.literal(""),
        z.number().positive("Can't be zero")]),
})