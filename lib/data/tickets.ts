import { db } from "@/lib/db";
import { SelectTicket, tickets } from "../db/schema/tickets";
import { eq } from "drizzle-orm";

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
