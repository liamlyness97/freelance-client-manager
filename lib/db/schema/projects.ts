import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { company } from "./companies";
import { user } from "./auth";

export const projectStatusEnum = [
    "pending",
    "in-progress",
    "complete",
] as const;

export type ProjectStatus = (typeof projectStatusEnum)[number];

export const projectsTable = sqliteTable("projects", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    status: text("status", { enum: projectStatusEnum })
        .notNull()
        .default("pending"),
    descrition: text("description"),
    companyId: text("company_id")
        .notNull()
        .references(() => company.id, {
            onDelete: "cascade",
        }),
    stakeholder: text("stakeholder")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`)
        .$onUpdate(() => new Date()),
});
