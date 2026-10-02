"use server";

import z from "zod";
import { priorityEnum, tickets } from "@/lib/db/schema/tickets";
import { getCurrentUser } from "../auth/session";
import { db } from "../db";
import { redirect } from "next/navigation";

const createTicketSchema = z.object({
    title: z
        .string()
        .trim()
        .min(8, "Ticket title is required with minimum of 8 characters"),
    body: z.string().trim().min(1, "Ticket must include details of the issue"),
    clientId: z
        .string()
        .trim()
        .min(1, "Ticket must include an assignable client"),
    companyId: z
        .string()
        .trim()
        .min(1, "Ticket must include an assignable company"),
    projectId: z.string().trim().min(1, "Assign a project to the ticket"),
    priority: z.enum(priorityEnum),
});

export type CreateTicketState = {
    errors?: Partial<
        Record<keyof z.infer<typeof createTicketSchema>, string[]>
    >;
    message?: string;
};

export async function createTicket(
    _prevState: CreateTicketState,
    formData: FormData,
): Promise<CreateTicketState> {
    const user = await getCurrentUser();
    if (!user) throw new Error("You must be logged in to create a ticket");

    const result = createTicketSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: z.flattenError(result.error).fieldErrors,
        };
    }

    const { title, body, priority, clientId, companyId, projectId } =
        result.data;

    const [ticket] = await db
        .insert(tickets)
        .values({
            title: title,
            content: body,
            priority: priority,
            clientId: clientId,
            companyId: companyId,
            projectId: projectId,
            status: "pending",
        })
        .returning({ id: tickets.id });

    if (!ticket) throw new Error("Error creating the ticket");

    redirect(`/tickets/${ticket.id}`);

    return {
        message: "Ticket Created",
    };
}
