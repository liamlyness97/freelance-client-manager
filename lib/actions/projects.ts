"use server";

import z from "zod";
import { projectStatusEnum } from "../db/schema/projects";

const createProjectSchema = z.object({
    title: z.string().trim().min(1, "Proejct must have a title"),
    status: z.enum(projectStatusEnum),
    description: z.string(),
    companyId: z
        .string()
        .trim()
        .min(1, "Project must have a selected stakeholder"),
    stakeholder: z
        .string()
        .trim()
        .min(1, "Project must have a selected stakeholder"),
});

export type CreateProjectState = {
    errors?: Partial<
        Record<keyof z.infer<typeof createProjectSchema>, string[]>
    >;
    message?: string;
};

export async function createProject(
    _prevState: CreateProjectState,
    formData: FormData,
): Promise<CreateProjectState> {
    const result = createProjectSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors };
    }

    const { title, description, status, companyId, stakeholder } = result.data;

    return {
        message: "Project created",
    };
}
