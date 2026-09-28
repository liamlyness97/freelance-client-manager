import { db } from "@/lib/db";
import { user } from "@/lib/db/schema/auth";
import { eq } from "drizzle-orm";

export const fetchAllClients = async () => {
    const clients = await db
        .select({
            id: user.id,
            name: user.name,
            role: user.role,
        })
        .from(user)
        .where(eq(user.role, "client"));

    if (!clients) return;

    return clients;
};
