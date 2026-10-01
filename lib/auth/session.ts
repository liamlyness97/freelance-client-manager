import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { user } from "../db/schema/auth";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { company } from "../db/schema/companies";

export async function getCurrentUser() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return session?.user ?? null;
}

// The newer version of the call above the joins the company table with it
export async function fetchCurrentUser() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const [currentUser] = session?.user.id
        ? await db
              .select()
              .from(user)
              .where(eq(user.id, session?.user.id ?? ""))
              .limit(1)
              .innerJoin(company, eq(user.companyId, company.id))
        : [];

    return currentUser;
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
