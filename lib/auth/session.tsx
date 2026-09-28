import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return session?.user ?? null;
}

export async function requireUser() {
    const user = await getCurrentUser();
    if (!user) redirect("/login");
    return user;
}

export async function requireAdmin() {
    const user = await getCurrentUser();
    if (user !== null && user.role !== "admin") redirect("/dashboard");
    return user;
}
