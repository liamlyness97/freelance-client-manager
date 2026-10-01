"use server";

import { db } from "@/lib/db";
import { company } from "@/lib/db/schema/companies";
import { user } from "../db/schema/auth";
import { eq } from "drizzle-orm";

export const fetchAllCompanies = async () => {
    const companies = await db.select().from(company);
    if (!companies) return;
    return companies;
};

export const fetchCompaniesClients = async (companyId: string) => {
    const clients = await db
        .select()
        .from(user)
        .where(eq(user.companyId, companyId));
    if (!clients) return;

    return clients;
};
