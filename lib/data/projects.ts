"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { projectsTable } from "../db/schema/projects";
import { user } from "../db/schema/auth";
import { company } from "../db/schema/companies";

export const fetchAllProjects = async () => {
    const projects = await db.select().from(projectsTable);

    if (!projects) return;

    return projects;
};

export const fetchClientsProjects = async (clientCompanyId: string) => {
    const projects = await db
        .select()
        .from(projectsTable)
        .where(eq(projectsTable.companyId, clientCompanyId));

    if (!projects) return;

    return projects;
};

export const fetchProject = async (id: string) => {
    if (!id) return;

    const [project] = await db
        .select()
        .from(projectsTable)
        .where(eq(projectsTable.id, id))
        .innerJoin(user, eq(projectsTable.stakeholder, user.id))
        .innerJoin(company, eq(projectsTable.companyId, company.id))
        .limit(1);

    if (!project) return;

    return project;
};
