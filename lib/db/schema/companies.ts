import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm/_relations";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { tickets } from "./tickets";

export const company = sqliteTable("company", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    companyName: text("company_name").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`)
        .$onUpdate(() => new Date()),
});

export const companyRelations = relations(company, ({ many }) => ({
    user: many(user),
    tickets: many(tickets),
}));

export type Company = typeof company.$inferSelect;
