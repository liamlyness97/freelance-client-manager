"use server";

import z from "zod";
import { getCurrentUser } from "../auth/session";
import { db } from "../db";
import { company } from "../db/schema/companies";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

const createCompanySchema = z.object({
    company: z.string().trim().min(3, "Company name is required"),
});

export type CreateCompanyState = {
    errors?: Partial<
        Record<keyof z.infer<typeof createCompanySchema>, string[]>
    >;
    message?: string;
};

export async function createCompany(
    _prevState: CreateCompanyState,
    formData: FormData,
): Promise<CreateCompanyState> {
    const user = await getCurrentUser();
    if (!user || user.role !== "admin") throw new Error("Not authorised");

    const result = createCompanySchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors };
    }

    const companyName = result.data.company;

    try {
        await db.insert(company).values({
            companyName: companyName,
        });
    } catch {
        return {
            message: "Error creating company",
        };
    }
    revalidatePath("/clients");

    return { message: "Company created" };
}

export type EditCompanyState = {
    errors?: Partial<Record<keyof z.infer<typeof editCompanySchema>, string[]>>;
    message?: string;
};

const editCompanySchema = z.object({
    id: z.string().trim().min(1, "Company ID must be present"),
    companyName: z.string().trim().min(3, "Company name is required"),
});

export async function editCompany(
    _prevState: EditCompanyState,
    formData: FormData,
): Promise<EditCompanyState> {
    const user = await getCurrentUser();
    if (!user || user.role !== "admin")
        throw new Error("Not authorised to edit company");

    const result = editCompanySchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors };
    }

    const { id, companyName } = result.data;

    try {
        await db
            .update(company)
            .set({
                companyName: companyName,
            })
            .where(eq(company.id, id));
    } catch {
        return { message: "Error updating company details" };
    }

    revalidatePath("/clients");

    return {
        message: "Company edit successful",
    };
}
