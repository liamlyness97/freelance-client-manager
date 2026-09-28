"use server";

import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
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

export async function Register(
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

const loginSchema = z.object({
    email: z.email("Enter your email address"),
    password: z.string().min(8, "Enter your password"),
});

export type LoginState = {
    errors?: Partial<Record<keyof z.infer<typeof loginSchema>, string[]>>;
    message?: string;
};

export async function Login(
    _prevState: LoginState,
    formData: FormData,
): Promise<LoginState> {
    const result = await loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors };
    }

    const { email, password } = result.data;

    try {
        const response = await auth.api.signInEmail({
            body: {
                email,
                password,
                rememberMe: true,
            },
            asResponse: true,
        });
    } catch {
        return { message: "Error Logging in" };
    }

    redirect("/dashboard");
}

export async function Logout(formData: FormData) {
    await auth.api.signOut({
        headers: await headers(),
    });
}
