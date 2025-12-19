import { z } from "zod"

export const loginSchema = z.object({
    email: z
        .string()
        .email("Email noto'g'ri kiritdingiz"),
    password: z
        .string()
        .min(6, "Parol kamida 6 ta symbol bo'lishi kerak"),
})

export type LoginFormValues = z.infer<typeof loginSchema>;