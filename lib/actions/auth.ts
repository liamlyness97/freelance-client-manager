"use server";

import { auth } from "@/lib/auth/auth";
import { z } from "zod";

const registerSchema = z
    .object({
        name: z.string().trim().min(1, "Name is required"),
        email: z.email("Enter a valid email address"),
        password: z.string().min(8, "Password must be atleast 8 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type RegisterState = {
    errors?: Partial<Record<keyof z.infer<typeof registerSchema>, string[]>>;
    message?: string;
};

export async function register(
    _prevState: RegisterState,
    formData: FormData,
): Promise<RegisterState> {
    const result = registerSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors };
    }

    const { name, email, password } = result.data;

    try {
        await auth.api.signUpEmail({
            body: {
                name: name,
                email: email,
                password: password,
            },
        });
    } catch {
        return {
            message: "Could not create",
        };
    }

    return { message: "Account created" };
}

export async function Login() {}
