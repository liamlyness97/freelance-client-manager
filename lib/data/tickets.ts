"use server";
import { db } from "@/lib/db";
import { SelectTicket, ticketMessages, tickets } from "../db/schema/tickets";
import { eq } from "drizzle-orm";
import { user } from "../db/schema/auth";

export const fetchAllTickets = async () => {
    const ticketsRes = await db.select().from(tickets);
    if (!ticketsRes) return;

    return ticketsRes;
};

export const fetchTicket = async (
    id: string,
): Promise<SelectTicket | undefined> => {
    const [ticket] = await db
        .select()
        .from(tickets)
        .where(eq(tickets.id, id))
        .limit(1);

    return ticket;
};

export const fetchTicketMessages = async (ticketId: string) => {
    const messages = await db.select().from(ticketMessages).where(eq(ticketMessages.ticketId, ticketId)).innerJoin(user, eq(user.id, ticketMessages.userId))

    if (!messages) return;

    return messages
}