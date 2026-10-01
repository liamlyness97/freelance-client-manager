import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { company } from "./companies";
import { relations } from "drizzle-orm/_relations";

export const statusEnum = [
    "pending",
    "in-progress",
    "awaiting response",
    "complete",
] as const;

export const priorityEnum = ["low", "medium", "high", "critical"] as const;

export type Status = (typeof statusEnum)[number];
export type Priority = (typeof priorityEnum)[number];

export const tickets = sqliteTable("tickets", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    content: text("content"),
    status: text("status", { enum: statusEnum }).notNull().default("pending"),
    priority: text("priority", { enum: priorityEnum }).notNull().default("low"),
    clientId: text("client_id").references(() => user.id, {
        onDelete: "cascade",
    }),
    companyId: text("company_id").references(() => company.id, {
        onDelete: "cascade",
    }),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`)
        .$onUpdate(() => new Date()),
});

export const ticketRelations = relations(tickets, ({ one }) => ({
    company: one(company, {
        fields: [tickets.companyId],
        references: [company.id],
    }),
    user: one(user, { fields: [tickets.clientId], references: [user.id] }),
}));

export type SelectTicket = typeof tickets.$inferSelect;
