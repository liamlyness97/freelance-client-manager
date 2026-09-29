"use server"

import z from "zod"
import { getCurrentUser } from "../auth/session";
import { db } from "../db";
import { company } from "../db/schema/companies";
import { revalidatePath } from "next/cache";

const createCompanySchema = z
    .object({
        company: z.string().trim().min(3, "Company name is required")
    })

export type CreateCompanyState = {
    errors?: Partial<Record<keyof z.infer<typeof createCompanySchema>, string[]>>;
    message?: string;
}

export async function createCompany(
    _prevState: CreateCompanyState,
    formData: FormData,
): Promise<CreateCompanyState> {

    const user = await getCurrentUser()
    if (!user || user.role !== 'admin') throw new Error("Not authorised")

    const result = createCompanySchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors }
    }

    const companyName = result.data.company;

    try {
        await db.insert(company).values({
            companyName: companyName
        })

    } catch {
      return {
          message: 'Error creating company'
      }
    }
    revalidatePath('/clients')

    return { message: 'Company created' }
}
