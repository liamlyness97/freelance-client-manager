import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema/auth";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema,
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
                defaultValue: "client",
                input: false,
            },
        },
    },
    plugins: [nextCookies(), admin()],
});

export type Session = typeof auth.$Infer.Session;
