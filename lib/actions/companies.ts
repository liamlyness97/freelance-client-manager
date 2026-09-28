import { db } from "@/lib/db";
import { company } from "@/lib/db/schema/companies";

export const fetchAllCompanies = async () => {
    const companies = await db.select().from(company);
    if (!companies) return;
    return companies;
};
