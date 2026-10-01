"use server";

import z from "zod";
import { projectsTable, projectStatusEnum } from "../db/schema/projects";
import { db } from "../db";
import { redirect } from "next/navigation";

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
    userId: z
        .string()
        .trim()
        .min(1, "Only a logged in user can create a project"),
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

    const { title, description, status, companyId, stakeholder, userId } =
        result.data;

    /* TODO: Add Check for valid info against DB */

    const [newProject] = await db
        .insert(projectsTable)
        .values({
            title: title,
            status: status,
            descrition: description ?? "",
            companyId: companyId,
            stakeholder: stakeholder,
            userId: userId,
        })
        .returning({ id: projectsTable.id });

    if (!newProject) throw new Error("Error creating the project");

    redirect(`/projects/${newProject.id}`);

    // console.log([title, description, status, companyId, stakeholder, userId]);

    return {
        message: "Project created",
    };
}
