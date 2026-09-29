import { db } from "@/lib/db";
import { user } from "@/lib/db/schema/auth";
import { eq } from "drizzle-orm";
import { company } from "@/lib/db/schema/companies";

export const fetchAllClients = async () => {
    const clients = await db
        .select({
            id: user.id,
            name: user.name,
            role: user.role,
            company: company,
            email: user.email
        })
        .from(user)
        .where(eq(user.role, "client"))
        .innerJoin(company, eq(user.companyId, company.id));

    if (!clients) return;

    return clients;
};
